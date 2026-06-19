/**
 * app.js — Bootstrap / Orquestador
 *
 * Orden de arranque:
 * 1. Aplica tema y fondo
 * 2. Renderiza perfil estático (config.js) como fallback inmediato
 * 3. Construye socials y monta el reproductor (con fallback de metadata del config)
 * 4. Arranca la gate (click to enter)
 * 5. En paralelo:
 *    a) Lanyard → actualiza avatar, nombre, status, actividad
 *    b) MusicBrainz/CAA → resuelve portada y metadata real de la canción
 */

/**
 * app.js — Bootstrap / Orquestador
 */

import CONFIG from './config.js';
import { applyTheme }                               from './modules/theme.js';
import { createDom }                                from './modules/dom.js';
import {
  renderBackground,
  renderStaticProfile,
  renderDiscordProfile,
  buildSocials,
  renderActivity,
} from './modules/renderer.js';
import { setupGate }                                from './modules/gate.js';
import { createPlayer }                             from './modules/player.js';
import { createLanyardClient }                      from './modules/api/lanyard.js';
import { fetchMusicMeta }                           from './modules/api/musicmeta.js';
import { setupCursor }                              from './modules/cursor.js';
import { applyTilt }                                from './modules/tilt.js';
import { typewrite, triggerGlitch }                 from './modules/typewriter.js';

const dom     = createDom();
const player  = createPlayer(dom, CONFIG.music);
const lanyard = createLanyardClient(CONFIG.discord);

document.addEventListener('DOMContentLoaded', async () => {
  // ── Núcleo ──────────────────────────────────────────────────────────
  applyTheme(CONFIG);
  renderBackground(CONFIG.background, dom);
  renderStaticProfile(CONFIG.profile, dom);
  buildSocials(CONFIG.socials, dom);
  player.mount();
  setupCursor(CONFIG.cursor);

  if (CONFIG.music?.enabled) {
    const meta = await fetchMusicMeta(CONFIG.music.title, CONFIG.music.artist);
    if (meta?.coverUrl) {
      player.setCover(meta.coverUrl);
    }
    if (meta?.title || meta?.artist || meta?.album) {
      player.setMeta({
        title:  meta?.title  || CONFIG.music.title,
        artist: meta?.artist || CONFIG.music.artist,
        album:  meta?.album || null,
      });
    }
  }

  setupGate(
    CONFIG.clickToEnter,
    dom,
    () => player.play(),
    () => {
      dom.showMain();
      runEntranceEffects();
    },
  );

  // ── Discord / Lanyard ──────────────────────────────────────────────
  lanyard.start(
    (activity) => renderActivity(activity, dom),
    (profile)  => renderDiscordProfile(profile, dom),
    CONFIG.profile.name,
  );
});

/* ── Efectos visuales tras entrar (gate) ─────────────────────────────── */
function runEntranceEffects() {
  const fx = CONFIG.effects || {};

  // Typewriter en el nombre
  if (fx.typewriter && dom.profileName) {
    const finalName = dom.profileName.textContent.trim();
    typewrite(dom.profileName, finalName, { speed: 85 });
  }

  // Tilt 3D en tarjetas
  if (fx.tilt && typeof window.gsap !== 'undefined') {
    applyTilt(document.querySelector('.profile-float'));
    applyTilt(dom.activityCard);
  }

  // Glitch al hover del avatar
  if (fx.glitch) {
    dom.avatarImg?.addEventListener('mouseenter', () => triggerGlitch(dom.avatarImg));
    dom.avatarImg?.addEventListener('click',      () => triggerGlitch(dom.avatarImg));
  }
}
