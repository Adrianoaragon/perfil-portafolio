/**
 * tilt.js
 * Efecto de inclinación 3D al mover el mouse sobre un elemento, usando GSAP.
 * Requiere que GSAP esté cargado globalmente (window.gsap).
 */
export function applyTilt(element, { maxTilt = 10, perspective = 800 } = {}) {
  if (!element || typeof window.gsap === 'undefined') return;

  const handleMove = (e) => {
    const rect = element.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const point = e.touches ? e.touches[0] : e;
    const dx = point.clientX - cx;
    const dy = point.clientY - cy;

    const tiltX = (dy / rect.height) * maxTilt;
    const tiltY = -(dx / rect.width) * maxTilt;

    window.gsap.to(element, {
      rotationX: tiltX,
      rotationY: tiltY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: perspective,
    });
  };

  const reset = () => {
    window.gsap.to(element, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  element.addEventListener('mousemove', handleMove);
  element.addEventListener('mouseleave', reset);
  element.addEventListener('touchmove', (e) => { e.preventDefault(); handleMove(e); }, { passive: false });
  element.addEventListener('touchend', reset);
}