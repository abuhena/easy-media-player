(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediaEvents = require('./media.events.js');

var _mediaEvents2 = _interopRequireDefault(_mediaEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomControls = function (_MediaEvents) {
    _inherits(CustomControls, _MediaEvents);

    function CustomControls(index) {
        _classCallCheck(this, CustomControls);

        var _this = _possibleConstructorReturn(this, (CustomControls.__proto__ || Object.getPrototypeOf(CustomControls)).call(this));

        _this.index = index;
        _this.progressBarId = 'em-player-progress-bar';
        var now = new Date();
        _this.idPrefix = 'fx-' + now.getTime();
        _this.slider;
        return _this;
    }

    _createClass(CustomControls, [{
        key: 'createControlLayer',
        value: function createControlLayer(player, layer, done) {
            this.player = player;
            this.layer = layer;
            var elem = document.createElement('div');
            elem.classList.add('control-layer');
            var padding = 30;
            elem.style.width = this.player.offsetWidth - padding + 'px';
            elem.style.left = padding / 2 + 'px';
            this.layer.appendChild(elem);
            return elem;
        }
    }, {
        key: 'attachSlider',
        value: function attachSlider(parentEl) {
            var _this2 = this;

            this.slider = new MrSlider('em-slider-layer');
            this.slider.appendSlider(parentEl, function () {
                _this2.slider.setColorPalette({ fill: '#429CE3', thumb: '#429CE3', body: '#777A78' });
            });
        }
    }, {
        key: 'elapsed',
        set: function set(currentTime) {
            var cT = new Date.clearTime().addSeconds(currentTime).toString('mm:ss');
            this.timeLayer[0].innerText = 'abc';
        }
    }, {
        key: 'duration',
        set: function set(duration) {
            var cT = new Date.clearTime().addSeconds(duration).toString('mm:ss');
            this.timeLayer[1].innerText = cT;
        }
    }]);

    return CustomControls;
}(_mediaEvents2.default);

exports.default = CustomControls;

},{"./media.events.js":6}],3:[function(require,module,exports){
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
            var _this2 = this;

            this.videoURL = this.player.getAttribute('src');
            var controls = this.player.getAttribute('controls');
            if (controls !== null) this.player.removeAttribute('controls');
            var dimen = Initializer.screen(this.player.getAttribute('data-width'));
            this.player.style.width = dimen[0] + 'px';
            this.player.style.height = dimen[1] + 'px';
            this.layer = this.createLayer();
            this.controlLayer = this.createControlLayer(this.player, this.layer);
            this.timeLayer;
            this.ready().metadata().then(function () {
                _this2.slider.setRange(_this2.player.duration);
                setTimeout(function () {
                    console.log(_this2.slider.getValue());
                }, 5000);
                _this2.duration = _this2.player.duration;
                _this2.elapsed = _this2.player.currentTime;
            }).catch(this.videoError);
        }
    }, {
        key: 'addTitle',
        value: function addTitle() {
            var title = void 0;
            title = this.videoURL.substr(this.videoURL.lastIndexOf('/') + 1);
            if (this.player.getAttribute('data-title')) title = this.player.getAttribute('data-title');
            var el = document.createElement('div');
            el.classList.add('title');
            el.setAttribute('id', 'title-' + this.idPrefix);
            el.innerText = title;
            return el;
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
        key: 'createTimeLayer',
        value: function createTimeLayer(controlLayer) {
            var parentEl = document.createElement('div');
            parentEl.classList.add('timer-cmp');
            var elTE = document.createElement('p');
            elTE.classList.add('timer');
            elTE.style.left = '0px';
            elTE.innerText = '00:00';
            var elTS = document.createElement('p');
            elTS.classList.add('timer');
            elTS.style.right = '0px';
            elTS.innerText = '00:00';
            parentEl.appendChild(elTE);
            parentEl.appendChild(elTS);
            controlLayer.appendChild(parentEl);
            return [elTE, elTS];
        }
    }, {
        key: 'videoError',
        value: function videoError() {}
    }, {
        key: 'controlLayer',
        set: function set(dom) {
            var sliderParentEl = document.createElement('div');
            var titleEl = this.addTitle();
            dom.appendChild(titleEl);
            dom.appendChild(sliderParentEl);
            this.attachSlider(sliderParentEl);
            this.timeLayer = this.createTimeLayer(dom);
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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaEvents = function () {
    function MediaEvents() {
        _classCallCheck(this, MediaEvents);
    }

    _createClass(MediaEvents, [{
        key: 'ready',
        value: function ready() {
            var context = this.player;
            return {
                metadata: function metadata() {
                    return new Promise(function (resolve, reject) {
                        context.addEventListener('loadedmetadata', function (event) {
                            resolve(event);
                        });
                        context.addEventListener('error', function (event) {
                            reject(event);
                        });
                    });
                }
            };
        }
    }]);

    return MediaEvents;
}();

exports.default = MediaEvents;

},{}],7:[function(require,module,exports){
"use strict";

},{}]},{},[1,2,3,4,5,6,7]);
