import MediaEvents from './media.events.js';
import getTimer from './timer.js';
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

    createMaskLayer() {
      const elem = document.createElement('div');
      elem.classList.add('mask-layer');
      this.layer.appendChild(elem);
      return elem;
    }

    createButtonArea() {

    }

    attachSlider(parentEl) {
        this.slider = new MrSlider('em-slider-layer');
        this.slider.appendSlider(parentEl, () => {
            this.slider.setColorPalette({fill: '#429CE3', thumb: '#429CE3', body: '#A4A5A4 '});
            this.addSliderListeners();
        });
    }

    set elapsed(currentTime) {
        const cT = getTimer(currentTime * 1000);
        this.timeLayer[0].innerText = cT;
    }

    set duration(duration) {
        const cT = getTimer(duration * 1000);
        this.timeLayer[1].innerText = cT;
    }
}

