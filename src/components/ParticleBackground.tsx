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
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

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
          size: 2,
          baseSize: 1.5 + Math.random() * 1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
          hue: 200 + Math.random() * 60
        });
      }
      particlesRef.current = particles;
    };

    const drawParticle = (particle: Particle, time: number) => {
      const pulseFactor = 1 + Math.sin(particle.pulse + time * 0.001) * 0.3;
      particle.size = particle.baseSize * pulseFactor;

      // Sharp particle with defined glow
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      );
      
      gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, 0.9)`);
      gradient.addColorStop(0.4, `hsla(${particle.hue}, 70%, 60%, 0.6)`);
      gradient.addColorStop(1, `hsla(${particle.hue}, 60%, 50%, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.fill();

      // Bright center
      ctx.fillStyle = `hsla(${particle.hue}, 90%, 80%, 0.8)`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawConnections = () => {
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.5;
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += particle.pulseSpeed;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150 * 0.01;
          particle.vx += dx * force;
          particle.vy += dy * force;
        }
      });
    };

    const animate = (time: number) => {
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

    // Initialize
    resizeCanvas();
    createParticles();
    animate(0);

    // Event listeners
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