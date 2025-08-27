import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 4色のカラーパレット
    const colors = [
      { hue: 220, name: 'blue' },      // ブルー
      { hue: 200, name: 'cyan' },      // シアン
      { hue: 240, name: 'indigo' },    // インディゴ
      { hue: 180, name: 'teal' }       // ティール
    ];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: typeof colors[0];
      pulsePhase: number;
      type: 'primary' | 'secondary' | 'accent';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        const rand = Math.random();
        if (rand < 0.3) {
          this.type = 'primary';
          this.size = 2.5;
          this.opacity = 0.9;
        } else if (rand < 0.7) {
          this.type = 'secondary';
          this.size = 1.8;
          this.opacity = 0.7;
        } else {
          this.type = 'accent';
          this.size = 1.2;
          this.opacity = 0.5;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += 0.015;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.2 + 1;
        const currentSize = this.size * pulse;
        const currentOpacity = this.opacity * (0.8 + pulse * 0.2);

        // 小さなグロー効果
        const glowSize = currentSize * 1.5; // モヤを小さく
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, glowSize
        );

        gradient.addColorStop(0, `hsla(${this.color.hue}, 85%, 75%, ${currentOpacity})`);
        gradient.addColorStop(0.4, `hsla(${this.color.hue}, 75%, 65%, ${currentOpacity * 0.6})`);
        gradient.addColorStop(1, `hsla(${this.color.hue}, 65%, 55%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // 中心の明るい点
        ctx.fillStyle = `hsla(${this.color.hue}, 95%, 85%, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentSize * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.3;
            
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            
            gradient.addColorStop(0, `hsla(${particles[i].color.hue}, 70%, 65%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${particles[j].color.hue}, 70%, 65%, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawConnections();
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;