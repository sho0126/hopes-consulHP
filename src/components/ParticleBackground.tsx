import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  pulse: number;
  pulseSpeed: number;
  hue: number;
  alpha: number;
  type: 'core' | 'data' | 'connection';
  energy: number;
  trail: { x: number; y: number; alpha: number }[];
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

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
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() < 0.3 ? 'core' : Math.random() < 0.7 ? 'data' : 'connection';
        const hueBase = type === 'core' ? 200 : type === 'data' ? 220 : 180;
        const hueVariation = Math.random() * 30 - 15;
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: type === 'core' ? 2.5 : type === 'data' ? 1.5 : 1,
          baseSize: type === 'core' ? 2 + Math.random() * 1.5 : type === 'data' ? 1 + Math.random() : 0.5 + Math.random() * 0.5,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.008 + Math.random() * 0.012,
          hue: hueBase + hueVariation,
          alpha: type === 'core' ? 0.9 : type === 'data' ? 0.7 : 0.5,
          type,
          energy: Math.random(),
          trail: []
        });
      }
      particlesRef.current = particles;
    };

    const drawParticle = (particle: Particle, time: number) => {
      const pulseFactor = 1 + Math.sin(particle.pulse + time * 0.001) * 0.3;
      particle.size = particle.baseSize * pulseFactor;

      // エネルギー波動効果
      const energyWave = Math.sin(time * 0.002 + particle.energy * Math.PI * 2) * 0.2 + 0.8;
      const currentAlpha = particle.alpha * energyWave;

      if (particle.type === 'core') {
        // コアパーティクル - 強い光源
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 90%, ${currentAlpha})`);
        gradient.addColorStop(0.2, `hsla(${particle.hue}, 70%, 80%, ${currentAlpha * 0.8})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 60%, 70%, ${currentAlpha * 0.4})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 50%, 60%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // 中心の明るい点
        ctx.fillStyle = `hsla(${particle.hue}, 90%, 95%, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
        ctx.fill();

      } else if (particle.type === 'data') {
        // データパーティクル - 情報の流れ
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2.5
        );
        
        gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 85%, ${currentAlpha})`);
        gradient.addColorStop(0.4, `hsla(${particle.hue}, 60%, 75%, ${currentAlpha * 0.6})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 50%, 65%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // データの軌跡効果
        if (particle.trail.length > 0) {
          ctx.strokeStyle = `hsla(${particle.hue}, 60%, 70%, ${currentAlpha * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.trail[0].x, particle.trail[0].y);
          for (let i = 1; i < particle.trail.length; i++) {
            ctx.lineTo(particle.trail[i].x, particle.trail[i].y);
          }
          ctx.stroke();
        }

      } else {
        // 接続パーティクル - ネットワークノード
        ctx.fillStyle = `hsla(${particle.hue}, 60%, 80%, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawConnections = () => {
      const particles = particlesRef.current;
      const coreParticles = particles.filter(p => p.type === 'core');
      const dataParticles = particles.filter(p => p.type === 'data');

      // コア間の強い接続
      for (let i = 0; i < coreParticles.length; i++) {
        for (let j = i + 1; j < coreParticles.length; j++) {
          const dx = coreParticles[i].x - coreParticles[j].x;
          const dy = coreParticles[i].y - coreParticles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.6;
            const avgHue = (coreParticles[i].hue + coreParticles[j].hue) / 2;
            
            // エネルギーフロー効果
            const flowOffset = Math.sin(timeRef.current * 0.003 + distance * 0.01) * 2;
            
            ctx.strokeStyle = `hsla(${avgHue}, 70%, 80%, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.lineDashOffset = flowOffset;
            ctx.beginPath();
            ctx.moveTo(coreParticles[i].x, coreParticles[i].y);
            ctx.lineTo(coreParticles[j].x, coreParticles[j].y);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // データフロー接続
      dataParticles.forEach(dataParticle => {
        const nearestCore = coreParticles.reduce((nearest, core) => {
          const dx = dataParticle.x - core.x;
          const dy = dataParticle.y - core.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < nearest.distance ? { core, distance } : nearest;
        }, { core: coreParticles[0], distance: Infinity });

        if (nearestCore.distance < 150) {
          const opacity = (1 - nearestCore.distance / 150) * 0.4;
          ctx.strokeStyle = `hsla(${dataParticle.hue}, 60%, 70%, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dataParticle.x, dataParticle.y);
          ctx.lineTo(nearestCore.core.x, nearestCore.core.y);
          ctx.stroke();
        }
      });
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      particles.forEach(particle => {
        // 軌跡の更新
        if (particle.type === 'data') {
          particle.trail.push({ x: particle.x, y: particle.y, alpha: 1 });
          if (particle.trail.length > 8) {
            particle.trail.shift();
          }
          particle.trail.forEach((point, index) => {
            point.alpha = index / particle.trail.length;
          });
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += particle.pulseSpeed;

        // 境界での反射
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // マウスとの相互作用
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const force = (120 - distance) / 120 * 0.008;
          const attraction = particle.type === 'core' ? 0.5 : particle.type === 'data' ? -0.3 : 0;
          particle.vx += dx * force * (1 + attraction);
          particle.vy += dy * force * (1 + attraction);
        }

        // 速度の減衰
        particle.vx *= 0.998;
        particle.vy *= 0.998;
      });
    };

    const animate = (time: number) => {
      timeRef.current = time;
      
      // 背景のクリア
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateParticles();
      drawConnections();
      
      particlesRef.current.forEach(particle => {
        drawParticle(particle, time);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    // 初期化
    resizeCanvas();
    createParticles();
    animate(0);

    // イベントリスナー
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleBackground;