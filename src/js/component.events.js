export class ComponentEvents {
    addSliderListeners() {
        this.slider.on('mouseover', this.onSliderMouseover.bind(this));
        this.slider.on('mousemove', this.onSliderMousemove.bind(this));
        this.slider.on('mouseout', this.onSliderMouseout.bind(this));
        this.slider.on('change', this.onSliderChange.bind(this));
    }

    onSliderMouseover(value) {
    }
    onSliderMousemove(value) {
    }
    onSliderMouseout() {
    }
    onSliderChange(value) {
        this.elapsed = value.fill;
        this.duration = this.player.duration - value.fill;
        this.player.currentTime = value.fill;
    }
}
