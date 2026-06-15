export function createPlayer(dom, music) {
  let isSeeking = false;

  const fmt = (seconds) => {
    if (!isFinite(seconds) || seconds < 0) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getRatio = (event) => {
    const rect = dom.musicTrack.getBoundingClientRect();
    const point = event.touches ? event.touches[0] : event.changedTouches ? event.changedTouches[0] : event;
    return Math.max(0, Math.min(1, (point.clientX - rect.left) / rect.width));
  };

  const applySeek = (event) => {
    const ratio = getRatio(event);
    dom.musicFill.style.width = `${ratio * 100}%`;
    dom.musicThumb.style.left = `${ratio * 100}%`;
    dom.musicCurrent.textContent = fmt(ratio * (dom.audio.duration || 0));
  };

  const commitSeek = (event) => {
    const ratio = getRatio(event);
    if (isFinite(dom.audio.duration)) dom.audio.currentTime = ratio * dom.audio.duration;
  };

  const updateProgress = () => {
    if (isSeeking) return;
    const current = dom.audio.currentTime;
    const duration = dom.audio.duration || 0;
    const percent = duration ? (current / duration) * 100 : 0;
    dom.musicFill.style.width = `${percent}%`;
    dom.musicThumb.style.left = `${percent}%`;
    dom.musicCurrent.textContent = fmt(current);
    dom.musicDuration.textContent = fmt(duration);
  };

  const play = () => {
    dom.audio.play().catch(() => {});
    dom.iconPlay.classList.add('hidden');
    dom.iconPause.classList.remove('hidden');
  };

  const pause = () => {
    dom.audio.pause();
    dom.iconPlay.classList.remove('hidden');
    dom.iconPause.classList.add('hidden');
  };

  const togglePlay = () => {
    if (dom.audio.paused) play();
    else pause();
  };

  const mount = () => {
    if (!music?.enabled) return;
    dom.audio.src = music.file;
    dom.audio.loop = music.loop ?? true;
    dom.audio.volume = music.defaultVolume ?? 0.4;

    dom.btnPlay.addEventListener('click', togglePlay);
    dom.btnPrev.addEventListener('click', () => { dom.audio.currentTime = 0; });
    dom.btnNext.addEventListener('click', () => {
      if (isFinite(dom.audio.duration)) dom.audio.currentTime = dom.audio.duration - 0.1;
    });

    dom.musicTrack.addEventListener('mousedown', (event) => { isSeeking = true; applySeek(event); });
    dom.musicTrack.addEventListener('touchstart', (event) => { isSeeking = true; applySeek(event); }, { passive: true });
    document.addEventListener('mousemove', (event) => { if (isSeeking) applySeek(event); });
    document.addEventListener('touchmove', (event) => { if (isSeeking) applySeek(event); }, { passive: true });
    document.addEventListener('mouseup', (event) => { if (isSeeking) { commitSeek(event); isSeeking = false; } });
    document.addEventListener('touchend', (event) => { if (isSeeking) { commitSeek(event); isSeeking = false; } });

    dom.audio.addEventListener('timeupdate', updateProgress);
    dom.audio.addEventListener('loadedmetadata', updateProgress);
  };

  return { mount, play, pause, togglePlay };
}