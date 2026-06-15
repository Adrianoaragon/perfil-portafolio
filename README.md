# 🌐 Mi Perfil — Guía de configuración

## Estructura
```
mi-perfil/
├── index.html       ← no tocar salvo que quieras agregar secciones
├── config.js        ← TODA la personalización está aquí
├── style.css        ← estilos (puedes editar colores finos aquí)
├── app.js           ← lógica (no tocar salvo que sepas JS)
├── README.md
└── assets/
    ├── avatar.png   ← pon tu foto aquí
    ├── music.mp3    ← pon tu canción aquí
    └── bg.jpg       ← (opcional) fondo personalizado
```

---

## 1. Personalizar (config.js)

Abre `config.js` y edita cada sección:

### Perfil
```js
profile: {
  name: "Tu Nombre",
  username: "@tuusuario",
  avatar: "assets/avatar.png",   // o URL externa: "https://..."
  bio: "Una línea sobre ti.",
  location: "Colombia 🇨🇴",
},
```

### Discord Status (Lanyard)
1. Únete al servidor: **discord.gg/lanyard** (necesario para que funcione)
2. Copia tu Discord User ID:
   - Discord → Configuración → Avanzado → Activa "Modo desarrollador"
   - Click derecho en tu nombre → "Copiar ID de usuario"
3. Pégalo en config:
```js
discord: {
  enabled: true,
  userId: "123456789012345678",
},
```

### Redes sociales
```js
socials: [
  { label: "Twitter / X",  icon: "twitter",   url: "https://x.com/tuusuario" },
  { label: "Instagram",    icon: "instagram", url: "https://instagram.com/tuusuario" },
  // agrega o elimina los que quieras
],
```
**Iconos disponibles:** `twitter`, `instagram`, `github`, `youtube`, `tiktok`, `twitch`, `spotify`, `steam`, `discord`, `link`

### Música
Pon tu archivo `.mp3` en `assets/music.mp3` y luego:
```js
music: {
  enabled: true,
  file: "assets/music.mp3",
  title: "Nombre de la canción",
  artist: "Artista",
  defaultVolume: 0.4,   // 0.0 a 1.0
},
```

### Fondo
```js
background: {
  type: "gradient",   // "color" | "gradient" | "image" | "video"
  value: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 100%)",
  // para imagen: value: "assets/bg.jpg"
  // para video:  value: "assets/bg.mp4"
},
```

### Colores
```js
theme: {
  accent: "#a78bfa",       // color principal
  accentGlow: "#7c3aed",
  text: "#e2e8f0",
  textMuted: "#94a3b8",
  cardBg: "rgba(255,255,255,0.04)",
  cardBorder: "rgba(167,139,250,0.15)",
  cardBorderHover: "rgba(167,139,250,0.4)",
},
```

---

## 2. Desplegar en Vercel

### Opción A — Desde GitHub (recomendada)
1. Crea un repositorio en GitHub y sube todos los archivos
2. Ve a [vercel.com](https://vercel.com) → New Project
3. Importa tu repositorio
4. Vercel detecta que es un sitio estático → Next a todo
5. Deploy ✅

### Opción B — Vercel CLI
```bash
npm i -g vercel
cd mi-perfil
vercel
```

### Opción C — Drag & Drop
1. Ve a [vercel.com/new](https://vercel.com/new)
2. Arrastra la carpeta `mi-perfil` completa
3. Deploy ✅

> **Nota sobre archivos de audio:** Vercel tiene límite de 100MB por archivo.
> Si tu música supera eso, alójala en algún CDN externo y cambia `music.file` a la URL directa.

---

## 3. Dominio personalizado (opcional)
En Vercel: Settings → Domains → agrega tu dominio.

---

## Soporte de iconos adicionales
Si quieres agregar una red que no esté en la lista, en `app.js` busca el objeto `ICONS` y agrega:
```js
mirednueva: `<svg viewBox="0 0 24 24" fill="currentColor">...SVG aquí...</svg>`,
```
Puedes obtener SVGs gratuitos en [simpleicons.org](https://simpleicons.org).
