import React, { useEffect, useRef } from 'react';

export default function GoatBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let particles = [];
    let sparks = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Gold spark particles
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3.5 + 1.5; // Bigger
        this.speedX = (Math.random() - 0.5) * 0.8; // Faster side to side
        this.speedY = -(Math.random() * 1.5 + 0.5); // Faster upwards
        this.opacity = Math.random() * 0.8 + 0.4; // Much brighter
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        this.gold = Math.random() > 0.3; // More yellow/white
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.fadeSpeed;
        if (this.opacity <= 0 || this.y < -10) this.reset();
      }
      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.gold ? '#ffdf00' : '#ffffff'; // White and intense gold
        ctx.fill();
        // Glow
        ctx.shadowBlur = 15; // Massive glow
        ctx.shadowColor = this.gold ? '#ffaa00' : '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Spark burst particles
    class Spark {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // Bigger stars
        this.life = 1.2; // Longer life
        this.decay = Math.random() * 0.015 + 0.005;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 3 + 1; // Much faster
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.twinkleSpeed = Math.random() * 0.2 + 0.1;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.99; // Less friction
        this.vy *= 0.99;
        this.life -= this.decay;
        this.twinklePhase += this.twinkleSpeed;
        if (this.life <= 0) this.reset();
      }
      draw(ctx) {
        const twinkle = (Math.sin(this.twinklePhase) + 1) / 2;
        ctx.save();
        ctx.globalAlpha = Math.min(this.life * twinkle, 1);
        ctx.beginPath();
        // Draw a 4-point star
        const s = this.size * 3;
        ctx.moveTo(this.x, this.y - s);
        ctx.lineTo(this.x + s * 0.3, this.y - s * 0.3);
        ctx.lineTo(this.x + s, this.y);
        ctx.lineTo(this.x + s * 0.3, this.y + s * 0.3);
        ctx.lineTo(this.x, this.y + s);
        ctx.lineTo(this.x - s * 0.3, this.y + s * 0.3);
        ctx.lineTo(this.x - s, this.y);
        ctx.lineTo(this.x - s * 0.3, this.y - s * 0.3);
        ctx.closePath();
        ctx.fillStyle = '#ffffff'; // White hot core
        ctx.shadowBlur = 25; // Massive glow
        ctx.shadowColor = '#ffdf00'; // Intense yellow glow
        ctx.fill();
        ctx.restore();
      }
    }

    // Init particles - Double the amount
    for (let i = 0; i < 150; i++) particles.push(new Particle());
    for (let i = 0; i < 60; i++) sparks.push(new Spark());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(ctx); });
      sparks.forEach(s => { s.update(); s.draw(ctx); });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Spark particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />

      {/* GOAT Face SVG — centered, large, subtle gold */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 500 600"
          className="goat-face-svg"
          style={{
            width: 'min(70vw, 500px)',
            height: 'auto',
            opacity: 0.06,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gold gradient for the face */}
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f0c060" />
              <stop offset="50%" stopColor="#c9a84c" />
              <stop offset="100%" stopColor="#a8862a" />
            </linearGradient>

            {/* Animated shine sweep */}
            <linearGradient id="shineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="40%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="60%" stopColor="transparent" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                from="-1 0"
                to="2 0"
                dur="4s"
                repeatCount="indefinite"
              />
            </linearGradient>

            {/* Glow filter */}
            <filter id="goldGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <mask id="shineMask">
              <rect width="500" height="600" fill="url(#shineGrad)" />
            </mask>
          </defs>

          {/* === GOAT FACE === */}
          <g filter="url(#goldGlow)">

            {/* Left Horn */}
            <path
              d="M 155 200 Q 120 120 90 50 Q 85 35 100 40 Q 130 55 150 100 Q 165 140 170 185"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="12"
              strokeLinecap="round"
            />

            {/* Right Horn */}
            <path
              d="M 345 200 Q 380 120 410 50 Q 415 35 400 40 Q 370 55 350 100 Q 335 140 330 185"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="12"
              strokeLinecap="round"
            />

            {/* Left Ear */}
            <path
              d="M 145 210 Q 90 195 70 230 Q 60 260 100 260 Q 130 258 155 240"
              fill="url(#goldGrad)"
              opacity="0.7"
            />

            {/* Right Ear */}
            <path
              d="M 355 210 Q 410 195 430 230 Q 440 260 400 260 Q 370 258 345 240"
              fill="url(#goldGrad)"
              opacity="0.7"
            />

            {/* Head — main oval shape */}
            <ellipse
              cx="250" cy="300"
              rx="120" ry="140"
              fill="url(#goldGrad)"
              opacity="0.5"
            />

            {/* Forehead ridge */}
            <path
              d="M 170 230 Q 250 200 330 230"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="4"
              opacity="0.6"
            />

            {/* Left Eye */}
            <ellipse cx="200" cy="280" rx="22" ry="16" fill="#000" opacity="0.9" />
            <ellipse cx="205" cy="278" rx="8" ry="8" fill="url(#goldGrad)" opacity="0.9" />
            <ellipse cx="207" cy="276" rx="3" ry="3" fill="#fff" opacity="0.8" />

            {/* Right Eye */}
            <ellipse cx="300" cy="280" rx="22" ry="16" fill="#000" opacity="0.9" />
            <ellipse cx="295" cy="278" rx="8" ry="8" fill="url(#goldGrad)" opacity="0.9" />
            <ellipse cx="293" cy="276" rx="3" ry="3" fill="#fff" opacity="0.8" />

            {/* Nose bridge */}
            <path
              d="M 250 295 L 250 340"
              stroke="url(#goldGrad)"
              strokeWidth="3"
              opacity="0.4"
            />

            {/* Snout / Muzzle — wider bottom shape */}
            <ellipse
              cx="250" cy="370"
              rx="55" ry="40"
              fill="url(#goldGrad)"
              opacity="0.35"
            />

            {/* Nostrils */}
            <ellipse cx="232" cy="365" rx="8" ry="5" fill="#000" opacity="0.7" />
            <ellipse cx="268" cy="365" rx="8" ry="5" fill="#000" opacity="0.7" />

            {/* Mouth */}
            <path
              d="M 230 385 Q 250 398 270 385"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              opacity="0.5"
              strokeLinecap="round"
            />

            {/* Beard — goatee strands */}
            <path
              d="M 240 415 Q 235 460 225 500 Q 222 515 230 510 Q 240 495 245 470"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d="M 250 420 Q 250 470 250 520 Q 250 535 255 520 Q 255 470 252 430"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M 260 415 Q 265 460 275 500 Q 278 515 270 510 Q 260 495 255 470"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.5"
            />

            {/* Chin tuft */}
            <path
              d="M 235 410 Q 250 430 265 410"
              fill="url(#goldGrad)"
              opacity="0.3"
            />

          </g>

          {/* Shine overlay on the goat */}
          <g mask="url(#shineMask)" opacity="0.5">
            <ellipse cx="250" cy="300" rx="120" ry="140" fill="white" />
          </g>

        </svg>
      </div>

      {/* Extra ambient gold haze */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: '60vw',
          height: '60vw',
          maxWidth: '800px',
          maxHeight: '800px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 60%)',
          animation: 'pulseGlow 6s infinite alternate',
        }}
      />
    </div>
  );
}
