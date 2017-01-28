(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomControls = function () {
    function CustomControls(index) {
        _classCallCheck(this, CustomControls);

        this.index = index;
        this.progressBarId = 'em-player-progress-bar';
        this.slider;
    }

    _createClass(CustomControls, [{
        key: 'createControlLayer',
        value: function createControlLayer(player, layer) {
            this.player = player;
            this.layer = layer;
            var elem = document.createElement('div');
            elem.classList.add('control-layer');
            var padding = 30;
            elem.style.width = this.player.offsetWidth - padding + 'px';
            elem.style.left = padding / 2 + 'px';
            layer.appendChild(elem);
            return elem;
        }
    }]);

    return CustomControls;
}();

exports.default = CustomControls;

},{}],3:[function(require,module,exports){
'use strict';

var _initializer = require('./initializer.js');

var _initializer2 = _interopRequireDefault(_initializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
    (function () {
        var attr = 'data-em-player';
        var getAllPlayer = document.getElementsByTagName('video');
        getAllPlayer = Array.prototype.slice.call(getAllPlayer);
        getAllPlayer.forEach(function (each, index) {
            if (each.getAttribute(attr) !== null || each.getAttribute(attr) !== undefined) {
                return new _initializer2.default(each, index);
            }
        });
    })();
};

},{"./initializer.js":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _customControls = require('./custom.controls.js');

var _customControls2 = _interopRequireDefault(_customControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Initializer = function (_CustomControls) {
    _inherits(Initializer, _CustomControls);

    function Initializer(player, index) {
        _classCallCheck(this, Initializer);

        var _this = _possibleConstructorReturn(this, (Initializer.__proto__ || Object.getPrototypeOf(Initializer)).call(this, index));

        _this.player = player;
        _this.customize();
        return _this;
    }

    _createClass(Initializer, [{
        key: 'customize',
        value: function customize() {
            this.videoURL = this.player.getAttribute('src');
            var controls = this.player.getAttribute('controls');
            if (controls !== null) this.player.removeAttribute('controls');
            var dimen = Initializer.screen(this.player.getAttribute('data-width'));
            this.player.style.width = dimen[0] + 'px';
            this.player.style.height = dimen[1] + 'px';
            this.layer = this.createLayer();
            console.dir(this.player);
            this.controlLayer = this.createControlLayer(this.player, this.layer);
        }
    }, {
        key: 'createLayer',
        value: function createLayer() {
            var el = document.createElement('div');
            el.classList.add('em-player');
            el.style.width = this.player.style.width;
            el.style.height = this.player.style.height;
            el.style.left = this.player.offsetLeft + 'px';
            el.style.top = this.player.offsetTop + 'px';
            this.player.parentNode.insertBefore(el, this.player.nextSibling);
            return el;
        }
    }, {
        key: 'controlLayer',
        set: function set(dom) {
            this.slider = new MrSlider('em-slider-layer');
            this.slider.appendSlider(dom);
        }
    }], [{
        key: 'screen',
        value: function screen() {
            var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 640;

            var ratio = 56.25;
            w = w === null ? 640 : w;
            return [w, w * ratio / 100];
        }
    }]);

    return Initializer;
}(_customControls2.default);

exports.default = Initializer;

},{"./custom.controls.js":2}],5:[function(require,module,exports){
"use strict";

},{}],6:[function(require,module,exports){
"use strict";

},{}],7:[function(require,module,exports){
"use strict";

},{}]},{},[1,2,3,4,5,6,7]);
