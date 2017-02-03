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
                    context.addEventListener('loadedmetadata', event => {
                        resolve(event);
                        context.addEventListener('timeupdate',
                        classContext.onTimeUpdate.bind(classContext));
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
}
