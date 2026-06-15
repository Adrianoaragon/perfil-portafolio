/* ═══════════════════════════════════════
   ICONS
═══════════════════════════════════════ */
const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  github:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
  youtube:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089C19.55 3.6 12 3.6 12 3.6s-7.55 0-9.41.514A3.008 3.008 0 0 0 .5 6.203 31.45 31.45 0 0 0 0 12a31.45 31.45 0 0 0 .5 5.797 3.008 3.008 0 0 0 2.09 2.089C4.45 20.4 12 20.4 12 20.4s7.55 0 9.41-.514a3.008 3.008 0 0 0 2.09-2.089C23.986 15.956 24 12 24 12a31.45 31.45 0 0 0-.501-5.797zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z"/></svg>`,
  tiktok:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/></svg>`,
  kick:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 2h4v7.5L9.5 6H14l-5 6 5 6H9.5L6 14.5V20H2V2zm12 0h4v7.5L21.5 6H24v4l-2 2 2 2v4h-2.5L18 14.5V20h-4V2z"/></svg>`,
  spotify:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
  steam:     `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0z"/></svg>`,
  discord:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>`,
  twitter:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.264 5.634 5.9-5.634Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  link:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  // Para actividades sin imagen
  game:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.97 16L5 19c-.67.67-1.41.7-1.81.62-.43-.09-1.19-.48-1.19-1.62V12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10c-1.45 0-2.82-.31-4.06-.86L7.97 16zm3.03-4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>`,
  music_note:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>`,
  tv:        `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg>`,
};

// Icono por tipo de actividad de Discord
const ACT_ICON = { 0: 'game', 1: 'tv', 2: 'music_note', 3: 'tv', 4: 'link', 5: 'game' };
const ACT_TYPE_LABEL = ['Jugando', 'Streaming', 'Escuchando', 'Viendo', 'Personalizando', 'Compitiendo'];

/* ═══════════════════════════════════════
   BACKGROUND
═══════════════════════════════════════ */
function applyBackground() {
  const bg  = CONFIG.background;
  const lay = document.getElementById('bg-layer');
  const ov  = document.getElementById('bg-overlay');

  if (bg.type === 'color')    lay.style.background = bg.value;
  else if (bg.type === 'gradient') lay.style.background = bg.value;
  else if (bg.type === 'image') {
    lay.style.backgroundImage    = `url(${bg.value})`;
    lay.style.backgroundSize     = 'cover';
    lay.style.backgroundPosition = 'center';
  } else if (bg.type === 'video') {
    const v = document.createElement('video');
    Object.assign(v, { src: bg.value, autoplay: true, loop: true, muted: true, playsInline: true });
    v.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;';
    document.body.prepend(v);
    lay.style.background = 'transparent';
  }
  if (bg.overlay) {
    ov.style.display    = 'block';
    ov.style.background = `rgba(0,0,0,${bg.overlayOpacity ?? 0.62})`;
  }
}

/* ═══════════════════════════════════════
   META
═══════════════════════════════════════ */
function applyMeta() {
  document.title = CONFIG.meta.title;
  if (CONFIG.meta.favicon) {
    let fav = document.querySelector('link[rel="icon"]');
    if (!fav) { fav = document.createElement('link'); fav.rel = 'icon'; document.head.appendChild(fav); }
    fav.href = CONFIG.meta.favicon;
  }
}

/* ═══════════════════════════════════════
   GATE
═══════════════════════════════════════ */
function setupGate() {
  const gate = document.getElementById('gate');
  if (!CONFIG.clickToEnter?.enabled) { gate.remove(); showMain(); return; }
  gate.addEventListener('click', () => {
    gate.classList.add('leaving');
    if (CONFIG.music?.enabled && CONFIG.music?.autoplayAfterClick) playMusic();
    showMain();
  }, { once: true });
}

function showMain() {
  const m = document.getElementById('main');
  m.classList.remove('hidden');
  requestAnimationFrame(() => m.classList.add('visible'));
}

/* ═══════════════════════════════════════
   PERFIL ESTÁTICO (mientras carga Lanyard)
═══════════════════════════════════════ */
function applyStaticProfile() {
  const p = CONFIG.profile;
  const img = document.getElementById('avatar-img');
  img.src = p.avatar;
  document.getElementById('profile-name').textContent = p.name.toLowerCase();
  document.getElementById('profile-bio').textContent  = p.bio.toUpperCase();
  document.getElementById('profile-loc').textContent  = `📍 ${p.location.toUpperCase()}`;
}

/* ═══════════════════════════════════════
   DISCORD via LANYARD
═══════════════════════════════════════ */
async function fetchDiscord() {
  if (!CONFIG.discord?.enabled) return;
  const id = CONFIG.discord.userId;
  if (!id || id === 'TU_DISCORD_ID') return;

  try {
    const res  = await fetch(`https://api.lanyard.rest/v1/users/${id}`);
    const json = await res.json();
    if (!json.success) return;

    const d    = json.data;
    const user = d.discord_user;
    const st   = d.discord_status || 'offline';

    // Avatar (puede ser GIF)
    if (user?.avatar) {
      const ext = user.avatar.startsWith('a_') ? 'gif' : 'webp';
      document.getElementById('avatar-img').src =
        `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=160`;
    }

    // Nombre global
    const name = user?.global_name || user?.username || CONFIG.profile.name;
    document.getElementById('profile-name').textContent = name.toLowerCase();
    // No sobreescribimos bio/loc — vienen del config

    // Decoración del avatar
    const decoAsset = user?.avatar_decoration_data?.asset;
    if (decoAsset) {
      const decoEl = document.getElementById('avatar-deco');
      decoEl.src = `https://cdn.discordapp.com/avatar-decoration-presets/${decoAsset}.png?size=96&passthrough=true`;
      decoEl.classList.remove('hidden');
    }

    // Status dot
    const dot = document.getElementById('status-dot');
    dot.className = `status-dot ${st}`;
    dot.title     = st;

    // Actividades: prioridad → tipo 2 (música), luego tipo 0 (juego), luego cualquiera
    const acts = d.activities || [];
    const act  = acts.find(a => a.type === 2)   // Escuchando (Spotify)
               || acts.find(a => a.type === 0)   // Jugando
               || acts.find(a => a.type === 1)   // Streaming
               || acts.find(a => a.type === 3)   // Viendo
               || acts[0];

    if (act) renderActivity(act);

    setTimeout(fetchDiscord, 25_000);
  } catch (e) {
    console.warn('Lanyard error:', e);
  }
}

