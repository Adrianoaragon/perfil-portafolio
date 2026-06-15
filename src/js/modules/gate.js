export function setupGate(clickToEnter, dom, onAutoplay, onShowMain) {
  if (!clickToEnter?.enabled) {
    dom.removeGate();
    onShowMain();
    return;
  }

  dom.gate.addEventListener('click', () => {
    dom.gate.classList.add('leaving');
    if (typeof onAutoplay === 'function') onAutoplay();
    onShowMain();
  }, { once: true });
}
