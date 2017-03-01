import MediaEvents from './media.events.js';
import FullscreenAPI from './fullscreen.api';

export default class CustomFullscreen extends MediaEvents {
  onFullscreenListener(e) {
    ++this.fullscreenBind; //increase the number to identify the fullscreen state
    this.isFullscreen = (this.fullscreenBind % 2 !== 0);
    this.toggleFullscreenButton();
    //console.dir(e);
    //this.fullscreenCmpUpdate(e.target);
  }

  toggleFullscreenButton() {
    console.log(this.isFullscreen);
    const btn = document.getElementById(this.fullscreenButtonId);
    if (this.isFullscreen) {
      btn.firstChild.classList.remove('fa-expand');
      btn.firstChild.classList.add('fa-compress');
    } else {
      btn.firstChild.classList.add('fa-expand');
      btn.firstChild.classList.remove('fa-compress');
    }
  }
}
