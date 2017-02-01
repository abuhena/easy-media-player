import {ComponentEvents} from './component.events.js';
export default class MediaEvents extends ComponentEvents {
    constructor() {
        super();
    }

    ready() {
        const context = this.player;
        return {
            metadata: () => {
                return new Promise((resolve, reject) => {
                    context.addEventListener('loadedmetadata', event => {
                        resolve(event);
                    });
                    context.addEventListener('error', event => {
                        reject(event);
                    });
                });
            }
        }
    }
}
