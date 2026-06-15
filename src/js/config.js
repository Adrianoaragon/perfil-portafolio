const CONFIG = {
  profile: {
    name: "Adriano",
    username: "@xadrianoo_",
    avatar: "assets/avatar.jpg",
    bio: "Streamer & System Engineer.",
    location: "Colombia 🇨🇴",
  },

  discord: {
    enabled: true,
    userId: "599464864687063060",
  },

  socials: [
    { icon: "instagram", url: "https://instagram.com/tuusuario",                            label: "Instagram" },
    { icon: "github",    url: "https://github.com/Adrianoaragon",                            label: "GitHub" },
    { icon: "youtube",   url: "https://www.youtube.com/@adrianitoo3129",                     label: "YouTube" },
    { icon: "tiktok",    url: "https://www.tiktok.com/@xadrianooo_",                         label: "TikTok" },
    { icon: "kick",      url: "https://kick.com/xadrianooo",                                 label: "Kick" },
    { icon: "spotify",   url: "https://open.spotify.com/user/31ptii5uewbv7dyyqzbjspxr3xmy", label: "Spotify" },
    { icon: "steam",     url: "https://steamcommunity.com/profiles/76561199358919154/",      label: "Steam" },
  ],

  music: {
    enabled: true,
    file: "assets/horacero.mp3",
    title: "Hora Cero",
    artist: "Myke Towers",
    cover: "assets/cover.png",                  // pon "assets/cover.jpg" si tienes portada
    autoplayAfterClick: true,
    loop: true,
    defaultVolume: 0.4,
  },

  clickToEnter: {
    enabled: true,
    text: "click to enter",
    subtext: null,
  },

  // ─── FONDO ───────────────────────────────────────────────────────────────
  // OPCIÓN A — imagen propia (recomendada para el estilo de la referencia):
  //   1. Pon tu foto en assets/bg.jpg  (blanco y negro, siluetas, concierto, humo…)
  //   2. Cambia type a "image" y value a "assets/bg.jpg"
  //
  // OPCIÓN B — gradiente oscuro (default mientras no tengas la foto):
  background: {
    type: "gradient",
    value: "linear-gradient(160deg, #0d0d0d 0%, #111 50%, #0a0a0a 100%)",
    // type: "image",
    // value: "assets/bg.jpg",
    overlay: true,
    overlayOpacity: 0.62,
  },

  effects: {
    particles: false,   // desactivado para el nuevo estilo limpio
  },

  theme: {
    accent:          "#ffffff",
    accentGlow:      "#ffffff",
    text:            "#ffffff",
    textMuted:       "rgba(255,255,255,0.6)",
    cardBg:          "rgba(0,0,0,0.45)",
    cardBorder:      "rgba(255,255,255,0.06)",
    cardBorderHover: "rgba(255,255,255,0.12)",
  },

  meta: {
    title: "Adriano",
    description: "Streamer & System Engineer",
    favicon: "assets/avatar.jpg",
  },
};

export default CONFIG;