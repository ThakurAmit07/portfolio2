"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
}

interface EmberParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  color: string;
  alpha: number;
  maxAlpha: number;
  life: number;
  maxLife: number;
}

interface CosmicCloud {
  x: number;
  y: number;
  radius: number;
  color: string;
  alpha: number;
  speedX: number;
  speedY: number;
}

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.05;
      targetMouseY = (e.clientY - height / 2) * 0.05;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    let stars: Star[] = [];
    let embers: EmberParticle[] = [];
    let clouds: CosmicCloud[] = [];

    const starColors = ["#ffffff", "#F5F5FA", "#7F5CFF", "#4CE0FF", "#FF5500", "#FF8800"];
    const emberColors = ["#FF5500", "#FF7700", "#FF3300", "#7F5CFF", "#FFAA00", "#FFD700"];

    const createEmber = (): EmberParticle => {
      const maxLife = Math.random() * 320 + 220;
      return {
        x: Math.random() * width,
        y: height + Math.random() * 200,
        size: Math.random() * 2.6 + 0.9,
        speedY: Math.random() * 0.9 + 0.45,
        speedX: (Math.random() - 0.5) * 0.6,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
        alpha: 0,
        maxAlpha: Math.random() * 0.75 + 0.25,
        life: 0,
        maxLife,
      };
    };

    const initElements = () => {
      const starCount = Math.min(Math.floor((width * height) / 2800), 550);
      stars = [];
      for (let i = 0; i < starCount; i++) {
        const zRand = Math.random();
        const z = zRand > 0.85 ? 3 : zRand > 0.5 ? 2 : 1;
        const size = z === 3 ? Math.random() * 1.8 + 1.2 : z === 2 ? Math.random() * 1.1 + 0.6 : Math.random() * 0.7 + 0.3;
        const baseAlpha = z === 3 ? Math.random() * 0.5 + 0.5 : z === 2 ? Math.random() * 0.4 + 0.3 : Math.random() * 0.3 + 0.15;
        const color = Math.random() > 0.75 ? starColors[Math.floor(Math.random() * starColors.length)] : "#FFFFFF";

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height * 3,
          z,
          size,
          color,
          alpha: baseAlpha,
          baseAlpha,
          twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        });
      }

      embers = [];
      const emberCount = Math.min(Math.floor(width / 24), 60);
      for (let i = 0; i < emberCount; i++) {
        const ember = createEmber();
        ember.y = Math.random() * height;
        embers.push(ember);
      }

      // Volumetric cosmic glowing clouds behind content
      clouds = [
        { x: width * 0.2, y: height * 0.3, radius: 280, color: "rgba(255, 85, 0, 0.08)", alpha: 0.8, speedX: 0.1, speedY: 0.05 },
        { x: width * 0.8, y: height * 0.7, radius: 340, color: "rgba(127, 92, 255, 0.09)", alpha: 0.7, speedX: -0.08, speedY: -0.04 },
        { x: width * 0.5, y: height * 1.5, radius: 400, color: "rgba(255, 85, 0, 0.07)", alpha: 0.7, speedX: 0.06, speedY: 0.08 },
        { x: width * 0.3, y: height * 2.2, radius: 320, color: "rgba(76, 224, 255, 0.06)", alpha: 0.6, speedX: -0.1, speedY: 0.04 },
      ];
    };

    initElements();

    const render = () => {
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render Volumetric Cosmic Clouds
      for (let i = 0; i < clouds.length; i++) {
        const cloud = clouds[i];
        cloud.x += cloud.speedX;
        cloud.y += cloud.speedY;

        if (cloud.x < -200) cloud.x = width + 200;
        if (cloud.x > width + 200) cloud.x = -200;

        const renderY = cloud.y - scrollY * 0.2;

        const grad = ctx.createRadialGradient(
          cloud.x + mouseX * 0.5,
          renderY + mouseY * 0.5,
          0,
          cloud.x + mouseX * 0.5,
          renderY + mouseY * 0.5,
          cloud.radius
        );
        grad.addColorStop(0, cloud.color);
        grad.addColorStop(1, "transparent");

        ctx.save();
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cloud.x + mouseX * 0.5, renderY + mouseY * 0.5, cloud.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Render Starfield
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.alpha += star.twinkleSpeed;
        if (star.alpha > star.baseAlpha + 0.3 || star.alpha < star.baseAlpha - 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        const parallaxX = mouseX * (star.z * 0.4);
        const parallaxY = mouseY * (star.z * 0.4) - scrollY * (star.z * 0.15);

        let screenX = (star.x + parallaxX) % width;
        if (screenX < 0) screenX += width;

        let screenY = (star.y + parallaxY) % height;
        if (screenY < 0) screenY += height;

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.fillStyle = star.color;
        if (star.z === 3) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = star.color;
        }

        ctx.beginPath();
        ctx.arc(screenX, screenY, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Render Volcanic Embers (Drifting upwards)
      for (let i = 0; i < embers.length; i++) {
        const ember = embers[i];
        ember.life++;
        ember.y -= ember.speedY;
        ember.x += ember.speedX + Math.sin(ember.life * 0.03) * 0.35;

        const progress = ember.life / ember.maxLife;
        if (progress < 0.2) {
          ember.alpha = (progress / 0.2) * ember.maxAlpha;
        } else if (progress > 0.7) {
          ember.alpha = ((1 - progress) / 0.3) * ember.maxAlpha;
        } else {
          ember.alpha = ember.maxAlpha;
        }

        if (ember.life >= ember.maxLife || ember.y < -50) {
          embers[i] = createEmber();
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, ember.alpha));
        ctx.fillStyle = ember.color;
        ctx.shadowBlur = 14;
        ctx.shadowColor = ember.color;

        ctx.beginPath();
        ctx.arc(ember.x + mouseX * 0.8, ember.y + mouseY * 0.8, ember.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1] transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
