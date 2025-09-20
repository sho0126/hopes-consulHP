import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  pulsePhase: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  const colors = [
    'rgba(59, 130, 246, 0.6)',   // Blue
    'rgba(6, 182, 212, 0.6)',    // Cyan  
    'rgba(99, 102, 241, 0.6)',   // Indigo
    'rgba(20, 184, 166, 0.6)'    // Teal
  ];

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
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.8 + 0.2,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
      
      particlesRef.current = particles;
    };

    const drawParticle = (particle: Particle, time: number) => {
      const pulse = Math.sin(time * 0.002 + particle.pulsePhase) * 0.3 + 0.7;
      const currentOpacity = particle.opacity * pulse;
      
      // Main particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color.replace('0.6', currentOpacity.toString());
      ctx.fill();
      
      // Glow effect
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      );
      gradient.addColorStop(0, particle.color.replace('0.6', (currentOpacity * 0.8).toString()));
      gradient.addColorStop(1, particle.color.replace('0.6', '0'));
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const drawConnections = (particles: Particle[]) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const drawEdgeGlow = (time: number) => {
      const pulse = Math.sin(time * 0.001) * 0.3 + 0.7;
      
      // Top edge
      const topGradient = ctx.createLinearGradient(0, 0, 0, 100);
      topGradient.addColorStop(0, `rgba(59, 130, 246, ${0.1 * pulse})`);
      topGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = topGradient;
      ctx.fillRect(0, 0, canvas.width, 100);
      
      // Bottom edge
      const bottomGradient = ctx.createLinearGradient(0, canvas.height - 100, 0, canvas.height);
      bottomGradient.addColorStop(0, 'rgba(6, 182, 212, 0)');
      bottomGradient.addColorStop(1, `rgba(6, 182, 212, ${0.1 * pulse})`);
      ctx.fillStyle = bottomGradient;
      ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
      
      // Left edge
      const leftGradient = ctx.createLinearGradient(0, 0, 100, 0);
      leftGradient.addColorStop(0, `rgba(99, 102, 241, ${0.1 * pulse})`);
      leftGradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = leftGradient;
      ctx.fillRect(0, 0, 100, canvas.height);
      
      // Right edge
      const rightGradient = ctx.createLinearGradient(canvas.width - 100, 0, canvas.width, 0);
      rightGradient.addColorStop(0, 'rgba(20, 184, 166, 0)');
      rightGradient.addColorStop(1, `rgba(20, 184, 166, ${0.1 * pulse})`);
      ctx.fillStyle = rightGradient;
      ctx.fillRect(canvas.width - 100, 0, 100, canvas.height);
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw edge glow
      drawEdgeGlow(time);
      
      const particles = particlesRef.current;
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        
        drawParticle(particle, time);
      });
      
      // Draw connections
      drawConnections(particles);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate(0);

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;