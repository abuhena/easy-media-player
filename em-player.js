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
  context.ffButtonId = context.idPrefix + '-fb-button';
  elem.setAttribute('id', context.playButtonId);
  elem.classList.add('em-button');
  elem.classList.add('play72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-fast-backward');
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

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var elem = document.createElement('div');
  elem.classList.add('em-button');
  context.fbButtonId = context.idPrefix + '-ff-button';
  elem.setAttribute('id', context.playButtonId);
  elem.classList.add('em-button');
  elem.classList.add('play72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-fast-forward');
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

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var elem = document.createElement('div');
  elem.classList.add('em-button');
  context.fullscreenButtonId = context.idPrefix + '-fullscreen-button';
  elem.setAttribute('id', context.playButtonId);
  elem.classList.add('em-button');
  elem.classList.add('fullscreen72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-expand');
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var elem = document.createElement('div');
  elem.classList.add('em-button');
  context.menuButtonId = context.idPrefix + '-menu-button';
  elem.setAttribute('id', context.playButtonId);
  elem.classList.add('em-button');
  elem.classList.add('menu72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-ellipsis-h');
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

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var elem = document.createElement('div');
  elem.classList.add('em-button');
  context.pauseButtonId = context.idPrefix + '-pause-button';
  elem.setAttribute('id', context.pauseButtonId);
  elem.classList.add('hide-me');
  elem.classList.add('em-button');
  elem.classList.add('play72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-pause');
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
  context.subtitleButtonId = context.idPrefix + '-subtitle-button';
  elem.setAttribute('id', context.playButtonId);
  elem.classList.add('em-button');
  elem.classList.add('subtitle72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-newspaper-o');
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

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var elem = document.createElement('div');
  elem.classList.add('em-button');
  context.volumeButtonId = context.idPrefix + '-volume-button';
  elem.setAttribute('id', context.playButtonId);
  elem.classList.add('em-button');
  elem.classList.add('play72');
  var childElem = document.createElement('div');
  childElem.classList.add('fa');
  childElem.classList.add('fa-volume-up');
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
      this.slider.on('mousedown', this.onSliderMousedown.bind(this));
      this.slider.on('mouseup', this.onSliderMouseup.bind(this));
      this.slider.on('click', this.onSliderSeek.bind(this));
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
    key: 'onSliderMousedown',
    value: function onSliderMousedown() {
      this.sliderMouseDown = true;
    }
  }, {
    key: 'onSliderMouseup',
    value: function onSliderMouseup(value) {
      this.sliderMouseDown = false;
    }
  }, {
    key: 'onSliderMouseout',
    value: function onSliderMouseout() {}
  }, {
    key: 'onSliderSeek',
    value: function onSliderSeek() {
      this.elapsed = this.slider.getValue();
      this.duration = this.player.duration - this.slider.getValue();
      this.player.currentTime = this.slider.getValue();
    }
  }, {
    key: 'onSliderChange',
    value: function onSliderChange(value) {
      if (this.sliderMouseDown) {
        this.elapsed = value.fill;
        this.duration = this.player.duration - value.fill;
        this.player.currentTime = value.fill;
      }
    }
  }, {
    key: 'onPlayButtonClickListener',
    value: function onPlayButtonClickListener(event) {
      if (this.player.paused) {
        this.player.play();
        this.hideComponent(document.getElementById(this.playButtonId));
        this.showComponent(document.getElementById(this.pauseButtonId));
      }
    }
  }, {
    key: 'onPauseButtonClickListener',
    value: function onPauseButtonClickListener(event) {
      if (!this.player.paused) {
        this.player.pause();
        this.hideComponent(document.getElementById(this.pauseButtonId));
        this.showComponent(document.getElementById(this.playButtonId));
      }
    }
  }, {
    key: 'onLayerClick',
    value: function onLayerClick(event) {
      if (event.target === this.layer) {
        if (this.player.paused) {
          this.player.play();
        } else {
          this.player.pause();
        }
      }
    }
  }, {
    key: 'windowResizeHandler',
    value: function windowResizeHandler() {
      var wrapper = this.player.parentNode;
      var dimen = ComponentEvents.screen(wrapper.clienWidth);
      this.player.style.width = dimen[0] + 'px';
      this.player.style.height = dimen[1] + 'px';
      this.layer.style.width = dimen[0] + 'px';
      this.layer.style.height = dimen[1] + 'px';
      document.getElementById(this.controlLayerId).style.width = dimen[0] - 30 + 'px';
    }
  }, {
    key: 'hideComponent',
    value: function hideComponent(target) {
      target.classList.add('hide-me');
    }
  }, {
    key: 'showComponent',
    value: function showComponent(target) {
      if (target.classList.contains('hide-me')) target.classList.remove('hide-me');
    }
  }], [{
    key: 'screen',
    value: function screen() {
      var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 640;

      var ratio = 56.25;
      w = w === null ? 640 : w;
      w = w > window.innerWidth ? window.innerWidth : w;
      return [w, w * ratio / 100];
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

var _custom = require('./custom.controls');

var _custom2 = _interopRequireDefault(_custom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreatePlayer = function (_CustomControls) {
  _inherits(CreatePlayer, _CustomControls);

  function CreatePlayer() {
    _classCallCheck(this, CreatePlayer);

    var _this = _possibleConstructorReturn(this, (CreatePlayer.__proto__ || Object.getPrototypeOf(CreatePlayer)).call(this));

    window.addEventListener('resize', _this.windowResizeHandler.bind(_this));
    return _this;
  }

  _createClass(CreatePlayer, [{
    key: 'customize',
    value: function customize() {
      this.videoURL = this.player.getAttribute('src');
      var preload = this.player.getAttribute('preload') !== null;
      var autoload = this.player.getAttribute('autoload') !== null;
      var dimen = CreatePlayer.screen(this.player.getAttribute('data-width'));
      var currentParent = this.player.parentNode;
      var removedPosition = CreatePlayer.removeFrom(currentParent, this.player);
      var elem = document.createElement('video');
      elem.setAttribute('src', this.videoURL);
      elem.style.width = dimen[0] + 'px';
      elem.style.height = dimen[1] + 'px';
      if (autoload) elem.setAttribute('autoload', '');
      if (preload) elem.setAttribute('preload', '');
      this.player = elem;
      var wrapper = document.createElement('div');
      wrapper.appendChild(this.player);
      if (removedPosition) {
        currentParent.insertBefore(wrapper, removedPosition);
      } else {
        currentParent.appendChild(wrapper);
      }
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
      el.addEventListener('click', this.onLayerClick.bind(this));
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
  }], [{
    key: 'removeFrom',
    value: function removeFrom(parent, child) {
      for (var i = 0; parent.children.length > i; i++) {
        if (parent.children[i] === child) {
          parent.removeChild(child);
          return parent.children[i];
        }
      }
    }
  }]);

  return CreatePlayer;
}(_custom2.default);

exports.default = CreatePlayer;

},{"./custom.controls":12}],12:[function(require,module,exports){
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

var _pause = require('./buttons/pause.js');

var _pause2 = _interopRequireDefault(_pause);

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
            this.controlLayerId = this.idPrefix + '-em-player-controls';
            elem.setAttribute('id', this.controlLayerId);
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
            var playButtonCmp = (0, _play2.default)(this);
            playButtonCmp.addEventListener('click', this.onPlayButtonClickListener.bind(this));
            elem.appendChild(playButtonCmp);
            var pauseButtonCmp = (0, _pause2.default)(this);
            pauseButtonCmp.addEventListener('click', this.onPauseButtonClickListener.bind(this));
            elem.appendChild(pauseButtonCmp);
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

},{"./buttons/backward.js":2,"./buttons/forward.js":3,"./buttons/fullscreen.js":4,"./buttons/menu.js":5,"./buttons/pause.js":6,"./buttons/play.js":7,"./buttons/subtitle":8,"./buttons/volume.js":9,"./media.events.js":16,"./timer.js":18}],13:[function(require,module,exports){
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

},{"./initializer.js":14}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _create = require('./create.player');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Initializer = function (_CreatePlayer) {
    _inherits(Initializer, _CreatePlayer);

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
            _get(Initializer.prototype.__proto__ || Object.getPrototypeOf(Initializer.prototype), 'customize', this).call(this);
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
    }]);

    return Initializer;
}(_create2.default);

exports.default = Initializer;

},{"./create.player":11}],15:[function(require,module,exports){
"use strict";

},{}],16:[function(require,module,exports){
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
      var classContext = this;
      return {
        metadata: function metadata() {
          return new Promise(function (resolve, reject) {
            var resolved = false;
            context.addEventListener('loadedmetadata', function (event) {
              if (!resolved) {
                resolve(event);
                classContext.bindMediaEvents();
                resolved = true;
              }
            });
            context.addEventListener('loadeddata', function (event) {
              if (!resolved) {
                resolve(event);
                classContext.bindMediaEvents();
                resolved = true;
              }
            });

            context.addEventListener('load', function (event) {
              alert('what an event');
              if (!resolved) {
                resolve(event);
                classContext.bindMediaEvents();
                resolved = true;
              }
            });
            context.addEventListener('canplay', function (event) {
              if (!resolved) {
                resolve(event);
                classContext.bindMediaEvents();
                resolved = true;
              }
            });
            context.addEventListener('error', function (event) {
              reject(event);
            });
          });
        }
      };
    }
  }, {
    key: 'bindMediaEvents',
    value: function bindMediaEvents() {
      alert('hola');
      this.player.addEventListener('timeupdate', this.onTimeUpdate.bind(this));
      this.player.addEventListener('play', this.onPlayListener.bind(this));
      this.player.addEventListener('playing', this.onAfterPlayListener.bind(this));
      this.player.addEventListener('pause', this.onPauseListener.bind(this));
    }
  }, {
    key: 'onTimeUpdate',
    value: function onTimeUpdate() {
      this.elapsed = this.player.currentTime;
      this.duration = this.player.duration - this.player.currentTime;
      this.slider.setValue(this.player.currentTime);
    }
  }, {
    key: 'onPlayListener',
    value: function onPlayListener() {
      this.hideComponent(document.getElementById(this.playButtonId));
      this.showComponent(document.getElementById(this.pauseButtonId));
    }
  }, {
    key: 'onAfterPlayListener',
    value: function onAfterPlayListener() {
      this.hideComponent(document.getElementById(this.playButtonId));
      this.showComponent(document.getElementById(this.pauseButtonId));
    }
  }, {
    key: 'onPauseListener',
    value: function onPauseListener() {
      this.showComponent(document.getElementById(this.playButtonId));
      this.hideComponent(document.getElementById(this.pauseButtonId));
    }
  }]);

  return MediaEvents;
}(_componentEvents.ComponentEvents);

exports.default = MediaEvents;

},{"./component.events.js":10}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
