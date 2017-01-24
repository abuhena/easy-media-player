export default class Initializer {
    constructor(player) {
        this.slider;
        this.player = player;
        this.customize();
    }

    customize() {
        this.videoURL = this.player.getAttribute('src');
        const controls = this.player.getAttribute('controls');
        const style = this.player.getAttribute('style');
        if (controls !== null) this.player.removeAttribute('controls');
        if (style !== null) this.player.removeAttribute('style');
        const dimen = Initializer.screen(this.player.getAttribute('data-width'));
    }

    static screen(w = 640) {
        [width, height] = [640, 360];
        const ratio = 56.25;
        w = w === null ? 640 : w;
        return [w, ((w * ratio)/100)];
    }
}