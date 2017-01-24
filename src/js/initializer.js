export default class Initializer {
    constructor(player) {
        this.slider;
        this.player = player;
        this.customize();
    }

    customize() {
        this.videoURL = this.player.getAttribute('src');
        const controls = this.player.getAttribute('controls');
        if (controls !== null) this.player.removeAttribute('controls');
        const dimen = Initializer.screen(this.player.getAttribute('data-width'));
        this.player.style.width = `${dimen[0]}px`;
        this.player.style.height = `${dimen[1]}px`;
        this.layer = this.createLayer();
    }

    static screen(w = 640) {
        const ratio = 56.25;
        w = w === null ? 640 : w;
        return [w, ((w * ratio)/100)];
    }

    createLayer() {
        const el = document.createElement('div');
        el.classList.add('em-player');
        el.style.width = this.player.style.width;
        el.style.height = this.player.style.height;
        el.style.left = `${this.player.offsetLeft}px`;
        el.style.top = `${this.player.offsetTop}px`;
        this.player.parentNode.insertBefore(el, this.player.nextSibling);
        return el;
    }
}