/**
 * musicmeta.js
 * Resuelve portada y metadata usando la API de iTunes (Apple).
 * 100% gratuita, sin API key, sin registro.
 */

const ITUNES_BASE = 'https://itunes.apple.com';

function normalize(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quita acentos
    .replace(/[^a-z0-9\s]/g, '')                       // quita símbolos
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Busca metadata de una canción.
 * @param {string} title  - Título de la canción
 * @param {string} artist - Nombre del artista
 * @returns {Promise<{title, artist, album, year, coverUrl}|null>}
 */
export async function fetchMusicMeta(title, artist) {
  if (!title) return null;

  try {
    const query = encodeURIComponent(`${artist || ''} ${title}`.trim());
    const url   = `${ITUNES_BASE}/search?term=${query}&media=music&entity=song&limit=25`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`iTunes ${res.status}`);

    const json    = await res.json();
    const results = json?.results;
    if (!results?.length) return null;

    const tNorm = normalize(title);
    const aNorm = normalize(artist);

    // El artista del resultado debe contener nuestro artista como
    // PALABRA COMPLETA (separado por espacios o coma), no como substring.
    // Esto evita falsos positivos de includes() en nombres compuestos.
    const artistMatches = (resultArtist) => {
      const rNorm = normalize(resultArtist);
      const words = rNorm.split(/[\s,]+/);
      const targetWords = aNorm.split(/\s+/);
      // Todas las palabras del artista buscado deben aparecer como palabras
      // completas en el artista del resultado
      return targetWords.every(w => words.includes(w));
    };

    const titleMatches = (resultTitle) => {
      const rNorm = normalize(resultTitle);
      // título exacto, o el resultado es el título + texto extra entre paréntesis
      // (remix, live, feat, etc.) pero el núcleo coincide
      return rNorm === tNorm || rNorm.startsWith(tNorm + ' ') || rNorm.startsWith(tNorm + '(');
    };

    const match = results.find(r =>
      artistMatches(r.artistName) && titleMatches(r.trackName)
    );

    // Si no hay coincidencia estricta de título+artista, no inventamos nada
    if (!match) return null;

    return {
      title:    match.trackName      || title,
      artist:   match.artistName     || artist,
      album:    match.collectionName || null,
      year:     match.releaseDate?.slice(0, 4) || null,
      coverUrl: match.artworkUrl100
        ? match.artworkUrl100.replace('100x100', '600x600')
        : null,
    };
  } catch (err) {
    console.warn('[musicmeta] iTunes error:', err);
    return null;
  }
}