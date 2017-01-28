import CustomControls from './custom.controls.js';
export default class Initializer extends CustomControls {
    constructor(player, index) {
        super(index);
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
        console.dir(this.player);
        this.controlLayer = this.createControlLayer(this.player, this.layer);
    }

    set controlLayer(dom) {
        this.slider = new MrSlider('em-slider-layer');
        this.slider.appendSlider(dom);
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