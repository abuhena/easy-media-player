export default function (context) {
  const elem = document.createElement('div');
      elem.classList.add('em-button');
      context.playButtonId = `${context.idPrefix}-fb-button`;
      elem.setAttribute('id', context.playButtonId);
      elem.classList.add('em-button');
      elem.classList.add('play72');
      const childElem = document.createElement('div');
      childElem.classList.add('fa');
      childElem.classList.add('fa-fast-backward');
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
