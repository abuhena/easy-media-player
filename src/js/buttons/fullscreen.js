export default function (context) {
  const elem = document.createElement('div');
      elem.classList.add('em-button');
      context.fullscreenButtonId = `${context.idPrefix}-fullscreen-button`;
      elem.setAttribute('id', context.playButtonId);
      elem.setAttribute('data-em-cmp-title', 'Toggle fullscreen');
      elem.classList.add('em-button');
      elem.classList.add('fullscreen72');
      const childElem = document.createElement('div');
      childElem.classList.add('fa');
      childElem.classList.add('fa-expand');
      elem.appendChild(childElem);
      elem.addEventListener('mousedown', () => {
        if (!elem.classList.contains('btnActive')) {
          elem.classList.add('btnActive');
        }
      });
      elem.addEventListener('mouseup', () => {
        if (elem.classList.contains('btnActive')) {
          elem.classList.remove('btnActive');
        }
      });
      elem.addEventListener('mouseout', () => {
        if (elem.classList.contains('btnActive')) {
          elem.classList.remove('btnActive');
        }
      });
      return elem;
};
