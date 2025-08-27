import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  pulse: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = window.innerWidth < 768 ? 30 : 50;
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.6 + 0.4,
          hue: Math.random() * 60 + 200,
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    const drawParticle = (particle: Particle, time: number) => {
      const pulseFactor = Math.sin(time * 0.003 + particle.pulse) * 0.4 + 0.8;
      const currentSize = particle.size * pulseFactor;
      const currentOpacity = particle.opacity * pulseFactor;

      // 外側のグロー
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, currentSize * 6
      );
      gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${currentOpacity * 0.3})`);
      gradient.addColorStop(0.3, `hsla(${particle.hue}, 70%, 50%, ${currentOpacity * 0.2})`);
      gradient.addColorStop(0.7, `hsla(${particle.hue}, 70%, 40%, ${currentOpacity * 0.1})`);
      gradient.addColorStop(1, `hsla(${particle.hue}, 70%, 30%, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentSize * 6, 0, Math.PI * 2);
      ctx.fill();

      // 中心の明るい点
      ctx.fillStyle = `hsla(${particle.hue}, 80%, 80%, ${currentOpacity * 0.6})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
      ctx.fill();

      // 中心の白い点
      ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.4})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentSize * 0.4, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawConnections = () => {
      const particles = particlesRef.current;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.2;
            const avgHue = (particles[i].hue + particles[j].hue) / 2;
            
            ctx.strokeStyle = `hsla(${avgHue}, 60%, 70%, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const updateParticles = (time: number) => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const scroll = scrollRef.current;

      particles.forEach((particle) => {
        // 基本的な動き
        particle.x += particle.vx;
        particle.y += particle.vy;

        // スクロール効果
        const scrollEffect = Math.sin(time * 0.001 + scroll * 0.01) * 0.8;
        particle.x += scrollEffect;

        // マウス追従効果
        const mouseDistance = Math.sqrt(
          Math.pow(particle.x - mouse.x, 2) + Math.pow(particle.y - mouse.y, 2)
        );
        if (mouseDistance < 200) {
          const force = (200 - mouseDistance) / 200 * 0.03;
          const angle = Math.atan2(mouse.y - particle.y, mouse.x - particle.x);
          particle.vx += Math.cos(angle) * force;
          particle.vy += Math.sin(angle) * force;
        }

        // 速度制限
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // 境界での反射
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // 色相の微調整
        particle.hue += Math.sin(time * 0.0008) * 0.2;
      });
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      updateParticles(time);
      drawConnections();
      
      particlesRef.current.forEach(particle => {
        drawParticle(particle, time);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    // 初期化
    resizeCanvas();
    createParticles();
    animate(0);

    // イベントリスナー
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;