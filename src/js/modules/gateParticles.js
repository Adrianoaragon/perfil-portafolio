/**
 * gateParticles.js
 * Partículas blancas flotantes en el canvas de fondo del gate.
 * Efecto sutil de movimiento tipo niebla/polvo estelar.
 */
export function startGateParticles(canvasId = 'gate-particles') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return () => {};

  const ctx = canvas.getContext('2d');
  let W, H, particles, rafId;
  let running = true;

  const resize = () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  };

  const spawn = () => {
    const count = Math.floor((W * H) / 9000);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      baseAlpha: Math.random() * 0.5 + 0.15,
      phase: Math.random() * Math.PI * 2,
    }));
  };

  let t = 0;

  const draw = () => {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    t += 0.012;

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      // Parpadeo suave individual
      const flicker = 0.5 + 0.5 * Math.sin(t * 2 + p.phase);
      const alpha = p.baseAlpha * flicker;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
      ctx.fill();
    });

    rafId = requestAnimationFrame(draw);
  };

  resize();
  spawn();
  draw();

  const onResize = () => { resize(); spawn(); };
  window.addEventListener('resize', onResize);

  // Devuelve función de limpieza (por si se quiere detener tras entrar)
  return () => {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener('resize', onResize);
  };
}