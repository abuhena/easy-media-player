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
                resolve(event);
                classContext.bindMediaEvents();
                resolved = true;
              }
            });
            context.addEventListener('loadeddata', event => {
              if (!resolved) {
                resolve(event);
                classContext.bindMediaEvents();
                resolved = true;
              }
            });

            context.addEventListener('load', event => {
              alert('what an event');
              if (!resolved) {
                resolve(event);
                classContext.bindMediaEvents();
                resolved = true;
              }
            });
            context.addEventListener('canplay', event => {
              if (!resolved) {
                resolve(event);
                classContext.bindMediaEvents();
                resolved = true;
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
              alert('hola');
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
      this.elapsed = this.player.currentTime;
      this.duration = this.player.duration - this.player.currentTime;
      this.slider.setValue(this.player.currentTime);
    }
    onPlayListener() {
      this.hideComponent(document.getElementById(this.playButtonId));
      this.showComponent(document.getElementById(this.pauseButtonId));
    }
    onAfterPlayListener() {
      this.hideComponent(document.getElementById(this.playButtonId));
      this.showComponent(document.getElementById(this.pauseButtonId));
    }
    onPauseListener() {
      this.showComponent(document.getElementById(this.playButtonId));
      this.hideComponent(document.getElementById(this.pauseButtonId));
    }
}
