import CustomControls from './custom.controls';
import ModalComponents from './modal.components';

export default class CreatePlayer extends CustomControls {
  constructor() {
    super();
    window.addEventListener('resize', this.windowResizeHandler.bind(this));
  }

  customize() {
    this.videoURL = this.player.getAttribute('src');
    const preload = this.player.getAttribute('preload') !== null;
    const autoload = this.player.getAttribute('autoload') !== null;
    const dimen = CreatePlayer.screen(this.player.getAttribute('data-width'));
    const currentParent = this.player.parentNode;
    const removedPosition = CreatePlayer.removeFrom(currentParent, this.player);
    const elem = document.createElement('video');
    elem.classList.add('em-video');
    elem.setAttribute('src', this.videoURL);
    elem.style.width = `${dimen[0]}px`;
    elem.style.height = `${dimen[1]}px`;
    if (autoload) elem.setAttribute('autoload', '');
    if (preload) elem.setAttribute('preload', '');
    this.player = elem;
    const wrapper = document.createElement('div');
    wrapper.appendChild(this.player);
    if (removedPosition) {
      currentParent.insertBefore(wrapper, removedPosition);
    } else {
      currentParent.appendChild(wrapper);
    }
  }

  static removeFrom(parent, child) {
    for (let i = 0; parent.children.length > i; i++) {
      if (parent.children[i] === child) {
        parent.removeChild(child);
        return parent.children[i];
      }
    }
  }

  createLayer() {
        const el = document.createElement('div');
        el.classList.add('em-player');
        el.style.width = this.player.style.width;
        el.style.height = this.player.style.height;
        el.style.left = `${this.player.offsetLeft}px`;
        el.style.top = `${this.player.offsetTop}px`;
        el.addEventListener('click', this.onLayerClick.bind(this));
        el.addEventListener('dblclick', this.onLayerDoubleClick.bind(this));
        this.player.parentNode.insertBefore(el, this.player.nextSibling);
        this.modalInstance = ModalComponents.getInstance(el);
        return el;
    }

    createTimeLayer(controlLayer) {
        const parentEl = document.createElement('div');
        parentEl.classList.add('timer-cmp');
        const elTE = document.createElement('p');
        elTE.classList.add('timer');
        elTE.style.left = '0px';
        elTE.innerText = '00:00';
        const elTS = document.createElement('p');
        elTS.classList.add('timer');
        elTS.style.right = '0px';
        elTS.innerText = '00:00';
        parentEl.appendChild(elTE);
        parentEl.appendChild(elTS);
        controlLayer.appendChild(parentEl);
        return [elTE, elTS];
    }
}
