const FullscreenApi = {};

// browser API methods
const apiMap = [
  [
    'requestFullscreen',
    'exitFullscreen',
    'fullscreenElement',
    'fullscreenEnabled',
    'fullscreenchange',
    'fullscreenerror'
  ],
  // WebKit
  [
    'webkitRequestFullscreen',
    'webkitExitFullscreen',
    'webkitFullscreenElement',
    'webkitFullscreenEnabled',
    'webkitfullscreenchange',
    'webkitfullscreenerror'
  ],
  // Old WebKit (Safari 5.1)
  [
    'webkitRequestFullScreen',
    'webkitCancelFullScreen',
    'webkitCurrentFullScreenElement',
    'webkitCancelFullScreen',
    'webkitfullscreenchange',
    'webkitfullscreenerror'
  ],
  // Mozilla
  [
    'mozRequestFullScreen',
    'mozCancelFullScreen',
    'mozFullScreenElement',
    'mozFullScreenEnabled',
    'mozfullscreenchange',
    'mozfullscreenerror'
  ],
  // Microsoft
  [
    'msRequestFullscreen',
    'msExitFullscreen',
    'msFullscreenElement',
    'msFullscreenEnabled',
    'MSFullscreenChange',
    'MSFullscreenError'
  ]
];

const specApi = apiMap[0];
let browserApi;

for (let i = 0; i < apiMap.length; i++) {
  if (apiMap[i][1] in document) {
    browserApi = apiMap[i];
    break;
  }
}

if (browserApi) {
  for (let i = 0; i < browserApi.length; i++) {
    FullscreenApi[specApi[i]] = browserApi[i];
  }
}

export default FullscreenApi;
