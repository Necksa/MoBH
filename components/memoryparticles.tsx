"use client";

import { useEffect, useRef } from "react";

export default function memoryparticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const currentCanvas = canvasRef.current;
if (!currentCanvas) return;

const canvas = currentCanvas;

    const context = canvas.getContext("2d");
if (!context) return;

const ctx = context;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.3,
      speedX: (Math.random() - 0.5) * 0.1,
      speedY: (Math.random() - 0.5) * 0.1,
      opacity: Math.random() * 0.5,
      direction: Math.random() > 0.5 ? 1 : -1,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        particle.opacity += 0.002 * particle.direction;

        if (particle.opacity > 0.6) {
          particle.direction = -1;
        }

        if (particle.opacity < 0.1) {
          particle.direction = 1;
        }

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;

        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(255,255,255,${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
    />
  );
}