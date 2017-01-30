import MediaEvents from './media.events.js';
export default class CustomControls extends MediaEvents {
    constructor(index) {
        super();
        this.index = index;
        this.progressBarId = 'em-player-progress-bar';
        const now = new Date();
        this.idPrefix = `fx-${now.getTime()}`;
        this.slider;
    }

    createControlLayer(player, layer, done) {
        this.player = player;
        this.layer = layer;
        const elem = document.createElement('div');
        elem.classList.add('control-layer');
        const padding = 30;
        elem.style.width = `${this.player.offsetWidth - padding}px`;
        elem.style.left = `${padding/2}px`;
        this.layer.appendChild(elem);
        return elem;
    } 

    attachSlider(parentEl) {
        this.slider = new MrSlider('em-slider-layer');
        this.slider.appendSlider(parentEl, () => {
            this.slider.setColorPalette({fill: '#429CE3', thumb: '#429CE3', body: '#777A78'});
        });
    }

    set elapsed(currentTime) {
        const cT = new Date.clearTime().addSeconds(currentTime).toString('mm:ss');
        this.timeLayer[0].innerText = 'abc';
    }

    set duration(duration) {
        alert('hola')
        const cT = new Date.clearTime()
            .addSeconds(duration)
            .toString('mm:ss');
        this.timeLayer[1].innerText = cT;
    }
}