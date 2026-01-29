"use client";

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
        let shootingStars: ShootingStar[] = [];
        let lastShootingStarTime = 0;

        // Iridescent colors for stars
        const starColors = [
            '0, 255, 255',   // Cyan
            '168, 85, 247',  // Purple
            '236, 72, 153',  // Pink
            '134, 239, 172'  // Light Green
        ];

        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
                initStars();
            }
        };

        const observer = new ResizeObserver(() => {
            resizeCanvas();
        });

        if (canvas.parentElement) {
            observer.observe(canvas.parentElement);
        }

        class Star {
            angle: number;
            radius: number;
            size: number;
            speed: number;
            baseColor: string;
            twinkleSpeed: number;
            twinklePhase: number;

            constructor() {
                this.angle = Math.random() * Math.PI * 2;
                const maxDim = Math.max(canvas!.width, canvas!.height);
                const distFactor = Math.random();
                this.radius = distFactor * maxDim;
                this.radius = Math.max(80, this.radius);

                this.size = Math.random() * 3 + 0.5;
                this.speed = (Math.random() * 0.0002) + 0.0001;
                this.baseColor = starColors[Math.floor(Math.random() * starColors.length)];
                this.twinkleSpeed = Math.random() * 0.05 + 0.01;
                this.twinklePhase = Math.random() * Math.PI * 2;
            }

            move() {
                this.angle += this.speed;
                this.radius -= this.speed * 100;

                if (this.radius < 50) {
                    this.resetToOuterEdge();
                }
            }

            resetToOuterEdge() {
                const maxDim = Math.max(canvas!.width, canvas!.height);
                this.radius = maxDim * 0.8 + Math.random() * (maxDim * 0.2);
                this.angle = Math.random() * Math.PI * 2;
            }

            draw() {
                if (!ctx) return;
                const centerX = canvas!.width / 2;
                const centerY = (canvas!.height / 2) + 30; // Aligned with Black Hole
                const x = centerX + Math.cos(this.angle) * this.radius;
                const y = centerY + Math.sin(this.angle) * this.radius;

                const twinkle = Math.sin(Date.now() * 0.001 * this.speed * 1000 + this.twinklePhase);
                const opacity = 0.6 + 0.4 * twinkle;
                const adjustedOpacity = Math.max(0.3, Math.min(1, opacity));

                ctx.beginPath();
                ctx.arc(x, y, this.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.baseColor}, ${adjustedOpacity * 0.3})`;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(x, y, this.size * 0.8, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${adjustedOpacity})`;
                ctx.fill();
            }
        }

        class ShootingStar {
            x: number;
            y: number;
            length: number;
            speed: number;
            angle: number; // Movement direction
            opacity: number;
            trail: { x: number, y: number }[];
            dead: boolean;
            color: string;

            constructor() {
                this.dead = false;
                // Spawn anywhere outside
                if (Math.random() < 0.5) {
                    this.x = Math.random() < 0.5 ? -100 : canvas!.width + 100;
                    this.y = Math.random() * canvas!.height;
                } else {
                    this.x = Math.random() * canvas!.width;
                    this.y = Math.random() < 0.5 ? -100 : canvas!.height + 100;
                }

                this.length = Math.random() * 80 + 10;
                this.speed = Math.random() * 2 + 1; // Slow speed (1-3)

                // Random angle aiming roughly across screen
                const targetX = Math.random() * canvas!.width;
                const targetY = Math.random() * canvas!.height;
                this.angle = Math.atan2(targetY - this.y, targetX - this.x);

                this.opacity = 1;
                this.trail = [];
                // Iridescent color for GLOW
                const colors = ['168, 85, 247', '0, 255, 255', '236, 72, 153'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            move() {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;

                // Add trail point
                this.trail.push({ x: this.x, y: this.y });
                if (this.trail.length > 50) {
                    this.trail.shift();
                }

                const isOutOfBounds = this.x < -200 || this.x > canvas!.width + 200 || this.y < -200 || this.y > canvas!.height + 200;
                if (isOutOfBounds) {
                    this.dead = true;
                }
            }

            draw() {
                if (!ctx) return;
                if (this.trail.length < 2) return;

                // Draw Trail: "Basically white with a slight tint of color on the glow"
                // We render the trail as a fading stream of white cores with subtle tinted glows
                for (let i = 0; i < this.trail.length; i++) {
                    const point = this.trail[i];
                    const progress = i / this.trail.length;
                    const opacity = progress * 0.3; // Low max opacity for subtlety

                    ctx.beginPath();
                    // Glow (Tinted)
                    ctx.arc(point.x, point.y, 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${this.color}, ${opacity * 0.5})`; // Very faint color tint
                    ctx.fill();

                    ctx.beginPath();
                    // Core (White)
                    ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`; // White dominant
                    ctx.fill();
                }

                // Head (Star)
                // 1. Iridescent Glow (The subtle outer glow)
                ctx.beginPath();
                ctx.arc(this.x, this.y, 8, 0, Math.PI * 2); // Larger soft glow
                ctx.fillStyle = `rgba(${this.color}, 0.1)`; // Super subtle tinted glow (0.1)
                ctx.fill();

                // 2. White Core
                ctx.beginPath();
                ctx.arc(this.x, this.y, 3, 0, Math.PI * 2); // Solid white nut
                ctx.fillStyle = 'white';
                ctx.fill();
            }
        }

        const initStars = () => {
            stars = [];
            // Even higher density: 6000 divisor
            const numStars = Math.floor((window.innerWidth * window.innerHeight) / 6000);
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }
        };

        const drawBlackHoleGlow = () => {
            if (!ctx) return;
            const centerX = canvas!.width / 2;
            const centerY = (canvas!.height / 2) + 30;
            const blackHoleRadius = 50;

            const glowRadius = 450;
            const gradient = ctx.createRadialGradient(centerX, centerY, blackHoleRadius, centerX, centerY, glowRadius);

            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.01)');
            gradient.addColorStop(0.1, 'rgba(168, 85, 247, 0.01)');
            gradient.addColorStop(0.2, 'rgba(0, 255, 255, 0.01)');
            gradient.addColorStop(0.3, 'rgba(236, 72, 153, 0.005)');
            gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.002)');
            gradient.addColorStop(1, 'rgba(0,0,0,0)');

            ctx.beginPath();
            ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(centerX, centerY, blackHoleRadius, 0, Math.PI * 2);
            ctx.fillStyle = 'black';
            ctx.fill();

            // 1. Iridescent Glow Ring
            ctx.beginPath();
            ctx.arc(centerX, centerY, blackHoleRadius, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(168, 85, 247, 0.1)';
            ctx.lineWidth = 4;
            ctx.shadowBlur = 5;
            ctx.shadowColor = 'rgba(0, 255, 255, 0.1)';
            ctx.stroke();

            // 2. Bright White Core Ring
            ctx.beginPath();
            ctx.arc(centerX, centerY, blackHoleRadius, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.lineWidth = 2;
            ctx.shadowBlur = 5;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
            ctx.stroke();

            ctx.shadowBlur = 0;
        }

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Standard Stars
            stars.forEach(star => {
                star.move();
                star.draw();
            });

            // Shooting Stars Logic
            const now = Date.now();
            // "Very rarely": Minimum 60 seconds interval + random chance
            if (shootingStars.length === 0 && now - lastShootingStarTime > 60000) {
                // Add a small probability gate so it doesn't trigger exactly at 60s every time
                // 0.001 chance per frame at 60fps is roughly once every ~16 seconds AFTER the 60s wait
                if (Math.random() < 0.001) {
                    shootingStars.push(new ShootingStar());
                    lastShootingStarTime = now;
                }
            }

            // Update and Draw Shooting Stars
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                shootingStars[i].move();
                shootingStars[i].draw();
                if (shootingStars[i].dead) {
                    shootingStars.splice(i, 1);
                }
            }

            drawBlackHoleGlow();

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();

        return () => {
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default StarBackground;
