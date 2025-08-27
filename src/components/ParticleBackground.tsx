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

    // パーティクルクラス
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
      type: 'primary' | 'secondary' | 'accent';
      pulsePhase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.pulsePhase = Math.random() * Math.PI * 2;
        
        // 3種類のパーティクルタイプ
        const rand = Math.random();
        if (rand < 0.3) {
          this.type = 'primary';
          this.size = 3 + Math.random() * 2;
          this.opacity = 0.8;
          this.hue = 220 + Math.random() * 20; // ブルー系
        } else if (rand < 0.7) {
          this.type = 'secondary';
          this.size = 2 + Math.random() * 1.5;
          this.opacity = 0.6;
          this.hue = 200 + Math.random() * 40; // ブルー〜シアン系
        } else {
          this.type = 'accent';
          this.size = 1.5 + Math.random() * 1;
          this.opacity = 0.4;
          this.hue = 180 + Math.random() * 60; // シアン〜ブルー系
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += 0.02;

        // 境界での反射
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // 境界内に保持
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 1;
        const currentSize = this.size * pulse;
        const currentOpacity = this.opacity * (0.7 + pulse * 0.3);

        // グラデーション作成
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, currentSize * 3
        );

        // タイプ別の色設定
        if (this.type === 'primary') {
          gradient.addColorStop(0, `hsla(${this.hue}, 80%, 70%, ${currentOpacity})`);
          gradient.addColorStop(0.3, `hsla(${this.hue}, 70%, 60%, ${currentOpacity * 0.8})`);
          gradient.addColorStop(1, `hsla(${this.hue}, 60%, 50%, 0)`);
        } else if (this.type === 'secondary') {
          gradient.addColorStop(0, `hsla(${this.hue}, 70%, 65%, ${currentOpacity})`);
          gradient.addColorStop(0.4, `hsla(${this.hue}, 60%, 55%, ${currentOpacity * 0.6})`);
          gradient.addColorStop(1, `hsla(${this.hue}, 50%, 45%, 0)`);
        } else {
          gradient.addColorStop(0, `hsla(${this.hue}, 60%, 60%, ${currentOpacity})`);
          gradient.addColorStop(0.5, `hsla(${this.hue}, 50%, 50%, ${currentOpacity * 0.4})`);
          gradient.addColorStop(1, `hsla(${this.hue}, 40%, 40%, 0)`);
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentSize * 3, 0, Math.PI * 2);
        ctx.fill();

        // 中心の明るい点
        ctx.fillStyle = `hsla(${this.hue}, 90%, 85%, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentSize * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // パーティクル配列
    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 15000));

    // パーティクル初期化
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // 接続線を描画
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.3;
            
            // グラデーション線
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            
            gradient.addColorStop(0, `hsla(${particles[i].hue}, 60%, 60%, ${opacity})`);
            gradient.addColorStop(0.5, `hsla(${(particles[i].hue + particles[j].hue) / 2}, 70%, 65%, ${opacity * 1.2})`);
            gradient.addColorStop(1, `hsla(${particles[j].hue}, 60%, 60%, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // アニメーションループ
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 接続線を先に描画（背景）
      drawConnections();

      // パーティクルを描画
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