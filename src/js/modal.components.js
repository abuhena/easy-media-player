const singleton = Symbol();
const singletonEnforcer = Symbol();

export default class ModalComponents {
  constructor(enforcer, areaNode) {
    if (enforcer !== singletonEnforcer) throw new Error('Cannot construct singleton');
    this.titleAttribute = 'data-em-cmp-title';
    this.areaNode = areaNode;
    const observer = new MutationObserver(type => {
      this.addToEvent(areaNode);
    });
    observer.observe(areaNode, {childList: true});
    this.timeoutInstance;
  };

  static getInstance(context = document) {
    if (!this[singleton]) {
      this[singleton] = new ModalComponents(singletonEnforcer, context);
    }
    return this[singleton];
  }

  addToEvent(areaNode) {
    const nodes = ModalComponents.getElementsByAttribute(this.titleAttribute, areaNode);
    nodes.forEach(eachNode => {
      eachNode.addEventListener('mousemove', this.bindTitle.bind(this));
      eachNode.addEventListener('mouseout', this.removeTitle.bind(this));
    });
  }

  /**
   * @param parentContext
   */
  bindTitle(event) {
    this.timeoutInstance = setTimeout(() => {
      this.createTitleBox(this.getText(event.target),
      {x: event.pageX, y: event.pageY});
      setTimeout(() => {
        this.removeTitle();
      }, 5000);
    }, 1500);
  }

  removeTitle() {
    clearTimeout(this.timeoutInstance);
    const el = document.getElementById('data-em-title-component');
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }

  createTitleBox(text, position, context) {
    if (!document.getElementById('data-em-title-component')) {
      const elem = document.createElement('div');
      elem.setAttribute('id', 'data-em-title-component');
      elem.classList.add('em-modal');
      elem.classList.add('em-title');
      elem.classList.add('animated');
      elem.classList.add('fadeIn');
      elem.innerText = text;
      elem.style.left = `${position.x}px`;
      elem.style.top = `${position.y - 50}px`;
      (context || document.body).appendChild(elem);
      elem.style.left = `${position.x - (elem.clientWidth/2)}px`;
      return elem;
    }
    return null;
  }

  /**
   * @param attribute
   * @param context
   * @returns {Array}
   */
  static getElementsByAttribute(attribute, context) {
    const nodeList = (context || document).getElementsByTagName('*');
    const nodeArray = [];
    let iterator = 0;
    let node = null;

    /* eslint-disable no-cond-assign*/
    while (node = nodeList[iterator++]) {
      if (node.hasAttribute(attribute)) nodeArray.push(node);
    }
    return nodeArray;
  }

  getText(elem) {
    if (elem && elem.hasAttribute(this.titleAttribute)) {
      return elem.getAttribute(this.titleAttribute);
    }
    return this.getText(elem.parentNode);
  }
}
