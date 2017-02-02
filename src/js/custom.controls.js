import MediaEvents from './media.events.js';
import getTimer from './timer.js';
import playBtn from './buttons/play.js';
import fastForwardBtn from './buttons/forward.js';
import fastBackwardBtn from './buttons/backward.js';
import subtitleBtn from './buttons/subtitle';
import volumeBtn from './buttons/volume.js';
import fullscreenBtn from './buttons/fullscreen.js';
import menuBtn from './buttons/menu.js';
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

    createButtonArea(parentEl) {
        const elem = document.createElement('div');
        elem.classList.add('button-layer');
        parentEl.appendChild(elem);
        this.firstButtonLayer(elem);
        this.secondButtonLayer(elem);
        this.thirdButtonLayer(elem);
        //playBtn(elem, this);
        return elem;
    }

    firstButtonLayer(parentEl) {
      const elem = document.createElement('div');
      elem.classList.add('em-sqeez-area');
      elem.classList.add('left-button-area');
      elem.appendChild(volumeBtn(this));
      elem.appendChild(subtitleBtn(this));
      parentEl.appendChild(elem);
    }

    secondButtonLayer(parentEl) {
      const elem = document.createElement('div');
      elem.classList.add('em-sqeez-area');
      elem.classList.add('middle-button-area');
      elem.appendChild(fastBackwardBtn(this));
      elem.appendChild(playBtn(this));
      elem.appendChild(fastForwardBtn(this));
      //elem.appendChild(subtitleBtn(this));
      parentEl.appendChild(elem);
    }

    thirdButtonLayer(parentEl) {
      const elem = document.createElement('div');
      elem.classList.add('em-sqeez-area');
      elem.classList.add('right-button-area');
      elem.appendChild(fullscreenBtn(this));
      elem.appendChild(menuBtn(this));
      parentEl.appendChild(elem);
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

