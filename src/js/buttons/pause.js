export default function (context) {
  const elem = document.createElement('div');
      elem.classList.add('em-button');
      context.pauseButtonId = `${context.idPrefix}-pause-button`;
      elem.setAttribute('id', context.pauseButtonId);
      elem.setAttribute('data-em-cmp-title', 'Pause');
      elem.classList.add('hide-me');
      elem.classList.add('em-button');
      elem.classList.add('play72');
      const childElem = document.createElement('div');
      childElem.classList.add('fa');
      childElem.classList.add('fa-pause');
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
