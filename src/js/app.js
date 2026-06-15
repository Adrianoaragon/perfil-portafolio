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

const dom     = createDom();
const player  = createPlayer(dom, CONFIG.music);
const lanyard = createLanyardClient(CONFIG.discord);

document.addEventListener('DOMContentLoaded', () => {
  // ── Síncronos ─────────────────────────────────────────────────────────
  applyTheme(CONFIG);
  renderBackground(CONFIG.background, dom);
  renderStaticProfile(CONFIG.profile, dom);
  buildSocials(CONFIG.socials, dom);
  player.mount();

  setupGate(
    CONFIG.clickToEnter,
    dom,
    () => player.play(),
    () => dom.showMain(),
  );

  // ── Asíncronos (en paralelo) ───────────────────────────────────────────

  // a) Discord / Lanyard
  lanyard.start(
    (activity) => renderActivity(activity, dom),
    (profile)  => renderDiscordProfile(profile, dom),
    CONFIG.profile.name,
  );

  // b) Metadata de música via MusicBrainz + Cover Art Archive
  if (CONFIG.music?.enabled && CONFIG.music?.title) {
    fetchMusicMeta(CONFIG.music.title, CONFIG.music.artist)
      .then((meta) => {
        if (!meta) return;   // fallback del config ya está puesto

        // Actualizar portada con la imagen real del álbum
        if (meta.coverUrl) player.setCover(meta.coverUrl);

        // Actualizar texto si la API devolvió algo más preciso
        player.setMeta({
          title:  meta.title  || CONFIG.music.title,
          artist: meta.artist || CONFIG.music.artist,
          album:  meta.album  || null,
        });
      })
      .catch(() => {
        // silencioso — el fallback del config ya está visible
      });
  }
});
