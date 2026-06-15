export function createDom() {
  const elements = {
    gate: document.getElementById('gate'),
    main: document.getElementById('main'),
    bgLayer: document.getElementById('bg-layer'),
    bgOverlay: document.getElementById('bg-overlay'),
    avatarImg: document.getElementById('avatar-img'),
    avatarDeco: document.getElementById('avatar-deco'),
    statusDot: document.getElementById('status-dot'),
    profileName: document.getElementById('profile-name'),
    profileBio: document.getElementById('profile-bio'),
    profileLoc: document.getElementById('profile-loc'),
    activityCard: document.getElementById('activity-card'),
    actType: document.getElementById('act-type'),
    actName: document.getElementById('act-name'),
    actDetail: document.getElementById('act-detail'),
    actState: document.getElementById('act-state'),
    actLarge: document.getElementById('act-large'),
    actSmall: document.getElementById('act-small'),
    socialsRow: document.getElementById('socials-row'),
    musicPlayer: document.getElementById('music-player'),
    musicCover: document.getElementById('music-cover'),
    musicTitle: document.getElementById('music-title'),
    musicArtist: document.getElementById('music-artist'),
    musicCurrent: document.getElementById('music-current'),
    musicDuration: document.getElementById('music-duration'),
    musicTrack: document.getElementById('music-bar-track'),
    musicFill: document.getElementById('music-bar-fill'),
    musicThumb: document.getElementById('music-bar-thumb'),
    btnPlay: document.getElementById('btn-play'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    iconPlay: document.getElementById('icon-play'),
    iconPause: document.getElementById('icon-pause'),
    audio: document.getElementById('audio'),
  };

  return {
    ...elements,
    showMain() {
      elements.main.classList.remove('hidden');
      requestAnimationFrame(() => elements.main.classList.add('visible'));
    },
    removeGate() {
      elements.gate?.remove();
    },
  };
}