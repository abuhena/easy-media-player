export class ComponentEvents {
    addSliderListeners() {
        this.slider.events().onmouseover = this.onSliderMouseover.bind(this);
        this.slider.events().onmousemove = this.onSliderMousemove.bind(this);
        this.slider.events().onmouseout = this.onSliderMouseout.bind(this);
        this.slider.events().onchange = this.onSliderChange.bind(this);
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