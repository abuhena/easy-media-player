export default class ModalComponent {
  constructor() {
    this.attribute = 'data-em-cmp-title';
  };

  /**
   * @param parentContext
   */
  bindTitle(parentContext) {
    const nodes = ModalComponent.getElementsByAttribute(this.attribute, parentContext);
    this.currentContext = parentContext;
    nodes.forEach(eachNode => {
      //eachNode.addEventListener('mouseover', this);
    });
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
}
