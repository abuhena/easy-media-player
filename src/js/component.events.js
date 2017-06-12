import getTimer from './timer.js';
import FullscreenAPI from './fullscreen.api';
import resizeHandler from './resizeHandler';
export class ComponentEvents {
  constructor() {
    this.fullscreenBind = 0;
  }
    addSliderListeners() {
        this.slider.on('mouseover', this.onSliderMouseover.bind(this));
        this.slider.on('mousemove', this.onSliderMousemove.bind(this));
        this.slider.on('mousedown', this.onSliderMousedown.bind(this));
        this.slider.on('mouseup', this.onSliderMouseup.bind(this));
        this.slider.on('click', this.onSliderSeek.bind(this));
        this.slider.on('mouseout', this.onSliderMouseout.bind(this));
        this.slider.on('change', this.onSliderChange.bind(this));
    }

    onSliderMouseover(value, event) {
    }
    onSliderMousemove(value, event) {
      if (!this.seekHint) {
        this.seekHint = this.modalInstance.createTitleBox(getTimer(value.fill * 1000),
        {x: event.pageX, y: event.pageY}, this.seekHint);
      } else {
        this.modalInstance.updateTitleBox(getTimer(value.fill * 1000),
        {x: event.pageX, y: event.pageY});
      }
    }
    onSliderMousedown() {
      this.sliderMouseDown = true;
      this.onSliderMouseout();
    }
    onSliderMouseup(value) {
      this.sliderMouseDown = false;
    }
    onSliderMouseout() {
      this.modalInstance.removeTitle();
      this.seekHint = undefined;
    }
    onSliderSeek() {
      this.elapsed = this.slider.getValue();
      this.duration = this.player.duration - this.slider.getValue();
      this.player.currentTime = this.slider.getValue();
    }
    onSliderChange(value) {
        if (this.sliderMouseDown) {
          this.elapsed = value.fill;
          this.duration = this.player.duration - value.fill;
          this.player.currentTime = value.fill;
        }
    }

    onPlayButtonClickListener(event) {
      if (this.player.paused) {
        this.player.play();
        this.hideComponent(document.getElementById(this.playButtonId));
        this.showComponent(document.getElementById(this.pauseButtonId));
      }
    }

    onPauseButtonClickListener(event) {
      if (!this.player.paused) {
        this.player.pause();
        this.hideComponent(document.getElementById(this.pauseButtonId));
        this.showComponent(document.getElementById(this.playButtonId));
      }
    }

    onfastForwardButtonClickListener() {
      let toFastForward = this.player.currentTime + 5;
      if (this.player.duration < 60) toFastForward = this.player.currentTime + 3;
      if (this.player.duration > (60 * 20)) toFastForward = this.player.currentTime + 8;
      if (this.player.duration > 3600) toFastForward = this.player.currentTime + 10;
      if (this.player.duration < toFastForward) toFastForward = this.player.duration - 1;
      this.elapsed = toFastForward;
      this.duration = this.player.duration - toFastForward;
      this.player.currentTime = toFastForward;
    }

    onfastBackwardButtonClickListener() {
      let toFastBackward = this.player.currentTime - 5;
      if (this.player.duration < 60) toFastBackward = this.player.currentTime - 3;
      if (this.player.duration > (60 * 20)) toFastBackward = this.player.currentTime - 8;
      if (this.player.duration > 3600) toFastBackward = this.player.currentTime - 10;
      if (0 > toFastBackward) toFastBackward = 0;
      this.elapsed = toFastBackward;
      this.duration = this.player.duration - toFastBackward;
      this.player.currentTime = toFastBackward;
    }

    onFullscreenButtonClickListener() {
      if (FullscreenAPI.requestFullscreen) {
        if (!this.fullscreenBind) {
          this.player.addEventListener(FullscreenAPI.fullscreenchange,
          this.onFullscreenListener.bind(this));
        }
        if (this.isFullscreen) {
          this.player[FullscreenAPI.exitFullscreen]();
        } else {
          this.player[FullscreenAPI.requestFullscreen]();
        }
        this.isFullscreen = !this.isFullscreen;
      }
    }

    onLayerClick(event) {
      if (event.target === this.layer) {
        if (this.player.paused) {
        this.player.play();
      } else{
        this.player.pause();
      }
      }
    }
    onLayerDoubleClick(event) {
      if (FullscreenAPI.requestFullscreen) {
        if (!this.fullscreenBind) {
          this.player.addEventListener(FullscreenAPI.fullscreenchange,
          this.onFullscreenListener.bind(this));
        }
        if (this.isFullscreen) {
          this.player[FullscreenAPI.exitFullscreen]();
        } else {
          this.player[FullscreenAPI.requestFullscreen]();
        }
      }
    }
    windowResizeHandler() {
      return resizeHandler(this);
    }

    static screen(w = 640) {
      const ratio = 56.25;
      w = w === null ? 640 : w;
      w = w > window.innerWidth ? window.innerWidth : w;
      return [w, ((w * ratio)/100)];
  }

    hideComponent(target) {
      target.classList.add('hide-me');
    }

    showComponent(target) {
      if (target.classList.contains('hide-me')) target.classList.remove('hide-me');
    }

    hideControlLayer() {
      const controlLayer = document.getElementById(`${this.idPrefix}-em-player-controls`);
      controlLayer.classList.add('animated');
      controlLayer.classList.add('slideOutDown');
      this.maskLayer.classList.add('animated');
      this.maskLayer.classList.add('slideOutDown');
    }

    onLayerMouseMove() {
      clearTimeout(this.clTimeout);
      const controlLayer = document.getElementById(`${this.idPrefix}-em-player-controls`);
      if (controlLayer) {
        const classes = controlLayer.classList;
        if (classes.contains('slideOutDown')) {
          classes.remove('slideOutDown');
          this.maskLayer.classList.remove('slideOutDown');
          classes.add('slideInUp');
          this.maskLayer.classList.add('slideInUp');
        }
      }
      this.clTimeout = setTimeout(this.hideControlLayer.bind(this), 5000);
    }
}
