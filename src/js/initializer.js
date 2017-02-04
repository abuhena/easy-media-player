import CreatePlayer from './create.player';
export default class Initializer extends CreatePlayer {
    constructor(player, index) {
        super(index);
        this.player = player;
        this.customize();
    }

    customize() {
      super.customize();
        this.layer = this.createLayer();
        this.controlLayer = this.createControlLayer(this.player, this.layer);
        this.maskLayer = this.createMaskLayer();
        this.timeLayer;
        this.ready().metadata().then(this.videoReady.bind(this)).catch(this.videoError);
    }

    set controlLayer(dom) {
        const sliderParentEl = document.createElement('div');
        const titleEl = this.addTitle();
        dom.appendChild(titleEl);
        dom.appendChild(sliderParentEl);
        this.attachSlider(sliderParentEl);
        this.timeLayer = this.createTimeLayer(dom);
        this.buttonArea = this.createButtonArea(dom);
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

    videoReady() {
        this.slider.setRange(this.player.duration);
        this.duration = this.player.duration;
        this.elapsed = this.player.currentTime;
    }

    videoError() {

    }
}
