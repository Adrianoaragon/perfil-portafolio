/**
 * cursor.js
 * Cursor personalizado que sigue el mouse. Se activa solo si
 * config.cursor.enabled === true. En dispositivos táctiles no hace nada.
 */
export function setupCursor(cursorConfig) {
  if (!cursorConfig?.enabled) return;

  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  if (isTouchDevice) return;

  const cursorEl = document.getElementById('custom-cursor');
  if (!cursorEl) return;

  cursorEl.classList.remove('hidden');
  document.body.classList.add('cursor-enabled');

  document.addEventListener('mousemove', (e) => {
    cursorEl.style.left = `${e.clientX}px`;
    cursorEl.style.top  = `${e.clientY}px`;
  });

  document.addEventListener('mousedown', () => cursorEl.classList.add('active'));
  document.addEventListener('mouseup',   () => cursorEl.classList.remove('active'));

  // Agrandar sobre elementos clicables
  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => cursorEl.classList.add('active'));
    el.addEventListener('mouseleave', () => cursorEl.classList.remove('active'));
  });
}