import {ComponentEvents} from './component.events.js';
export default class MediaEvents extends ComponentEvents {
    constructor() {
        super();
    }

    ready() {
      const context = this.player;
      const classContext = this;
      return {
        metadata: () => {
          return new Promise((resolve, reject) => {
            let resolved = false;
            context.addEventListener('loadedmetadata', event => {
              if (!resolved) {
                resolved = true;
                resolve(event);
                classContext.bindMediaEvents();
              }
            });
            context.addEventListener('loadeddata', event => {
              if (!resolved) {
                resolved = true;
                resolve(event);
                classContext.bindMediaEvents();
              }
            });
              context.addEventListener('error', event => {
                reject(event);
              });
            });
          }
        }
    }

    bindMediaEvents() {
      this.player.addEventListener('timeupdate',
      this.onTimeUpdate.bind(this));
      this.player.addEventListener('play',
      this.onPlayListener.bind(this));
      this.player.addEventListener('playing',
      this.onAfterPlayListener.bind(this));
      this.player.addEventListener('pause',
      this.onPauseListener.bind(this));
    }

    onTimeUpdate() {
      this.elapsed = Math.floor(this.player.currentTime);
      this.duration = Math.floor(this.player.duration - this.player.currentTime);
      this.slider.setValue(this.player.currentTime);
    }
    onPlayListener() {
      this.hideComponent(document.getElementById(this.playButtonId));
      this.showComponent(document.getElementById(this.pauseButtonId));
    }
    onAfterPlayListener() {
      this.hideComponent(document.getElementById(this.playButtonId));
      this.showComponent(document.getElementById(this.pauseButtonId));
      this.clTimeout = setTimeout(this.hideControlLayer.bind(this), 3000);
    }
    onPauseListener() {
      this.showComponent(document.getElementById(this.playButtonId));
      this.hideComponent(document.getElementById(this.pauseButtonId));
    }
}
