import CONFIG from './config.js';
import { applyTheme } from './modules/theme.js';
import { createDom } from './modules/dom.js';
import { renderStaticProfile, buildSocials, renderBackground, renderActivity, renderMusicShell } from './modules/renderer.js';
import { setupGate } from './modules/gate.js';
import { createPlayer } from './modules/player.js';
import { createLanyardClient } from './modules/api/lanyard.js';

const dom = createDom();
const player = createPlayer(dom, CONFIG.music);
const lanyard = createLanyardClient(CONFIG.discord);

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(CONFIG);
  renderBackground(CONFIG.background, dom);
  renderStaticProfile(CONFIG.profile, dom);
  buildSocials(CONFIG.socials, dom);
  renderMusicShell(CONFIG.music, dom);
  player.mount();

  setupGate(CONFIG.clickToEnter, dom, () => player.play(), () => dom.showMain());

  lanyard.start(
    (activity) => renderActivity(activity, dom),
    (profile) => {
      if (profile.avatar) dom.avatarImg.src = profile.avatar;
      if (profile.name) dom.profileName.textContent = profile.name;
      if (profile.status) {
        dom.statusDot.className = `status-dot ${profile.status}`;
        dom.statusDot.title = profile.status;
      }
    },
    CONFIG.profile.name,
  );
});