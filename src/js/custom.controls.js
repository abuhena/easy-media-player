export default class CustomControls {
    constructor(index) {
        this.index = index;
        this.progressBarId = 'em-player-progress-bar';
        this.slider;
    }

    createControlLayer(player, layer) {
        this.player = player;
        this.layer = layer;
        const elem = document.createElement('div');
        elem.classList.add('control-layer');
        const padding = 30;
        elem.style.width = `${this.player.offsetWidth - padding}px`;
        elem.style.left = `${padding/2}px`;
        layer.appendChild(elem);
        return elem;
    } 
}