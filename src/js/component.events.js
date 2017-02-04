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

    onSliderMouseover(value) {
    }
    onSliderMousemove(value) {
    }
    onSliderMousedown() {
      this.sliderMouseDown = true;
    }
    onSliderMouseup(value) {
      this.sliderMouseDown = false;
    }
    onSliderMouseout() {
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
