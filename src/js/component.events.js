import getTimer from './timer.js';
export class ComponentEvents {
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
    }
    onSliderMouseup(value) {
      this.sliderMouseDown = false;
    }
    onSliderMouseout() {
      console.log('mouseout');
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

    onLayerClick(event) {
      if (event.target === this.layer) {
        if (this.player.paused) {
        this.player.play();
      } else{
        this.player.pause();
      }
      }
    }
    windowResizeHandler() {
      const wrapper = this.player.parentNode;
      const dimen = ComponentEvents.screen(wrapper.clienWidth);
      this.player.style.width = `${dimen[0]}px`;
      this.player.style.height = `${dimen[1]}px`;
      this.layer.style.width = `${dimen[0]}px`;
      this.layer.style.height = `${dimen[1]}px`;
      document.getElementById(this.controlLayerId).style.width = `${dimen[0] - 30}px`;
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
}
