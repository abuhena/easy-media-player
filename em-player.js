(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var elem = document.createElement('div');
  elem.classList.add('em-button');
  context.playButtonId = context.idPrefix + '-fb-button';
  elem.setAttribute('id', context.playButtonId);
  elem.classList.add('em-button');
  elem.classList.add('play72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-fast-backward');
  elem.appendChild(childElem);
  elem.addEventListener('mousedown', function () {
    if (!elem.classList.toggle('btnActive')) {
      elem.classList.add('btnActive');
    }
  });
  elem.addEventListener('mouseup', function () {
    if (elem.classList.toggle('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  elem.addEventListener('mouseout', function () {
    if (elem.classList.toggle('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  return elem;
};

;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var elem = document.createElement('div');
  elem.classList.add('em-button');
  context.playButtonId = context.idPrefix + '-ff-button';
  elem.setAttribute('id', context.playButtonId);
  elem.classList.add('em-button');
  elem.classList.add('play72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-fast-forward');
  elem.appendChild(childElem);
  elem.addEventListener('mousedown', function () {
    if (!elem.classList.toggle('btnActive')) {
      elem.classList.add('btnActive');
    }
  });
  elem.addEventListener('mouseup', function () {
    if (elem.classList.toggle('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  elem.addEventListener('mouseout', function () {
    if (elem.classList.toggle('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  return elem;
};

;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var elem = document.createElement('div');
  elem.classList.add('em-button');
  context.playButtonId = context.idPrefix + '-fullscreen-button';
  elem.setAttribute('id', context.playButtonId);
  elem.classList.add('em-button');
  elem.classList.add('fullscreen72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-expand');
  elem.appendChild(childElem);
  elem.addEventListener('mousedown', function () {
    if (!elem.classList.toggle('btnActive')) {
      elem.classList.add('btnActive');
    }
  });
  elem.addEventListener('mouseup', function () {
    if (elem.classList.toggle('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  elem.addEventListener('mouseout', function () {
    if (elem.classList.toggle('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  return elem;
};

;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var elem = document.createElement('div');
  elem.classList.add('em-button');
  context.playButtonId = context.idPrefix + '-menu-button';
  elem.setAttribute('id', context.playButtonId);
  elem.classList.add('em-button');
  elem.classList.add('menu72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-ellipsis-h');
  elem.appendChild(childElem);
  elem.addEventListener('mousedown', function () {
    if (!elem.classList.toggle('btnActive')) {
      elem.classList.add('btnActive');
    }
  });
  elem.addEventListener('mouseup', function () {
    if (elem.classList.toggle('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  elem.addEventListener('mouseout', function () {
    if (elem.classList.toggle('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  return elem;
};

;

},{}],6:[function(require,module,exports){
"use strict";

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var elem = document.createElement('div');
  elem.classList.add('em-button');
  context.playButtonId = context.idPrefix + '-play-button';
  elem.setAttribute('id', context.playButtonId);
  elem.classList.add('em-button');
  elem.classList.add('play72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-play');
  elem.appendChild(childElem);
  elem.addEventListener('mousedown', function () {
    if (!elem.classList.contains('btnActive')) {
      elem.classList.add('btnActive');
    }
  });
  elem.addEventListener('mouseup', function () {
    if (elem.classList.contains('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  elem.addEventListener('mouseout', function () {
    if (elem.classList.contains('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  return elem;
};

;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var elem = document.createElement('div');
  elem.classList.add('em-button');
  context.playButtonId = context.idPrefix + '-subtitle-button';
  elem.setAttribute('id', context.playButtonId);
  elem.classList.add('em-button');
  elem.classList.add('subtitle72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-newspaper-o');
  elem.appendChild(childElem);
  elem.addEventListener('mousedown', function () {
    if (!elem.classList.toggle('btnActive')) {
      elem.classList.add('btnActive');
    }
  });
  elem.addEventListener('mouseup', function () {
    if (elem.classList.toggle('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  elem.addEventListener('mouseout', function () {
    if (elem.classList.toggle('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  return elem;
};

;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var elem = document.createElement('div');
  elem.classList.add('em-button');
  context.playButtonId = context.idPrefix + '-volume-button';
  elem.setAttribute('id', context.playButtonId);
  elem.classList.add('em-button');
  elem.classList.add('play72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-volume-up');
  elem.appendChild(childElem);
  elem.addEventListener('mousedown', function () {
    if (!elem.classList.toggle('btnActive')) {
      elem.classList.add('btnActive');
    }
  });
  elem.addEventListener('mouseup', function () {
    if (elem.classList.toggle('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  elem.addEventListener('mouseout', function () {
    if (elem.classList.toggle('btnActive')) {
      elem.classList.remove('btnActive');
    }
  });
  return elem;
};

;

},{}],10:[function(require,module,exports){
'use strict';

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
        key: 'addSliderListeners',
        value: function addSliderListeners() {
            this.slider.on('mouseover', this.onSliderMouseover.bind(this));
            this.slider.on('mousemove', this.onSliderMousemove.bind(this));
            this.slider.on('mouseout', this.onSliderMouseout.bind(this));
            this.slider.on('change', this.onSliderChange.bind(this));
        }
    }, {
        key: 'onSliderMouseover',
        value: function onSliderMouseover(value) {}
    }, {
        key: 'onSliderMousemove',
        value: function onSliderMousemove(value) {}
    }, {
        key: 'onSliderMouseout',
        value: function onSliderMouseout() {}
    }, {
        key: 'onSliderChange',
        value: function onSliderChange(value) {
            this.elapsed = value.fill;
            this.duration = this.player.duration - value.fill;
            this.player.currentTime = value.fill;
        }
    }]);

    return ComponentEvents;
}();

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediaEvents = require('./media.events.js');

var _mediaEvents2 = _interopRequireDefault(_mediaEvents);

var _timer = require('./timer.js');

var _timer2 = _interopRequireDefault(_timer);

var _play = require('./buttons/play.js');

var _play2 = _interopRequireDefault(_play);

var _forward = require('./buttons/forward.js');

var _forward2 = _interopRequireDefault(_forward);

var _backward = require('./buttons/backward.js');

var _backward2 = _interopRequireDefault(_backward);

var _subtitle = require('./buttons/subtitle');

var _subtitle2 = _interopRequireDefault(_subtitle);

var _volume = require('./buttons/volume.js');

var _volume2 = _interopRequireDefault(_volume);

var _fullscreen = require('./buttons/fullscreen.js');

var _fullscreen2 = _interopRequireDefault(_fullscreen);

var _menu = require('./buttons/menu.js');

var _menu2 = _interopRequireDefault(_menu);

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
            this.firstButtonLayer(elem);
            this.secondButtonLayer(elem);
            this.thirdButtonLayer(elem);
            //playBtn(elem, this);
            return elem;
        }
    }, {
        key: 'firstButtonLayer',
        value: function firstButtonLayer(parentEl) {
            var elem = document.createElement('div');
            elem.classList.add('em-sqeez-area');
            elem.classList.add('left-button-area');
            elem.appendChild((0, _volume2.default)(this));
            elem.appendChild((0, _subtitle2.default)(this));
            parentEl.appendChild(elem);
        }
    }, {
        key: 'secondButtonLayer',
        value: function secondButtonLayer(parentEl) {
            var elem = document.createElement('div');
            elem.classList.add('em-sqeez-area');
            elem.classList.add('middle-button-area');
            elem.appendChild((0, _backward2.default)(this));
            elem.appendChild((0, _play2.default)(this));
            elem.appendChild((0, _forward2.default)(this));
            //elem.appendChild(subtitleBtn(this));
            parentEl.appendChild(elem);
        }
    }, {
        key: 'thirdButtonLayer',
        value: function thirdButtonLayer(parentEl) {
            var elem = document.createElement('div');
            elem.classList.add('em-sqeez-area');
            elem.classList.add('right-button-area');
            elem.appendChild((0, _fullscreen2.default)(this));
            elem.appendChild((0, _menu2.default)(this));
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

},{"./buttons/backward.js":2,"./buttons/forward.js":3,"./buttons/fullscreen.js":4,"./buttons/menu.js":5,"./buttons/play.js":7,"./buttons/subtitle":8,"./buttons/volume.js":9,"./media.events.js":15,"./timer.js":17}],12:[function(require,module,exports){
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

},{"./initializer.js":13}],13:[function(require,module,exports){
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

},{"./custom.controls.js":11}],14:[function(require,module,exports){
"use strict";

},{}],15:[function(require,module,exports){
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

},{"./component.events.js":10}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModalComponent = function () {
  function ModalComponent() {
    _classCallCheck(this, ModalComponent);

    this.attribute = 'data-em-cmp-title';
  }

  _createClass(ModalComponent, [{
    key: 'bindTitle',


    /**
     * @param parentContext
     */
    value: function bindTitle(parentContext) {
      var nodes = ModalComponent.getElementsByAttribute(this.attribute, parentContext);
      this.currentContext = parentContext;
      nodes.forEach(function (eachNode) {
        //eachNode.addEventListener('mouseover', this);
      });
    }

    /**
     * @param attribute
     * @param context
     * @returns {Array}
     */

  }], [{
    key: 'getElementsByAttribute',
    value: function getElementsByAttribute(attribute, context) {
      var nodeList = (context || document).getElementsByTagName('*');
      var nodeArray = [];
      var iterator = 0;
      var node = null;

      /* eslint-disable no-cond-assign*/
      while (node = nodeList[iterator++]) {
        if (node.hasAttribute(attribute)) nodeArray.push(node);
      }
      return nodeArray;
    }
  }]);

  return ModalComponent;
}();

exports.default = ModalComponent;

},{}],17:[function(require,module,exports){
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

},{}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
