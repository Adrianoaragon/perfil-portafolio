export function applyTheme(config) {
  document.title = config.meta?.title || 'Perfil';

  if (config.meta?.favicon) {
    let fav = document.querySelector('link[rel="icon"]');
    if (!fav) {
      fav = document.createElement('link');
      fav.rel = 'icon';
      document.head.appendChild(fav);
    }
    fav.href = config.meta.favicon;
  }

  const theme = config.theme || {};
  const root  = document.documentElement;
  if (theme.accent)          root.style.setProperty('--accent',            theme.accent);
  if (theme.text)            root.style.setProperty('--text',              theme.text);
  if (theme.textMuted)       root.style.setProperty('--text-muted',        theme.textMuted);
  if (theme.cardBg)          root.style.setProperty('--card-bg',           theme.cardBg);
  if (theme.cardBorder)      root.style.setProperty('--card-border',       theme.cardBorder);
  if (theme.cardBorderHover) root.style.setProperty('--card-border-hover', theme.cardBorderHover);
}
