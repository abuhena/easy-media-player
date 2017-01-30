export default class MediaEvents {
    constructor() {}

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