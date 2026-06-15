/**
 * player.js
 * Encapsula estado del audio, seekbar, controles y actualización de metadata.
 * La metadata (portada, título, artista, álbum) puede venir de:
 *   a) config.js (fallback inmediato)
 *   b) musicmeta.js (MusicBrainz/CAA, resuelto async)
 */

// Icono de nota musical como portada por defecto
const MUSIC_ICON_SVG = `<svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.25)" width="22" height="22"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>`;

export function createPlayer(dom, music) {
  let isSeeking = false;

  /* ── Helpers ── */
  const fmt = (s) => {
    if (!isFinite(s) || s < 0) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const getRatio = (event) => {
    const rect  = dom.musicTrack.getBoundingClientRect();
    const point = event.touches?.[0] ?? event.changedTouches?.[0] ?? event;
    return Math.max(0, Math.min(1, (point.clientX - rect.left) / rect.width));
  };

  const applySeek = (event) => {
    const ratio = getRatio(event);
    dom.musicFill.style.width  = `${ratio * 100}%`;
    dom.musicThumb.style.left  = `${ratio * 100}%`;
    dom.musicCurrent.textContent = fmt(ratio * (dom.audio.duration || 0));
  };

  const commitSeek = (event) => {
    const ratio = getRatio(event);
    if (isFinite(dom.audio.duration)) dom.audio.currentTime = ratio * dom.audio.duration;
  };

  const updateProgress = () => {
    if (isSeeking) return;
    const cur  = dom.audio.currentTime;
    const dur  = dom.audio.duration || 0;
    const pct  = dur ? (cur / dur) * 100 : 0;
    dom.musicFill.style.width    = `${pct}%`;
    dom.musicThumb.style.left    = `${pct}%`;
    dom.musicCurrent.textContent = fmt(cur);
    dom.musicDuration.textContent = fmt(dur);
  };

  /* ── Play / Pause ── */
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

  const togglePlay = () => (dom.audio.paused ? play() : pause());

  /* ── Actualizar portada en el reproductor ── */
  const setCover = (url) => {
    const wrap = dom.musicCoverWrap;
    if (!wrap) return;
    wrap.innerHTML = '';

    if (url) {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'cover';
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:8px;display:block;';
      img.onerror = () => { wrap.innerHTML = MUSIC_ICON_SVG; };
      wrap.appendChild(img);
    } else {
      wrap.innerHTML = MUSIC_ICON_SVG;
    }
  };

  /* ── Actualizar texto de metadata ── */
  const setMeta = ({ title, artist, album } = {}) => {
    if (title)  dom.musicTitle.textContent  = title;
    if (artist) dom.musicArtist.textContent = artist;
    if (album && dom.musicAlbum) dom.musicAlbum.textContent = album;
  };

  /* ── Mount: conecta audio + listeners ── */
  const mount = () => {
    if (!music?.enabled) return;

    dom.audio.src    = music.file;
    dom.audio.loop   = music.loop ?? true;
    dom.audio.volume = music.defaultVolume ?? 0.4;

    // Metadata de fallback (config.js) — mostrar inmediatamente
    setMeta({ title: music.title, artist: music.artist });
    setCover(music.cover || null);   // null → icono por defecto mientras carga la API

    dom.musicPlayer.classList.remove('hidden');

    // Controles
    dom.btnPlay.addEventListener('click', togglePlay);
    dom.btnPrev.addEventListener('click', () => { dom.audio.currentTime = 0; });
    dom.btnNext.addEventListener('click', () => {
      if (isFinite(dom.audio.duration)) dom.audio.currentTime = dom.audio.duration - 0.1;
    });

    // Seekbar (mouse + touch)
    dom.musicTrack.addEventListener('mousedown',  (e) => { isSeeking = true; applySeek(e); });
    dom.musicTrack.addEventListener('touchstart', (e) => { isSeeking = true; applySeek(e); }, { passive: true });
    document.addEventListener('mousemove',  (e) => { if (isSeeking) applySeek(e); });
    document.addEventListener('touchmove',  (e) => { if (isSeeking) applySeek(e); }, { passive: true });
    document.addEventListener('mouseup',    (e) => { if (isSeeking) { commitSeek(e); isSeeking = false; } });
    document.addEventListener('touchend',   (e) => { if (isSeeking) { commitSeek(e); isSeeking = false; } });

    dom.audio.addEventListener('timeupdate',     updateProgress);
    dom.audio.addEventListener('loadedmetadata', updateProgress);
  };

  /* ── API pública ── */
  return { mount, play, pause, togglePlay, setCover, setMeta };
}
