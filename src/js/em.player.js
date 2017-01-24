'use strict';
import Initializer from './initializer.js';
window.onload = () => {
    (function() {
        const attr = 'data-em-player';
        let getAllPlayer = document.getElementsByTagName('video');
        getAllPlayer = Array.prototype.slice.call(getAllPlayer);
        getAllPlayer.forEach(each => {
            if (each.getAttribute(attr) !== null || each.getAttribute(attr) !== undefined) {
                return new Initializer(each);
            }
        });
    })();
}