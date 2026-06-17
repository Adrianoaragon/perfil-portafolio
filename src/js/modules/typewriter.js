/**
 * typewriter.js
 * Efecto de escritura letra por letra con cursor parpadeante.
 */
export function typewrite(element, text, { speed = 90, onDone } = {}) {
  if (!element || !text) return;

  element.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  cursor.textContent = '|';

  let i = 0;
  const tick = () => {
    element.textContent = text.slice(0, i);
    element.appendChild(cursor);
    i++;
    if (i <= text.length) {
      setTimeout(tick, speed);
    } else if (typeof onDone === 'function') {
      onDone();
    }
  };
  tick();
}

/**
 * Dispara un glitch breve sobre un elemento (clase CSS + timeout).
 */
export function triggerGlitch(element, duration = 350) {
  if (!element) return;
  element.classList.add('glitching');
  setTimeout(() => element.classList.remove('glitching'), duration);
}