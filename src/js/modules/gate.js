export function setupGate(clickToEnter, dom, onAutoplay, onShowMain) {
  if (!clickToEnter?.enabled) {
    dom.removeGate();
    onShowMain();
    return;
  }

  let entered = false;

  const enter = () => {
    if (entered) return;
    entered = true;

    dom.gate?.classList.add('leaving');
    dom.removeGate();
    if (typeof onAutoplay === 'function') onAutoplay();
    onShowMain();
  };

  const handle = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if (event.target && event.target.closest?.('.top-audio-btn')) return;
    event.preventDefault();
    enter();
  };

  document.addEventListener('pointerdown', handle, { capture: true, passive: false });
  document.addEventListener('mousedown', handle, { capture: true, passive: false });
  document.addEventListener('touchstart', handle, { capture: true, passive: false });
}