function getActivityImageUrl(act) {
  const appId    = act.application_id;
  const largeKey = act.assets?.large_image;

  if (!largeKey) return null;

  // Spotify y otros usan "spotify:..." o "mp:external/..."
  if (largeKey.startsWith('spotify:')) {
    const spotifyId = largeKey.replace('spotify:', '');
    return `https://i.scdn.co/image/${spotifyId}`;
  }
  if (largeKey.startsWith('mp:external/')) {
    return `https://media.discordapp.net/external/${largeKey.replace('mp:external/', '')}`;
  }
  // Assets de aplicación Discord normal
  if (appId) {
    return `https://cdn.discordapp.com/app-assets/${appId}/${largeKey}.png`;
  }
  return null;
}

function getActivitySmallUrl(act) {
  const appId    = act.application_id;
  const smallKey = act.assets?.small_image;

  if (!smallKey) return null;
  if (smallKey.startsWith('mp:external/')) {
    return `https://media.discordapp.net/external/${smallKey.replace('mp:external/', '')}`;
  }
  if (appId) {
    return `https://cdn.discordapp.com/app-assets/${appId}/${smallKey}.png`;
  }
  return null;
}

function renderActivity(act) {
  const card = document.getElementById('activity-card');
  card.classList.remove('hidden');

  document.getElementById('act-type').textContent   = ACT_TYPE_LABEL[act.type] || 'Actividad';
  document.getElementById('act-name').textContent   = act.name    || '';
  document.getElementById('act-detail').textContent = act.details || '';
  document.getElementById('act-state').textContent  = act.state   || '';

  // Imagen grande
  const largeEl  = document.getElementById('act-large');
  const imgsWrap = document.querySelector('.activity-imgs');
  const largeUrl = getActivityImageUrl(act);

  if (largeUrl) {
    largeEl.src = largeUrl;
    largeEl.style.display = 'block';
    // Quitar fallback si existía
    const fb = imgsWrap.querySelector('.act-icon-fallback');
    if (fb) fb.remove();
  } else {
    // Mostrar icono SVG de fallback según tipo
    largeEl.style.display = 'none';
    if (!imgsWrap.querySelector('.act-icon-fallback')) {
      const fb = document.createElement('div');
      fb.className = 'act-icon-fallback';
      fb.innerHTML = ICONS[ACT_ICON[act.type] || 'link'];
      imgsWrap.appendChild(fb);
    }
  }

  // Imagen pequeña (ej: icono de Spotify sobre portada del juego)
  const smallEl  = document.getElementById('act-small');
  const smallUrl = getActivitySmallUrl(act);
  if (smallUrl) {
    smallEl.src = smallUrl;
    smallEl.classList.remove('hidden');
  } else {
    smallEl.classList.add('hidden');
  }
}

