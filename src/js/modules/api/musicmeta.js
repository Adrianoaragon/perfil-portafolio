/**
 * musicmeta.js
 * Resuelve metadata de canciones usando MusicBrainz + Cover Art Archive.
 * Ambas APIs son 100% gratuitas y no requieren API key.
 *
 * Flujo:
 *   1. MusicBrainz /recording?query= → encuentra el recording + release MBID
 *   2. Cover Art Archive /release/{mbid} → devuelve URL de portada
 *
 * Rate limit MusicBrainz: 1 req/s sin User-Agent, ~10/s con User-Agent.
 * Lo cumplimos fácil porque solo hacemos 1-2 llamadas al cargar la página.
 */

const MB_BASE  = 'https://musicbrainz.org/ws/2';
const CAA_BASE = 'https://coverartarchive.org';

// User-Agent requerido por MusicBrainz (formato: app/version contact)
const UA = 'perfil-portafolio/1.0 (github.com/Adrianoaragon)';

/**
 * Busca metadata de una canción.
 * @param {string} title  - Título exacto o aproximado
 * @param {string} artist - Nombre del artista
 * @returns {Promise<{title, artist, album, year, coverUrl, mbid}|null>}
 */
export async function fetchMusicMeta(title, artist) {
  if (!title) return null;

  try {
    // ── Paso 1: buscar el recording en MusicBrainz ──────────────────────
    const query   = encodeURIComponent(`recording:"${title}" AND artist:"${artist}"`);
    const mbUrl   = `${MB_BASE}/recording?query=${query}&limit=5&fmt=json`;

    const mbRes   = await fetch(mbUrl, { headers: { 'User-Agent': UA } });
    if (!mbRes.ok) throw new Error(`MusicBrainz ${mbRes.status}`);

    const mbJson  = await mbRes.json();
    const recs    = mbJson?.recordings;
    if (!recs?.length) return null;

    // Elegir el primer resultado oficial con releases
    const rec = recs.find(r => r.releases?.length) || recs[0];
    const release = rec?.releases?.find(r => r.status === 'Official') || rec?.releases?.[0];
    const mbid  = release?.id;

    const meta = {
      title:    rec?.title    || title,
      artist:   rec?.['artist-credit']?.[0]?.artist?.name || artist,
      album:    release?.title || null,
      year:     release?.date?.slice(0, 4) || null,
      coverUrl: null,
      mbid,
    };

    // ── Paso 2: portada desde Cover Art Archive ─────────────────────────
    if (mbid) {
      meta.coverUrl = await fetchCoverArt(mbid);
    }

    return meta;
  } catch (err) {
    console.warn('[musicmeta] Error fetching metadata:', err);
    return null;
  }
}

/**
 * Obtiene la URL de la portada de un release.
 * CAA devuelve un JSON con thumbnails de 250 / 500 / 1200px.
 * @param {string} mbid - MusicBrainz release ID
 * @returns {Promise<string|null>}
 */
async function fetchCoverArt(mbid) {
  try {
    const res  = await fetch(`${CAA_BASE}/release/${mbid}`, {
      headers: { 'User-Agent': UA },
    });
    if (!res.ok) return null;

    const json   = await res.json();
    const front  = json?.images?.find(img => img.front) || json?.images?.[0];
    // Preferimos 500px (buena calidad, sin ser enorme)
    return front?.thumbnails?.['500'] || front?.thumbnails?.['250'] || front?.image || null;
  } catch {
    return null;
  }
}
