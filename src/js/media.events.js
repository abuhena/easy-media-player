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
            context.addEventListener('loadeddata', event => {
              console.log('resolved');
              resolve(event);
              context.addEventListener('timeupdate',
                classContext.onTimeUpdate.bind(classContext));
                context.addEventListener('play',
                classContext.onPlayListener.bind(classContext));
                context.addEventListener('playing',
                classContext.onAfterPlayListener.bind(classContext));
              });
              context.addEventListener('error', event => {
                reject(event);
              });
            });
          }
        }
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
}
