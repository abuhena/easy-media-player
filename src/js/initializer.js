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
        this.controlLayer = this.createControlLayer(this.player, this.layer);
        this.timeLayer;
        this.ready().metadata().then(() => {
            this.slider.setRange(this.player.duration);
            this.duration = this.player.duration;
            this.elapsed = this.player.currentTime;
        }).catch(this.videoError);
    }

    set controlLayer(dom) {
        const sliderParentEl = document.createElement('div');
        const titleEl = this.addTitle();
        dom.appendChild(titleEl);
        dom.appendChild(sliderParentEl);
        this.attachSlider(sliderParentEl);
        this.timeLayer = this.createTimeLayer(dom);
    }


    static screen(w = 640) {
        const ratio = 56.25;
        w = w === null ? 640 : w;
        return [w, ((w * ratio)/100)];
    }

    addTitle() {
        let title;
        title = this.videoURL.substr(this.videoURL.lastIndexOf('/') + 1);
        if (this.player.getAttribute('data-title')) title = this.player.getAttribute('data-title');
        const el = document.createElement('div');
        el.classList.add('title');
        el.setAttribute('id', `title-${this.idPrefix}`);
        el.innerText = title;
        return el;
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

    createTimeLayer(controlLayer) {
        const parentEl = document.createElement('div');
        parentEl.classList.add('timer-cmp');
        const elTE = document.createElement('p');
        elTE.classList.add('timer');
        elTE.style.left = '0px';
        elTE.innerText = '00:00';
        const elTS = document.createElement('p');
        elTS.classList.add('timer');
        elTS.style.right = '0px';
        elTS.innerText = '00:00';
        parentEl.appendChild(elTE);
        parentEl.appendChild(elTS);
        controlLayer.appendChild(parentEl);
        return [elTE, elTS];
    }

    videoError() {

    }
}
