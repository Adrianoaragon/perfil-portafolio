# 🌐 Mi Perfil — Guía de configuración

## Estructura actual
```
perfil-portafolio/
├── index.html
├── README.md
├── src/
│   ├── js/
│   │   ├── app.js
│   │   ├── config.js
│   │   └── modules/
│   │       ├── api/
│   │       │   └── lanyard.js
│   │       ├── dom.js
│   │       ├── gate.js
│   │       ├── player.js
│   │       ├── renderer.js
│   │       └── theme.js
│   └── css/
│       └── style.css
└── assets/
    ├── avatar.jpg
    ├── cover.png
    ├── horacero.mp3
    └── bg.jpg
```

## Qué cambió
El proyecto ya no depende de un solo `app.js` monolítico. `index.html` carga un bootstrap modular, `config.js` exporta la configuración, y el resto de la lógica vive en módulos pequeños por responsabilidad: DOM, tema, renderizado, reproductor, gate y Lanyard.

## Flujo de arranque
1. `index.html` carga `src/js/app.js` como módulo.
2. `src/js/app.js` importa `config.js` y orquesta el resto.
3. `theme.js`, `renderer.js`, `gate.js`, `player.js` y `api/lanyard.js` hacen el trabajo especializado.
4. `dom.js` centraliza accesos al DOM para evitar repetir queries y facilitar futuros cambios.

## Por qué esta estructura
La idea es que `index.html` quede solo como entrada, `src/js/` concentre la lógica y los datos, y `src/css/` concentre los estilos. Así puedes sumar secciones nuevas, componentes visuales o utilidades sin volver a mezclar todo en un solo archivo grande.

---

## 1. Personalizar (`src/js/config.js`)

Abre [src/js/config.js](src/js/config.js) y edita cada sección:

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
**Iconos disponibles:** `twitter`, `instagram`, `github`, `youtube`, `tiktok`, `spotify`, `steam`, `discord`, `kick`, `link`

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

## 2. Escalar el proyecto

Cuando quieras añadir nuevas secciones, sigue esta convención:
```text
src/
├── js/
│   ├── app.js        ← bootstrap / orquestación
│   ├── config.js     ← datos y ajustes
│   ├── modules/      ← piezas reutilizables por responsabilidad
│   │   ├── api/
│   │   ├── dom.js
│   │   ├── gate.js
│   │   ├── player.js
│   │   ├── renderer.js
│   │   └── theme.js
│   └── components/   ← opcional si luego separas UI más granular
└── css/
    ├── style.css     ← estilos base
    └── sections/     ← opcional si luego divides por bloque o sección
```

Si el proyecto sigue creciendo, ahí ya tiene sentido separar por features o incluso migrar a un framework. Mientras tanto, esta organización es suficiente para mantener el sitio liviano, fácil de editar y simple de desplegar.

### Orden recomendado para nuevos módulos
1. Extrae primero la lógica que no toca el DOM.
2. Después mueve el renderizado repetido a un módulo propio.
3. Encapsula listeners y estado local en módulos como `player.js`.
4. Mantén `app.js` como coordinador, no como lugar de lógica pesada.

---

## 3. Desplegar en Vercel

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

### Desarrollo local
Si quieres abrir el proyecto en local, usa un servidor estático. Por ejemplo:
```bash
npx serve .
```
o cualquier extensión/servidor que soporte ES modules y rutas relativas.

---

## 4. Dominio personalizado (opcional)
En Vercel: Settings → Domains → agrega tu dominio.

---

## Soporte de iconos adicionales
Si quieres agregar una red que no esté en la lista, en [src/js/modules/renderer.js](src/js/modules/renderer.js) busca el objeto `ICONS` y agrega:
```js
mirednueva: `<svg viewBox="0 0 24 24" fill="currentColor">...SVG aquí...</svg>`,
```
Puedes obtener SVGs gratuitos en [simpleicons.org](https://simpleicons.org).

## Notas de implementación
- `src/js/config.js` exporta `CONFIG` como módulo ES.
- `src/js/modules/api/lanyard.js` maneja el polling de Discord con un intervalo de 25 segundos.
- `src/js/modules/player.js` encapsula estado de audio, play/pause y seekbar.
- `src/js/modules/renderer.js` concentra el render de perfil, socials, actividad y música.
- `src/js/modules/theme.js` aplica título, favicon y variables de tema.
- `src/js/modules/gate.js` controla el click-to-enter.
