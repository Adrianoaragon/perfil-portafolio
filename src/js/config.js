/**
 * config.js — Configuración central del perfil.
 * Edita este archivo para personalizar todo.
 */
const CONFIG = {

  /* ── PERFIL ─────────────────────────────────────────────────────────── */
  profile: {
    name:     "Adriano",
    username: "@xadrianoo_",
    avatar:   "assets/avatar.jpg",
    bio:      "Streamer & System Engineer.",
    location: "Colombia 🇨🇴",
  },

  /* ── DISCORD (Lanyard) ───────────────────────────────────────────────
   * 1. Únete a discord.gg/lanyard
   * 2. Pon tu User ID aquí (Discord → Ajustes → Avanzado → Modo desarrollador
   *    → click derecho en tu nombre → Copiar ID)
   */
  discord: {
    enabled: true,
    userId:  "599464864687063060",
  },

  /* ── REDES SOCIALES ──────────────────────────────────────────────────
   * Iconos disponibles: instagram, github, youtube, tiktok, kick,
   *                     spotify, steam, discord, twitter, link
   */
  socials: [
    { icon: "instagram", label: "Instagram", url: "https://instagram.com/tuusuario" },
    { icon: "github",    label: "GitHub",    url: "https://github.com/Adrianoaragon" },
    { icon: "youtube",   label: "YouTube",   url: "https://www.youtube.com/@adrianitoo3129" },
    { icon: "tiktok",    label: "TikTok",    url: "https://www.tiktok.com/@xadrianooo_" },
    { icon: "kick",      label: "Kick",      url: "https://kick.com/xadrianooo" },
    { icon: "spotify",   label: "Spotify",   url: "https://open.spotify.com/user/31ptii5uewbv7dyyqzbjspxr3xmy" },
    { icon: "steam",     label: "Steam",     url: "https://steamcommunity.com/profiles/76561199358919154/" },
  ],

  /* ── MÚSICA ──────────────────────────────────────────────────────────
   * La portada y metadata se resuelven automáticamente via MusicBrainz.
   * Solo necesitas el archivo .mp3 en assets/ y el título + artista aquí.
   * "cover" solo es necesario si quieres forzar una portada local;
   * de lo contrario déjalo en null.
   */
  music: {
    enabled:            true,
    file:               "assets/horacero.mp3",
    title:              "Hora Cero",
    artist:             "Myke Towers",
    cover:              null,    // null = resolver via MusicBrainz automáticamente
    autoplayAfterClick: true,
    loop:               true,
    defaultVolume:      0.4,     // 0.0 – 1.0
  },

  /* ── CLICK TO ENTER ─────────────────────────────────────────────────── */
  clickToEnter: {
    enabled: true,
    text:    "click to enter",
    subtext: null,
  },

  /* ── CURSOR PERSONALIZADO ──────────────────────────────────────────── */
  cursor: {
    enabled: false,   // true para activar el cursor circular custom
  },

  /* ── EFECTOS (tilt 3D, typewriter, glitch) ───────────────────────── */
  effects: {
    tilt:       true,   // inclinación 3D en tarjetas al mover el mouse
    typewriter: true,   // efecto de escritura en el nombre al entrar
    glitch:     true,   // glitch al hacer hover sobre el avatar
  },

  /* ── FONDO ───────────────────────────────────────────────────────────
   * type: "color" | "gradient" | "image" | "video"
   *
   * Para usar una imagen propia:
   *   1. Pon tu foto en assets/bg.jpg
   *   2. Cambia type → "image" y value → "assets/bg.jpg"
   */
  background: {
    type:           "gradient",
    value:          "linear-gradient(160deg, #0d0d0d 0%, #111 50%, #0a0a0a 100%)",
    overlay:        true,
    overlayOpacity: 0.62,
  },

  /* ── TEMA ────────────────────────────────────────────────────────────── */
  theme: {
    accent:          "#ffffff",
    accentGlow:      "#ffffff",
    text:            "#ffffff",
    textMuted:       "rgba(255,255,255,0.6)",
    cardBg:          "rgba(0,0,0,0.45)",
    cardBorder:      "rgba(255,255,255,0.06)",
    cardBorderHover: "rgba(255,255,255,0.12)",
  },

  /* ── META (SEO / pestaña) ─────────────────────────────────────────── */
  meta: {
    title:       "adriano",
    description: "Streamer & System Engineer",
    favicon:     "assets/avatar.jpg",
  },
};

export default CONFIG;
