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

    // 4色パレット
    const colors = [
      '#3B82F6', // ブルー
      '#06B6D4', // シアン
      '#6366F1', // インディゴ
      '#14B8A6'  // ティール
    ];

    // パーティクル配列
    const particles: any[] = [];
    const sparkles: any[] = [];

    // パーティクル生成
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.8 + 0.2,
        pulse: Math.random() * Math.PI * 2
      });
    }

    // キラキラ効果用
    const createSparkle = () => {
      if (sparkles.length < 20) {
        sparkles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1,
          decay: Math.random() * 0.02 + 0.01,
          twinkle: Math.random() * Math.PI * 2
        });
      }
    };

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // 背景グラデーション
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.03)');
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0.01)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // パーティクル更新と描画
      particles.forEach((particle, i) => {
        // 位置更新
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += 0.02;

        // 境界チェック
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // パルス効果
        const pulseSize = particle.size * (1 + Math.sin(particle.pulse) * 0.3);
        const pulseOpacity = particle.opacity * (0.7 + Math.sin(particle.pulse) * 0.3);

        // グロー効果
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulseSize * 3
        );
        glowGradient.addColorStop(0, `${particle.color}${Math.floor(pulseOpacity * 255).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(0.5, `${particle.color}${Math.floor(pulseOpacity * 128).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(1, `${particle.color}00`);

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize * 3, 0, Math.PI * 2);
        ctx.fill();

        // コア描画
        ctx.fillStyle = `${particle.color}${Math.floor(pulseOpacity * 255).toString(16).padStart(2, '0')}`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();

        // 接続線描画
        particles.forEach((other, j) => {
          if (i !== j) {
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              const opacity = (120 - distance) / 120 * 0.3;
              const gradient = ctx.createLinearGradient(
                particle.x, particle.y,
                other.x, other.y
              );
              gradient.addColorStop(0, `${particle.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
              gradient.addColorStop(1, `${other.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);

              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        });
      });

      // キラキラ効果
      if (Math.random() < 0.1) {
        createSparkle();
      }

      sparkles.forEach((sparkle, i) => {
        sparkle.life -= sparkle.decay;
        sparkle.twinkle += 0.2;

        if (sparkle.life <= 0) {
          sparkles.splice(i, 1);
          return;
        }

        // キラキラの輝き
        const twinkleIntensity = Math.abs(Math.sin(sparkle.twinkle));
        const currentSize = sparkle.size * sparkle.life * twinkleIntensity;
        const currentOpacity = sparkle.life * twinkleIntensity;

        // 十字の光
        ctx.strokeStyle = `${sparkle.color}${Math.floor(currentOpacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        // 縦線
        ctx.beginPath();
        ctx.moveTo(sparkle.x, sparkle.y - currentSize);
        ctx.lineTo(sparkle.x, sparkle.y + currentSize);
        ctx.stroke();

        // 横線
        ctx.beginPath();
        ctx.moveTo(sparkle.x - currentSize, sparkle.y);
        ctx.lineTo(sparkle.x + currentSize, sparkle.y);
        ctx.stroke();

        // 斜め線
        ctx.beginPath();
        ctx.moveTo(sparkle.x - currentSize * 0.7, sparkle.y - currentSize * 0.7);
        ctx.lineTo(sparkle.x + currentSize * 0.7, sparkle.y + currentSize * 0.7);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(sparkle.x - currentSize * 0.7, sparkle.y + currentSize * 0.7);
        ctx.lineTo(sparkle.x + currentSize * 0.7, sparkle.y - currentSize * 0.7);
        ctx.stroke();

        // 中心の光点
        const centerGradient = ctx.createRadialGradient(
          sparkle.x, sparkle.y, 0,
          sparkle.x, sparkle.y, currentSize
        );
        centerGradient.addColorStop(0, `${sparkle.color}${Math.floor(currentOpacity * 255).toString(16).padStart(2, '0')}`);
        centerGradient.addColorStop(1, `${sparkle.color}00`);

        ctx.fillStyle = centerGradient;
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // 画面端のキラキラ効果
      if (Math.random() < 0.05) {
        const edge = Math.floor(Math.random() * 4);
        let x, y;
        
        switch (edge) {
          case 0: // 上
            x = Math.random() * canvas.width;
            y = 0;
            break;
          case 1: // 右
            x = canvas.width;
            y = Math.random() * canvas.height;
            break;
          case 2: // 下
            x = Math.random() * canvas.width;
            y = canvas.height;
            break;
          case 3: // 左
            x = 0;
            y = Math.random() * canvas.height;
            break;
          default:
            x = 0;
            y = 0;
        }

        sparkles.push({
          x,
          y,
          size: Math.random() * 6 + 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1,
          decay: Math.random() * 0.015 + 0.005,
          twinkle: Math.random() * Math.PI * 2
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
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