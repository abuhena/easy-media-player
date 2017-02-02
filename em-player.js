(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentEvents = exports.ComponentEvents = function () {
    function ComponentEvents() {
        _classCallCheck(this, ComponentEvents);
    }

    _createClass(ComponentEvents, [{
        key: "addSliderListeners",
        value: function addSliderListeners() {
            this.slider.events().onmouseover = this.onSliderMouseover.bind(this);
            this.slider.events().onmousemove = this.onSliderMousemove.bind(this);
            this.slider.events().onmouseout = this.onSliderMouseout.bind(this);
            this.slider.events().onchange = this.onSliderChange.bind(this);
        }
    }, {
        key: "onSliderMouseover",
        value: function onSliderMouseover(value) {}
    }, {
        key: "onSliderMousemove",
        value: function onSliderMousemove(value) {}
    }, {
        key: "onSliderMouseout",
        value: function onSliderMouseout() {}
    }, {
        key: "onSliderChange",
        value: function onSliderChange(value) {
            this.elapsed = value.fill;
            this.duration = this.player.duration - value.fill;
            this.player.currentTime = value.fill;
        }
    }]);

    return ComponentEvents;
}();

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediaEvents = require('./media.events.js');

var _mediaEvents2 = _interopRequireDefault(_mediaEvents);

var _timer = require('./timer.js');

var _timer2 = _interopRequireDefault(_timer);

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
        key: 'createMaskLayer',
        value: function createMaskLayer() {
            var elem = document.createElement('div');
            elem.classList.add('mask-layer');
            this.layer.appendChild(elem);
            return elem;
        }
    }, {
        key: 'createButtonArea',
        value: function createButtonArea(parentEl) {
            var elem = document.createElement('div');
            elem.classList.add('button-layer');
            parentEl.appendChild(elem);
            //this.createPlayButton(elem);
            return elem;
        }
    }, {
        key: 'createPlayButton',
        value: function createPlayButton(parentEl) {
            var elem = document.createElement('div');
            elem.classList.add('em-button');
            this.playButtonId = this.idPrefix + '-play-button';
            elem.setAttribute('id', this.playButtonId);
            elem.classList.add('em-button');
            var childElem = document.createElement('div');
            childElem.classList.add('fa');
            childElem.classList.add('fa-play');
            elem.appendChild(childElem);
            parentEl.appendChild(elem);
        }
    }, {
        key: 'attachSlider',
        value: function attachSlider(parentEl) {
            var _this2 = this;

            this.slider = new MrSlider('em-slider-layer');
            this.slider.appendSlider(parentEl, function () {
                _this2.slider.setColorPalette({ fill: '#429CE3', thumb: '#429CE3', body: '#A4A5A4 ' });
                _this2.addSliderListeners();
            });
        }
    }, {
        key: 'elapsed',
        set: function set(currentTime) {
            var cT = (0, _timer2.default)(currentTime * 1000);
            this.timeLayer[0].innerText = cT;
        }
    }, {
        key: 'duration',
        set: function set(duration) {
            var cT = (0, _timer2.default)(duration * 1000);
            this.timeLayer[1].innerText = cT;
        }
    }]);

    return CustomControls;
}(_mediaEvents2.default);

exports.default = CustomControls;

},{"./media.events.js":7,"./timer.js":9}],4:[function(require,module,exports){
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

},{"./initializer.js":5}],5:[function(require,module,exports){
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
            this.controlLayer = this.createControlLayer(this.player, this.layer);
            this.maskLayer = this.createMaskLayer();
            this.timeLayer;
            this.ready().metadata().then(this.videoReady.bind(this)).catch(this.videoError);
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
        key: 'videoReady',
        value: function videoReady() {
            this.slider.setRange(this.player.duration);
            this.duration = this.player.duration;
            this.elapsed = this.player.currentTime;
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
            this.buttonArea = this.createButtonArea(dom);
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

},{"./custom.controls.js":3}],6:[function(require,module,exports){
"use strict";

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentEvents = require('./component.events.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaEvents = function (_ComponentEvents) {
    _inherits(MediaEvents, _ComponentEvents);

    function MediaEvents() {
        _classCallCheck(this, MediaEvents);

        return _possibleConstructorReturn(this, (MediaEvents.__proto__ || Object.getPrototypeOf(MediaEvents)).call(this));
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
}(_componentEvents.ComponentEvents);

exports.default = MediaEvents;

},{"./component.events.js":2}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModalComponent = function ModalComponent() {
  _classCallCheck(this, ModalComponent);
};

exports.default = ModalComponent;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getTimer;
function getTimer(mil) {
    var hour = mil / 1000 / 60 / 60;
    var min = mil / 1000 / 60;
    var sec = mil / 1000;
    var str = '';
    if (hour >= 1) {
        var floorH = Math.floor(hour);
        min = (hour - floorH) * 60;
        str += floorH + ':';
    }
    if (min >= 1) {
        var floorM = Math.floor(min);
        if (floorM <= 9) {
            str += '0' + floorM + ':';
        } else {
            str += floorM + ':';
        }
        sec = (min - floorM) * 60;
    } else {
        sec = min * 60;
        str += '0' + Math.round(min) + ':';
    }

    if (sec >= 1) {
        var roundS = Math.round(sec);
        if (roundS <= 9) {
            str += '0' + roundS;
        } else {
            str += roundS;
        }
    } else {
        str += '00';
    }
    return str;
}

},{}]},{},[1,2,3,4,5,6,7,8,9]);