/* ═══════════════════════════════════════
   SOCIALS
═══════════════════════════════════════ */
function buildSocials() {
  const row = document.getElementById('socials-row');
  CONFIG.socials.forEach(s => {
    const a = document.createElement('a');
    a.href   = s.url;
    a.target = '_blank';
    a.rel    = 'noopener noreferrer';
    a.className = 'social-icon-btn';
    a.setAttribute('data-label', s.label || s.icon);
    a.innerHTML = ICONS[s.icon] || ICONS['link'];
    row.appendChild(a);
  });
}

/* ═══════════════════════════════════════
   REPRODUCTOR
═══════════════════════════════════════ */
const audio   = document.getElementById('audio');
let isPlaying = false;
let isSeeking = false;

function setupMusic() {
  const m = CONFIG.music;
  if (!m?.enabled) return;

  document.getElementById('music-player').classList.remove('hidden');

  audio.src    = m.file;
  audio.loop   = m.loop ?? true;
  audio.volume = m.defaultVolume ?? 0.4;

  document.getElementById('music-title').textContent  = m.title  || '';
  document.getElementById('music-artist').textContent = m.artist || '';

  // Portada
  const coverEl = document.getElementById('music-cover');
  if (m.cover) {
    coverEl.src = m.cover;
  } else {
    // Placeholder: icono de nota musical
    coverEl.style.background = 'rgba(255,255,255,0.06)';
    coverEl.style.display    = 'flex';
    // Insertar SVG dentro de un div contenedor
    const wrap = document.createElement('div');
    wrap.style.cssText = 'width:40px;height:40px;border-radius:8px;background:rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:center;flex-shrink:0;';
    wrap.innerHTML = `<svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)" width="20" height="20"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>`;
    coverEl.parentNode.replaceChild(wrap, coverEl);
  }

  // Controles
  document.getElementById('btn-play').addEventListener('click', togglePlay);
  document.getElementById('btn-prev').addEventListener('click', () => { audio.currentTime = 0; });
  document.getElementById('btn-next').addEventListener('click', () => { if (isFinite(audio.duration)) audio.currentTime = audio.duration - 0.1; });

  // Barra de progreso (click + drag, táctil también)
  const track = document.getElementById('music-bar-track');
  track.addEventListener('mousedown',  e => { isSeeking = true; applySeek(e); });
  track.addEventListener('touchstart', e => { isSeeking = true; applySeek(e); }, { passive: true });
  document.addEventListener('mousemove',  e => { if (isSeeking) applySeek(e); });
  document.addEventListener('touchmove',  e => { if (isSeeking) applySeek(e); }, { passive: true });
  document.addEventListener('mouseup',   e => { if (isSeeking) { commitSeek(e); isSeeking = false; } });
  document.addEventListener('touchend',  e => { if (isSeeking) { commitSeek(e); isSeeking = false; } });

  audio.addEventListener('timeupdate',    updateProgress);
  audio.addEventListener('loadedmetadata', updateProgress);
}

function fmt(s) {
  if (!isFinite(s) || s < 0) return '0:00';
  const m = Math.floor(s / 60), sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

function getRatio(e) {
  const track = document.getElementById('music-bar-track');
  const rect  = track.getBoundingClientRect();
  const cx    = e.touches ? e.touches[0].clientX : (e.changedTouches ? e.changedTouches[0].clientX : e.clientX);
  return Math.max(0, Math.min(1, (cx - rect.left) / rect.width));
}

function applySeek(e) {
  const r = getRatio(e);
  document.getElementById('music-bar-fill').style.width = (r * 100) + '%';
  document.getElementById('music-bar-thumb').style.left = (r * 100) + '%';
  document.getElementById('music-current').textContent  = fmt(r * (audio.duration || 0));
}

function commitSeek(e) {
  const r = getRatio(e);
  if (isFinite(audio.duration)) audio.currentTime = r * audio.duration;
}

function updateProgress() {
  if (isSeeking) return;
  const cur = audio.currentTime, dur = audio.duration || 0;
  const pct = dur ? (cur / dur) * 100 : 0;
  document.getElementById('music-bar-fill').style.width  = pct + '%';
  document.getElementById('music-bar-thumb').style.left  = pct + '%';
  document.getElementById('music-current').textContent   = fmt(cur);
  document.getElementById('music-duration').textContent  = fmt(dur);
}

function setPlaying(v) {
  isPlaying = v;
  document.getElementById('icon-play').classList.toggle('hidden', v);
  document.getElementById('icon-pause').classList.toggle('hidden', !v);
}

function playMusic()   { audio.play().catch(() => {}); setPlaying(true); }
function togglePlay()  {
  if (audio.paused) { audio.play().catch(() => {}); setPlaying(true); }
  else              { audio.pause(); setPlaying(false); }
}

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyMeta();
  applyBackground();
  applyStaticProfile();
  buildSocials();
  setupGate();
  setupMusic();
  fetchDiscord();
});
