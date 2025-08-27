import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  hue: number;
  pulsePhase: number;
  originalX: number;
  originalY: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const timeRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleScroll = useCallback(() => {
    scrollRef.current = window.scrollY;
  }, []);

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
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // パーティクルの初期化
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000);
      
      for (let i = 0; i < particleCount; i++) {
        createParticle();
      }
    };

    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const particle: Particle = {
        x,
        y,
        originalX: x,
        originalY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        life: 0,
        maxLife: Math.random() * 500 + 300,
        hue: Math.random() * 60 + 200, // 青系の色相
        pulsePhase: Math.random() * Math.PI * 2,
      };
      particlesRef.current.push(particle);
    };

    const updateParticles = () => {
      timeRef.current += 0.016; // 約60FPS
      const mouse = mouseRef.current;
      const scroll = scrollRef.current;

      particlesRef.current.forEach((particle, index) => {
        // 基本的な移動
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // スクロールに応じた形状変化
        const scrollInfluence = Math.sin(scroll * 0.001 + particle.originalX * 0.01) * 20;
        const timeInfluence = Math.sin(timeRef.current * 0.5 + particle.pulsePhase) * 10;
        
        // マウスの影響
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxMouseDistance = 150;
        
        if (distance < maxMouseDistance) {
          const force = (maxMouseDistance - distance) / maxMouseDistance;
          particle.x += dx * force * 0.01;
          particle.y += dy * force * 0.01;
        }

        // スクロールとタイムベースの波動効果
        particle.x += Math.sin(timeRef.current * 0.3 + particle.originalY * 0.01) * 0.5;
        particle.y += scrollInfluence * 0.1 + timeInfluence * 0.05;

        // パルス効果
        const pulseIntensity = Math.sin(timeRef.current * 2 + particle.pulsePhase) * 0.3 + 0.7;
        particle.size = (Math.random() * 3 + 1) * pulseIntensity;

        // フェードイン・フェードアウト効果
        const lifeRatio = particle.life / particle.maxLife;
        if (lifeRatio < 0.1) {
          particle.opacity = (lifeRatio / 0.1) * 0.8;
        } else if (lifeRatio > 0.9) {
          particle.opacity = (1 - lifeRatio) / 0.1 * 0.8;
        } else {
          particle.opacity = 0.8 * pulseIntensity;
        }

        // 色相の変化
        particle.hue = (particle.hue + 0.2) % 360;

        // 画面外に出たり寿命が尽きたパーティクルを削除
        if (
          particle.x < -50 || 
          particle.x > canvas.width + 50 || 
          particle.y < -50 || 
          particle.y > canvas.height + 50 ||
          particle.life >= particle.maxLife
        ) {
          particlesRef.current.splice(index, 1);
        }
      });

      // 新しいパーティクルを追加
      if (Math.random() < 0.4 && particlesRef.current.length < 150) {
        createParticle();
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // 外側のグロー効果
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 8
        );
        glowGradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, 0.8)`);
        glowGradient.addColorStop(0.3, `hsla(${particle.hue}, 70%, 50%, 0.4)`);
        glowGradient.addColorStop(0.7, `hsla(${particle.hue}, 70%, 40%, 0.1)`);
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 8, 0, Math.PI * 2);
        ctx.fill();
        
        // 中間のリング
        const ringGradient = ctx.createRadialGradient(
          particle.x, particle.y, particle.size * 2,
          particle.x, particle.y, particle.size * 4
        );
        ringGradient.addColorStop(0, 'transparent');
        ringGradient.addColorStop(0.5, `hsla(${particle.hue}, 80%, 70%, 0.3)`);
        ringGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = ringGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();
        
        // 中心の明るいコア
        const coreGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        coreGradient.addColorStop(0, `hsla(${particle.hue}, 90%, 80%, 1)`);
        coreGradient.addColorStop(0.7, `hsla(${particle.hue}, 80%, 60%, 0.8)`);
        coreGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // 最中心の白い点
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 90%, 0.9)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      // 動的な接続線を描画
      drawDynamicConnections();
    };

    const drawDynamicConnections = () => {
      const maxDistance = 120;
      const scroll = scrollRef.current;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15;
            const waveOffset = Math.sin(timeRef.current * 2 + distance * 0.01 + scroll * 0.001) * 0.1;
            
            ctx.save();
            ctx.globalAlpha = opacity + waveOffset;
            
            // グラデーション線
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `hsla(${p1.hue}, 70%, 60%, 1)`);
            gradient.addColorStop(0.5, `hsla(${(p1.hue + p2.hue) / 2}, 70%, 60%, 0.8)`);
            gradient.addColorStop(1, `hsla(${p2.hue}, 70%, 60%, 1)`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 + waveOffset * 2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            
            // 曲線的な接続線
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            const curvature = Math.sin(timeRef.current + distance * 0.01) * 20;
            
            ctx.quadraticCurveTo(
              midX + curvature, 
              midY + curvature, 
              p2.x, 
              p2.y
            );
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove, handleScroll]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;