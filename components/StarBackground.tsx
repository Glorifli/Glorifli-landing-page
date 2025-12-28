import React, { useEffect, useRef } from 'react';

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    class Star {
      x: number;
      y: number;
      z: number;
      size: number;
      speed: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.z = Math.random() * canvas!.width; // Depth
        this.size = Math.random() * 3 + 1; // Increased size (was Math.random() * 2)
        this.speed = Math.random() * 5 + 1; // Speed factor
        // Brand color: Pink
        this.color = `rgba(236, 72, 153, ${Math.random() * 0.5 + 0.5})`; 
      }

      move() {
        this.x -= this.speed * 2; // Move left
        if (this.x < 0) {
          this.x = canvas!.width;
          this.y = Math.random() * canvas!.height;
        }
      }

      draw() {
        if (!ctx) return;
        
        // Draw the star with a "streak" effect
        const streakLength = this.speed * 4;
        
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x + streakLength, this.y);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(236, 72, 153, 0)');

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + streakLength, this.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.size;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((window.innerWidth * window.innerHeight) / 10000); // Density
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.move();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60 mix-blend-screen"
    />
  );
};

export default StarBackground;