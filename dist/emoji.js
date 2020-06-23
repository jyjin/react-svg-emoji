(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _locale = _interopRequireDefault(require("./locale"));

var _map = _interopRequireDefault(require("./map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const propTypes = {
  onSelect: _propTypes.default.func.isRequired,
  styles: _propTypes.default.object
};
const defaultProps = {
  styles: {
    panel: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    emoji: {
      margin: '2px',
      cursor: 'pointer'
    }
  }
};

const log = (info, data) => {
  console.log("[react-svg emoji] ".concat(info), data);
};

class Emoji extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  onSelect(data) {
    log('react', data);
    this.props.selectEmoji(data);
  }

  render() {
    const styles = this.props.styles || {};
    const emojis = _locale.default['zh_CN'];
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.panel
    }, Object.keys(emojis).map(item => {
      return /*#__PURE__*/_react.default.createElement("span", {
        key: item,
        style: styles.emoji,
        text: emojis[item],
        onClick: item => this.onSelect({
          type: item,
          text: emojis[item]
        })
      }, /*#__PURE__*/_react.default.createElement("embed", {
        src: _map.default[item.replace('-', '_')],
        width: "20",
        height: "20",
        type: "image/svg+xml",
        pluginspage: "http://www.adobe.com/svg/viewer/install/"
      }));
    }));
  }

}

Emoji.propTypes = propTypes;
Emoji.defaultProps = defaultProps;
window.Emoji = Emoji;
var _default = Emoji;
exports.default = _default;
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_8c906a31.js","/")
},{"+xKvab":64,"./locale":3,"./map":5,"buffer":63,"prop-types":70,"react":61}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "smile": "微笑",
  "happiness": "幸福",
  "disappointed": "难过",
  "excited": "兴奋",
  "wow": "哇",
  "cool": "得意",
  "cry": "大哭",
  "love": "色",
  "sleep": "睡",
  "cruse": "咒骂",
  "joy": "笑哭",
  "wink": "调皮",
  "grin": "开心",
  "kiss": "飞吻",
  "astonishted": "惊讶",
  "angry": "生气",
  "cold-sweating": "冒冷汗",
  "flare-up": "发怒",
  "confused": "困惑",
  "shut-up": "闭嘴",
  "yum": "好吃",
  "scream": "惊恐",
  "smirk": "坏笑",
  "explore": "探索",
  "grimace": "鬼脸",
  "ill": "感冒",
  "pensive": "忧伤",
  "shush": "嘘",
  "miser": "财迷",
  "relieve": "释然",
  "blush": "可爱",
  "mad": "抓狂",
  "wilted": "凋谢",
  "heartbreak": "心碎",
  "cupcake": "蛋糕",
  "poop": "便便",
  "gift": "礼物",
  "celebration": "庆祝",
  "pig": "猪头",
  "rose": "玫瑰花",
  "santa-claus": "圣诞老人",
  "yeah": "耶",
  "love-you": "爱你",
  "pray": "祈祷",
  "clap": "鼓掌",
  "OK": "OK",
  "thumbs-up": "赞",
  "thumbs-down": "踩",
  "lollipop": "棒棒糖",
  "french-fires": "薯条",
  "bottle": "奶瓶",
  "popcorn": "爆米花",
  "sun": "太阳",
  "trumpet": "喇叭",
  "strong": "强壮",
  "wave": "挥手"
};
exports.default = _default;
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/locale/en_US.js","/locale")
},{"+xKvab":64,"buffer":63}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _zh_CN = _interopRequireDefault(require("./zh_CN"));

var _en_US = _interopRequireDefault(require("./en_US"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  zh_CN: _zh_CN.default,
  en_US: _en_US.default
};
exports.default = _default;
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/locale/index.js","/locale")
},{"+xKvab":64,"./en_US":2,"./zh_CN":4,"buffer":63}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "smile": "微笑",
  "happiness": "幸福",
  "disappointed": "难过",
  "excited": "兴奋",
  "wow": "哇",
  "cool": "得意",
  "cry": "大哭",
  "love": "色",
  "sleep": "睡",
  "cruse": "咒骂",
  "joy": "笑哭",
  "wink": "调皮",
  "grin": "开心",
  "kiss": "飞吻",
  "astonishted": "惊讶",
  "angry": "生气",
  "cold-sweating": "冒冷汗",
  "flare-up": "发怒",
  "confused": "困惑",
  "shut-up": "闭嘴",
  "yum": "好吃",
  "scream": "惊恐",
  "smirk": "坏笑",
  "explore": "探索",
  "grimace": "鬼脸",
  "ill": "感冒",
  "pensive": "忧伤",
  "shush": "嘘",
  "miser": "财迷",
  "relieve": "释然",
  "blush": "可爱",
  "mad": "抓狂",
  "wilted": "凋谢",
  "heartbreak": "心碎",
  "cupcake": "蛋糕",
  "poop": "便便",
  "gift": "礼物",
  "celebration": "庆祝",
  "pig": "猪头",
  "rose": "玫瑰花",
  "santa-claus": "圣诞老人",
  "yeah": "耶",
  "love-you": "爱你",
  "pray": "祈祷",
  "clap": "鼓掌",
  "OK": "OK",
  "thumbs-up": "赞",
  "thumbs-down": "踩",
  "lollipop": "棒棒糖",
  "french-fires": "薯条",
  "bottle": "奶瓶",
  "popcorn": "爆米花",
  "sun": "太阳",
  "trumpet": "喇叭",
  "strong": "强壮",
  "wave": "挥手"
};
exports.default = _default;
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/locale/zh_CN.js","/locale")
},{"+xKvab":64,"buffer":63}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _smile = _interopRequireDefault(require("./svg/smile.svg"));

var _happiness = _interopRequireDefault(require("./svg/happiness.svg"));

var _disappointed = _interopRequireDefault(require("./svg/disappointed.svg"));

var _excited = _interopRequireDefault(require("./svg/excited.svg"));

var _wow = _interopRequireDefault(require("./svg/wow.svg"));

var _cool = _interopRequireDefault(require("./svg/cool.svg"));

var _cry = _interopRequireDefault(require("./svg/cry.svg"));

var _love = _interopRequireDefault(require("./svg/love.svg"));

var _sleep = _interopRequireDefault(require("./svg/sleep.svg"));

var _cruse = _interopRequireDefault(require("./svg/cruse.svg"));

var _joy = _interopRequireDefault(require("./svg/joy.svg"));

var _wink = _interopRequireDefault(require("./svg/wink.svg"));

var _grin = _interopRequireDefault(require("./svg/grin.svg"));

var _kiss = _interopRequireDefault(require("./svg/kiss.svg"));

var _astonishted = _interopRequireDefault(require("./svg/astonishted.svg"));

var _angry = _interopRequireDefault(require("./svg/angry.svg"));

var _coldSweating = _interopRequireDefault(require("./svg/cold-sweating.svg"));

var _flareUp = _interopRequireDefault(require("./svg/flare-up.svg"));

var _confused = _interopRequireDefault(require("./svg/confused.svg"));

var _shutUp = _interopRequireDefault(require("./svg/shut-up.svg"));

var _yum = _interopRequireDefault(require("./svg/yum.svg"));

var _scream = _interopRequireDefault(require("./svg/scream.svg"));

var _smirk = _interopRequireDefault(require("./svg/smirk.svg"));

var _explore = _interopRequireDefault(require("./svg/explore.svg"));

var _grimace = _interopRequireDefault(require("./svg/grimace.svg"));

var _ill = _interopRequireDefault(require("./svg/ill.svg"));

var _pensive = _interopRequireDefault(require("./svg/pensive.svg"));

var _shush = _interopRequireDefault(require("./svg/shush.svg"));

var _miser = _interopRequireDefault(require("./svg/miser.svg"));

var _relieve = _interopRequireDefault(require("./svg/relieve.svg"));

var _blush = _interopRequireDefault(require("./svg/blush.svg"));

var _mad = _interopRequireDefault(require("./svg/mad.svg"));

var _wilted = _interopRequireDefault(require("./svg/wilted.svg"));

var _heartbreak = _interopRequireDefault(require("./svg/heartbreak.svg"));

var _cupcake = _interopRequireDefault(require("./svg/cupcake.svg"));

var _poop = _interopRequireDefault(require("./svg/poop.svg"));

var _gift = _interopRequireDefault(require("./svg/gift.svg"));

var _celebration = _interopRequireDefault(require("./svg/celebration.svg"));

var _pig = _interopRequireDefault(require("./svg/pig.svg"));

var _rose = _interopRequireDefault(require("./svg/rose.svg"));

var _santaClaus = _interopRequireDefault(require("./svg/santa-claus.svg"));

var _yeah = _interopRequireDefault(require("./svg/yeah.svg"));

var _loveYou = _interopRequireDefault(require("./svg/love-you.svg"));

var _pray = _interopRequireDefault(require("./svg/pray.svg"));

var _clap = _interopRequireDefault(require("./svg/clap.svg"));

var _ok = _interopRequireDefault(require("./svg/ok.svg"));

var _thumbsUp = _interopRequireDefault(require("./svg/thumbs-up.svg"));

var _thumbsDown = _interopRequireDefault(require("./svg/thumbs-down.svg"));

var _lollipop = _interopRequireDefault(require("./svg/lollipop.svg"));

var _frenchFires = _interopRequireDefault(require("./svg/french-fires.svg"));

var _bottle = _interopRequireDefault(require("./svg/bottle.svg"));

var _popcorn = _interopRequireDefault(require("./svg/popcorn.svg"));

var _sun = _interopRequireDefault(require("./svg/sun.svg"));

var _strong = _interopRequireDefault(require("./svg/strong.svg"));

var _wave = _interopRequireDefault(require("./svg/wave.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import trumpet from './svg/trumpet.svg'
var _default = {
  smile: _smile.default,
  happiness: _happiness.default,
  disappointed: _disappointed.default,
  excited: _excited.default,
  wow: _wow.default,
  cool: _cool.default,
  cry: _cry.default,
  love: _love.default,
  sleep: _sleep.default,
  cruse: _cruse.default,
  joy: _joy.default,
  wink: _wink.default,
  grin: _grin.default,
  kiss: _kiss.default,
  astonishted: _astonishted.default,
  angry: _angry.default,
  cold_sweating: _coldSweating.default,
  flare_up: _flareUp.default,
  confused: _confused.default,
  shut_up: _shutUp.default,
  yum: _yum.default,
  scream: _scream.default,
  smirk: _smirk.default,
  explore: _explore.default,
  grimace: _grimace.default,
  ill: _ill.default,
  pensive: _pensive.default,
  shush: _shush.default,
  miser: _miser.default,
  relieve: _relieve.default,
  blush: _blush.default,
  mad: _mad.default,
  wilted: _wilted.default,
  heartbreak: _heartbreak.default,
  cupcake: _cupcake.default,
  poop: _poop.default,
  gift: _gift.default,
  celebration: _celebration.default,
  pig: _pig.default,
  rose: _rose.default,
  santa_claus: _santaClaus.default,
  yeah: _yeah.default,
  love_you: _loveYou.default,
  pray: _pray.default,
  clap: _clap.default,
  ok: _ok.default,
  thumbs_up: _thumbsUp.default,
  thumbs_down: _thumbsDown.default,
  lollipop: _lollipop.default,
  french_fires: _frenchFires.default,
  bottle: _bottle.default,
  popcorn: _popcorn.default,
  sun: _sun.default,
  // trumpet,
  strong: _strong.default,
  wave: _wave.default
};
exports.default = _default;
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/map.js","/")
},{"+xKvab":64,"./svg/angry.svg":6,"./svg/astonishted.svg":7,"./svg/blush.svg":8,"./svg/bottle.svg":9,"./svg/celebration.svg":10,"./svg/clap.svg":11,"./svg/cold-sweating.svg":12,"./svg/confused.svg":13,"./svg/cool.svg":14,"./svg/cruse.svg":15,"./svg/cry.svg":16,"./svg/cupcake.svg":17,"./svg/disappointed.svg":18,"./svg/excited.svg":19,"./svg/explore.svg":20,"./svg/flare-up.svg":21,"./svg/french-fires.svg":22,"./svg/gift.svg":23,"./svg/grimace.svg":24,"./svg/grin.svg":25,"./svg/happiness.svg":26,"./svg/heartbreak.svg":27,"./svg/ill.svg":28,"./svg/joy.svg":29,"./svg/kiss.svg":30,"./svg/lollipop.svg":31,"./svg/love-you.svg":32,"./svg/love.svg":33,"./svg/mad.svg":34,"./svg/miser.svg":35,"./svg/ok.svg":36,"./svg/pensive.svg":37,"./svg/pig.svg":38,"./svg/poop.svg":39,"./svg/popcorn.svg":40,"./svg/pray.svg":41,"./svg/relieve.svg":42,"./svg/rose.svg":43,"./svg/santa-claus.svg":44,"./svg/scream.svg":45,"./svg/shush.svg":46,"./svg/shut-up.svg":47,"./svg/sleep.svg":48,"./svg/smile.svg":49,"./svg/smirk.svg":50,"./svg/strong.svg":51,"./svg/sun.svg":52,"./svg/thumbs-down.svg":53,"./svg/thumbs-up.svg":54,"./svg/wave.svg":55,"./svg/wilted.svg":56,"./svg/wink.svg":57,"./svg/wow.svg":58,"./svg/yeah.svg":59,"./svg/yum.svg":60,"buffer":63}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#f0fbff;}.cls-4{fill:#f0f1f5;}</style><radialGradient id=\"未命名的渐变\" cx=\"-301.63\" cy=\"422.05\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 7251.22, 10137.11)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>生气</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path id=\"形状\" class=\"cls-2\" d=\"M13.33,8.67h-.11a.67.67,0,0,1-.54-.77A5.38,5.38,0,0,1,18,3.33a.67.67,0,0,1,0,1.34,4.08,4.08,0,0,0-4,3.44A.67.67,0,0,1,13.33,8.67Zm-2.66,0A.67.67,0,0,1,10,8.11,4.12,4.12,0,0,0,6,4.67.67.67,0,0,1,6,3.33a5.38,5.38,0,0,1,5.32,4.56.67.67,0,0,1-.54.77ZM7.61,11.93A5.12,5.12,0,0,1,5,11.22a.67.67,0,0,1,.74-1.11,4.15,4.15,0,0,0,4,0,.68.68,0,0,1,.9.3.66.66,0,0,1-.3.89A6,6,0,0,1,7.61,11.93Zm8.78,0a6,6,0,0,1-2.69-.67.66.66,0,0,1-.3-.89.68.68,0,0,1,.9-.3,4.15,4.15,0,0,0,4,0A.67.67,0,0,1,19,11.22a5.12,5.12,0,0,1-2.65.71ZM17.33,18a.65.65,0,0,1-.53-.27,6.59,6.59,0,0,0-4.8-2.4,6.57,6.57,0,0,0-4.8,2.41.67.67,0,0,1-1.07-.81A7.83,7.83,0,0,1,12,14a7.83,7.83,0,0,1,5.87,2.93.67.67,0,0,1-.14.94.66.66,0,0,1-.4.13Z\"/><path class=\"cls-3\" d=\"M10.26,13.39a.67.67,0,0,0-.83.26L6.1,19a.69.69,0,0,0,0,.68.67.67,0,0,0,.59.34h2a.66.66,0,0,0,.64-.51l1.34-5.33a.66.66,0,0,0-.39-.77ZM17.9,19l-3.33-5.33a.67.67,0,0,0-.83-.26.66.66,0,0,0-.39.77l1.34,5.33a.66.66,0,0,0,.64.51h2a.67.67,0,0,0,.59-.34.69.69,0,0,0,0-.68Z\"/><path class=\"cls-4\" d=\"M21.32,20.12s0-.08,0-.12a2,2,0,0,0-2-2,2,2,0,0,0-1.65.87,2.6,2.6,0,0,0-1-.2,2.67,2.67,0,1,0,2.19,4.18,2,2,0,1,0,2.46-2.73Zm-14-1.45a2.6,2.6,0,0,0-1,.2A2,2,0,0,0,4.67,18a2,2,0,0,0-2,2s0,.08,0,.12a2,2,0,1,0,2.46,2.73,2.67,2.67,0,1,0,2.19-4.18Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/angry.svg","/svg")
},{"+xKvab":64,"buffer":63}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.5\" cy=\"365.85\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5760.08, 8788.19)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>惊讶</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><ellipse id=\"椭圆形\" class=\"cls-2\" cx=\"12\" cy=\"16.67\" rx=\"2.67\" ry=\"3.33\"/><ellipse class=\"cls-2\" cx=\"8\" cy=\"9\" rx=\"1.67\" ry=\"2.33\"/><ellipse class=\"cls-2\" cx=\"16\" cy=\"9\" rx=\"1.67\" ry=\"2.33\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/astonishted.svg","/svg")
},{"+xKvab":64,"buffer":63}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#ff8987;}.cls-3{fill:#662e00;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.08\" cy=\"365.85\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5750, 8788.19)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>可爱</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><circle id=\"椭圆形\" class=\"cls-2\" cx=\"4.67\" cy=\"12\" r=\"3.33\"/><circle class=\"cls-2\" cx=\"19.33\" cy=\"12\" r=\"3.33\"/><path id=\"形状\" class=\"cls-3\" d=\"M18.22,14.42a.33.33,0,0,0-.42,0A10.85,10.85,0,0,1,12,16.33,10.89,10.89,0,0,1,6.2,14.4a.33.33,0,0,0-.42,0,.34.34,0,0,0-.07.42A7.68,7.68,0,0,0,12,18.33a7.68,7.68,0,0,0,6.29-3.49.34.34,0,0,0-.07-.42ZM5.33,10A.59.59,0,0,1,5,9.93a.67.67,0,0,1-.3-.9A3.56,3.56,0,0,1,8,7.33,3.53,3.53,0,0,1,11.26,9a.66.66,0,0,1-.3.89.68.68,0,0,1-.89-.29A2.25,2.25,0,0,0,8,8.67a2.27,2.27,0,0,0-2.07,1A.66.66,0,0,1,5.33,10Zm13.34,0a.66.66,0,0,1-.6-.37,2.28,2.28,0,0,0-2.07-1,2.25,2.25,0,0,0-2.07,1,.68.68,0,0,1-.9.28A.66.66,0,0,1,12.74,9,3.56,3.56,0,0,1,16,7.33,3.53,3.53,0,0,1,19.26,9a.66.66,0,0,1-.59,1Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/blush.svg","/svg")
},{"+xKvab":64,"buffer":63}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#ffad29;}.cls-2{fill:#dadfe8;}.cls-3{fill:#4eb5ff;}.cls-4{fill:#a3acbf;}</style></defs><title>50-喝奶</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M21.7,4.75c0-.94.48-.47.95-.94,1-.94,1.42-2.36.48-3.3S20.77.05,19.83,1c-.47.47,0,1-.94,1H15.12l.47.46S18,5.7,18.42,5.23c-.47.47,2.82,2.83,2.82,2.83l.46.47Z\"/><path class=\"cls-2\" d=\"M20.3,9.94,17,6.64l-3.3-3.3c-.47.47-2.82,0-3.77.94l-.47.47L8.05,6.17.78,13.43a2.68,2.68,0,0,0,0,3.78l5.66,5.65a2.67,2.67,0,0,0,3.77,0l6.6-6.6,2.08-2.08.47-.47C20.3,12.77,19.83,10.41,20.3,9.94Z\"/><path class=\"cls-3\" d=\"M21.48,9.7c-.65.65-1.23,1.13-1.88.47L13.47,4.05c-.65-.65-.18-1.24.47-1.89a1.67,1.67,0,0,1,2.36,0l5.18,5.19A1.66,1.66,0,0,1,21.48,9.7Z\"/><path id=\"形状\" class=\"cls-4\" d=\"M8.37,21.27a.66.66,0,0,1-.47-.19.68.68,0,0,1,0-.95l8-8a.66.66,0,0,1,.94,0,.68.68,0,0,1,0,.95l-8,8A.66.66,0,0,1,8.37,21.27ZM5.7,18.61a.67.67,0,0,1-.47-1.14l8-8a.68.68,0,0,1,.95,0,.66.66,0,0,1,0,.94l-8,8A.67.67,0,0,1,5.7,18.61ZM3,15.94a.67.67,0,0,1-.47-1.14l8-8a.66.66,0,0,1,.94.94l-8,8A.67.67,0,0,1,3,15.94Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/bottle.svg","/svg")
},{"+xKvab":64,"buffer":63}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#f83640;}.cls-2{fill:#ff8987;}.cls-3{fill:#ab1325;}.cls-4{fill:#9080ff;}.cls-5{fill:#56a32c;}.cls-6{fill:#ffcc4d;}</style></defs><title>38-庆祝</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M7.54,4.48a.78.78,0,0,0-.17.26h0L.09,21.12h0c-.13.26.09.79.56,1.25s1,.69,1.25.56h0L18.3,15.67h0a.78.78,0,0,0,.26-.17c1-1-.63-4.3-3.67-7.34S8.56,3.47,7.54,4.48Z\"/><path class=\"cls-2\" d=\"M8.43,7.41.27,20.71l-.18.41h0c-.13.26.09.79.56,1.25a2.14,2.14,0,0,0,.46.36L11,10.65Z\"/><path class=\"cls-3\" d=\"M14.93,8.1c3,3,4.71,6.26,3.75,7.21s-4.18-.72-7.22-3.75S6.75,5.3,7.71,4.34s4.19.73,7.22,3.76Z\"/><path class=\"cls-4\" d=\"M12.06,8.45a.63.63,0,0,1-.48.14A2.38,2.38,0,0,1,10.21,8a1.41,1.41,0,0,1-.47-1.2c.08-.78.86-1.49,2.18-1.34.51,0,.74-.11.75-.19S12.49,5,12,4.94a2.38,2.38,0,0,1-1.37-.56,1.45,1.45,0,0,1-.48-1.21c.09-.78.86-1.49,2.18-1.34A1.07,1.07,0,0,0,13,1.74c.07,0,.09-.08.09-.1s-.17-.29-.69-.35A.64.64,0,0,1,11.8.58.64.64,0,0,1,12.51,0c1.32.15,1.93,1,1.84,1.78s-.85,1.48-2.18,1.34a1,1,0,0,0-.65.09c-.07,0-.1.08-.1.1s.18.29.7.34c1.32.15,1.92,1,1.84,1.78s-.86,1.48-2.18,1.34a1.1,1.1,0,0,0-.66.08c-.06,0-.09.08-.09.11s.18.28.69.34A.65.65,0,0,1,12.3,8a.65.65,0,0,1-.24.43Z\"/><path class=\"cls-5\" d=\"M19.89,14.45c1.28-.36,2.16.21,2.37,1S22,17.1,20.74,17.46c-.5.14-.65.38-.63.46s.27.2.77.06c1.28-.36,2.16.21,2.37,1S23,20.64,21.73,21c-.5.14-.65.38-.63.45s.28.2.77.06a.65.65,0,0,1,.8.45.64.64,0,0,1-.45.8,1.77,1.77,0,0,1-2.37-1c-.21-.75.25-1.69,1.53-2.05.5-.14.65-.38.62-.46s-.27-.2-.77-.06c-1.28.36-2.16-.21-2.37-1s.24-1.7,1.52-2.06c.5-.14.65-.38.63-.45s-.27-.2-.77-.06a.66.66,0,0,1-.8-.45.64.64,0,0,1,.45-.8Z\"/><path class=\"cls-4\" d=\"M14.92,12.7a.65.65,0,0,1-.51-.24.66.66,0,0,1,.1-.92,11.49,11.49,0,0,1,8.28-2.08.65.65,0,1,1-.18,1.29,10.26,10.26,0,0,0-7.29,1.81.67.67,0,0,1-.4.14Z\"/><path class=\"cls-5\" d=\"M3.73,10l-.18,0a.64.64,0,0,1-.44-.8c.74-2.45,1.4-6.36.58-7.37a.55.55,0,0,0-.54-.21c-.61,0-.55,1.33-.55,1.34A.65.65,0,0,1,1.3,3C1.24,2.14,1.52.41,3.05.3A1.87,1.87,0,0,1,4.71,1c1.53,1.92,0,7.47-.36,8.56A.64.64,0,0,1,3.73,10Z\"/><circle id=\"椭圆形\" class=\"cls-5\" cx=\"16.54\" cy=\"5.79\" r=\"1\"/><circle class=\"cls-4\" cx=\"1.3\" cy=\"11.3\" r=\"1.3\"/><circle class=\"cls-5\" cx=\"21.08\" cy=\"12.27\" r=\"1\"/><circle class=\"cls-5\" cx=\"15.24\" cy=\"20.06\" r=\"1\"/><circle class=\"cls-6\" cx=\"18.16\" cy=\"2.22\" r=\"1.3\"/><circle class=\"cls-6\" cx=\"21.08\" cy=\"5.14\" r=\"1\"/><circle class=\"cls-6\" cx=\"19.14\" cy=\"7.73\" r=\"1\"/><circle class=\"cls-6\" cx=\"4.86\" cy=\"14.87\" r=\"1\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/celebration.svg","/svg")
},{"+xKvab":64,"buffer":63}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#d2a077;}.cls-2{fill:#ff9500;}.cls-3{fill:#f3d2a2;}</style></defs><title>44-鼓掌</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M21.51,16.2c-.46-.67-.2-1.64-.32-2.72a7.17,7.17,0,0,0-2.33-4.81L13.88,4a1.34,1.34,0,0,0-1.82,2l2.1,2L16,9.66s-.46.49-2.47-1.39L6.69,1.93A1.31,1.31,0,0,0,4.8,2a1.32,1.32,0,0,0,.07,1.9l6.44,6s-.49.46-.5.45L3.92,3.93A1.31,1.31,0,0,0,2,4,1.3,1.3,0,0,0,2.1,5.89L9,12.3s-.44.51-.42.53L2.62,7.29a1.31,1.31,0,0,0-1.89.07A1.31,1.31,0,0,0,.8,9.26l6.32,5.88c.06,0-.34.6-.26.67L2.3,11.57a1.31,1.31,0,0,0-1.89.07,1.31,1.31,0,0,0,.07,1.9l7.43,6.9a7.09,7.09,0,0,0,4.05,2c.31,0,.71,0,.87.06a4,4,0,0,1,1.59.62,2.14,2.14,0,0,0,2.63,0l2.3-2.46,2.13-2.28a1.46,1.46,0,0,0,0-2.1Z\"/><path id=\"形状\" class=\"cls-2\" d=\"M1.28,23.32a.66.66,0,0,1-.47-.19.68.68,0,0,1,0-.95l2.37-2.36a.66.66,0,1,1,.94.94L1.75,23.13A.66.66,0,0,1,1.28,23.32Zm4.5.62a.85.85,0,0,1-.22,0,.67.67,0,0,1-.41-.85L5.8,21.2a.66.66,0,1,1,1.25.44l-.64,1.85a.69.69,0,0,1-.63.45ZM.67,18.83a.67.67,0,0,1-.23-1.3l1.67-.59a.67.67,0,1,1,.44,1.26l-1.66.59a.93.93,0,0,1-.22,0ZM20.31,4.31a.66.66,0,0,1-.47-.19.65.65,0,0,1,0-.94L22.2.81a.68.68,0,0,1,.95,0,.66.66,0,0,1,0,.94L20.78,4.12a.66.66,0,0,1-.47.19ZM17.53,3.18a.57.57,0,0,1-.22,0,.66.66,0,0,1-.41-.84L17.55.45A.67.67,0,0,1,18.4,0a.67.67,0,0,1,.41.85l-.65,1.85a.67.67,0,0,1-.63.44ZM21.63,7a.66.66,0,0,1-.23-1.29l1.67-.59a.67.67,0,1,1,.44,1.26L21.85,7a.6.6,0,0,1-.22,0Z\"/><path class=\"cls-3\" d=\"M23.57,15.85c-.44-.69-.15-1.65-.23-2.73a7.12,7.12,0,0,0-2.17-4.88l-4.82-4.8a1.31,1.31,0,0,0-1.89,0,1.3,1.3,0,0,0,0,1.89l2,2,1.76,1.75s-.47.48-2.42-1.46L9.24,1.09a1.31,1.31,0,0,0-1.89,0A1.3,1.3,0,0,0,7.35,3L13.59,9.2s-.5.44-.51.43L6.4,3A1.31,1.31,0,0,0,4.51,3a1.3,1.3,0,0,0,0,1.89l6.68,6.64s-.46.5-.44.51L5,6.31a1.32,1.32,0,0,0-1.9,0,1.31,1.31,0,0,0,0,1.89L9.22,14.3c.06.06-.35.6-.28.67L4.53,10.58a1.34,1.34,0,1,0-1.89,1.9l7.19,7.15a7,7,0,0,0,4,2.09c.31.06.71.07.88.1a3.87,3.87,0,0,1,1.56.67,2.13,2.13,0,0,0,2.63.05l2.38-2.39L23.47,18a1.46,1.46,0,0,0,.1-2.1Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/clap.svg","/svg")
},{"+xKvab":64,"buffer":63}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#ffcc4d;}.cls-2{fill:#662e00;}.cls-3{fill:#4db5ff;}.cls-4{fill:#c7edff;}</style></defs><title>17-冒冷汗</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><ellipse id=\"椭圆形\" class=\"cls-2\" cx=\"7.67\" cy=\"11\" rx=\"1.67\" ry=\"2.33\"/><ellipse class=\"cls-2\" cx=\"16.33\" cy=\"11\" rx=\"1.67\" ry=\"2.33\"/><path class=\"cls-2\" d=\"M15.66,18.59A3.93,3.93,0,0,0,12,15.67a3.93,3.93,0,0,0-3.66,2.92A.34.34,0,0,0,8.5,19a.35.35,0,0,0,.4,0s.67-.58,3.1-.58,3.08.56,3.1.58a.35.35,0,0,0,.23.09.33.33,0,0,0,.17,0A.35.35,0,0,0,15.66,18.59Z\"/><path class=\"cls-3\" d=\"M6.67,20A3.34,3.34,0,0,1,0,20c0-1.84,2.67-6.67,3.33-6.67S6.67,18.16,6.67,20Z\"/><path class=\"cls-4\" d=\"M12,7.33c5.83,0,10.69,3,11.77,7A11.85,11.85,0,0,0,24,12,12,12,0,0,0,0,12a11.85,11.85,0,0,0,.23,2.32C1.31,10.34,6.17,7.33,12,7.33Z\"/><path id=\"形状\" class=\"cls-2\" d=\"M20,8a5.91,5.91,0,0,1-5.26-3A.66.66,0,0,1,15,4.07a.68.68,0,0,1,.9.3A4.61,4.61,0,0,0,20,6.67.67.67,0,1,1,20,8ZM4,8A.67.67,0,1,1,4,6.67c3.39,0,4-2.08,4-2.17A.66.66,0,0,1,8.83,4a.65.65,0,0,1,.48.8C9.28,5,8.47,8,4,8Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/cold-sweating.svg","/svg")
},{"+xKvab":64,"buffer":63}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}</style><radialGradient id=\"未命名的渐变\" cx=\"-259.24\" cy=\"377.16\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 6233.67, 9059.68)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>19-困惑</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><g id=\"第三排\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path id=\"形状\" class=\"cls-2\" d=\"M4,8.67A.67.67,0,0,1,4,7.33a5.58,5.58,0,0,0,4.13-2.4.68.68,0,0,1,.94-.13.67.67,0,0,1,.13.93A7,7,0,0,1,4,8.67Zm16,0a7,7,0,0,1-5.2-2.94.67.67,0,0,1,.13-.93.68.68,0,0,1,.94.13A5.6,5.6,0,0,0,20,7.33a.67.67,0,0,1,0,1.34Zm.4,4.8a12.2,12.2,0,0,0-3.1-1.57.85.85,0,0,0,0-.23,1,1,0,0,0-.24-.65,9.5,9.5,0,0,1,2.24-.35.67.67,0,0,0,0-1.34,9.08,9.08,0,0,0-5.8,2.2.68.68,0,0,0-.15.73.69.69,0,0,0,.62.41,10.53,10.53,0,0,1,5.6,1.86.67.67,0,0,0,.4.14.68.68,0,0,0,.53-.27.67.67,0,0,0-.13-.93Zm-9.93-1.94a9.08,9.08,0,0,0-5.8-2.2.67.67,0,0,0,0,1.34A9.5,9.5,0,0,1,6.91,11a1,1,0,0,0-.24.65.85.85,0,0,0,0,.23,12.2,12.2,0,0,0-3.1,1.57.67.67,0,0,0-.13.93.68.68,0,0,0,.53.27.67.67,0,0,0,.4-.14A10.44,10.44,0,0,1,10,12.67a.69.69,0,0,0,.62-.41.68.68,0,0,0-.15-.73ZM12,20a.67.67,0,0,1-.52-.25L9.35,17.09l-1.48,2a.68.68,0,0,1-.49.26.68.68,0,0,1-.52-.19l-.66-.67a.65.65,0,0,1,0-.94.66.66,0,0,1,.94,0l.12.12,1.54-2a.67.67,0,0,1,.52-.27.69.69,0,0,1,.53.25L12,18.27l2.15-2.69a.66.66,0,0,1,.53-.25.67.67,0,0,1,.52.27l1.54,2,.12-.12a.68.68,0,0,1,.95,0,.66.66,0,0,1,0,.94l-.67.67a.66.66,0,0,1-.52.19.68.68,0,0,1-.49-.26l-1.48-2-2.13,2.66A.67.67,0,0,1,12,20Z\"/></g></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/confused.svg","/svg")
},{"+xKvab":64,"buffer":63}],14:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#020e27;fill-rule:evenodd;}.cls-3{fill:#662e00;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.93\" cy=\"365.85\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5770.4, 8788.19)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>6-得意</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><g id=\"第一排\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path class=\"cls-2\" d=\"M.83,7.35C1,7.5,1.79,8,1.94,8.46s.48,3.19,1.44,4,4.72.52,5.44.16c1.59-.8,1.79-3,2.07-4.15.16-.64,1.12-.64,1.12-.64s1,0,1.12.64c.28,1.13.48,3.35,2.08,4.15.71.36,4.44.66,5.43-.16s1.28-3.51,1.44-4,1-1,1.11-1.11a1,1,0,0,0,0-1c-.32-.32-4.09-.6-8.14-.16a14.09,14.09,0,0,1-3,.32,14.09,14.09,0,0,1-3-.32c-4.05-.44-7.82-.16-8.14.16a1,1,0,0,0,0,1Z\"/><path class=\"cls-3\" d=\"M18.22,15.75a.35.35,0,0,0-.42,0A10.82,10.82,0,0,1,12,17.67a10.86,10.86,0,0,1-5.8-1.94.35.35,0,0,0-.42,0,.34.34,0,0,0-.07.42A7.68,7.68,0,0,0,12,19.67a7.68,7.68,0,0,0,6.29-3.5.34.34,0,0,0-.07-.42Z\"/></g></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/cool.svg","/svg")
},{"+xKvab":64,"buffer":63}],15:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#292f33;}.cls-3{fill:#fff;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.22\" cy=\"365.85\" r=\"0.68\" gradientTransform=\"matrix(24, 0, 0, -24, 5753.36, 8788.19)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ff6264\"/><stop offset=\"1\" stop-color=\"#f83640\"/></radialGradient></defs><title>10-骂咒</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path id=\"形状\" class=\"cls-2\" d=\"M10.47,10.2A9.08,9.08,0,0,0,4.67,8a.67.67,0,1,0,0,1.33,9.5,9.5,0,0,1,2.65.49,2.76,2.76,0,0,0-.65,1.85C6.67,13,7.41,14,8.33,14S10,13,10,11.67c0-.12,0-.23,0-.34h0a.66.66,0,0,0,.47-1.13ZM19.33,8a9.08,9.08,0,0,0-5.8,2.2A.66.66,0,0,0,14,11.33h0c0,.11,0,.22,0,.34C14,13,14.75,14,15.67,14s1.66-1,1.66-2.33a2.76,2.76,0,0,0-.65-1.85,9.5,9.5,0,0,1,2.65-.49.67.67,0,1,0,0-1.33Z\"/><path class=\"cls-2\" d=\"M19.83,22H4.17a1.51,1.51,0,0,1-1.5-1.51V16.67a1.51,1.51,0,0,1,1.5-1.51H19.83a1.51,1.51,0,0,1,1.5,1.51v3.82A1.51,1.51,0,0,1,19.83,22Z\"/><path class=\"cls-3\" d=\"M5.23,18.09H4.68a.31.31,0,0,1,0-.62h.64l.13-1c0-.24.13-.32.32-.32a.28.28,0,0,1,.29.26.86.86,0,0,1,0,.16l-.13.94h.61l.14-1c0-.24.13-.31.32-.31a.27.27,0,0,1,.29.25.86.86,0,0,1,0,.16l-.13.94h.55a.31.31,0,0,1,0,.62H7.05l-.1.74H7.5a.31.31,0,0,1,0,.62H6.86L6.72,20.5c0,.23-.12.31-.31.31a.28.28,0,0,1-.3-.26.47.47,0,0,1,0-.16l.12-.94h-.6L5.51,20.5c0,.23-.13.31-.32.31a.28.28,0,0,1-.29-.26.92.92,0,0,1,0-.16L5,19.45H4.49a.31.31,0,0,1,0-.62h.64Zm.51.74h.6l.1-.74h-.6Zm3.08-1.7a1,1,0,1,1,1,1A1,1,0,0,1,8.82,17.13Zm1.3,0a.33.33,0,1,0-.66,0,.33.33,0,1,0,.66,0Zm1.54-.89c.09-.16.15-.2.3-.2a.37.37,0,0,1,.37.36.33.33,0,0,1-.05.19l-2.13,4.08c-.1.14-.13.21-.29.21a.39.39,0,0,1-.36-.35.49.49,0,0,1,.07-.24Zm-.61,3.56a1,1,0,1,1,1,1.05A1,1,0,0,1,11.05,19.8Zm1.3,0a.33.33,0,1,0-.66,0,.33.33,0,1,0,.66,0Zm1.66.54a.5.5,0,1,1,.5.51A.5.5,0,0,1,14,20.34Zm0-3.82a.46.46,0,0,1,.91,0V19a.46.46,0,0,1-.91,0Zm5.38,4.36a.32.32,0,0,1-.28-.13l-.49-.54,0,.05a1.9,1.9,0,0,1-1.35.62,1.37,1.37,0,0,1-1.49-1.39,1.7,1.7,0,0,1,.92-1.41l.08,0L16.72,18a1.21,1.21,0,0,1-.4-.87A1.13,1.13,0,0,1,17.58,16c.51,0,1.23.31,1.23,1A1.38,1.38,0,0,1,18,18.15L18,18.2l.78.91.29-.37c.17-.2.27-.28.44-.28a.31.31,0,0,1,.28.35,1.21,1.21,0,0,1-.33.6l-.2.23.47.57a.38.38,0,0,1,.12.29.39.39,0,0,1-.38.38Zm-2.29-2.36a1.06,1.06,0,0,0-.58.88.69.69,0,0,0,.73.73,1.14,1.14,0,0,0,.85-.41l0,0-1-1.19,0,0Zm.44-1.85a.44.44,0,0,0-.44.41c0,.24.11.38.35.63l0,0,0,0c.33-.17.5-.37.5-.59a.45.45,0,0,0-.49-.46Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/cruse.svg","/svg")
},{"+xKvab":64,"buffer":63}],16:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#4db5ff;}.cls-4{fill:#ff5e61;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.5\" cy=\"365.85\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5760.08, 8788.19)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>7-大哭</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><g id=\"第一排\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path id=\"形状\" class=\"cls-2\" d=\"M14.67,18c0,1.84-1.2,2-2.67,2s-2.67-.16-2.67-2,1.2-4,2.67-4S14.67,16.16,14.67,18ZM20,10a.74.74,0,0,1-.25-.05,11,11,0,0,1-5-3.58.67.67,0,1,1,1.11-.74,9.89,9.89,0,0,0,4.36,3.08.67.67,0,0,1,.37.87A.68.68,0,0,1,20,10ZM4,10a.68.68,0,0,1-.62-.42.67.67,0,0,1,.37-.87A9.89,9.89,0,0,0,8.11,5.63a.67.67,0,0,1,1.11.74,11,11,0,0,1-5,3.58A.74.74,0,0,1,4,10Z\"/><path class=\"cls-3\" d=\"M16,10.67h2.67V23.33L16,23.3ZM5.33,23.33,8,23.3V10.67H5.33Z\"/><path class=\"cls-2\" d=\"M10,12a.66.66,0,0,1-.3-.07,5.75,5.75,0,0,0-4.73,0,.67.67,0,1,1-.6-1.19,7.06,7.06,0,0,1,5.93,0A.66.66,0,0,1,10,12Zm9.33,0a.59.59,0,0,1-.29-.07,5.77,5.77,0,0,0-4.74,0,.67.67,0,1,1-.6-1.19,7.06,7.06,0,0,1,5.93,0,.66.66,0,0,1-.3,1.26Z\"/><ellipse id=\"椭圆形\" class=\"cls-3\" cx=\"12\" cy=\"22.67\" rx=\"12\" ry=\"1.33\"/><ellipse class=\"cls-4\" cx=\"12\" cy=\"18\" rx=\"2\" ry=\"1.33\"/></g></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/cry.svg","/svg")
},{"+xKvab":64,"buffer":63}],17:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#9eddff;}.cls-2{fill:#662113;}.cls-3{fill:#c1694f;}.cls-4{fill:#4db5ff;}.cls-5{fill:#ffe5a3;}.cls-6{fill:#ffc252;}.cls-7{fill:#f8353f;}.cls-8{fill:#2196f3;}.cls-9{fill:#75c940;}.cls-10{fill:#ff9500;}.cls-11{fill:#6354f4;}</style></defs><title>35-蛋糕</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M1.34,14.2s1,3.71,1.3,5.5c.3,2,2.31,3.61,7.13,3.61s6.84-1.59,7.14-3.61c.26-1.79,1.29-5.5,1.29-5.5Z\"/><path class=\"cls-2\" d=\"M1.4,14.26c.16.79.45,1.29.87,1s1.07-.12.87.41.63.71,1,.42,1-.57,1.07,0a.61.61,0,0,0,1.08.31.85.85,0,0,1,1.37.26c.17.52,1,.45,1.28.08a1,1,0,0,1,.85-.57v0c.39,0,.62.25.85.59s1.12.44,1.28-.08a.86.86,0,0,1,1.38-.26.6.6,0,0,0,1.07-.31c.07-.61.75-.31,1.08,0s1.15.06,1-.42.45-.67.87-.41.71-.24.87-1Z\"/><path class=\"cls-3\" d=\"M19.5,12.31c0-3.19-4.36-5.78-9.75-5.78S0,9.12,0,12.31c0,2.58,5.84,3.91,9.75,3.91S19.5,14.93,19.5,12.31Z\"/><path id=\"形状\" class=\"cls-4\" d=\"M9.77,23a.32.32,0,0,1-.32-.32V17.1a.32.32,0,0,1,.32-.32.32.32,0,0,1,.33.32v5.61A.32.32,0,0,1,9.77,23Zm-4.34-.82a.32.32,0,0,1-.32-.28l-.67-5.18a.31.31,0,0,1,.28-.36.32.32,0,0,1,.36.28l.67,5.18a.32.32,0,0,1-.28.36Zm2.06.63a.31.31,0,0,1-.32-.29L6.71,17A.32.32,0,1,1,7.35,17l.46,5.52a.32.32,0,0,1-.29.35Zm-3.87-2a.24.24,0,0,1-.23-.19l-1-4.83a.24.24,0,0,1,.48-.09l1,4.82a.25.25,0,0,1-.19.29Zm10.45,1.27H14a.32.32,0,0,1-.27-.37l.73-5.11a.33.33,0,0,1,.37-.27.32.32,0,0,1,.27.37l-.73,5.1A.33.33,0,0,1,14.07,22.14Zm-2,.7h0a.33.33,0,0,1-.3-.35L12.23,17a.34.34,0,0,1,.35-.3.33.33,0,0,1,.3.35l-.46,5.53A.33.33,0,0,1,12.09,22.84ZM16,20.9h0a.23.23,0,0,1-.19-.28l.93-4.85a.24.24,0,0,1,.48.09l-.94,4.85a.24.24,0,0,1-.24.2Z\"/><path class=\"cls-5\" d=\"M9.07,0a2.51,2.51,0,0,0,1.41.76C12,.79,13.3,1.61,13.3,3c0,0,3.42,0,3.53,3,0,0,1.73,0,2.12,3,.29,2.25-2,5.34-9.18,5.31C3.42,14.37.17,12.11.6,9.09a3.21,3.21,0,0,1,2.82-3S3,2.27,7.65,2.27A5.54,5.54,0,0,1,9.07,0Z\"/><path class=\"cls-6\" d=\"M9.71,6.82c1.91-.72,3.65-2,3.59-3.79a2,2,0,0,0-.55-1.38c.42,1.82-2.37,3.9-5.45,4.22C3.45,6.28,3.89,4,3.89,4h0a3.69,3.69,0,0,0-.47,2C4,7.61,7,7.83,9.71,6.82Z\"/><path class=\"cls-6\" d=\"M16.83,6.06a2.3,2.3,0,0,0,0-.26,5.09,5.09,0,0,0-.5-1.38A2.28,2.28,0,0,0,15.89,4c.72,2.87-3.61,6.32-7.74,7.12C2.77,12.13.6,9.1.6,9.1A3.75,3.75,0,0,0,2.83,13C9.47,15.68,16.89,9,16.83,6.06Z\"/><path class=\"cls-7\" d=\"M3.73,9.22l-.76,1a.66.66,0,0,1-.91.14.65.65,0,0,1-.14-.91l.77-1.05a.64.64,0,0,1,.9-.14.65.65,0,0,1,.14.91Z\"/><path class=\"cls-8\" d=\"M7.78,5.32,6.52,5.05A.65.65,0,0,1,6,4.28a.64.64,0,0,1,.77-.5l1.27.27a.64.64,0,0,1,.49.77A.65.65,0,0,1,7.78,5.32Z\"/><path class=\"cls-9\" d=\"M8.75,9.2l.86,1a.65.65,0,0,1-.07.91A.64.64,0,0,1,8.63,11l-.85-1a.64.64,0,0,1,1-.85Z\"/><path class=\"cls-10\" d=\"M13.91,7.47l-1.22.45a.64.64,0,0,1-.83-.37.65.65,0,0,1,.37-.84l1.22-.46a.65.65,0,0,1,.46,1.22Z\"/><path class=\"cls-11\" d=\"M17.79,9.12l-.64,1.12a.65.65,0,0,1-.89.24A.64.64,0,0,1,16,9.6l.65-1.13a.65.65,0,0,1,.89-.23.64.64,0,0,1,.23.88Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/cupcake.svg","/svg")
},{"+xKvab":64,"buffer":63}],18:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.22\" cy=\"365.85\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5753.36, 8788.19)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>难过</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><g id=\"第一排\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path id=\"形状\" class=\"cls-2\" d=\"M15.66,19.25A3.93,3.93,0,0,0,12,16.33a3.93,3.93,0,0,0-3.66,2.92.35.35,0,0,0,.16.37.37.37,0,0,0,.4,0S9.57,19,12,19s3.08.55,3.1.58a.35.35,0,0,0,.23.09.35.35,0,0,0,.33-.42ZM19.33,8a5.91,5.91,0,0,1-5.26-3,.66.66,0,0,1,1.19-.59,4.63,4.63,0,0,0,4.07,2.3.67.67,0,1,1,0,1.33ZM4.67,8a.67.67,0,1,1,0-1.33c3.39,0,4-2.08,4-2.17A.67.67,0,0,1,10,4.83C10,5,9.14,8,4.67,8Z\"/><ellipse id=\"椭圆形\" class=\"cls-2\" cx=\"8\" cy=\"11\" rx=\"1.67\" ry=\"2.33\"/><ellipse class=\"cls-2\" cx=\"16\" cy=\"11\" rx=\"1.67\" ry=\"2.33\"/></g></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/disappointed.svg","/svg")
},{"+xKvab":64,"buffer":63}],19:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#664500;}.cls-3{fill:#662e00;}.cls-4{fill:#e2a62d;}.cls-5{fill:#f8353f;}.cls-6{fill:#ff8383;}.cls-7{fill:#2296f3;}.cls-8{fill:#9eddff;}.cls-9{fill:#0754a6;}.cls-10{fill:#4eb5ff;}.cls-11{fill:#ff5e61;}.cls-12{fill:#75c940;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.18\" cy=\"364.98\" r=\"0.77\" gradientTransform=\"matrix(22.67, 0, 0, -22.67, 5432.76, 8281.51)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>兴奋</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><g id=\"第一排\"><circle id=\"椭圆形\" class=\"cls-1\" cx=\"11.33\" cy=\"12.67\" r=\"11.33\"/><ellipse class=\"cls-2\" cx=\"12\" cy=\"17.33\" rx=\"1.33\" ry=\"1.67\"/><path id=\"形状\" class=\"cls-3\" d=\"M5.41,14.26a.69.69,0,0,1-.36-.11.67.67,0,0,1-.21-.92,4.78,4.78,0,0,1,5.13-2,.66.66,0,1,1-.32,1.29A3.48,3.48,0,0,0,6,13.94a.64.64,0,0,1-.56.32Zm8-2.5a.69.69,0,0,1-.52-.24.67.67,0,0,1,.1-.94,4.76,4.76,0,0,1,5.47-.43.66.66,0,0,1,.21.92.67.67,0,0,1-.92.21,3.42,3.42,0,0,0-3.92.33A.66.66,0,0,1,13.39,11.76Z\"/><path class=\"cls-4\" d=\"M8.9,20.85l-.14,0a.5.5,0,0,1-.34-.62,3.19,3.19,0,0,0-.33-2.72,1.75,1.75,0,0,0-1.3-.79.49.49,0,0,1-.46-.53.48.48,0,0,1,.53-.46,2.71,2.71,0,0,1,2,1.2,4.17,4.17,0,0,1,.48,3.57A.5.5,0,0,1,8.9,20.85Zm7.36-2a.57.57,0,0,1-.28-.08,2.81,2.81,0,0,1-1.19-2.47,3.11,3.11,0,0,1,1.32-2.58.51.51,0,0,1,.69.17.51.51,0,0,1-.17.69,2.1,2.1,0,0,0-.84,1.74,1.79,1.79,0,0,0,.74,1.61.5.5,0,0,1,.14.69.48.48,0,0,1-.41.23Z\"/><path id=\"路径\" class=\"cls-5\" d=\"M11.45,1.81a.23.23,0,0,0-.12-.06S.71-.26.25.14.49,11.33.49,11.33a.22.22,0,0,0,.05.13c.4.46,3.17-1.33,6.18-4s5.14-5.19,4.73-5.65Z\"/><path class=\"cls-6\" d=\"M.23.18a.19.19,0,0,0,0,.08C.31,1.18,1.34,8.7,2,11.05A24.38,24.38,0,0,0,5.05,8.88C4.08,7.1.77.1.23.18Z\"/><path class=\"cls-7\" d=\"M19.93,19.49l-7-.87c-.76-.07-2.08-.08-2-1.27s1.36-.92,2.32-.77l7.09,1.18-.36,1.73Z\"/><path class=\"cls-8\" d=\"M20.29,17.76l-2.82-.48c-.33-.06-.62.43-.64.95s.16.87.49.93l2.76.35.21-1.75Z\"/><path class=\"cls-7\" d=\"M23.28,17.56l-1.75,1.61-3.12-3.4,1.74-1.61a2.25,2.25,0,0,1,3.17.14l.09.09A2.24,2.24,0,0,1,23.28,17.56Z\"/><ellipse class=\"cls-8\" cx=\"19.97\" cy=\"17.47\" rx=\"1.85\" ry=\"2.31\" transform=\"translate(-6.56 18.12) rotate(-42.6)\"/><ellipse class=\"cls-9\" cx=\"19.97\" cy=\"17.47\" rx=\"1\" ry=\"1.38\" transform=\"translate(-6.56 18.12) rotate(-42.6)\"/><circle class=\"cls-10\" cx=\"1.67\" cy=\"22.33\" r=\"1\"/><circle class=\"cls-10\" cx=\"19.33\" cy=\"1.33\" r=\"1.33\"/><polygon class=\"cls-11\" points=\"3.24 19.5 1.68 15.75 0.28 19.78 3.24 19.5\"/><polygon class=\"cls-5\" points=\"17.33 3.33 14.67 4 15.33 1.33 17.33 3.33\"/><polygon class=\"cls-12\" points=\"21.33 8.67 24 5.33 22 4 21.33 8.67\"/></g></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/excited.svg","/svg")
},{"+xKvab":64,"buffer":63}],20:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#f4f7f9;}.cls-4{fill:#323f59;}.cls-5{fill:#69758c;}.cls-6{fill:#c7edff;}</style><radialGradient id=\"未命名的渐变\" cx=\"-271.46\" cy=\"374.17\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 6527.04, 8987.99)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>24-探索</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><ellipse id=\"椭圆形\" class=\"cls-2\" cx=\"8.12\" cy=\"9.81\" rx=\"1.76\" ry=\"2.47\"/><circle class=\"cls-3\" cx=\"16.59\" cy=\"9.53\" r=\"4.59\"/><path class=\"cls-2\" d=\"M9.88,6.63a.72.72,0,0,1-.56-.28A3,3,0,0,0,7.26,5a2.57,2.57,0,0,0-1.82.77.71.71,0,0,1-1-1A4,4,0,0,1,7.36,3.54a4.32,4.32,0,0,1,3.09,2,.71.71,0,0,1-.14,1A.76.76,0,0,1,9.88,6.63Z\"/><path class=\"cls-4\" d=\"M21.88,24a.7.7,0,0,1-.7-.71V9.88a.7.7,0,0,1,.7-.7.7.7,0,0,1,.71.7V23.29A.71.71,0,0,1,21.88,24Z\"/><path id=\"形状\" class=\"cls-5\" d=\"M21.88,8.47h-.1a5.3,5.3,0,1,0-.19,2.78,1.36,1.36,0,0,0,.29,0,1.41,1.41,0,0,0,0-2.82Zm-5.29,4.94a3.88,3.88,0,1,1,3.88-3.88A3.88,3.88,0,0,1,16.59,13.41Z\"/><path class=\"cls-2\" d=\"M14.12,19.06A.72.72,0,0,1,13.8,19a3.82,3.82,0,0,0-3.6,0,.7.7,0,0,1-.95-.31.71.71,0,0,1,.32-1,5.16,5.16,0,0,1,4.86,0,.71.71,0,0,1,.32,1,.69.69,0,0,1-.63.39Z\"/><path class=\"cls-6\" d=\"M18.7,6.27a3.88,3.88,0,0,0-5.37,5.37ZM14.93,13a4,4,0,0,0,1.66.37,3.88,3.88,0,0,0,3.88-3.88,4,4,0,0,0-.37-1.66Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/explore.svg","/svg")
},{"+xKvab":64,"buffer":63}],21:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#ff5e61;}.cls-4{fill:#ff8987;}.cls-5{fill:#f19020;}.cls-6{fill:#f83640;}.cls-7{fill:#d12231;}.cls-8{fill:#ffcb4c;}</style><radialGradient id=\"未命名的渐变\" cx=\"-210.41\" cy=\"426.44\" r=\"0.77\" gradientTransform=\"matrix(0, 16.17, 16.17, 0, -6882.84, 3414.54)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>18-发怒</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M22.67,12.31a4.58,4.58,0,0,0-4.58-4.57,8.26,8.26,0,0,0-1.84.38L7.5,9A8.08,8.08,0,0,0,4.58,8,4.58,4.58,0,0,0,0,12.57c0,.16,0,.31,0,.47a11.33,11.33,0,0,0,22.65-.47s0-.07,0-.1S22.67,12.37,22.67,12.31Z\"/><ellipse id=\"椭圆形\" class=\"cls-2\" cx=\"11.33\" cy=\"18.99\" rx=\"2.89\" ry=\"3.3\"/><path id=\"形状\" class=\"cls-2\" d=\"M8.67,13.64c0,1-.6,1.78-1.34,1.78S6,14.62,6,13.64s.6-1.78,1.33-1.78S8.67,12.66,8.67,13.64Zm8,0c0,1-.6,1.78-1.34,1.78S14,14.62,14,13.64s.6-1.78,1.33-1.78,1.34.8,1.34,1.78Z\"/><path class=\"cls-3\" d=\"M20.08,2.39a1.63,1.63,0,0,0-.45.07,2.47,2.47,0,0,0-1.94-.93h-.17A2.64,2.64,0,0,0,13.21,2a1.49,1.49,0,0,0-1.38-.91,1.47,1.47,0,0,0-1.17.58,2.48,2.48,0,0,0-4.45-.54,2.45,2.45,0,0,0-.38,0A2.48,2.48,0,0,0,3.64,2.44a2,2,0,0,0-.42,0,2.25,2.25,0,0,0,0,4.5A2.21,2.21,0,0,0,4.3,6.61a1.48,1.48,0,0,0,.89.31,1.43,1.43,0,0,0,.29,0A3.2,3.2,0,0,0,8.22,8.42,3.25,3.25,0,0,0,10.93,7a2.6,2.6,0,0,0,4.54-1h.06a2.44,2.44,0,0,0,.55-.06,2.46,2.46,0,0,0,1.62.61,2.5,2.5,0,0,0,1.93-.93,1.63,1.63,0,0,0,.45.07,1.64,1.64,0,1,0,0-3.28Z\"/><circle class=\"cls-4\" cx=\"17.86\" cy=\"3.75\" r=\"1.41\"/><path class=\"cls-4\" d=\"M12.58,3.84A1.43,1.43,0,0,0,11.14,2.4a1.39,1.39,0,0,0-.67.17,1.11,1.11,0,0,0-1.94-.2,2.46,2.46,0,0,0-1.7-.68A2.49,2.49,0,0,0,4.42,3.58a1.37,1.37,0,0,0-1-.39A1.34,1.34,0,1,0,4.58,5.27,2.5,2.5,0,0,0,6.42,6.65a1.48,1.48,0,0,0,1.29.75A1.5,1.5,0,0,0,9.17,6.23a1.49,1.49,0,0,0,2.18-1,1.44,1.44,0,0,0,1.23-1.42Z\"/><path class=\"cls-5\" d=\"M3.81,10a.18.18,0,0,0,.07,0l.09.07a7.41,7.41,0,0,0,1.53.59c.23.05.47.11.74.15,1.16.2,1.13-.41,2.43-.44.76,0,1.19.51,1.75.82,1,.55,1.72-.49,2.48-.49.57,0,1.48.81,2.12.51,1-.48,1.12-.88,1.86-.88s1,.39,1.45.48a2.74,2.74,0,0,0,.36-.23s1.83-1.26.73-1.55c-.63-.16-.67.26-1.47.16s.29-.49-.13-.72-1.92.27-3.71,1.16c-.48.23-5.49.13-6.47-.41-2.14-1.16-2.31.43-3-.2A1,1,0,0,0,3.51,9a.36.36,0,0,0-.15.37A1.13,1.13,0,0,0,3.81,10Z\"/><path class=\"cls-6\" d=\"M8.67,10.41c.76,0,1.19.51,1.75.82,1,.55,1.72-.49,2.48-.49.57,0,1.48.81,2.12.51a12,12,0,0,0,1.25-.75,12.57,12.57,0,0,1,2.62-4.3,2.41,2.41,0,0,1-1.19.33,2.46,2.46,0,0,1-1.62-.61,2.44,2.44,0,0,1-.55.06h-.06a2.6,2.6,0,0,1-4.54,1A3.25,3.25,0,0,1,8.22,8.42,3.2,3.2,0,0,1,5.48,6.89a1.43,1.43,0,0,1-.29,0,1.48,1.48,0,0,1-.89-.31A2,2,0,0,1,4,6.74a13.86,13.86,0,0,1,2.4,4.13C7.39,11,7.44,10.44,8.67,10.41Z\"/><path class=\"cls-7\" d=\"M17.7,6.53a2.46,2.46,0,0,1-1.62-.61,2.44,2.44,0,0,1-.55.06h-.06a2.6,2.6,0,0,1-4.54,1A3.25,3.25,0,0,1,8.22,8.42,3.2,3.2,0,0,1,5.48,6.89a1.43,1.43,0,0,1-.29,0,1.48,1.48,0,0,1-.89-.31A1.69,1.69,0,0,1,4,6.74,15.87,15.87,0,0,1,5.44,8.82S8.61,10.42,11,8.4a3.69,3.69,0,0,0,5-1.07,6.55,6.55,0,0,0,1.64.35,12.06,12.06,0,0,1,1.12-1.42A2.43,2.43,0,0,1,17.7,6.53Z\"/><path class=\"cls-8\" d=\"M19.34,10.53c-1.17.85-1.4-.16-2.46-.16-.74,0-.82.4-1.86.88-.64.3-1.55-.51-2.12-.51-.76,0-1.48,1-2.48.49-.56-.31-1-.84-1.75-.82-1.3,0-1.27.64-2.43.44-3-.5-2.9-1.58-2.9-1.58L2.9,12.09H9.15l2.53,1.2,3-1.2h3.66s.43-.12.73-.23c1.06-.38,1.19-2,.3-1.33Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/flare-up.svg","/svg")
},{"+xKvab":64,"buffer":63}],22:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#ab1325;}.cls-2{fill:#ff9500;}.cls-3{fill:#ffd57a;}.cls-4{fill:#f83640;}.cls-5{fill:#ff8987;}</style></defs><title>51-薯条</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M10.91,0C4.88,0,0,3.27,0,9.09c0,0,0,.55.09,1.1.19,0,10.82,8.72,10.82,8.72s10.62-8.73,10.81-8.72c0-.36.1-1,.1-1.1C21.82,3.27,16.93,0,10.91,0Z\"/><path class=\"cls-2\" d=\"M19.76,6.92a1,1,0,0,0-.67.14,1.73,1.73,0,0,0-.15-.8l.28-.83a1.08,1.08,0,0,0-.69-1.37,1.07,1.07,0,0,0-.75,0,1.09,1.09,0,0,0-1.2-.8,1,1,0,0,0-.25.07,1.11,1.11,0,0,0-.91-.8,1.09,1.09,0,0,0-1.23.94L14,5.17a1.07,1.07,0,0,0-1-.44,1.08,1.08,0,0,0-1,.78L12,5a1.09,1.09,0,0,0-2.17.2h0a1.08,1.08,0,0,0-.44-1l-.3-1.52a1.09,1.09,0,0,0-2.14.43l.52,2.61L7.17,6.9,6.12,4a1.09,1.09,0,0,0-2,.75L4.87,7a1.1,1.1,0,0,0-.47.77L4.22,9.25,4,7.82a1.09,1.09,0,0,0-2.16.36L3,14.94h17c0-.09.81-6.82.81-6.82a1.08,1.08,0,0,0-1-1.2Z\"/><path id=\"形状\" class=\"cls-3\" d=\"M17.81,4.22l0-.14a1.1,1.1,0,0,0-1.2-.8,1,1,0,0,0-.25.07,1.08,1.08,0,0,0-.68,1.16l1.42,10.43h2.2ZM14.18,5.74A1.1,1.1,0,0,0,14,5.17a1.07,1.07,0,0,0-1-.44,1.08,1.08,0,0,0-1,.78A1,1,0,0,0,12,5.9l.64,9v.09h2.19v0l-.65-9.18Zm-8.57,1A1.12,1.12,0,0,0,4.87,7a1.1,1.1,0,0,0-.47.77l-.84,7.22H5.75l.82-7A1.1,1.1,0,0,0,5.61,6.76ZM9.07,2.7a1.09,1.09,0,1,0-2.14.42L9.29,14.94h2.23L9.07,2.7Z\"/><path class=\"cls-4\" d=\"M18.91,10.91c0,2-3.18,3.64-8,3.64s-8-1.63-8-3.64c0-.8-1.38-.73-2.18-.73H.09c.05.46,1.36,10.9,1.36,10.9A2.91,2.91,0,0,0,4.36,24H17.45a2.91,2.91,0,0,0,2.91-2.91l1.36-10.9h-.63C20.29,10.18,18.91,10.11,18.91,10.91Z\"/><circle id=\"椭圆形\" class=\"cls-5\" cx=\"10.91\" cy=\"18.91\" r=\"2.91\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/french-fires.svg","/svg")
},{"+xKvab":64,"buffer":63}],23:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#fdd888;}.cls-2{fill:#fcab40;}.cls-3{fill:#f83640;}</style></defs><title>37-礼物</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M21.08,19.29a2.56,2.56,0,0,1-2.55,2.56H4.47a2.56,2.56,0,0,1-2.55-2.56V8.43A2.56,2.56,0,0,1,4.47,5.88H18.53a2.56,2.56,0,0,1,2.55,2.55Z\"/><path class=\"cls-1\" d=\"M23,6.51a2.56,2.56,0,0,1-2.56,2.56H2.56A2.56,2.56,0,1,1,2.56,4H20.44A2.56,2.56,0,0,1,23,6.51Z\"/><polygon class=\"cls-2\" points=\"1.92 9.07 21.08 9.07 21.08 10.35 1.92 10.35 1.92 9.07\"/><path class=\"cls-3\" d=\"M12.14,1.4H10.86A1.92,1.92,0,0,0,8.94,3.32V21.85h5.12V3.32A1.92,1.92,0,0,0,12.14,1.4Z\"/><path id=\"形状\" class=\"cls-3\" d=\"M10.22,4c.71,0,.81-.33.23-.73L6.16.22A1.15,1.15,0,0,0,4.48.6L3.19,2.85C2.84,3.46,3.13,4,3.83,4Zm2.56,0c-.71,0-.81-.33-.23-.73l4.29-3A1.15,1.15,0,0,1,18.52.6l1.29,2.25c.35.61.06,1.11-.64,1.11Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/gift.svg","/svg")
},{"+xKvab":64,"buffer":63}],24:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#fff;}</style><radialGradient id=\"未命名的渐变\" cx=\"-282.63\" cy=\"405.1\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 6795.21, 9730.14)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>26-鬼脸</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><ellipse id=\"椭圆形\" class=\"cls-2\" cx=\"8\" cy=\"9\" rx=\"1.67\" ry=\"2.33\"/><ellipse class=\"cls-2\" cx=\"16\" cy=\"9\" rx=\"1.67\" ry=\"2.33\"/><path class=\"cls-3\" d=\"M16.67,14a2.67,2.67,0,0,1,0,5.33H7.33a2.67,2.67,0,0,1,0-5.33Z\"/><path id=\"形状\" class=\"cls-2\" d=\"M16.67,13.33H7.33a3.34,3.34,0,0,0,0,6.67h9.34a3.34,3.34,0,0,0,0-6.67Zm0,1.34a2,2,0,0,1,2,1.66h-2.3V14.67Zm-1,0v1.66h-2V14.67Zm-2.67,0v1.66H11V14.67Zm-2.67,0v1.66h-2V14.67Zm-3,0h.34v1.66H5.37A2,2,0,0,1,7.33,14.67Zm0,4a2,2,0,0,1-2-1.67h2.3v1.67Zm1,0V17h2v1.67Zm2.67,0V17h2v1.67Zm2.67,0V17h2v1.67Zm3,0h-.34V17h2.3A2,2,0,0,1,16.67,18.67Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/grimace.svg","/svg")
},{"+xKvab":64,"buffer":63}],25:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#fff;}</style><radialGradient id=\"未命名的渐变\" cx=\"-206.32\" cy=\"370.65\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 4963.69, 8903.39)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>13-开心</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><circle id=\"椭圆形\" class=\"cls-1\" cx=\"12\" cy=\"12\" r=\"12\"/><path id=\"路径\" class=\"cls-2\" d=\"M12,14a27.85,27.85,0,0,1-6-.67c-.45-.08-1.33,0-1.33,1.34,0,2.66,3.06,6,7.33,6s7.33-3.34,7.33-6c0-1.34-.88-1.42-1.33-1.34A27.85,27.85,0,0,1,12,14Z\"/><path class=\"cls-3\" d=\"M6,14.67a21.13,21.13,0,0,0,6,.66,21.13,21.13,0,0,0,6-.66s-1.33,2.66-6,2.66S6,14.67,6,14.67Z\"/><ellipse class=\"cls-2\" cx=\"8\" cy=\"9\" rx=\"1.67\" ry=\"2.33\"/><ellipse class=\"cls-2\" cx=\"16\" cy=\"9\" rx=\"1.67\" ry=\"2.33\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/grin.svg","/svg")
},{"+xKvab":64,"buffer":63}],26:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#ffad29;}.cls-4{fill:#f8353f;}</style><radialGradient id=\"未命名的渐变\" cx=\"-180.87\" cy=\"367.58\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 4352.79, 8829.82)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>爱心</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><g id=\"第一排\"><circle id=\"椭圆形\" class=\"cls-1\" cx=\"12\" cy=\"12\" r=\"12\"/><path id=\"形状\" class=\"cls-2\" d=\"M10.67,11.31a.69.69,0,0,1-.64-.46c-.13-.4-.67-1.54-1.36-1.54S7.41,10.52,7.3,10.85a.66.66,0,0,1-.84.42A.67.67,0,0,1,6,10.43C6.12,10.18,6.9,8,8.67,8s2.55,2.21,2.63,2.46a.66.66,0,0,1-.42.84.78.78,0,0,1-.21,0Zm6.66,0a.66.66,0,0,1-.63-.46c-.13-.4-.68-1.54-1.37-1.54S14.07,10.52,14,10.85a.67.67,0,0,1-.85.42.66.66,0,0,1-.42-.84c.08-.25.87-2.46,2.63-2.46s2.55,2.21,2.63,2.46a.66.66,0,0,1-.42.84.78.78,0,0,1-.21,0Zm.89,2.48a.35.35,0,0,0-.42,0A10.82,10.82,0,0,1,12,15.71a10.86,10.86,0,0,1-5.8-1.94.35.35,0,0,0-.42,0,.34.34,0,0,0-.07.42A7.66,7.66,0,0,0,12,17.71a7.66,7.66,0,0,0,6.29-3.5.34.34,0,0,0-.07-.42Z\"/><path class=\"cls-3\" d=\"M14.15,2.63a1.84,1.84,0,0,0,.06.47,6.37,6.37,0,0,0,3.64,4.13,6.85,6.85,0,0,0,3.27-3A11.87,11.87,0,0,0,15.83.63,2,2,0,0,0,14.15,2.63Zm-5,16.76a2.16,2.16,0,0,0,.06-.51,2.21,2.21,0,0,0-4-1.28,2.2,2.2,0,0,0-3.72.2,12.06,12.06,0,0,0,5.38,5.05,6.27,6.27,0,0,0,2.29-3.46Zm13.71-2.3a1.53,1.53,0,0,0-2.71-.45,1.53,1.53,0,0,0-2.78.89,2,2,0,0,0,0,.35,4.81,4.81,0,0,0,2.61,3A12.22,12.22,0,0,0,22.87,17.09Z\"/><path class=\"cls-4\" d=\"M22.42,2.18A2,2,0,0,0,18.72,1,2.07,2.07,0,0,0,17.06.14a2,2,0,0,0-2,2,1.76,1.76,0,0,0,.06.46,6.34,6.34,0,0,0,3.65,4.13,6.35,6.35,0,0,0,3.64-4.13A1.76,1.76,0,0,0,22.42,2.18ZM8.14,18.94a2.21,2.21,0,0,0-4-1.29,2.21,2.21,0,0,0-4,1.29,2.07,2.07,0,0,0,.06.5c.3,1.91,2.43,3.92,4,4.48a6.94,6.94,0,0,0,4-4.48,2.07,2.07,0,0,0,.06-.5ZM24,17.42a1.53,1.53,0,0,0-2.78-.89,1.53,1.53,0,0,0-2.78.89,1.39,1.39,0,0,0,0,.35,4.79,4.79,0,0,0,2.74,3.1,4.8,4.8,0,0,0,2.73-3.1,1.41,1.41,0,0,0,0-.35Z\"/></g></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/happiness.svg","/svg")
},{"+xKvab":64,"buffer":63}],27:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#f83640;}</style></defs><title>34-心碎</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M9,16.37a1,1,0,0,1,0-1.06l2.93-4.44-4-3.42a1,1,0,0,1-.21-1.28L10.6,1.39A6.56,6.56,0,0,0,0,6.58,6.68,6.68,0,0,0,.18,8.07c.91,5.68,7.22,11.67,11.74,13.31l.05,0Z\"/><path class=\"cls-1\" d=\"M17.27,0a6.54,6.54,0,0,0-4.69,2L9.88,6.48l4,3.45a1,1,0,0,1,.18,1.31L11,15.88l2.78,4.63C18,18.15,22.88,13,23.67,8.07A6.55,6.55,0,0,0,17.27,0Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/heartbreak.svg","/svg")
},{"+xKvab":64,"buffer":63}],28:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#ffac33;}.cls-4{fill:#dadfe8;}.cls-5{fill:#f83640;}.cls-6{fill:#a3acbf;}.cls-7{fill:#452e04;}</style><radialGradient id=\"未命名的渐变\" cx=\"-273.05\" cy=\"380.52\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 6565.21, 9140.32)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>26-感冒</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><circle id=\"椭圆形\" class=\"cls-1\" cx=\"12\" cy=\"12\" r=\"12\"/><ellipse class=\"cls-2\" cx=\"8.33\" cy=\"11\" rx=\"1.67\" ry=\"2.33\"/><ellipse class=\"cls-2\" cx=\"15.67\" cy=\"11\" rx=\"1.67\" ry=\"2.33\"/><path id=\"形状\" class=\"cls-2\" d=\"M19.33,8a5.91,5.91,0,0,1-5.26-3,.66.66,0,0,1,1.19-.59,4.63,4.63,0,0,0,4.07,2.3.67.67,0,1,1,0,1.33ZM4.67,8a.67.67,0,0,1,0-1.34c3.39,0,4-2.08,4-2.17A.67.67,0,0,1,9.5,4a.66.66,0,0,1,.48.8C10,5,9.14,8,4.67,8Z\"/><path id=\"路径\" class=\"cls-3\" d=\"M24,11.38l-2.67.54-10.79,7,4.74.64,7.79-4.81a1.54,1.54,0,0,0,.8-1.16A15.17,15.17,0,0,0,24,11.38Z\"/><path class=\"cls-2\" d=\"M15.66,19.59s-.77-1.92-3.66-1.92-3.65,1.89-3.66,1.92A.34.34,0,0,0,8.5,20a.35.35,0,0,0,.4,0s.67-.58,3.1-.58,3.08.56,3.1.58a.35.35,0,0,0,.23.09.33.33,0,0,0,.17,0A.35.35,0,0,0,15.66,19.59Z\"/><path class=\"cls-4\" d=\"M23.65,10.49a1.66,1.66,0,0,0-2.33-.34L9.84,18.76a6.32,6.32,0,0,1,1.75-.35c.17,0,1.77-.42,1.77-.42l.86.69s.61.25.8.36l8.3-6.22a1.67,1.67,0,0,0,.33-2.33Z\"/><path class=\"cls-5\" d=\"M19.12,13.91c-.29-.39-.52-.76-.92-.46l-6.61,5c.17,0,.33,0,.52,0a6.39,6.39,0,0,1,2.11.3l5.06-3.79c.4-.3.14-.58-.16-1Z\"/><path class=\"cls-6\" d=\"M12.4,16.82l.82,1.06.5-.39-.8-1.06Zm1.48-1.11.82,1.07.5-.4-.8-1.06Zm1.46-1.08.82,1.07.49-.4-.79-1.06Zm1.45-1.1.82,1.06.5-.4-.8-1Zm1.49-1.1.83,1.07.49-.4L18.8,12Zm1.43-1.08.82,1.07L21,12,20.23,11Z\"/><path class=\"cls-7\" d=\"M15,19l.54.35a2.7,2.7,0,0,0-.35-.48Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/ill.svg","/svg")
},{"+xKvab":64,"buffer":63}],29:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#fff;}.cls-4{fill:#4db5ff;}</style><radialGradient id=\"未命名的渐变\" cx=\"-233.38\" cy=\"407.7\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5613.05, 9792.68)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>11-笑哭</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path id=\"形状\" class=\"cls-2\" d=\"M19,11.86c0-.09-1-2.19-3-2.19s-2.93,2.1-3,2.19a.34.34,0,0,0,.1.4.33.33,0,0,0,.4,0,4.42,4.42,0,0,1,2.47-.6,4.4,4.4,0,0,1,2.47.6.36.36,0,0,0,.2.06.31.31,0,0,0,.2-.07.34.34,0,0,0,.1-.4Zm-8,0c0-.09-1-2.19-3-2.19s-2.93,2.1-3,2.19a.35.35,0,0,0,.09.4.35.35,0,0,0,.41,0A4.42,4.42,0,0,1,8,11.67a4.4,4.4,0,0,1,2.47.6.36.36,0,0,0,.2.06.31.31,0,0,0,.2-.07.34.34,0,0,0,.1-.4Zm9.7-1.19a.66.66,0,0,1-.62-.42,6.2,6.2,0,0,0-4.18-3.6.66.66,0,0,1,.26-1.3,7.47,7.47,0,0,1,5.16,4.4.68.68,0,0,1-.38.87A.69.69,0,0,1,20.67,10.67Zm-17.34,0a.69.69,0,0,1-.24-.05.68.68,0,0,1-.38-.87,7.5,7.5,0,0,1,5.16-4.4.66.66,0,0,1,.78.52.65.65,0,0,1-.52.78A6.17,6.17,0,0,0,4,10.25a.66.66,0,0,1-.62.42Zm8.67,4A27.85,27.85,0,0,1,6,14c-.45-.09-1.33,0-1.33,1.33,0,2.67,3.06,6,7.33,6s7.33-3.33,7.33-6c0-1.33-.88-1.42-1.33-1.33A27.85,27.85,0,0,1,12,14.67Z\"/><path class=\"cls-3\" d=\"M6,15.33A20.83,20.83,0,0,0,12,16a20.83,20.83,0,0,0,6-.67S16.67,18,12,18,6,15.33,6,15.33Z\"/><path class=\"cls-4\" d=\"M7.23,18.82A3.33,3.33,0,0,1,.77,17.18c.45-1.79,4.22-5.81,4.87-5.64S7.68,17,7.23,18.82Zm9.53,0a3.33,3.33,0,1,0,6.46-1.64c-.46-1.79-4.23-5.81-4.87-5.64S16.3,17,16.76,18.82Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/joy.svg","/svg")
},{"+xKvab":64,"buffer":63}],30:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#ffac33;}.cls-4{fill:#f83640;}</style><radialGradient id=\"未命名的渐变\" cx=\"-286.23\" cy=\"403.41\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 6881.45, 9689.65)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>14-飞吻</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><circle id=\"椭圆形\" class=\"cls-1\" cx=\"12\" cy=\"12\" r=\"12\"/><ellipse class=\"cls-2\" cx=\"7.67\" cy=\"10.33\" rx=\"1.67\" ry=\"2.33\"/><path id=\"形状\" class=\"cls-2\" d=\"M19,11.86c0-.09-1-2.19-3-2.19s-2.93,2.1-3,2.19a.34.34,0,0,0,.1.4.33.33,0,0,0,.4,0,4.42,4.42,0,0,1,2.47-.6,4.4,4.4,0,0,1,2.47.6.36.36,0,0,0,.2.06.31.31,0,0,0,.2-.07.34.34,0,0,0,.1-.4ZM4,7.33a.66.66,0,0,1-.4-.13.67.67,0,0,1-.13-.93,7,7,0,0,1,5.2-2.94.67.67,0,0,1,0,1.34,5.6,5.6,0,0,0-4.14,2.4A.67.67,0,0,1,4,7.33Zm15.33,2a.67.67,0,0,1-.53-.26,5,5,0,0,0-4.67-1.75.66.66,0,0,1-.78-.52A.67.67,0,0,1,13.87,6a6.28,6.28,0,0,1,6,2.26.67.67,0,0,1-.54,1.06ZM13.39,18c.89-.28,1.75-.77,1.75-1.67,0-1.74-3.28-2-3.65-2a.33.33,0,0,0-.35.31.34.34,0,0,0,.31.36s2.36.2,2.36,1.33-2.34,1.33-2.36,1.34h0l-.09,0h0a.21.21,0,0,0-.08.06l0,0,0,.07s0,0,0,.06,0,0,0,.05v0s0,0,0,0,0,.05,0,.06l0,.06,0,.05.06,0,.05,0,.06,0h0s2.36.2,2.36,1.34S11.47,21,11.45,21a.33.33,0,0,0-.31.35.34.34,0,0,0,.33.32h0c.37,0,3.65-.25,3.65-2,0-.9-.86-1.4-1.75-1.67Z\"/><path id=\"路径\" class=\"cls-3\" d=\"M22.8,17.2A2.06,2.06,0,0,0,21.75,16a2,2,0,0,0-1.86,0,2,2,0,0,0-3.84-.55,1.76,1.76,0,0,0-.15.44,6.35,6.35,0,0,0,1.46,5.3,6.61,6.61,0,0,0,3-.59A11.88,11.88,0,0,0,22.8,17.2Z\"/><path class=\"cls-4\" d=\"M23.77,18.15A2,2,0,0,0,21,15.46a2,2,0,0,0-3.84-.55,1.76,1.76,0,0,0-.15.44,6.37,6.37,0,0,0,1.46,5.3,6.38,6.38,0,0,0,5.08-2.11A2.59,2.59,0,0,0,23.77,18.15Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/kiss.svg","/svg")
},{"+xKvab":64,"buffer":63}],31:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#ffad29;}.cls-2{fill:#f83640;}.cls-3{fill:#ff8987;}.cls-4{fill:#ffdcd9;}</style></defs><title>49-棒棒糖</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M23.14,23.14a1.31,1.31,0,0,1-1.85,0L7.89,9.74A1.31,1.31,0,1,1,9.74,7.89l13.4,13.4A1.31,1.31,0,0,1,23.14,23.14Z\"/><path class=\"cls-2\" d=\"M18.29,9.15A9.15,9.15,0,1,1,9.15,0,9.14,9.14,0,0,1,18.29,9.15Z\"/><path id=\"形状\" class=\"cls-3\" d=\"M11.37,18a8.18,8.18,0,0,1-7.79-4.34A6.45,6.45,0,0,1,6.24,4.94,5,5,0,0,1,13.05,7a3.9,3.9,0,0,1-1.6,5.27,3,3,0,0,1-4-1.23A2.25,2.25,0,0,1,8.34,8a1.65,1.65,0,0,1,1.27-.13,1.89,1.89,0,0,1,.43.2,1.6,1.6,0,0,0-1.46,0,1.84,1.84,0,0,0-.76,2.49,2.14,2.14,0,0,0,2.9.89,2.53,2.53,0,0,0,1-3.41,3,3,0,0,0-4-1.23,3.59,3.59,0,0,0-1.47,4.83,4.32,4.32,0,0,0,5.81,1.77,5.2,5.2,0,0,0,2.14-7A6.32,6.32,0,0,0,5.62,3.79a7.75,7.75,0,0,0-3.19,10.5,9.66,9.66,0,0,0,2.41,2.93,9.2,9.2,0,0,0,4.31,1.07A9.06,9.06,0,0,0,11.37,18Zm-.89-8.36a.76.76,0,0,0,.26-.24,1.24,1.24,0,0,1-.64.92A.84.84,0,0,1,9,10a.54.54,0,0,1,.22-.73l.14,0a.29.29,0,0,1,.27.16A.66.66,0,0,0,10.48,9.65Z\"/><path class=\"cls-4\" d=\"M16.1,5.43A10.09,10.09,0,0,0,8.26.14L7.83.1A9.11,9.11,0,0,0,1.92,3.56a8.06,8.06,0,0,1,6.18-2A8.61,8.61,0,0,1,14.77,6a5.92,5.92,0,0,1-2.95,7.81,4.57,4.57,0,0,1-6.05-2.29A3.52,3.52,0,0,1,7.52,6.9a2.69,2.69,0,0,1,3.53,1.33,2,2,0,0,1-.55,2.35,1.88,1.88,0,0,0,.4-.63,1.84,1.84,0,0,0,0-1.42A2.16,2.16,0,0,0,9.67,7.42a2.12,2.12,0,0,0-1.62,0,2.47,2.47,0,0,0-1.24,3.27,2.93,2.93,0,0,0,1.62,1.53,3,3,0,0,0,2.23-.07,3.46,3.46,0,0,0,1.72-4.57A4.13,4.13,0,0,0,6.92,5.57a5,5,0,0,0-2.49,6.58A6,6,0,0,0,7.8,15.32a6.13,6.13,0,0,0,2.14.39,6,6,0,0,0,2.48-.54A7.37,7.37,0,0,0,16.1,5.43Zm-6.57,4a.41.41,0,0,1-.2.21.73.73,0,0,0,0,1.34,1.44,1.44,0,0,1-.4-.09,1.4,1.4,0,0,1-.8-.75,1,1,0,0,1,0-.77,1,1,0,0,1,.53-.56.66.66,0,0,1,.27-.06.59.59,0,0,1,.23,0,.67.67,0,0,1,.37.35.36.36,0,0,1,0,.29Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/lollipop.svg","/svg")
},{"+xKvab":64,"buffer":63}],32:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#f3d2a2;}.cls-2{fill:#d2a077;}</style></defs><title>爱你</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M11.9,23.08a7.59,7.59,0,0,0,3.76-4c1.12-2.44,5.06-3.44,6-4.14,1.36-1,.12-2.91-1.9-2.59-2.18.35-2.71,1.29-4,1.87-.67.29-1.14.2-1.23-1-.07-.9,1.1-8,1.46-11.31C16.12.78,15.65.14,14.75,0S13.2.44,13,1.47C12.44,4,11.58,9,11.22,9.31c-1.93,1.21-4.5,2.8-6.8-.28,0,0-1.1-5.77-1.27-6.94a1.42,1.42,0,1,0-2.8.45c.21,2,.86,6.66.29,8.32-.5,1.46-1.38,6.47.56,9.52S8.24,24.65,11.9,23.08Z\"/><path class=\"cls-2\" d=\"M5,15C5.6,17.75,9,17.44,8.73,14.8c-.17-2.15-.82-5.9-1-6.83-.43-1.92-3.77-1.5-3.5.77.18,1.47.37,4.08.82,6.24Z\"/><path class=\"cls-1\" d=\"M5.64,14.7c.53,2.3,3,1.66,2.83-.49s-.62-5.43-.78-6.38c-.35-2.21-3.2-1.22-3,.42s.52,4.73.92,6.45Z\"/><path class=\"cls-2\" d=\"M7.62,15.58c0,3.3,3.72,3.12,4,.65a59.64,59.64,0,0,0-.32-7.81c-.08-1.79-3.34-1.8-3.45.23-.09,1.65-.27,5.18-.24,6.93Z\"/><path class=\"cls-1\" d=\"M8.24,15.68a1.45,1.45,0,1,0,2.88.14c.2-2.14.15-6.73.14-7.69,0-1.67-2.83-1.61-2.9.44-.07,1.65,0,5.35-.12,7.11Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/love-you.svg","/svg")
},{"+xKvab":64,"buffer":63}],33:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#f83640;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.07\" cy=\"365.85\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5749.76, 8788.19)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>色</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><g id=\"第一排\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path class=\"cls-2\" d=\"M12,14.57A22.74,22.74,0,0,1,7.09,14C6.72,14,6,14,6,15.11,6,17.3,8.5,20,12,20s6-2.72,6-4.91C18,14,17.28,14,16.91,14a22.74,22.74,0,0,1-4.91.55\"/><path id=\"形状\" class=\"cls-3\" d=\"M11.1,2.19a3.11,3.11,0,0,0-5.92.17A3.11,3.11,0,0,0,.46,5.94a3,3,0,0,0,.32.64C2.08,9,5.83,10.65,8.11,10.67c1.76-1.45,3.63-5.11,3.15-7.79A3.44,3.44,0,0,0,11.1,2.19Zm1.8,0a3.11,3.11,0,0,1,5.92.17,3.11,3.11,0,0,1,4.72,3.58,3,3,0,0,1-.32.64c-1.3,2.39-5,4.07-7.33,4.09-1.76-1.45-3.63-5.11-3.14-7.79A2.85,2.85,0,0,1,12.9,2.19Z\"/></g></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/love.svg","/svg")
},{"+xKvab":64,"buffer":63}],34:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#ccd6dd;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.08\" cy=\"365.85\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5750, 8788.19)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>抓狂</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path id=\"形状\" class=\"cls-2\" d=\"M12,14.33A6.72,6.72,0,0,0,5,20a.34.34,0,0,0,.12.3.33.33,0,0,0,.21.07h.11A26.55,26.55,0,0,1,12,19a16.86,16.86,0,0,1,6.52,1.3A.34.34,0,0,0,19,20,6.72,6.72,0,0,0,12,14.33Zm7.33-7.66a5.91,5.91,0,0,1-5.26-3,.66.66,0,0,1,.3-.89.65.65,0,0,1,.89.29,4.61,4.61,0,0,0,4.07,2.3.67.67,0,0,1,0,1.34Zm-14.66,0a.67.67,0,0,1,0-1.34c3.39,0,4-2.08,4-2.17A.67.67,0,0,1,10,3.5C10,3.62,9.14,6.67,4.67,6.67Z\"/><path class=\"cls-3\" d=\"M12,15.33a5.81,5.81,0,0,1,4,1.34H8A5.81,5.81,0,0,1,12,15.33Z\"/><path class=\"cls-2\" d=\"M4,12.67a.68.68,0,0,1-.53-.27.67.67,0,0,1,.13-.93,12.18,12.18,0,0,1,4.57-2,8.84,8.84,0,0,0-3.5-.84.67.67,0,0,1,0-1.34,9.08,9.08,0,0,1,5.8,2.2.68.68,0,0,1,.15.73.69.69,0,0,1-.62.41,10.44,10.44,0,0,0-5.6,1.86A.67.67,0,0,1,4,12.67Zm16,0a.67.67,0,0,1-.4-.14A10.53,10.53,0,0,0,14,10.67a.69.69,0,0,1-.62-.41.68.68,0,0,1,.15-.73,9.08,9.08,0,0,1,5.8-2.2.67.67,0,0,1,0,1.34,8.84,8.84,0,0,0-3.5.84,12.18,12.18,0,0,1,4.57,2,.67.67,0,0,1,.13.93A.68.68,0,0,1,20,12.67Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/mad.svg","/svg")
},{"+xKvab":64,"buffer":63}],35:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#56a32c;}.cls-4{fill:#fff;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.08\" cy=\"365.85\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5750, 8788.19)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>29-财迷</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path class=\"cls-2\" d=\"M4.67,14.18c0,2.64,3.06,6,7.33,6s7.33-3.34,7.33-6A33.43,33.43,0,0,1,4.67,14.18Z\"/><path class=\"cls-3\" d=\"M8,15.34V20a3.84,3.84,0,0,0,4,4,3.84,3.84,0,0,0,4-4V15.36a21,21,0,0,1-8,0Z\"/><path id=\"形状\" class=\"cls-2\" d=\"M8.19,8.22c-.5-.19-1-.38-1-.65,0-.43.59-.46.71-.46a1.17,1.17,0,0,1,.8.3.84.84,0,0,0,.49.21.5.5,0,0,0,.55-.51c0-.49-.6-.84-1.24-1V5.87a.63.63,0,1,0-1.25,0v.28A1.54,1.54,0,0,0,6,7.64c0,.87.86,1.23,1.62,1.55.54.23,1.06.44,1.06.77s-.31.51-.8.51a1.69,1.69,0,0,1-1-.37.94.94,0,0,0-.54-.24.52.52,0,0,0-.51.55c0,.45.62.9,1.44,1.06v.31a.63.63,0,1,0,1.25,0v-.33A1.64,1.64,0,0,0,9.89,9.81c0-.93-.94-1.3-1.7-1.59Zm9.61,1.6c0-.93-.95-1.3-1.71-1.59-.5-.19-1-.38-1-.64,0-.44.59-.47.71-.47a1.17,1.17,0,0,1,.81.3.81.81,0,0,0,.49.21.5.5,0,0,0,.54-.51c0-.49-.6-.83-1.24-1V5.88a.63.63,0,1,0-1.25,0v.28a1.56,1.56,0,0,0-1.23,1.49c0,.88.86,1.24,1.62,1.55.55.23,1.06.44,1.06.78s-.3.5-.8.5a1.71,1.71,0,0,1-1-.37,1,1,0,0,0-.53-.24.53.53,0,0,0-.52.55c0,.45.63.9,1.44,1.06v.32a.63.63,0,0,0,1.25,0v-.34A1.64,1.64,0,0,0,17.8,9.82Z\"/><path class=\"cls-4\" d=\"M14,20.71c0-.91-.92-1.26-1.66-1.55-.49-.19-1-.37-1-.63,0-.43.57-.45.69-.45a1.13,1.13,0,0,1,.78.29.81.81,0,0,0,.48.21.5.5,0,0,0,.53-.5c0-.48-.58-.82-1.21-1v-.25a.61.61,0,0,0-.61-.61.61.61,0,0,0-.61.61v.27a1.53,1.53,0,0,0-1.2,1.46c0,.85.84,1.2,1.58,1.51.54.22,1,.43,1,.75s-.3.5-.78.5A1.65,1.65,0,0,1,11,21a.94.94,0,0,0-.52-.23.51.51,0,0,0-.5.53c0,.45.6.88,1.4,1v.31a.61.61,0,0,0,.61.6.6.6,0,0,0,.61-.6v-.33A1.6,1.6,0,0,0,14,20.71Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/miser.svg","/svg")
},{"+xKvab":64,"buffer":63}],36:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#d2a077;}.cls-2{fill:#f3d2a2;}</style></defs><title>46-OK</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M12.74,13.92,11.59,9.35,9,3.47a1.68,1.68,0,1,1,3.13-1.21l4.14,10.51Z\"/><path class=\"cls-2\" d=\"M18.3,12.26A32.42,32.42,0,0,0,17,7.92l-3.86-7a1.68,1.68,0,0,0-3,1.52L13.68,8.8l.94,3.66c-.72-.66-1.74-1.57-2.68-2.41A21.13,21.13,0,0,0,8.65,7.51a1.22,1.22,0,0,0-1.42,0L3.31,9.18a.78.78,0,0,0-.26.22L1.51,11.46a1.68,1.68,0,0,0,2.57,2.15s1.19-1.7,1.29-1.76a8.21,8.21,0,0,1,2.54-.94c.6,0,4.19,4,4.19,4a.53.53,0,0,1,0,.6L10.2,19a.63.63,0,0,1-.22.21l-1.79,1a.53.53,0,0,1-.33,0L4.35,18.7A.78.78,0,0,1,4,18.31a8.07,8.07,0,0,1-.6-2.43A1.68,1.68,0,0,0,0,16a9.35,9.35,0,0,0,3.15,6.19,7.85,7.85,0,0,0,6.44,1.59c3.07-.41,5-.82,7.67-6.37a10.69,10.69,0,0,0,1-5.19Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/ok.svg","/svg")
},{"+xKvab":64,"buffer":63}],37:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.08\" cy=\"365.85\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5750, 8788.19)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>27-忧伤</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><circle id=\"椭圆形\" class=\"cls-1\" cx=\"12\" cy=\"12\" r=\"12\"/><path id=\"形状\" class=\"cls-2\" d=\"M15.66,19.25A3.93,3.93,0,0,0,12,16.33a3.93,3.93,0,0,0-3.66,2.92.35.35,0,0,0,.16.37.37.37,0,0,0,.4,0S9.57,19,12,19s3.08.55,3.1.58a.35.35,0,0,0,.23.09.35.35,0,0,0,.33-.42ZM7.48,10.34a2.72,2.72,0,0,0-.63.08c-1.91.47-2.34,2.75-2.36,2.84a.34.34,0,0,0,.19.36.35.35,0,0,0,.14,0,.34.34,0,0,0,.26-.12,4.48,4.48,0,0,1,2.25-1.17,5.69,5.69,0,0,1,1.38-.18,3.36,3.36,0,0,1,1.16.17.32.32,0,0,0,.14,0,.34.34,0,0,0,.34-.33.35.35,0,0,0-.14-.27,3.89,3.89,0,0,0-2.73-1.44Zm9,0a2.72,2.72,0,0,1,.63.08c1.91.47,2.34,2.75,2.36,2.84a.34.34,0,0,1-.19.36.35.35,0,0,1-.14,0,.34.34,0,0,1-.26-.12,4.48,4.48,0,0,0-2.25-1.17,5.69,5.69,0,0,0-1.38-.18,3.36,3.36,0,0,0-1.16.17.32.32,0,0,1-.14,0,.34.34,0,0,1-.34-.33.35.35,0,0,1,.14-.27,3.89,3.89,0,0,1,2.73-1.44Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/pensive.svg","/svg")
},{"+xKvab":64,"buffer":63}],38:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#ffdcd9;}.cls-2{fill:#ff8987;}.cls-3{fill:#85081c;}.cls-4{fill:#5e0515;}</style></defs><title>39-猪头</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M22.8,8.1a4.33,4.33,0,0,0,.67-.85c1.13-1.91.18-6.87-.39-7.2s-3.69.7-5.5,2.08A10.87,10.87,0,0,0,12,.55,10.88,10.88,0,0,0,6.43,2.12C4.62.74,1.41-.23,1,.05S-.57,5.34.55,7.25a4.16,4.16,0,0,0,.66.83A13.25,13.25,0,0,0,0,13.53c0,6.66,5.34,8.35,12,8.35s12-1.69,12-8.35A13.35,13.35,0,0,0,22.8,8.1Z\"/><path class=\"cls-2\" d=\"M4.93,3.19C3.49,2.35,2,1.8,1.73,2S1,5.29,1.5,7.47A13.52,13.52,0,0,1,4.93,3.19Z\"/><path class=\"cls-2\" d=\"M22.5,7.47c.49-2.18.15-5.29-.23-5.51s-1.76.38-3.2,1.23A13.52,13.52,0,0,1,22.5,7.47Z\"/><path class=\"cls-2\" d=\"M18.67,14.63c0,3-2.07,6.25-6.67,6.25s-6.67-3.26-6.67-6.25S7.4,10.88,12,10.88,18.67,11.64,18.67,14.63Z\"/><path id=\"形状\" class=\"cls-3\" d=\"M10,15.61c0,1.24-.23,1.6-1,1.6s-1-.36-1-1.6S8.23,14,9,14,10,14.38,10,15.61Zm6,0c0,1.24-.23,1.6-1,1.6s-1-.36-1-1.6.23-1.6,1-1.6S16,14.38,16,15.61Z\"/><circle id=\"椭圆形\" class=\"cls-4\" cx=\"4.67\" cy=\"10.55\" r=\"1.33\"/><circle class=\"cls-4\" cx=\"19.33\" cy=\"10.55\" r=\"1.33\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/pig.svg","/svg")
},{"+xKvab":64,"buffer":63}],39:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#bf6952;}.cls-2{fill:#f5f8fa;}.cls-3{fill:#272727;}.cls-4{fill:#5e0515;}.cls-5{fill:#f2abba;}</style></defs><title>35-便便</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M22.36,15.46a5.41,5.41,0,0,0-2.49-5.81,3.7,3.7,0,0,0-.21-2.5,4.16,4.16,0,0,0-3.14-2.37,2,2,0,0,0,0-1.45c-.67-2-3.33-.66-5.33-3.33A3.8,3.8,0,0,0,9.29,3.66a14.62,14.62,0,0,0-2.53.62h0a2.48,2.48,0,0,0-1.55,2.3,2.45,2.45,0,0,0,.55,1.54l-.46.17h0a3.94,3.94,0,0,0-2.65,3.63,3.64,3.64,0,0,0,.55,1.92A5.3,5.3,0,0,0,0,18.67,5.42,5.42,0,0,0,5.5,24a21,21,0,0,0,6.35-1.11A17.93,17.93,0,0,0,19.11,24a4.89,4.89,0,0,0,3.25-8.54Z\"/><ellipse id=\"椭圆形\" class=\"cls-2\" cx=\"9\" cy=\"10.33\" rx=\"2.33\" ry=\"3\"/><ellipse class=\"cls-2\" cx=\"15.67\" cy=\"10.33\" rx=\"2.33\" ry=\"3\"/><ellipse class=\"cls-3\" cx=\"9.33\" cy=\"10.33\" rx=\"1.33\" ry=\"1.67\"/><ellipse class=\"cls-3\" cx=\"15.33\" cy=\"10.33\" rx=\"1.33\" ry=\"1.67\"/><path class=\"cls-4\" d=\"M6.3,16.6a.38.38,0,0,1,.37-.6h12a.38.38,0,0,1,.37.6A7.06,7.06,0,0,1,12.67,20,7,7,0,0,1,6.3,16.6Z\"/><path class=\"cls-5\" d=\"M12.67,17.33a5.66,5.66,0,0,0-4.2,1.51A7.71,7.71,0,0,0,12.67,20a7.65,7.65,0,0,0,4.19-1.16A5.65,5.65,0,0,0,12.67,17.33Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/poop.svg","/svg")
},{"+xKvab":64,"buffer":63}],40:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#dadfe8;}.cls-2{fill:#f83640;}.cls-3{fill:#99aab5;opacity:0.6;isolation:isolate;}.cls-4{fill:#ffd57a;}.cls-5{fill:#ffac33;}.cls-6{fill:#ffad29;}.cls-7{fill:#fff;}</style></defs><title>52-爆米花</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M20.92,7.06H2.12a2.12,2.12,0,1,0,0,4.23,2.22,2.22,0,0,0,.37,0v0l.45,9.89A3,3,0,0,0,5.88,24h11.3a3,3,0,0,0,2.95-2.82l.45-9.89v0a2,2,0,0,0,.35,0,2.12,2.12,0,1,0,0-4.23Z\"/><path id=\"形状\" class=\"cls-2\" d=\"M19.06,11.29v12a2.92,2.92,0,0,0,1.05-2.11l.48-9.89Zm-4.24,0h2.12V24H14.82ZM10.59,24V11.29h2.12V24ZM6.35,11.29H8.47V24H6.35Zm-3.89,0,.48,9.89a3,3,0,0,0,1.3,2.3V11.29Z\"/><polygon class=\"cls-3\" points=\"2.46 11.29 2.53 12.71 20.52 12.71 20.59 11.29 2.46 11.29\"/><path class=\"cls-4\" d=\"M20.65,7.11a1.37,1.37,0,0,0,.05-.4,1.79,1.79,0,0,0-.49-1.23,1,1,0,0,0,.49-.89,1,1,0,0,0-1.45-1,1.06,1.06,0,0,0-.74-.75,1,1,0,0,0,.08-.39,1.07,1.07,0,0,0-1.06-1.06,1,1,0,0,0-.38.08,1.76,1.76,0,0,0-3.5.27,1.67,1.67,0,0,0,0,.39,1.75,1.75,0,0,0-1.1.68,1.77,1.77,0,0,0-3.18,1h0a1.72,1.72,0,0,0-.74-.33,1.76,1.76,0,0,0-3.46,0,2.58,2.58,0,0,0-.39,0A2.48,2.48,0,0,0,2.35,6,2.59,2.59,0,0,0,2.6,7.07a1.06,1.06,0,0,0,.1,2.11H20.35a1.06,1.06,0,0,0,.3-2.07Z\"/><g id=\"编组\"><circle id=\"椭圆形\" class=\"cls-5\" cx=\"18.59\" cy=\"4.94\" r=\"1\"/><circle class=\"cls-5\" cx=\"16.12\" cy=\"3.18\" r=\"1.06\"/><circle class=\"cls-5\" cx=\"7.29\" cy=\"4.24\" r=\"1\"/><path class=\"cls-6\" d=\"M20.7,8.12a1.05,1.05,0,0,0-2.05-.34l-.06,0a.71.71,0,0,0-.71.71h2.76A1,1,0,0,0,20.7,8.12ZM5.53,7.76a1,1,0,0,1,.39.08A1.06,1.06,0,0,1,8,8.12a1,1,0,0,1-.07.35h3a1,1,0,0,1-.07-.35,1.06,1.06,0,0,1,1.06-1.06,1,1,0,0,1,.47.11,1,1,0,0,1-.12-.46,1.06,1.06,0,0,1,2.12,0,1,1,0,0,1-.08.39,1.06,1.06,0,0,1,.79,1,1,1,0,0,1-.07.35h2.1l-.4-.35a1.44,1.44,0,0,0,.49-1.06,1.42,1.42,0,0,0-1.42-1.41,1.47,1.47,0,0,0-.72.2,1.23,1.23,0,0,0,0-.2,1.41,1.41,0,0,0-1.41-1.41,1.44,1.44,0,0,0-1.29.82A1.05,1.05,0,0,0,10.82,6a1,1,0,0,0,.08.39,1.06,1.06,0,0,0-.78,1,1.09,1.09,0,0,0,.07.4A1.06,1.06,0,0,0,9.76,8a1,1,0,0,0-.7-.28,1.06,1.06,0,0,0-.47.12A1.05,1.05,0,0,0,7.25,6.43a1.05,1.05,0,0,0-2.07.28,1,1,0,0,0,.07.39,1,1,0,0,0-.43.23,1,1,0,0,0-.7-.27A1.05,1.05,0,0,0,3.06,8.12a1,1,0,0,0,.06.35H4.53A1.07,1.07,0,0,1,5.53,7.76Z\"/></g><path class=\"cls-7\" d=\"M1.65,8.47v.71a.7.7,0,0,0,.7.7H20.7a.7.7,0,0,0,.71-.7V8.47Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/popcorn.svg","/svg")
},{"+xKvab":64,"buffer":63}],41:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#50a5e6;}.cls-2{fill:#1c6399;}.cls-3{fill:#d2a077;}.cls-4{fill:#f3d2a2;}</style></defs><title>43-合十</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M20,14.67c-2,0-4.46,4.73-4.67,6.66C15.05,23.94,16.67,24,16.67,24H24V17.33S21.71,14.67,20,14.67Z\"/><ellipse id=\"椭圆形\" class=\"cls-2\" cx=\"18.38\" cy=\"18.99\" rx=\"3.9\" ry=\"1.09\" transform=\"translate(-7.26 25.42) rotate(-60)\"/><path class=\"cls-3\" d=\"M13.39,0a1.43,1.43,0,0,1,1.43,1.43c0,.52.44,7.21.44,7.21L12,12V1.43A1.42,1.42,0,0,1,13.39,0Z\"/><path class=\"cls-4\" d=\"M12.58,2.88a1.27,1.27,0,1,1,2.54,0s.36,4,.8,6.25a10.13,10.13,0,0,1,.84,4.16,46.26,46.26,0,0,0,3.75,3.34,11,11,0,0,1-3.18,5.44L15,20.12a3.73,3.73,0,0,1-3-2.84c0-2,.57-14.4.57-14.4Z\"/><path class=\"cls-1\" d=\"M4,14.67c2,0,4.46,4.73,4.67,6.66C9,23.94,7.33,24,7.33,24H0V17.33S2.29,14.67,4,14.67Z\"/><ellipse class=\"cls-2\" cx=\"5.62\" cy=\"18.99\" rx=\"1.09\" ry=\"3.9\" transform=\"translate(-8.74 5.35) rotate(-30)\"/><path class=\"cls-3\" d=\"M10.71,0a1.4,1.4,0,0,0-1.56,1.4C9.15,1.93,9,8.29,9,8.29L11.93,12,12,1.49A1.46,1.46,0,0,0,10.71,0Z\"/><path class=\"cls-4\" d=\"M11.42,2.88a1.27,1.27,0,1,0-2.54,0s-.36,4-.8,6.25a10.13,10.13,0,0,0-.84,4.16,46.26,46.26,0,0,1-3.75,3.34,11,11,0,0,0,3.18,5.44L9,20.12a3.73,3.73,0,0,0,3-2.84C12,15.29,11.42,2.88,11.42,2.88Z\"/><path class=\"cls-3\" d=\"M12,17.22a.5.5,0,0,1-.5-.5V1.86a.5.5,0,1,1,1,0V16.72A.5.5,0,0,1,12,17.22Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/pray.svg","/svg")
},{"+xKvab":64,"buffer":63}],42:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.08\" cy=\"365.85\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5750, 8788.19)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>30-释然</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path id=\"形状\" class=\"cls-2\" d=\"M18.87,10.41a.32.32,0,0,0-.4,0A4.53,4.53,0,0,1,16,11a4.53,4.53,0,0,1-2.47-.6.32.32,0,0,0-.4,0,.32.32,0,0,0-.1.39c0,.09,1,2.2,3,2.2s2.93-2.11,3-2.2A.32.32,0,0,0,18.87,10.41Zm-8.4,0A4.53,4.53,0,0,1,8,11a4.53,4.53,0,0,1-2.47-.6.32.32,0,0,0-.4,0,.32.32,0,0,0-.1.39c0,.09,1,2.2,3,2.2s2.93-2.11,3-2.2a.32.32,0,0,0-.1-.39A.32.32,0,0,0,10.47,10.4Zm8.86-1.73a.68.68,0,0,1-.53-.27,5,5,0,0,0-4.67-1.75.66.66,0,0,1-.26-1.3,6.24,6.24,0,0,1,6,2.25.66.66,0,0,1-.14.93.67.67,0,0,1-.4.14Zm-14.66,0a.67.67,0,0,1-.4-.14.66.66,0,0,1-.14-.93,6.26,6.26,0,0,1,6-2.25.66.66,0,0,1-.26,1.3A5,5,0,0,0,5.2,8.4.68.68,0,0,1,4.67,8.67ZM15.5,15.72a.33.33,0,0,0-.4,0s-.67.57-3.1.57-3.1-.57-3.1-.57a.35.35,0,0,0-.4,0,.34.34,0,0,0-.16.37A3.93,3.93,0,0,0,12,19a3.93,3.93,0,0,0,3.66-2.92.33.33,0,0,0-.16-.36Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/relieve.svg","/svg")
},{"+xKvab":64,"buffer":63}],43:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#56a32c;}.cls-2{fill:#d12231;}.cls-3{fill:#f83640;}</style></defs><title>40-玫瑰</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M8.15,16.91H7.94v-.28c3.2-.32,5.7-2.84,5.7-4.87s0,1-6.37,1S.89,9.6.89,11.76s2.51,4.56,5.72,4.87v.28H6.39C4.69,16.91,2,15.54,2,16s2.79,2.67,4.62,3.19v4.11a.67.67,0,1,0,1.33,0V19.22c1.83-.52,4.62-2.76,4.62-3.19s-2.7.88-4.41.88Z\"/><path class=\"cls-2\" d=\"M13,4.9C10.37,2,14,1,11.23,1A5.49,5.49,0,0,0,9,1.77C8.58.73,8,0,7.27,0,5.91,0,4.79,2.89,4.69,5.51A5.78,5.78,0,0,0,3.46,8.82c0,4.06,1.72,5.89,4.32,5.89C13,14.71,16.87,9.34,13,4.9Z\"/><path class=\"cls-3\" d=\"M11.09,8.82c0,4.06-1.72,5.89-4.32,5.89-5.18,0-9.09-5.37-5.18-9.81C4.18,2,.59,1,3.32,1,5.05,1,11.09,4.76,11.09,8.82Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/rose.svg","/svg")
},{"+xKvab":64,"buffer":63}],44:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#f3d2a2;}.cls-2{fill:#f83640;}.cls-3{fill:#662e00;}.cls-4{fill:#b35c00;}.cls-5{fill:#f0f1f5;}.cls-6{fill:#f1f2f2;}.cls-7{fill:#f5f6fa;}.cls-8{fill:#d1d3d4;}</style></defs><title>41-圣诞老人</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path class=\"cls-1\" d=\"M18.33,11.33a1,1,0,0,0-.37.08c-.38-5.23-3.8-9.33-8-9.33s-7.58,4.1-8,9.33a1,1,0,0,0-.37-.08C.75,11.33,0,12.53,0,14s.75,2.67,1.67,2.67a1.25,1.25,0,0,0,.91-.45C3.77,20,6.64,22.67,10,22.67s6.23-2.67,7.42-6.45a1.25,1.25,0,0,0,.91.45c.92,0,1.67-1.2,1.67-2.67S19.25,11.33,18.33,11.33Z\"/><path class=\"cls-2\" d=\"M21.33,16.67a2.76,2.76,0,0,1,.91.16c.1-.78.25-1.75.43-2.83.66-4,.35-14-9.34-14h-.66C6,0,1.33,3.05,1.33,6S5.58,8.67,10,8.67c3,0,5.1,0,6.64-.06l0,.06L20,17A2.69,2.69,0,0,1,21.33,16.67Z\"/><path id=\"形状\" class=\"cls-3\" d=\"M6.67,14A.67.67,0,0,1,6,13.33V12a.67.67,0,1,1,1.33,0v1.33A.67.67,0,0,1,6.67,14Zm6.66,0a.66.66,0,0,1-.66-.67V12a.66.66,0,0,1,.66-.67A.67.67,0,0,1,14,12v1.33A.67.67,0,0,1,13.33,14Z\"/><path class=\"cls-4\" d=\"M10.67,17.33H9.33a.66.66,0,0,1-.66-.66A.67.67,0,0,1,9.33,16h1.34a.67.67,0,0,1,.66.67A.66.66,0,0,1,10.67,17.33Z\"/><path class=\"cls-5\" d=\"M18,16.67c0-1.34-1.53-.47-2,0-.67.66-2,2-3.33,1.33-1.89-.94-2.67-.67-2.67-.67s-.78-.27-2.67.67C6,18.67,4.67,17.33,4,16.67c-.47-.47-2-1.34-2,0S2.67,18,2.67,18a1.46,1.46,0,0,0,.66,2,2,2,0,0,0,2,2C5.33,24,8,23.33,8,23.33a3.32,3.32,0,0,0,4,0S14.67,24,14.67,22a2,2,0,0,0,2-2,1.46,1.46,0,0,0,.66-2S18,18,18,16.67Z\"/><path class=\"cls-1\" d=\"M10,18.67c4.67,0,2.67,1.33,0,1.33S5.33,18.67,10,18.67Z\"/><circle class=\"cls-6\" cx=\"21.33\" cy=\"19.33\" r=\"2.67\"/><path class=\"cls-7\" d=\"M19.33,8A1.32,1.32,0,0,1,18,9.33H1.33A1.33,1.33,0,0,1,0,8V7.33A1.34,1.34,0,0,1,1.33,6H18a1.33,1.33,0,0,1,1.33,1.33Z\"/><path class=\"cls-8\" d=\"M18,9.33H16c0,1.48.6,2.67,1.33,2.67s1.34-1.19,1.34-2.67c0-.06,0-.13,0-.19A1.37,1.37,0,0,1,18,9.33Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/santa-claus.svg","/svg")
},{"+xKvab":64,"buffer":63}],45:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#ffcc4d;}.cls-2{fill:#9eddff;}.cls-3{fill:#f5f8fa;}.cls-4{fill:#662e00;}.cls-5{fill:#ff9500;}</style></defs><title>22-惊恐</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M12,0A12,12,0,0,0,5.05,21.77c.07-4.29-1.49-9.1-4.11-9.1a2.15,2.15,0,0,0-.77.12c.2-.51.64-.79,1.46-.79,2.84,0,4.44,5.67,4.06,10.19a11.9,11.9,0,0,0,12.62,0C17.93,17.65,19.53,12,22.37,12c.83,0,1.27.28,1.47.79a2.21,2.21,0,0,0-.78-.12c-2.62,0-4.18,4.8-4.11,9.1A12,12,0,0,0,12,0Z\"/><path class=\"cls-2\" d=\"M12,0A12,12,0,0,0,0,12a11.85,11.85,0,0,0,.23,2.32,7.44,7.44,0,0,1,.7-1.65,2.13,2.13,0,0,0-.76.12A1.25,1.25,0,0,1,1.35,12c2-2.79,6-4.7,10.65-4.7S20.66,9.24,22.65,12a1.24,1.24,0,0,1,1.18.76,2.05,2.05,0,0,0-.76-.12,7.44,7.44,0,0,1,.7,1.65A11.85,11.85,0,0,0,24,12,12,12,0,0,0,12,0Z\"/><path class=\"cls-3\" d=\"M4.9,7.94c-.63,2.12.07,4.2,1.57,4.64s3.22-.91,3.85-3-.07-4.2-1.57-4.65S5.53,5.82,4.9,7.94Z\"/><path class=\"cls-3\" d=\"M19.1,7.94c.63,2.12-.07,4.2-1.57,4.64s-3.22-.91-3.85-3,.07-4.2,1.57-4.65S18.47,5.82,19.1,7.94Z\"/><path class=\"cls-4\" d=\"M12,12a3.34,3.34,0,0,0-3.33,3.33v4a3.33,3.33,0,1,0,6.66,0v-4A3.34,3.34,0,0,0,12,12Z\"/><path class=\"cls-5\" d=\"M.94,12.67a2.15,2.15,0,0,0-.77.12,1.4,1.4,0,0,1,.18-.32C-.89,14,1.9,19,.55,24h4.3C5.65,19.36,4,12.67.94,12.67Z\"/><path class=\"cls-5\" d=\"M23.84,12.79a2.21,2.21,0,0,0-.78-.12c-3.09,0-4.71,6.66-3.91,11.33h4.31C22.18,19.3,24.56,14.61,23.84,12.79Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/scream.svg","/svg")
},{"+xKvab":64,"buffer":63}],46:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#65471b;}.cls-3{fill:#e99d1b;}.cls-4{fill:#f3d2a2;}.cls-5{fill:#a67125;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.43\" cy=\"364.98\" r=\"0.77\" gradientTransform=\"matrix(22.67, 0, 0, -22.67, 5438.33, 8280.18)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>28-嘘</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M22.67,11.33A11.34,11.34,0,1,1,11.33,0,11.34,11.34,0,0,1,22.67,11.33\"/><ellipse id=\"椭圆形\" class=\"cls-2\" cx=\"11.21\" cy=\"15.42\" rx=\"2.71\" ry=\"1.29\"/><path class=\"cls-3\" d=\"M17.23,17.32h0a1.19,1.19,0,0,0-1.64.39l-.1.16a2.65,2.65,0,0,0-1.38-.76l-.93-.19L14,12.76a1.21,1.21,0,0,0-.93-1.41h0a1.2,1.2,0,0,0-1.41.93l-1.11,5.45v.05l-.21,1h0L9.56,22.5A1.17,1.17,0,0,0,10.82,24H13c1.87,0,2.42-.67,2.8-2.06l1.83-3a1.2,1.2,0,0,0-.4-1.64Z\"/><path class=\"cls-4\" d=\"M16.23,17.32h0a1.19,1.19,0,0,0-1.64.39l-.1.16a2.65,2.65,0,0,0-1.38-.76l-.93-.19L13,12.76a1.21,1.21,0,0,0-.93-1.41h0a1.2,1.2,0,0,0-1.41.93L9.53,17.73v.05l-.21,1h0L8.56,22.5A1.17,1.17,0,0,0,9.82,24H12c1.87,0,2.42-.67,2.8-2.06l1.83-3a1.2,1.2,0,0,0-.4-1.64Z\"/><path class=\"cls-5\" d=\"M14.27,20.5h0a.23.23,0,0,1-.18-.26.69.69,0,0,0-.12-.56A3.27,3.27,0,0,0,12,18.84a.23.23,0,0,1-.2-.26.21.21,0,0,1,.25-.19,3.71,3.71,0,0,1,2.24,1,1.1,1.1,0,0,1,.2.91.22.22,0,0,1-.22.19Z\"/><path class=\"cls-5\" d=\"M12.1,23.65a2.38,2.38,0,0,1-.56-.07,1,1,0,0,1-.78-.65.77.77,0,0,1,.19-.76,1.15,1.15,0,0,1,1.13-.23.22.22,0,0,1-.11.43.71.71,0,0,0-.69.12.31.31,0,0,0-.09.31.58.58,0,0,0,.46.34,1.29,1.29,0,0,0,1.45-.42,1.37,1.37,0,0,0,.26-1.25c-.29-.54-1.37-.66-1.76-.66a.23.23,0,0,1-.23-.23.23.23,0,0,1,.23-.23c.06,0,1.69,0,2.16.91A1.8,1.8,0,0,1,13.45,23a1.65,1.65,0,0,1-1.35.65Z\"/><path class=\"cls-2\" d=\"M8.81,8.81c0,.93-.56,1.68-1.25,1.68S6.3,9.74,6.3,8.81s.56-1.67,1.26-1.67S8.81,7.89,8.81,8.81Z\"/><path class=\"cls-2\" d=\"M19.26,6.85a.73.73,0,0,0,.42-.14.71.71,0,0,0,.14-1A7.36,7.36,0,0,0,14.3,2.6.71.71,0,1,0,14.3,4a6,6,0,0,1,4.39,2.55.7.7,0,0,0,.57.29Z\"/><path class=\"cls-2\" d=\"M13.85,8.81c0,.93.57,1.68,1.26,1.68s1.26-.75,1.26-1.68-.56-1.67-1.26-1.67S13.85,7.89,13.85,8.81Z\"/><path class=\"cls-2\" d=\"M3.41,6.85A.76.76,0,0,1,3,6.71a.72.72,0,0,1-.14-1A7.37,7.37,0,0,1,8.37,2.6.71.71,0,1,1,8.37,4,6,6,0,0,0,4,6.56a.72.72,0,0,1-.57.29Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/shush.svg","/svg")
},{"+xKvab":64,"buffer":63}],47:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#c3cad9;}</style><radialGradient id=\"未命名的渐变\" cx=\"-219.1\" cy=\"407.01\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5270.45, 9775.98)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>20-闭嘴</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><circle id=\"椭圆形\" class=\"cls-1\" cx=\"12\" cy=\"12\" r=\"12\"/><path id=\"形状\" class=\"cls-2\" d=\"M9.36,9.67C9.36,11,8.61,12,7.69,12S6,11,6,9.67s.75-2.34,1.67-2.34S9.36,8.38,9.36,9.67m8.66,0C18,11,17.28,12,16.36,12s-1.67-1-1.67-2.33.75-2.34,1.67-2.34S18,8.38,18,9.67M16.67,18h-10A.65.65,0,0,1,6,17.34v-.67A.66.66,0,0,1,6.67,16h10Z\"/><path class=\"cls-3\" d=\"M23.5,17.39,18.36,16a.62.62,0,0,0-.78.36l-1.09-.52-.49,1V15.33H14.67v1.34H13.33V15.33H12v1.34H10.67V15.33H9.33v1.34H8V15.33H6.67v2H8v1.34H9.33V17.33h1.34v1.34H12V17.33h1.33v1.34h1.34V17.33h1.09l-.38.81,1.09.53-.06.14a.81.81,0,0,0,.25.85c.41.35,3.52,3.15,3.52,3.15a.86.86,0,0,0,1.18.05A25.81,25.81,0,0,0,24,18.21a.65.65,0,0,0-.47-.82ZM21,21.44l-1.76-1.5,1.07-2.05,2.23.76Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/shut-up.svg","/svg")
},{"+xKvab":64,"buffer":63}],48:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#ffc252;}.cls-4{fill:#1272cc;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.08\" cy=\"365.85\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5750, 8788.19)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>9-睡</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><g id=\"第二排\"><circle id=\"椭圆形\" class=\"cls-1\" cx=\"12\" cy=\"12\" r=\"12\"/><circle class=\"cls-2\" cx=\"12\" cy=\"17.33\" r=\"2\"/><path id=\"形状\" class=\"cls-2\" d=\"M11.54,11.07a.34.34,0,0,0-.41,0,4.47,4.47,0,0,1-2.46.6,4.53,4.53,0,0,1-2.47-.6.35.35,0,0,0-.41,0,.33.33,0,0,0-.09.4c0,.09,1,2.2,3,2.2s2.93-2.11,3-2.2a.34.34,0,0,0-.1-.4Zm6.67,0a.35.35,0,0,0-.41,0,4.53,4.53,0,0,1-2.47.6,4.47,4.47,0,0,1-2.46-.6.33.33,0,0,0-.51.4c0,.09,1,2.2,3,2.2s2.93-2.11,3-2.2a.33.33,0,0,0-.09-.4Z\"/><path id=\"路径\" class=\"cls-3\" d=\"M23,8.36a.29.29,0,0,0,0-.09.77.77,0,0,0-.82-.79H19.76l2.86-4A.82.82,0,0,0,22.8,3a.55.55,0,0,0-.59-.57H18.65l0-.46-1,.59a.77.77,0,0,0-.34.66.76.76,0,0,0,.82.79H20.2L17.36,8a1,1,0,0,0-.16.49c0,.41.34.61.74.61h4.21A1,1,0,0,0,22.61,9l1-.6H23Z\"/><path class=\"cls-4\" d=\"M21.18,3.39h-2.1a.77.77,0,0,1-.82-.79.77.77,0,0,1,.82-.79h4.11a.55.55,0,0,1,.59.56.76.76,0,0,1-.19.54l-2.85,4h2.39a.79.79,0,1,1,0,1.58H18.92c-.4,0-.74-.2-.74-.62a1,1,0,0,1,.16-.49l2.84-4Z\"/><path class=\"cls-3\" d=\"M16.59,5s0,0,0-.06a.57.57,0,0,0-.61-.6H14.2l2.14-3a.58.58,0,0,0,.14-.4A.42.42,0,0,0,16,.51H13.37l0-.34L12.6.61a.62.62,0,0,0-.25.5A.57.57,0,0,0,13,1.7h1.57l-2.12,3a.74.74,0,0,0-.13.37c0,.31.26.46.56.46H16a.68.68,0,0,0,.34-.09L17.08,5Z\"/><path class=\"cls-4\" d=\"M15.26,1.27H13.69a.57.57,0,0,1-.61-.59.57.57,0,0,1,.61-.6h3.08a.42.42,0,0,1,.44.43.58.58,0,0,1-.14.4l-2.13,3h1.78a.57.57,0,0,1,.61.6.57.57,0,0,1-.61.59H13.57c-.3,0-.55-.15-.55-.46a.74.74,0,0,1,.12-.37l2.12-3Z\"/><path class=\"cls-3\" d=\"M11.83,7s0,0,0,0a.5.5,0,0,0-.53-.51H9.78l1.83-2.56a.48.48,0,0,0,.12-.35.35.35,0,0,0-.38-.36H9.07V2.83l-.65.38a.52.52,0,0,0,.31.93h1.35L8.25,6.7A.59.59,0,0,0,8.14,7c0,.27.22.39.48.39h2.69a.62.62,0,0,0,.29-.07L12.25,7Z\"/><path class=\"cls-4\" d=\"M10.69,3.77H9.35a.51.51,0,1,1,0-1H12a.36.36,0,0,1,.38.37.47.47,0,0,1-.12.34L10.41,6h1.53a.51.51,0,1,1,0,1H9.24c-.26,0-.47-.13-.47-.4a.6.6,0,0,1,.1-.31l1.82-2.56Z\"/></g></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/sleep.svg","/svg")
},{"+xKvab":64,"buffer":63}],49:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}</style><radialGradient id=\"未命名的渐变\" cx=\"-202.52\" cy=\"390.08\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 4872.41, 9369.74)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>微笑</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><g id=\"第一排\"><circle id=\"椭圆形\" class=\"cls-1\" cx=\"12\" cy=\"12\" r=\"12\"/><path id=\"路径\" class=\"cls-2\" d=\"M7,15.75c0,.12.78,2.92,5,2.92s5-2.8,5-2.92a.32.32,0,0,0-.16-.37.33.33,0,0,0-.4,0s-1.3,1.24-4.43,1.24-4.42-1.23-4.43-1.24a.37.37,0,0,0-.24-.1.33.33,0,0,0-.16.05A.32.32,0,0,0,7,15.75Z\"/><ellipse class=\"cls-2\" cx=\"8\" cy=\"9\" rx=\"1.67\" ry=\"2.33\"/><ellipse class=\"cls-2\" cx=\"16\" cy=\"9\" rx=\"1.67\" ry=\"2.33\"/></g></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/smile.svg","/svg")
},{"+xKvab":64,"buffer":63}],50:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}</style><radialGradient id=\"未命名的渐变\" cx=\"-290.84\" cy=\"391.94\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 6992.28, 9414.26)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>23-坏笑</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path id=\"形状\" class=\"cls-2\" d=\"M16.22,15.75a.34.34,0,0,0-.37-.05L13.18,17c-1.24.62-4.48.63-4.51.63a.34.34,0,0,0-.34.33.34.34,0,0,0,.17.29h0a.29.29,0,0,0,.16,0h4.67a3.27,3.27,0,0,0,3-2.22.35.35,0,0,0-.1-.36Zm4.45-5.08a.68.68,0,0,1-.54-.27A5.6,5.6,0,0,0,16,8a.67.67,0,0,1,0-1.33A6.94,6.94,0,0,1,21.2,9.6a.67.67,0,0,1-.53,1.07Zm-17.34,0A.67.67,0,0,1,2.8,9.6,6.93,6.93,0,0,1,8,6.67.67.67,0,1,1,8,8a5.62,5.62,0,0,0-4.13,2.4A.68.68,0,0,1,3.33,10.67Zm7.27.93s0-.07.05-.11a.66.66,0,0,0-.49-.8,7.21,7.21,0,0,0-5.2.75.67.67,0,0,0,.37,1.23.63.63,0,0,0,.37-.12A4.69,4.69,0,0,1,8,11.85.77.77,0,0,0,8,12a1.34,1.34,0,0,0,2.67,0,1.34,1.34,0,0,0-.07-.4Zm8,0a.93.93,0,0,1,0-.1.67.67,0,0,0-.49-.81,7.18,7.18,0,0,0-5.2.76.66.66,0,0,0-.18.92.68.68,0,0,0,.55.3.63.63,0,0,0,.37-.12,4.69,4.69,0,0,1,2.32-.7A.77.77,0,0,0,16,12a1.34,1.34,0,0,0,2.67,0,1.29,1.29,0,0,0-.07-.4Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/smirk.svg","/svg")
},{"+xKvab":64,"buffer":63}],51:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#f3d2a2;}.cls-2{fill:#d2a077;}</style></defs><title>55-强壮</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M7.62,14.67a24.21,24.21,0,0,1,.2-7.25A12.37,12.37,0,0,0,10,8c.67,0,2.67-.67,2.67-1.33A2.34,2.34,0,0,0,12,5.33l1.33-.66C14,4,13.33,0,10.67,0,6,0,4.29,4.67,4.29,4.67h0S.29,12,.29,18c0,0-.67,3.33,0,4s3.33.66,3.33.66c6.67,2.66,19.05.66,19.05-5.34C22.67,8.67,9.62,10.67,7.62,14.67Z\"/><path class=\"cls-2\" d=\"M12.33,21.5a9.75,9.75,0,0,1-4-.9.68.68,0,0,1-.3-.9A.66.66,0,0,1,9,19.4a7.49,7.49,0,0,0,5.31.43,5.58,5.58,0,0,0,3.11-3.41.67.67,0,0,1,.87-.37.66.66,0,0,1,.37.86,6.88,6.88,0,0,1-3.88,4.17A6.77,6.77,0,0,1,12.33,21.5Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/strong.svg","/svg")
},{"+xKvab":64,"buffer":63}],52:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#ff9500;}.cls-2{fill:#ffd57a;stroke:#ffd57a;}.cls-3{fill:#d97700;}</style></defs><title>53-太阳</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M11.87,23.73a.7.7,0,0,1-.62-.37L10.05,21,8,22.72a.69.69,0,0,1-.45.16.58.58,0,0,1-.26-.05.69.69,0,0,1-.43-.58L6.7,19.6l-2.52.83a.83.83,0,0,1-.22,0,.71.71,0,0,1-.49-.2.69.69,0,0,1-.16-.7L4.13,17l-2.64-.2a.69.69,0,0,1-.59-.42A.68.68,0,0,1,1,15.7l1.73-2L.38,12.48A.69.69,0,0,1,0,11.87a.71.71,0,0,1,.38-.62l2.37-1.2L1,8A.69.69,0,0,1,.9,7.33a.7.7,0,0,1,.59-.43l2.64-.2L3.31,4.18A.68.68,0,0,1,4,3.27a.85.85,0,0,1,.22,0l2.52.82.2-2.64A.7.7,0,0,1,7.33.9.75.75,0,0,1,7.59.85.7.7,0,0,1,8,1l2,1.73L11.25.38A.71.71,0,0,1,11.87,0a.69.69,0,0,1,.61.38l1.2,2.37L15.7,1a.66.66,0,0,1,.44-.17.86.86,0,0,1,.27.05.69.69,0,0,1,.42.59L17,4.13l2.53-.82a.52.52,0,0,1,.21,0,.68.68,0,0,1,.65.91L19.6,6.7l2.65.2A.7.7,0,0,1,22.72,8l-1.73,2,2.37,1.2a.7.7,0,0,1,.37.62.68.68,0,0,1-.37.61L21,13.68l1.73,2a.69.69,0,0,1-.47,1.13L19.6,17l.83,2.53a.69.69,0,0,1-.66.9.76.76,0,0,1-.21,0L17,19.6l-.2,2.65a.68.68,0,0,1-.42.58.63.63,0,0,1-.26.05.69.69,0,0,1-.45-.16l-2-1.73-1.2,2.37a.68.68,0,0,1-.61.37Z\"/><path class=\"cls-2\" d=\"M20.53,11.87A8.67,8.67,0,1,1,11.87,3.2a8.66,8.66,0,0,1,8.66,8.67\"/><path id=\"形状\" class=\"cls-3\" d=\"M11.87,15.51c-4.15,0-5.34-1.55-5.34-.81s2.37,2.65,5.34,2.65,5.33-1.92,5.33-2.65-1.18.81-5.33.81M17.2,9.64a1.78,1.78,0,1,1-1.78-1.77A1.78,1.78,0,0,1,17.2,9.64m-7.11,0A1.78,1.78,0,1,1,8.31,7.87a1.78,1.78,0,0,1,1.78,1.77\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/sun.svg","/svg")
},{"+xKvab":64,"buffer":63}],53:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#f3d2a2;}.cls-2{fill:#d2a077;}</style></defs><title>48-踩</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M21.35,12.06a2.09,2.09,0,0,1-.22.93c-.89,2.89-5.08,2.68-11,2.82-1,0-.43,1.19-.08,3.77.23,1.68-.85,4.26-2.67,4.26-3,0-.12-2.37-2.77-8.22C3.17,12.5,0,14.25,0,11.11V4c0-1.23.12-2.4,1.84-2.59S3.13,0,5.53,0h12a2.22,2.22,0,0,1,1.76,3.57A2.22,2.22,0,0,1,20.47,5.5,2.16,2.16,0,0,1,20,6.84a2.22,2.22,0,0,1,.51,3.5A2.18,2.18,0,0,1,21.35,12.06Z\"/><path class=\"cls-2\" d=\"M13.39,9.83h5.73A2.22,2.22,0,0,1,21,10.92a.57.57,0,0,1-.2.8.58.58,0,0,1-.8-.2,1.07,1.07,0,0,0-.91-.52H13.25a1.06,1.06,0,1,0,0,2.11h3.92a.59.59,0,1,1,0,1.17H13.25A2.22,2.22,0,0,1,11,12.06a2.2,2.2,0,0,1,.8-1.7A2.21,2.21,0,0,1,12,7.08a2.22,2.22,0,0,1,.28-3.39,2.19,2.19,0,0,1-.57-1.47A2.23,2.23,0,0,1,13.91,0h3.65a2.22,2.22,0,0,1,1.91,1.09.58.58,0,0,1-.2.8.59.59,0,0,1-.8-.21,1.08,1.08,0,0,0-.91-.51H13.91a1.06,1.06,0,1,0,0,2.11h4.33a2.25,2.25,0,0,1,1.92,1.09.58.58,0,1,1-1,.59,1.05,1.05,0,0,0-.91-.52h-4.7a1.06,1.06,0,1,0,0,2.12h5.39a2.23,2.23,0,0,1,1.91,1.08.58.58,0,0,1-.2.8.57.57,0,0,1-.8-.2,1.05,1.05,0,0,0-.91-.52H13.39a1.06,1.06,0,1,0,0,2.11Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/thumbs-down.svg","/svg")
},{"+xKvab":64,"buffer":63}],54:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#f3d2a2;}.cls-2{fill:#d2a077;}</style></defs><title>47-赞</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M21.35,11.78a2.09,2.09,0,0,0-.22-.93C20.24,8,16.05,8.17,10.1,8c-1,0-.43-1.2-.08-3.78C10.25,2.58,9.17,0,7.35,0c-3,0-.12,2.37-2.77,8.21C3.17,11.34,0,9.59,0,12.73v7.14c0,1.23.12,2.4,1.84,2.59s1.29,1.38,3.69,1.38h12a2.22,2.22,0,0,0,1.76-3.57,2.22,2.22,0,0,0,1.15-1.93A2.16,2.16,0,0,0,20,17a2.22,2.22,0,0,0,.51-3.5A2.18,2.18,0,0,0,21.35,11.78Z\"/><path class=\"cls-2\" d=\"M13.39,14h5.73A2.22,2.22,0,0,0,21,12.92a.57.57,0,0,0-.2-.8.58.58,0,0,0-.8.2,1.07,1.07,0,0,1-.91.52H13.25a1.06,1.06,0,1,1,0-2.11h3.92a.59.59,0,1,0,0-1.17H13.25A2.22,2.22,0,0,0,11,11.78a2.2,2.2,0,0,0,.8,1.7A2.21,2.21,0,0,0,12,16.76a2.22,2.22,0,0,0,.28,3.39,2.19,2.19,0,0,0-.57,1.47,2.23,2.23,0,0,0,2.23,2.22h3.65a2.22,2.22,0,0,0,1.91-1.09.58.58,0,0,0-.2-.8.59.59,0,0,0-.8.2,1.07,1.07,0,0,1-.91.52H13.91a1.06,1.06,0,1,1,0-2.11h4.33a2.25,2.25,0,0,0,1.92-1.09.58.58,0,1,0-1-.59,1,1,0,0,1-.91.51h-4.7a1.06,1.06,0,1,1,0-2.11h5.39a2.23,2.23,0,0,0,1.91-1.08.58.58,0,0,0-.2-.8.57.57,0,0,0-.8.2,1.05,1.05,0,0,1-.91.52H13.39a1.06,1.06,0,1,1,0-2.11Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/thumbs-up.svg","/svg")
},{"+xKvab":64,"buffer":63}],55:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#d2a077;}.cls-2{fill:#f3d2a2;}.cls-3{fill:#4db5ff;}.cls-4{fill:#5dadec;}</style></defs><title>56-挥手</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><path id=\"路径\" class=\"cls-1\" d=\"M3.24,6.07a1.85,1.85,0,0,1,2.13.11l-.64-.94a1.39,1.39,0,0,1,.41-2.06C5.88,2.66,8,4.06,8,4.06A1.55,1.55,0,0,1,8.3,1.83a1.67,1.67,0,0,1,2.31.41l6.94,9.82-.88,8.58-7.39-2.7L2.83,8.39A1.67,1.67,0,0,1,3.24,6.07Z\"/><path class=\"cls-2\" d=\"M1.8,11.53a1.3,1.3,0,0,1,.34-1.85A1.31,1.31,0,0,1,4,10l3.5,5.11a5.69,5.69,0,0,1,.4-.6L3,7.45a1.33,1.33,0,1,1,2.2-1.51L9.81,12.6c.17-.14.34-.28.52-.41L5,4.46a1.3,1.3,0,0,1,.35-1.85A1.3,1.3,0,0,1,7.23,3l5.3,7.73c.19-.12.39-.22.58-.33L8.16,3.12A1.3,1.3,0,0,1,8.5,1.27a1.32,1.32,0,0,1,1.86.35l5.23,7.63.8,1.16a6.69,6.69,0,0,0-1.73,9.27.66.66,0,0,0,.93.18,6.3,6.3,0,0,1,1.73-9.27l-1-4.87A1.34,1.34,0,0,1,18.91,5L20,8.33a29.6,29.6,0,0,0,1.55,3.88A8,8,0,0,1,7.83,20.33Z\"/><g id=\"编组\"><path class=\"cls-3\" d=\"M8,21.33A5.78,5.78,0,0,1,2.64,16,.64.64,0,0,0,2,15.31a.68.68,0,0,0-.69.66A6.34,6.34,0,0,0,8,22.67a.7.7,0,0,0,.67-.7A.65.65,0,0,0,8,21.33Z\"/><path id=\"形状\" class=\"cls-3\" d=\"M4.67,22.64a3.15,3.15,0,0,1-3.34-3.33.66.66,0,0,0-.66-.67.67.67,0,0,0-.67.67A4.56,4.56,0,0,0,4.67,24a.67.67,0,0,0,0-1.33ZM16,1.31a.66.66,0,0,0-.67.66.67.67,0,0,0,.67.67A5.52,5.52,0,0,1,21.33,8a.67.67,0,1,0,1.34,0A6.48,6.48,0,0,0,16,1.31Z\"/><path class=\"cls-4\" d=\"M19.33,0a.64.64,0,0,0-.66.64.69.69,0,0,0,.66.69,3.21,3.21,0,0,1,3.31,3.31.69.69,0,0,0,.69.67A.65.65,0,0,0,24,4.64,4.57,4.57,0,0,0,19.33,0Z\"/></g></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/wave.svg","/svg")
},{"+xKvab":64,"buffer":63}],56:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#75c940;}.cls-2{fill:#b6e391;}.cls-3{fill:#d7f0c0;}.cls-4{fill:#56a32c;}.cls-5{fill:#d12231;}.cls-6{fill:#f83640;}</style></defs><title>33-凋谢</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M10.61,3.09S6.82-1.67,3.51.63c-2.45,1.7-2.44,4.81-2.2,6.31s1,5,1.46,8S3.56,20.44,4,23.5c.12.77,2.72.34,2.65-.41-.12-1.3-1.22-6-1.51-8S4.26,9.44,3.89,7.29C3.47,4.92,3.7,2.84,5.32,2.36,7.18,1.81,9,4.92,9,4.92l1.59-1.83Z\"/><path class=\"cls-2\" d=\"M4.15,10.9a6,6,0,0,1,1.91,1.2,5.1,5.1,0,0,1,.85,5.3c-.49,1.39.71,3.38.71,3.38A8.05,8.05,0,0,1,5.44,19a7.74,7.74,0,0,1-1.53-3.77,16.1,16.1,0,0,1,.24-4.33\"/><path class=\"cls-3\" d=\"M2.28,9.26A6.66,6.66,0,0,0,.12,12.44,9.14,9.14,0,0,0,2,19.66a11.72,11.72,0,0,1,1.17-3.61c.83-1.12.36-3.79,0-4.77-.26-.7-.93-2-.93-2\"/><path class=\"cls-4\" d=\"M11.92,5.45a1.93,1.93,0,0,1-2.67,0,1.92,1.92,0,0,1-.77-2.55,1.93,1.93,0,0,1,2.67,0,1.93,1.93,0,0,1,.77,2.55\"/><path class=\"cls-4\" d=\"M12.9,3.53c.56.85.07,2.17-1.1,2.94s-2.57.7-3.13-.16S8.6,4.14,9.76,3.37s2.57-.7,3.14.16\"/><path id=\"形状\" class=\"cls-4\" d=\"M9.23,5.38a3.52,3.52,0,0,1-1.93,1s1.13.84,1.82.36.11-1.34.11-1.34m1.7-2.19c0-.55.88-1.53,1.32-1.28,0,0-.59.66,0,1.06s-1.28.22-1.28.22\"/><path class=\"cls-5\" d=\"M9.59,5.72c-1.19.64-2.26,2.16-1.7,5.07.48,2.51,2.61,3.54,1.9,5.22s.55,4.07,2.15.26c.51-1.19,1.88-6.18.52-9.24A2.07,2.07,0,0,0,9.59,5.72Z\"/><path class=\"cls-6\" d=\"M11,4.67c.88-1.29,2.16-1.45,3-.63,4,3.81,2.37,11.29-.34,12.91-1.6.95-.57-4.81-2.73-7.16A3.83,3.83,0,0,1,11,4.67\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/wilted.svg","/svg")
},{"+xKvab":64,"buffer":63}],57:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#f4f7f9;}.cls-4{fill:#292f33;}.cls-5{fill:#f83640;}.cls-6{fill:#d12231;}</style><radialGradient id=\"未命名的渐变\" cx=\"-278.06\" cy=\"382.28\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 6685.49, 9182.48)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>12-调皮</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path class=\"cls-2\" d=\"M10.3,10.54c0-.09-1-2.19-3-2.19s-2.93,2.1-3,2.19a.34.34,0,0,0,.1.4.33.33,0,0,0,.4,0,4.46,4.46,0,0,1,2.47-.6A4.4,4.4,0,0,1,9.8,11,.36.36,0,0,0,10,11a.33.33,0,0,0,.21-.07A.33.33,0,0,0,10.3,10.54Z\"/><path class=\"cls-3\" d=\"M20.67,9a4.34,4.34,0,1,1-4.34-4.33A4.33,4.33,0,0,1,20.67,9Z\"/><circle id=\"椭圆形\" class=\"cls-4\" cx=\"16.33\" cy=\"9\" r=\"1.67\"/><path class=\"cls-2\" d=\"M4.67,14.17c0,2.65,3.06,6,7.33,6s7.33-3.33,7.33-6A33.25,33.25,0,0,1,4.67,14.17Z\"/><path class=\"cls-5\" d=\"M12.36,15.74h-.72A20.16,20.16,0,0,1,8,15.34V20a3.84,3.84,0,0,0,4,4,3.84,3.84,0,0,0,4-4V15.36a19.26,19.26,0,0,1-3.64.38Z\"/><path class=\"cls-6\" d=\"M12,21.23a.36.36,0,0,0,.36-.36V15.74h-.72v5.14a.36.36,0,0,0,.36.36Z\"/></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/wink.svg","/svg")
},{"+xKvab":64,"buffer":63}],58:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#662e00;}.cls-3{fill:#fff;}.cls-4{fill:#f8353f;}</style><radialGradient id=\"未命名的渐变\" cx=\"-239.36\" cy=\"365.85\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 5756.72, 8788.19)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>5-哇</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><g id=\"第一排\"><path id=\"路径\" class=\"cls-1\" d=\"M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12\"/><path class=\"cls-2\" d=\"M12,14a27.85,27.85,0,0,1-6-.67c-.45-.08-1.33,0-1.33,1.34,0,2.66,3.06,6,7.33,6s7.33-3.34,7.33-6c0-1.34-.88-1.42-1.33-1.34A27.85,27.85,0,0,1,12,14Z\"/><path class=\"cls-3\" d=\"M6,14.67a21.13,21.13,0,0,0,6,.66,21.13,21.13,0,0,0,6-.66s-1.33,2.66-6,2.66S6,14.67,6,14.67Z\"/><path id=\"形状\" class=\"cls-4\" d=\"M10.45,2.94l-3,.54L5.87.64A.85.85,0,0,0,5,.22a.84.84,0,0,0-.68.69l-.49,3.2-3,.54A.83.83,0,0,0,.58,6.22L3.29,7.51l-.5,3.21a.84.84,0,0,0,.82,1,.86.86,0,0,0,.6-.25L6.55,9.06l3,1.43a.84.84,0,0,0,1.09-1.16L9.08,6.49l2.11-2.14a.82.82,0,0,0,.15-1A.84.84,0,0,0,10.45,2.94Zm3.1,0,3,.54L18.13.64A.85.85,0,0,1,19,.22a.84.84,0,0,1,.68.69l.49,3.2,3,.54a.83.83,0,0,1,.21,1.57L20.71,7.51l.5,3.21a.84.84,0,0,1-.82,1,.86.86,0,0,1-.6-.25L17.45,9.06l-3,1.43a.84.84,0,0,1-1.09-1.16l1.57-2.84L12.81,4.35a.82.82,0,0,1-.15-1A.84.84,0,0,1,13.55,2.94Z\"/></g></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/wow.svg","/svg")
},{"+xKvab":64,"buffer":63}],59:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:#d2a077;}.cls-2{fill:#f3d2a2;}</style></defs><title>42-耶</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><path id=\"路径\" class=\"cls-1\" d=\"M13.71,11.06a2.58,2.58,0,0,0-.6-.44l-.28-.93-5.49,0-.21.75a2.37,2.37,0,0,0-1,.49L3.7,8.18a1.6,1.6,0,0,0-1,1.47v.65L0,13.16v1.5L6.86,22s7.21-10.48,7.23-10.46A3,3,0,0,0,13.71,11.06Z\"/><g id=\"编组\"><path id=\"形状\" class=\"cls-2\" d=\"M12.06,10.36H7.54a2.71,2.71,0,0,0-.41,0l0-.19L4.83,1.67A1.35,1.35,0,0,1,5.89,0,1.33,1.33,0,0,1,7.51,1.1L9.64,9l.89.07L12,1.89a1.37,1.37,0,0,1,2.73.26L13.26,9.8l-.15.82A2.33,2.33,0,0,0,12.06,10.36ZM1.31,9h.12A1.31,1.31,0,0,1,2.74,10.3v2.86a1.31,1.31,0,0,1-1.31,1.32H1.31A1.32,1.32,0,0,1,0,13.16V10.3A1.31,1.31,0,0,1,1.31,9Zm4.75,2,0,0a2,2,0,0,0-.53,1.36.62.62,0,0,0,0,.13A2,2,0,0,0,6,13.76a1.08,1.08,0,0,1-.18.24,1.34,1.34,0,0,1-1,.48A1.37,1.37,0,0,1,3.43,13.1V9a1.36,1.36,0,0,1,.27-.81,1.34,1.34,0,0,1,1.1-.56A1.37,1.37,0,0,1,6.17,9V10.9a1.31,1.31,0,0,0-.11.12Z\"/><path class=\"cls-2\" d=\"M1.41,15.16a2,2,0,0,0,1.68-.9,3.17,3.17,0,0,0,.3.34,2.07,2.07,0,0,0,2.86-.06,2.3,2.3,0,0,0,.28-.34h0a1.5,1.5,0,0,0,1,.28H9.28a4.48,4.48,0,0,0-.7.68A6.46,6.46,0,0,0,7.2,19.28a.34.34,0,0,0,.34.34.35.35,0,0,0,.35-.34,5.45,5.45,0,0,1,1.63-4.12,2.61,2.61,0,0,1,1.71-.68c.49,0,.58-.69.08-.69H7.54a1.37,1.37,0,0,1,0-2.74H13a1.4,1.4,0,0,1,1.31,1l.75,2.46a7.32,7.32,0,0,1,.28,1.5c0,3.3-3.22,6.72-7.14,6.72a8.22,8.22,0,0,1-8.22-8H0a2,2,0,0,0,1.31.49Z\"/></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/yeah.svg","/svg")
},{"+xKvab":64,"buffer":63}],60:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
module.exports = format("<defs><style>.cls-1{fill:url(#未命名的渐变);}.cls-2{fill:#ffac33;}.cls-3{fill:#662e00;}.cls-4{fill:#ff5e61;}</style><radialGradient id=\"未命名的渐变\" cx=\"-268.79\" cy=\"383.12\" r=\"0.77\" gradientTransform=\"matrix(24, 0, 0, -24, 6462.88, 9202.67)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ffe5a3\"/><stop offset=\"1\" stop-color=\"#ffad29\"/></radialGradient></defs><title>21-好吃</title><g id=\"图层_2\" data-name=\"图层 2\"><g id=\"图层_1-2\" data-name=\"图层 1\"><g id=\"页面-1\"><g id=\"第三排\"><circle id=\"椭圆形\" class=\"cls-1\" cx=\"12\" cy=\"12\" r=\"12\"/><path id=\"路径\" class=\"cls-2\" d=\"M21.4,19.45a3,3,0,0,0-.7-1.13l-2.45-2.53a8.07,8.07,0,0,1-4.79,4.53l2.46,2.46a2.89,2.89,0,0,0,.47.38,12.09,12.09,0,0,0,5-3.71Z\"/><path id=\"形状\" class=\"cls-3\" d=\"M4.67,11.33a.63.63,0,0,1-.3-.07.66.66,0,0,1-.3-.89,3.55,3.55,0,0,1,3.26-1.7,3.56,3.56,0,0,1,3.27,1.7.66.66,0,0,1-.3.89A.65.65,0,0,1,9.41,11a2.29,2.29,0,0,0-2.08-1,2.31,2.31,0,0,0-2.07,1A.64.64,0,0,1,4.67,11.33Zm14.66,0a.63.63,0,0,0,.3-.07.66.66,0,0,0,.3-.89,3.55,3.55,0,0,0-3.26-1.7,3.56,3.56,0,0,0-3.27,1.7.66.66,0,0,0,.3.89.65.65,0,0,0,.89-.29,2.29,2.29,0,0,1,2.08-1,2.31,2.31,0,0,1,2.07,1,.64.64,0,0,0,.59.37Zm.34,4.35a7.48,7.48,0,0,0,.31-.85.67.67,0,0,0-1.29-.33A6.7,6.7,0,0,1,12,19.33,6.7,6.7,0,0,1,5.31,14.5.67.67,0,0,0,4,14.83a8.12,8.12,0,0,0,8,5.84,8.92,8.92,0,0,0,2.88-.46,8.1,8.1,0,0,0,4.79-4.53Z\"/><path class=\"cls-4\" d=\"M22.12,18.21l-2.45-2.53a8.1,8.1,0,0,1-4.79,4.53l2.45,2.46a3.39,3.39,0,0,0,4.67,0A3.14,3.14,0,0,0,22.12,18.21Z\"/></g></g></g></g>")
}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/svg/yum.svg","/svg")
},{"+xKvab":64,"buffer":63}],61:[function(require,module,exports){

},{"+xKvab":64,"buffer":63}],62:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/browserify/node_modules/base64-js/lib/b64.js","/../node_modules/browserify/node_modules/base64-js/lib")
},{"+xKvab":64,"buffer":63}],63:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/browserify/node_modules/buffer/index.js","/../node_modules/browserify/node_modules/buffer")
},{"+xKvab":64,"base64-js":62,"buffer":63,"ieee754":65}],64:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/browserify/node_modules/process/browser.js","/../node_modules/browserify/node_modules/process")
},{"+xKvab":64,"buffer":63}],65:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/ieee754/index.js","/../node_modules/ieee754")
},{"+xKvab":64,"buffer":63}],66:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/object-assign/index.js","/../node_modules/object-assign")
},{"+xKvab":64,"buffer":63}],67:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;

}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/prop-types/checkPropTypes.js","/../node_modules/prop-types")
},{"+xKvab":64,"./lib/ReactPropTypesSecret":71,"buffer":63}],68:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/prop-types/factoryWithThrowingShims.js","/../node_modules/prop-types")
},{"+xKvab":64,"./lib/ReactPropTypesSecret":71,"buffer":63}],69:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactIs = require('react-is');
var assign = require('object-assign');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
var checkPropTypes = require('./checkPropTypes');

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/prop-types/factoryWithTypeCheckers.js","/../node_modules/prop-types")
},{"+xKvab":64,"./checkPropTypes":67,"./lib/ReactPropTypesSecret":71,"buffer":63,"object-assign":66,"react-is":74}],70:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}

}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/prop-types/index.js","/../node_modules/prop-types")
},{"+xKvab":64,"./factoryWithThrowingShims":68,"./factoryWithTypeCheckers":69,"buffer":63,"react-is":74}],71:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/prop-types/lib/ReactPropTypesSecret.js","/../node_modules/prop-types/lib")
},{"+xKvab":64,"buffer":63}],72:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';



if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}

}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/react-is/cjs/react-is.development.js","/../node_modules/react-is/cjs")
},{"+xKvab":64,"buffer":63}],73:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;

}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/react-is/cjs/react-is.production.min.js","/../node_modules/react-is/cjs")
},{"+xKvab":64,"buffer":63}],74:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = require('./cjs/react-is.development.js');
}

}).call(this,require("+xKvab"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/react-is/index.js","/../node_modules/react-is")
},{"+xKvab":64,"./cjs/react-is.development.js":72,"./cjs/react-is.production.min.js":73,"buffer":63}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9mYWtlXzhjOTA2YTMxLmpzIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9sb2NhbGUvZW5fVVMuanMiLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L2xvY2FsZS9pbmRleC5qcyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvbG9jYWxlL3poX0NOLmpzIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9tYXAuanMiLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9hbmdyeS5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9hc3RvbmlzaHRlZC5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9ibHVzaC5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9ib3R0bGUuc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvY2VsZWJyYXRpb24uc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvY2xhcC5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9jb2xkLXN3ZWF0aW5nLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL2NvbmZ1c2VkLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL2Nvb2wuc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvY3J1c2Uuc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvY3J5LnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL2N1cGNha2Uuc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvZGlzYXBwb2ludGVkLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL2V4Y2l0ZWQuc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvZXhwbG9yZS5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9mbGFyZS11cC5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9mcmVuY2gtZmlyZXMuc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvZ2lmdC5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9ncmltYWNlLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL2dyaW4uc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvaGFwcGluZXNzLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL2hlYXJ0YnJlYWsuc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvaWxsLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL2pveS5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9raXNzLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL2xvbGxpcG9wLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL2xvdmUteW91LnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL2xvdmUuc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvbWFkLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL21pc2VyLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL29rLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL3BlbnNpdmUuc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvcGlnLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL3Bvb3Auc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvcG9wY29ybi5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9wcmF5LnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL3JlbGlldmUuc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvcm9zZS5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9zYW50YS1jbGF1cy5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9zY3JlYW0uc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvc2h1c2guc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvc2h1dC11cC5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9zbGVlcC5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9zbWlsZS5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9zbWlyay5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy9zdHJvbmcuc3ZnIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL2VzNS9zdmcvc3VuLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL3RodW1icy1kb3duLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL3RodW1icy11cC5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy93YXZlLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL3dpbHRlZC5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy93aW5rLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL3dvdy5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvZXM1L3N2Zy95ZWFoLnN2ZyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9lczUvc3ZnL3l1bS5zdmciLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCIvVXNlcnMvanlqaW4vd29ya3NwYWNlL3d3dy93d3cuaGFuZC9yZWFjdC1zdmctZW1vamkvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIi9Vc2Vycy9qeWppbi93b3Jrc3BhY2Uvd3d3L3d3dy5oYW5kL3JlYWN0LXN2Zy1lbW9qaS9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwiL1VzZXJzL2p5amluL3dvcmtzcGFjZS93d3cvd3d3LmhhbmQvcmVhY3Qtc3ZnLWVtb2ppL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfbG9jYWxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2NhbGVcIikpO1xuXG52YXIgX21hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWFwXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBvblNlbGVjdDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3R5bGVzOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0XG59O1xuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZXM6IHtcbiAgICBwYW5lbDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleFdyYXA6ICd3cmFwJ1xuICAgIH0sXG4gICAgZW1vamk6IHtcbiAgICAgIG1hcmdpbjogJzJweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgbG9nID0gKGluZm8sIGRhdGEpID0+IHtcbiAgY29uc29sZS5sb2coXCJbcmVhY3Qtc3ZnIGVtb2ppXSBcIi5jb25jYXQoaW5mbyksIGRhdGEpO1xufTtcblxuY2xhc3MgRW1vamkgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBvblNlbGVjdChkYXRhKSB7XG4gICAgbG9nKCdyZWFjdCcsIGRhdGEpO1xuICAgIHRoaXMucHJvcHMuc2VsZWN0RW1vamkoZGF0YSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5wcm9wcy5zdHlsZXMgfHwge307XG4gICAgY29uc3QgZW1vamlzID0gX2xvY2FsZS5kZWZhdWx0Wyd6aF9DTiddO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBzdHlsZTogc3R5bGVzLnBhbmVsXG4gICAgfSwgT2JqZWN0LmtleXMoZW1vamlzKS5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAga2V5OiBpdGVtLFxuICAgICAgICBzdHlsZTogc3R5bGVzLmVtb2ppLFxuICAgICAgICB0ZXh0OiBlbW9qaXNbaXRlbV0sXG4gICAgICAgIG9uQ2xpY2s6IGl0ZW0gPT4gdGhpcy5vblNlbGVjdCh7XG4gICAgICAgICAgdHlwZTogaXRlbSxcbiAgICAgICAgICB0ZXh0OiBlbW9qaXNbaXRlbV1cbiAgICAgICAgfSlcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZW1iZWRcIiwge1xuICAgICAgICBzcmM6IF9tYXAuZGVmYXVsdFtpdGVtLnJlcGxhY2UoJy0nLCAnXycpXSxcbiAgICAgICAgd2lkdGg6IFwiMjBcIixcbiAgICAgICAgaGVpZ2h0OiBcIjIwXCIsXG4gICAgICAgIHR5cGU6IFwiaW1hZ2Uvc3ZnK3htbFwiLFxuICAgICAgICBwbHVnaW5zcGFnZTogXCJodHRwOi8vd3d3LmFkb2JlLmNvbS9zdmcvdmlld2VyL2luc3RhbGwvXCJcbiAgICAgIH0pKTtcbiAgICB9KSk7XG4gIH1cblxufVxuXG5FbW9qaS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5FbW9qaS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG53aW5kb3cuRW1vamkgPSBFbW9qaTtcbnZhciBfZGVmYXVsdCA9IEVtb2ppO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2Zha2VfOGM5MDZhMzEuanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IHtcbiAgXCJzbWlsZVwiOiBcIuW+rueskVwiLFxuICBcImhhcHBpbmVzc1wiOiBcIuW5uOemj1wiLFxuICBcImRpc2FwcG9pbnRlZFwiOiBcIumavui/h1wiLFxuICBcImV4Y2l0ZWRcIjogXCLlhbTlpYtcIixcbiAgXCJ3b3dcIjogXCLlk4dcIixcbiAgXCJjb29sXCI6IFwi5b6X5oSPXCIsXG4gIFwiY3J5XCI6IFwi5aSn5ZOtXCIsXG4gIFwibG92ZVwiOiBcIuiJslwiLFxuICBcInNsZWVwXCI6IFwi552hXCIsXG4gIFwiY3J1c2VcIjogXCLlkpLpqoJcIixcbiAgXCJqb3lcIjogXCLnrJHlk61cIixcbiAgXCJ3aW5rXCI6IFwi6LCD55quXCIsXG4gIFwiZ3JpblwiOiBcIuW8gOW/g1wiLFxuICBcImtpc3NcIjogXCLpo57lkLtcIixcbiAgXCJhc3RvbmlzaHRlZFwiOiBcIuaDiuiutlwiLFxuICBcImFuZ3J5XCI6IFwi55Sf5rCUXCIsXG4gIFwiY29sZC1zd2VhdGluZ1wiOiBcIuWGkuWGt+axl1wiLFxuICBcImZsYXJlLXVwXCI6IFwi5Y+R5oCSXCIsXG4gIFwiY29uZnVzZWRcIjogXCLlm7Dmg5FcIixcbiAgXCJzaHV0LXVwXCI6IFwi6Zet5Zi0XCIsXG4gIFwieXVtXCI6IFwi5aW95ZCDXCIsXG4gIFwic2NyZWFtXCI6IFwi5oOK5oGQXCIsXG4gIFwic21pcmtcIjogXCLlnY/nrJFcIixcbiAgXCJleHBsb3JlXCI6IFwi5o6i57SiXCIsXG4gIFwiZ3JpbWFjZVwiOiBcIumsvOiEuFwiLFxuICBcImlsbFwiOiBcIuaEn+WGklwiLFxuICBcInBlbnNpdmVcIjogXCLlv6fkvKRcIixcbiAgXCJzaHVzaFwiOiBcIuWYmFwiLFxuICBcIm1pc2VyXCI6IFwi6LSi6L+3XCIsXG4gIFwicmVsaWV2ZVwiOiBcIumHiueEtlwiLFxuICBcImJsdXNoXCI6IFwi5Y+v54ixXCIsXG4gIFwibWFkXCI6IFwi5oqT54uCXCIsXG4gIFwid2lsdGVkXCI6IFwi5YeL6LCiXCIsXG4gIFwiaGVhcnRicmVha1wiOiBcIuW/g+eijlwiLFxuICBcImN1cGNha2VcIjogXCLom4vns5VcIixcbiAgXCJwb29wXCI6IFwi5L6/5L6/XCIsXG4gIFwiZ2lmdFwiOiBcIuekvOeJqVwiLFxuICBcImNlbGVicmF0aW9uXCI6IFwi5bqG56WdXCIsXG4gIFwicGlnXCI6IFwi54yq5aS0XCIsXG4gIFwicm9zZVwiOiBcIueOq+eRsOiKsVwiLFxuICBcInNhbnRhLWNsYXVzXCI6IFwi5Zyj6K+e6ICB5Lq6XCIsXG4gIFwieWVhaFwiOiBcIuiAtlwiLFxuICBcImxvdmUteW91XCI6IFwi54ix5L2gXCIsXG4gIFwicHJheVwiOiBcIueliOelt1wiLFxuICBcImNsYXBcIjogXCLpvJPmjoxcIixcbiAgXCJPS1wiOiBcIk9LXCIsXG4gIFwidGh1bWJzLXVwXCI6IFwi6LWeXCIsXG4gIFwidGh1bWJzLWRvd25cIjogXCLouKlcIixcbiAgXCJsb2xsaXBvcFwiOiBcIuajkuajkuezllwiLFxuICBcImZyZW5jaC1maXJlc1wiOiBcIuiWr+adoVwiLFxuICBcImJvdHRsZVwiOiBcIuWltueTtlwiLFxuICBcInBvcGNvcm5cIjogXCLniIbnsbPoirFcIixcbiAgXCJzdW5cIjogXCLlpKrpmLNcIixcbiAgXCJ0cnVtcGV0XCI6IFwi5ZaH5Y+tXCIsXG4gIFwic3Ryb25nXCI6IFwi5by65aOuXCIsXG4gIFwid2F2ZVwiOiBcIuaMpeaJi1wiXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xvY2FsZS9lbl9VUy5qc1wiLFwiL2xvY2FsZVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3poX0NOID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi96aF9DTlwiKSk7XG5cbnZhciBfZW5fVVMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2VuX1VTXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0ge1xuICB6aF9DTjogX3poX0NOLmRlZmF1bHQsXG4gIGVuX1VTOiBfZW5fVVMuZGVmYXVsdFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9sb2NhbGUvaW5kZXguanNcIixcIi9sb2NhbGVcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IHtcbiAgXCJzbWlsZVwiOiBcIuW+rueskVwiLFxuICBcImhhcHBpbmVzc1wiOiBcIuW5uOemj1wiLFxuICBcImRpc2FwcG9pbnRlZFwiOiBcIumavui/h1wiLFxuICBcImV4Y2l0ZWRcIjogXCLlhbTlpYtcIixcbiAgXCJ3b3dcIjogXCLlk4dcIixcbiAgXCJjb29sXCI6IFwi5b6X5oSPXCIsXG4gIFwiY3J5XCI6IFwi5aSn5ZOtXCIsXG4gIFwibG92ZVwiOiBcIuiJslwiLFxuICBcInNsZWVwXCI6IFwi552hXCIsXG4gIFwiY3J1c2VcIjogXCLlkpLpqoJcIixcbiAgXCJqb3lcIjogXCLnrJHlk61cIixcbiAgXCJ3aW5rXCI6IFwi6LCD55quXCIsXG4gIFwiZ3JpblwiOiBcIuW8gOW/g1wiLFxuICBcImtpc3NcIjogXCLpo57lkLtcIixcbiAgXCJhc3RvbmlzaHRlZFwiOiBcIuaDiuiutlwiLFxuICBcImFuZ3J5XCI6IFwi55Sf5rCUXCIsXG4gIFwiY29sZC1zd2VhdGluZ1wiOiBcIuWGkuWGt+axl1wiLFxuICBcImZsYXJlLXVwXCI6IFwi5Y+R5oCSXCIsXG4gIFwiY29uZnVzZWRcIjogXCLlm7Dmg5FcIixcbiAgXCJzaHV0LXVwXCI6IFwi6Zet5Zi0XCIsXG4gIFwieXVtXCI6IFwi5aW95ZCDXCIsXG4gIFwic2NyZWFtXCI6IFwi5oOK5oGQXCIsXG4gIFwic21pcmtcIjogXCLlnY/nrJFcIixcbiAgXCJleHBsb3JlXCI6IFwi5o6i57SiXCIsXG4gIFwiZ3JpbWFjZVwiOiBcIumsvOiEuFwiLFxuICBcImlsbFwiOiBcIuaEn+WGklwiLFxuICBcInBlbnNpdmVcIjogXCLlv6fkvKRcIixcbiAgXCJzaHVzaFwiOiBcIuWYmFwiLFxuICBcIm1pc2VyXCI6IFwi6LSi6L+3XCIsXG4gIFwicmVsaWV2ZVwiOiBcIumHiueEtlwiLFxuICBcImJsdXNoXCI6IFwi5Y+v54ixXCIsXG4gIFwibWFkXCI6IFwi5oqT54uCXCIsXG4gIFwid2lsdGVkXCI6IFwi5YeL6LCiXCIsXG4gIFwiaGVhcnRicmVha1wiOiBcIuW/g+eijlwiLFxuICBcImN1cGNha2VcIjogXCLom4vns5VcIixcbiAgXCJwb29wXCI6IFwi5L6/5L6/XCIsXG4gIFwiZ2lmdFwiOiBcIuekvOeJqVwiLFxuICBcImNlbGVicmF0aW9uXCI6IFwi5bqG56WdXCIsXG4gIFwicGlnXCI6IFwi54yq5aS0XCIsXG4gIFwicm9zZVwiOiBcIueOq+eRsOiKsVwiLFxuICBcInNhbnRhLWNsYXVzXCI6IFwi5Zyj6K+e6ICB5Lq6XCIsXG4gIFwieWVhaFwiOiBcIuiAtlwiLFxuICBcImxvdmUteW91XCI6IFwi54ix5L2gXCIsXG4gIFwicHJheVwiOiBcIueliOelt1wiLFxuICBcImNsYXBcIjogXCLpvJPmjoxcIixcbiAgXCJPS1wiOiBcIk9LXCIsXG4gIFwidGh1bWJzLXVwXCI6IFwi6LWeXCIsXG4gIFwidGh1bWJzLWRvd25cIjogXCLouKlcIixcbiAgXCJsb2xsaXBvcFwiOiBcIuajkuajkuezllwiLFxuICBcImZyZW5jaC1maXJlc1wiOiBcIuiWr+adoVwiLFxuICBcImJvdHRsZVwiOiBcIuWltueTtlwiLFxuICBcInBvcGNvcm5cIjogXCLniIbnsbPoirFcIixcbiAgXCJzdW5cIjogXCLlpKrpmLNcIixcbiAgXCJ0cnVtcGV0XCI6IFwi5ZaH5Y+tXCIsXG4gIFwic3Ryb25nXCI6IFwi5by65aOuXCIsXG4gIFwid2F2ZVwiOiBcIuaMpeaJi1wiXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xvY2FsZS96aF9DTi5qc1wiLFwiL2xvY2FsZVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3NtaWxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvc21pbGUuc3ZnXCIpKTtcblxudmFyIF9oYXBwaW5lc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9oYXBwaW5lc3Muc3ZnXCIpKTtcblxudmFyIF9kaXNhcHBvaW50ZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9kaXNhcHBvaW50ZWQuc3ZnXCIpKTtcblxudmFyIF9leGNpdGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvZXhjaXRlZC5zdmdcIikpO1xuXG52YXIgX3dvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL3dvdy5zdmdcIikpO1xuXG52YXIgX2Nvb2wgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9jb29sLnN2Z1wiKSk7XG5cbnZhciBfY3J5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvY3J5LnN2Z1wiKSk7XG5cbnZhciBfbG92ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL2xvdmUuc3ZnXCIpKTtcblxudmFyIF9zbGVlcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL3NsZWVwLnN2Z1wiKSk7XG5cbnZhciBfY3J1c2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9jcnVzZS5zdmdcIikpO1xuXG52YXIgX2pveSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL2pveS5zdmdcIikpO1xuXG52YXIgX3dpbmsgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy93aW5rLnN2Z1wiKSk7XG5cbnZhciBfZ3JpbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL2dyaW4uc3ZnXCIpKTtcblxudmFyIF9raXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcva2lzcy5zdmdcIikpO1xuXG52YXIgX2FzdG9uaXNodGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvYXN0b25pc2h0ZWQuc3ZnXCIpKTtcblxudmFyIF9hbmdyeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL2FuZ3J5LnN2Z1wiKSk7XG5cbnZhciBfY29sZFN3ZWF0aW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvY29sZC1zd2VhdGluZy5zdmdcIikpO1xuXG52YXIgX2ZsYXJlVXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9mbGFyZS11cC5zdmdcIikpO1xuXG52YXIgX2NvbmZ1c2VkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvY29uZnVzZWQuc3ZnXCIpKTtcblxudmFyIF9zaHV0VXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9zaHV0LXVwLnN2Z1wiKSk7XG5cbnZhciBfeXVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcveXVtLnN2Z1wiKSk7XG5cbnZhciBfc2NyZWFtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvc2NyZWFtLnN2Z1wiKSk7XG5cbnZhciBfc21pcmsgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9zbWlyay5zdmdcIikpO1xuXG52YXIgX2V4cGxvcmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9leHBsb3JlLnN2Z1wiKSk7XG5cbnZhciBfZ3JpbWFjZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL2dyaW1hY2Uuc3ZnXCIpKTtcblxudmFyIF9pbGwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9pbGwuc3ZnXCIpKTtcblxudmFyIF9wZW5zaXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvcGVuc2l2ZS5zdmdcIikpO1xuXG52YXIgX3NodXNoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvc2h1c2guc3ZnXCIpKTtcblxudmFyIF9taXNlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL21pc2VyLnN2Z1wiKSk7XG5cbnZhciBfcmVsaWV2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL3JlbGlldmUuc3ZnXCIpKTtcblxudmFyIF9ibHVzaCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL2JsdXNoLnN2Z1wiKSk7XG5cbnZhciBfbWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvbWFkLnN2Z1wiKSk7XG5cbnZhciBfd2lsdGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvd2lsdGVkLnN2Z1wiKSk7XG5cbnZhciBfaGVhcnRicmVhayA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL2hlYXJ0YnJlYWsuc3ZnXCIpKTtcblxudmFyIF9jdXBjYWtlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvY3VwY2FrZS5zdmdcIikpO1xuXG52YXIgX3Bvb3AgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9wb29wLnN2Z1wiKSk7XG5cbnZhciBfZ2lmdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL2dpZnQuc3ZnXCIpKTtcblxudmFyIF9jZWxlYnJhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL2NlbGVicmF0aW9uLnN2Z1wiKSk7XG5cbnZhciBfcGlnID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvcGlnLnN2Z1wiKSk7XG5cbnZhciBfcm9zZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL3Jvc2Uuc3ZnXCIpKTtcblxudmFyIF9zYW50YUNsYXVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvc2FudGEtY2xhdXMuc3ZnXCIpKTtcblxudmFyIF95ZWFoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcveWVhaC5zdmdcIikpO1xuXG52YXIgX2xvdmVZb3UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9sb3ZlLXlvdS5zdmdcIikpO1xuXG52YXIgX3ByYXkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9wcmF5LnN2Z1wiKSk7XG5cbnZhciBfY2xhcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL2NsYXAuc3ZnXCIpKTtcblxudmFyIF9vayA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL29rLnN2Z1wiKSk7XG5cbnZhciBfdGh1bWJzVXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy90aHVtYnMtdXAuc3ZnXCIpKTtcblxudmFyIF90aHVtYnNEb3duID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvdGh1bWJzLWRvd24uc3ZnXCIpKTtcblxudmFyIF9sb2xsaXBvcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL2xvbGxpcG9wLnN2Z1wiKSk7XG5cbnZhciBfZnJlbmNoRmlyZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9mcmVuY2gtZmlyZXMuc3ZnXCIpKTtcblxudmFyIF9ib3R0bGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy9ib3R0bGUuc3ZnXCIpKTtcblxudmFyIF9wb3Bjb3JuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdmcvcG9wY29ybi5zdmdcIikpO1xuXG52YXIgX3N1biA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL3N1bi5zdmdcIikpO1xuXG52YXIgX3N0cm9uZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3ZnL3N0cm9uZy5zdmdcIikpO1xuXG52YXIgX3dhdmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N2Zy93YXZlLnN2Z1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGltcG9ydCB0cnVtcGV0IGZyb20gJy4vc3ZnL3RydW1wZXQuc3ZnJ1xudmFyIF9kZWZhdWx0ID0ge1xuICBzbWlsZTogX3NtaWxlLmRlZmF1bHQsXG4gIGhhcHBpbmVzczogX2hhcHBpbmVzcy5kZWZhdWx0LFxuICBkaXNhcHBvaW50ZWQ6IF9kaXNhcHBvaW50ZWQuZGVmYXVsdCxcbiAgZXhjaXRlZDogX2V4Y2l0ZWQuZGVmYXVsdCxcbiAgd293OiBfd293LmRlZmF1bHQsXG4gIGNvb2w6IF9jb29sLmRlZmF1bHQsXG4gIGNyeTogX2NyeS5kZWZhdWx0LFxuICBsb3ZlOiBfbG92ZS5kZWZhdWx0LFxuICBzbGVlcDogX3NsZWVwLmRlZmF1bHQsXG4gIGNydXNlOiBfY3J1c2UuZGVmYXVsdCxcbiAgam95OiBfam95LmRlZmF1bHQsXG4gIHdpbms6IF93aW5rLmRlZmF1bHQsXG4gIGdyaW46IF9ncmluLmRlZmF1bHQsXG4gIGtpc3M6IF9raXNzLmRlZmF1bHQsXG4gIGFzdG9uaXNodGVkOiBfYXN0b25pc2h0ZWQuZGVmYXVsdCxcbiAgYW5ncnk6IF9hbmdyeS5kZWZhdWx0LFxuICBjb2xkX3N3ZWF0aW5nOiBfY29sZFN3ZWF0aW5nLmRlZmF1bHQsXG4gIGZsYXJlX3VwOiBfZmxhcmVVcC5kZWZhdWx0LFxuICBjb25mdXNlZDogX2NvbmZ1c2VkLmRlZmF1bHQsXG4gIHNodXRfdXA6IF9zaHV0VXAuZGVmYXVsdCxcbiAgeXVtOiBfeXVtLmRlZmF1bHQsXG4gIHNjcmVhbTogX3NjcmVhbS5kZWZhdWx0LFxuICBzbWlyazogX3NtaXJrLmRlZmF1bHQsXG4gIGV4cGxvcmU6IF9leHBsb3JlLmRlZmF1bHQsXG4gIGdyaW1hY2U6IF9ncmltYWNlLmRlZmF1bHQsXG4gIGlsbDogX2lsbC5kZWZhdWx0LFxuICBwZW5zaXZlOiBfcGVuc2l2ZS5kZWZhdWx0LFxuICBzaHVzaDogX3NodXNoLmRlZmF1bHQsXG4gIG1pc2VyOiBfbWlzZXIuZGVmYXVsdCxcbiAgcmVsaWV2ZTogX3JlbGlldmUuZGVmYXVsdCxcbiAgYmx1c2g6IF9ibHVzaC5kZWZhdWx0LFxuICBtYWQ6IF9tYWQuZGVmYXVsdCxcbiAgd2lsdGVkOiBfd2lsdGVkLmRlZmF1bHQsXG4gIGhlYXJ0YnJlYWs6IF9oZWFydGJyZWFrLmRlZmF1bHQsXG4gIGN1cGNha2U6IF9jdXBjYWtlLmRlZmF1bHQsXG4gIHBvb3A6IF9wb29wLmRlZmF1bHQsXG4gIGdpZnQ6IF9naWZ0LmRlZmF1bHQsXG4gIGNlbGVicmF0aW9uOiBfY2VsZWJyYXRpb24uZGVmYXVsdCxcbiAgcGlnOiBfcGlnLmRlZmF1bHQsXG4gIHJvc2U6IF9yb3NlLmRlZmF1bHQsXG4gIHNhbnRhX2NsYXVzOiBfc2FudGFDbGF1cy5kZWZhdWx0LFxuICB5ZWFoOiBfeWVhaC5kZWZhdWx0LFxuICBsb3ZlX3lvdTogX2xvdmVZb3UuZGVmYXVsdCxcbiAgcHJheTogX3ByYXkuZGVmYXVsdCxcbiAgY2xhcDogX2NsYXAuZGVmYXVsdCxcbiAgb2s6IF9vay5kZWZhdWx0LFxuICB0aHVtYnNfdXA6IF90aHVtYnNVcC5kZWZhdWx0LFxuICB0aHVtYnNfZG93bjogX3RodW1ic0Rvd24uZGVmYXVsdCxcbiAgbG9sbGlwb3A6IF9sb2xsaXBvcC5kZWZhdWx0LFxuICBmcmVuY2hfZmlyZXM6IF9mcmVuY2hGaXJlcy5kZWZhdWx0LFxuICBib3R0bGU6IF9ib3R0bGUuZGVmYXVsdCxcbiAgcG9wY29ybjogX3BvcGNvcm4uZGVmYXVsdCxcbiAgc3VuOiBfc3VuLmRlZmF1bHQsXG4gIC8vIHRydW1wZXQsXG4gIHN0cm9uZzogX3N0cm9uZy5kZWZhdWx0LFxuICB3YXZlOiBfd2F2ZS5kZWZhdWx0XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL21hcC5qc1wiLFwiL1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6dXJsKCPmnKrlkb3lkI3nmoTmuJDlj5gpO30uY2xzLTJ7ZmlsbDojNjYyZTAwO30uY2xzLTN7ZmlsbDojZjBmYmZmO30uY2xzLTR7ZmlsbDojZjBmMWY1O308L3N0eWxlPjxyYWRpYWxHcmFkaWVudCBpZD1cXFwi5pyq5ZG95ZCN55qE5riQ5Y+YXFxcIiBjeD1cXFwiLTMwMS42M1xcXCIgY3k9XFxcIjQyMi4wNVxcXCIgcj1cXFwiMC43N1xcXCIgZ3JhZGllbnRUcmFuc2Zvcm09XFxcIm1hdHJpeCgyNCwgMCwgMCwgLTI0LCA3MjUxLjIyLCAxMDEzNy4xMSlcXFwiIGdyYWRpZW50VW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIj48c3RvcCBvZmZzZXQ9XFxcIjBcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmU1YTNcXFwiLz48c3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmFkMjlcXFwiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48dGl0bGU+55Sf5rCUPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yNCwxMkExMiwxMiwwLDEsMSwxMiwwLDEyLDEyLDAsMCwxLDI0LDEyXFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMTMuMzMsOC42N2gtLjExYS42Ny42NywwLDAsMS0uNTQtLjc3QTUuMzgsNS4zOCwwLDAsMSwxOCwzLjMzYS42Ny42NywwLDAsMSwwLDEuMzQsNC4wOCw0LjA4LDAsMCwwLTQsMy40NEEuNjcuNjcsMCwwLDEsMTMuMzMsOC42N1ptLTIuNjYsMEEuNjcuNjcsMCwwLDEsMTAsOC4xMSw0LjEyLDQuMTIsMCwwLDAsNiw0LjY3LjY3LjY3LDAsMCwxLDYsMy4zM2E1LjM4LDUuMzgsMCwwLDEsNS4zMiw0LjU2LjY3LjY3LDAsMCwxLS41NC43N1pNNy42MSwxMS45M0E1LjEyLDUuMTIsMCwwLDEsNSwxMS4yMmEuNjcuNjcsMCwwLDEsLjc0LTEuMTEsNC4xNSw0LjE1LDAsMCwwLDQsMCwuNjguNjgsMCwwLDEsLjkuMy42Ni42NiwwLDAsMS0uMy44OUE2LDYsMCwwLDEsNy42MSwxMS45M1ptOC43OCwwYTYsNiwwLDAsMS0yLjY5LS42Ny42Ni42NiwwLDAsMS0uMy0uODkuNjguNjgsMCwwLDEsLjktLjMsNC4xNSw0LjE1LDAsMCwwLDQsMEEuNjcuNjcsMCwwLDEsMTksMTEuMjJhNS4xMiw1LjEyLDAsMCwxLTIuNjUuNzFaTTE3LjMzLDE4YS42NS42NSwwLDAsMS0uNTMtLjI3LDYuNTksNi41OSwwLDAsMC00LjgtMi40LDYuNTcsNi41NywwLDAsMC00LjgsMi40MS42Ny42NywwLDAsMS0xLjA3LS44MUE3LjgzLDcuODMsMCwwLDEsMTIsMTRhNy44Myw3LjgzLDAsMCwxLDUuODcsMi45My42Ny42NywwLDAsMS0uMTQuOTQuNjYuNjYsMCwwLDEtLjQuMTNaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNMTAuMjYsMTMuMzlhLjY3LjY3LDAsMCwwLS44My4yNkw2LjEsMTlhLjY5LjY5LDAsMCwwLDAsLjY4LjY3LjY3LDAsMCwwLC41OS4zNGgyYS42Ni42NiwwLDAsMCwuNjQtLjUxbDEuMzQtNS4zM2EuNjYuNjYsMCwwLDAtLjM5LS43N1pNMTcuOSwxOWwtMy4zMy01LjMzYS42Ny42NywwLDAsMC0uODMtLjI2LjY2LjY2LDAsMCwwLS4zOS43N2wxLjM0LDUuMzNhLjY2LjY2LDAsMCwwLC42NC41MWgyYS42Ny42NywwLDAsMCwuNTktLjM0LjY5LjY5LDAsMCwwLDAtLjY4WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNFxcXCIgZD1cXFwiTTIxLjMyLDIwLjEyczAtLjA4LDAtLjEyYTIsMiwwLDAsMC0yLTIsMiwyLDAsMCwwLTEuNjUuODcsMi42LDIuNiwwLDAsMC0xLS4yLDIuNjcsMi42NywwLDEsMCwyLjE5LDQuMTgsMiwyLDAsMSwwLDIuNDYtMi43M1ptLTE0LTEuNDVhMi42LDIuNiwwLDAsMC0xLC4yQTIsMiwwLDAsMCw0LjY3LDE4YTIsMiwwLDAsMC0yLDJzMCwuMDgsMCwuMTJhMiwyLDAsMSwwLDIuNDYsMi43MywyLjY3LDIuNjcsMCwxLDAsMi4xOS00LjE4WlxcXCIvPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9hbmdyeS5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzY2MmUwMDt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yMzkuNVxcXCIgY3k9XFxcIjM2NS44NVxcXCIgcj1cXFwiMC43N1xcXCIgZ3JhZGllbnRUcmFuc2Zvcm09XFxcIm1hdHJpeCgyNCwgMCwgMCwgLTI0LCA1NzYwLjA4LCA4Nzg4LjE5KVxcXCIgZ3JhZGllbnRVbml0cz1cXFwidXNlclNwYWNlT25Vc2VcXFwiPjxzdG9wIG9mZnNldD1cXFwiMFxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmZTVhM1xcXCIvPjxzdG9wIG9mZnNldD1cXFwiMVxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmYWQyOVxcXCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT7mg4rorrY8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTI0LDEyQTEyLDEyLDAsMSwxLDEyLDAsMTIsMTIsMCwwLDEsMjQsMTJcXFwiLz48ZWxsaXBzZSBpZD1cXFwi5qSt5ZyG5b2iXFxcIiBjbGFzcz1cXFwiY2xzLTJcXFwiIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjE2LjY3XFxcIiByeD1cXFwiMi42N1xcXCIgcnk9XFxcIjMuMzNcXFwiLz48ZWxsaXBzZSBjbGFzcz1cXFwiY2xzLTJcXFwiIGN4PVxcXCI4XFxcIiBjeT1cXFwiOVxcXCIgcng9XFxcIjEuNjdcXFwiIHJ5PVxcXCIyLjMzXFxcIi8+PGVsbGlwc2UgY2xhc3M9XFxcImNscy0yXFxcIiBjeD1cXFwiMTZcXFwiIGN5PVxcXCI5XFxcIiByeD1cXFwiMS42N1xcXCIgcnk9XFxcIjIuMzNcXFwiLz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvYXN0b25pc2h0ZWQuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp1cmwoI+acquWRveWQjeeahOa4kOWPmCk7fS5jbHMtMntmaWxsOiNmZjg5ODc7fS5jbHMtM3tmaWxsOiM2NjJlMDA7fTwvc3R5bGU+PHJhZGlhbEdyYWRpZW50IGlkPVxcXCLmnKrlkb3lkI3nmoTmuJDlj5hcXFwiIGN4PVxcXCItMjM5LjA4XFxcIiBjeT1cXFwiMzY1Ljg1XFxcIiByPVxcXCIwLjc3XFxcIiBncmFkaWVudFRyYW5zZm9ybT1cXFwibWF0cml4KDI0LCAwLCAwLCAtMjQsIDU3NTAsIDg3ODguMTkpXFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCI+PHN0b3Agb2Zmc2V0PVxcXCIwXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZlNWEzXFxcIi8+PHN0b3Agb2Zmc2V0PVxcXCIxXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZhZDI5XFxcIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHRpdGxlPuWPr+eIsTwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PGcgaWQ9XFxcIumhtemdoi0xXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yNCwxMkExMiwxMiwwLDEsMSwxMiwwLDEyLDEyLDAsMCwxLDI0LDEyXFxcIi8+PGNpcmNsZSBpZD1cXFwi5qSt5ZyG5b2iXFxcIiBjbGFzcz1cXFwiY2xzLTJcXFwiIGN4PVxcXCI0LjY3XFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjMuMzNcXFwiLz48Y2lyY2xlIGNsYXNzPVxcXCJjbHMtMlxcXCIgY3g9XFxcIjE5LjMzXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjMuMzNcXFwiLz48cGF0aCBpZD1cXFwi5b2i54q2XFxcIiBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk0xOC4yMiwxNC40MmEuMzMuMzMsMCwwLDAtLjQyLDBBMTAuODUsMTAuODUsMCwwLDEsMTIsMTYuMzMsMTAuODksMTAuODksMCwwLDEsNi4yLDE0LjRhLjMzLjMzLDAsMCwwLS40MiwwLC4zNC4zNCwwLDAsMC0uMDcuNDJBNy42OCw3LjY4LDAsMCwwLDEyLDE4LjMzYTcuNjgsNy42OCwwLDAsMCw2LjI5LTMuNDkuMzQuMzQsMCwwLDAtLjA3LS40MlpNNS4zMywxMEEuNTkuNTksMCwwLDEsNSw5LjkzYS42Ny42NywwLDAsMS0uMy0uOUEzLjU2LDMuNTYsMCwwLDEsOCw3LjMzLDMuNTMsMy41MywwLDAsMSwxMS4yNiw5YS42Ni42NiwwLDAsMS0uMy44OS42OC42OCwwLDAsMS0uODktLjI5QTIuMjUsMi4yNSwwLDAsMCw4LDguNjdhMi4yNywyLjI3LDAsMCwwLTIuMDcsMUEuNjYuNjYsMCwwLDEsNS4zMywxMFptMTMuMzQsMGEuNjYuNjYsMCwwLDEtLjYtLjM3LDIuMjgsMi4yOCwwLDAsMC0yLjA3LTEsMi4yNSwyLjI1LDAsMCwwLTIuMDcsMSwuNjguNjgsMCwwLDEtLjkuMjhBLjY2LjY2LDAsMCwxLDEyLjc0LDksMy41NiwzLjU2LDAsMCwxLDE2LDcuMzMsMy41MywzLjUzLDAsMCwxLDE5LjI2LDlhLjY2LjY2LDAsMCwxLS41OSwxWlxcXCIvPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvYmx1c2guc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZhZDI5O30uY2xzLTJ7ZmlsbDojZGFkZmU4O30uY2xzLTN7ZmlsbDojNGViNWZmO30uY2xzLTR7ZmlsbDojYTNhY2JmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+NTAt5Zad5aW2PC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTIxLjcsNC43NWMwLS45NC40OC0uNDcuOTUtLjk0LDEtLjk0LDEuNDItMi4zNi40OC0zLjNTMjAuNzcuMDUsMTkuODMsMWMtLjQ3LjQ3LDAsMS0uOTQsMUgxNS4xMmwuNDcuNDZTMTgsNS43LDE4LjQyLDUuMjNjLS40Ny40NywyLjgyLDIuODMsMi44MiwyLjgzbC40Ni40N1pcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0yMC4zLDkuOTQsMTcsNi42NGwtMy4zLTMuM2MtLjQ3LjQ3LTIuODIsMC0zLjc3Ljk0bC0uNDcuNDdMOC4wNSw2LjE3Ljc4LDEzLjQzYTIuNjgsMi42OCwwLDAsMCwwLDMuNzhsNS42Niw1LjY1YTIuNjcsMi42NywwLDAsMCwzLjc3LDBsNi42LTYuNiwyLjA4LTIuMDguNDctLjQ3QzIwLjMsMTIuNzcsMTkuODMsMTAuNDEsMjAuMyw5Ljk0WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTIxLjQ4LDkuN2MtLjY1LjY1LTEuMjMsMS4xMy0xLjg4LjQ3TDEzLjQ3LDQuMDVjLS42NS0uNjUtLjE4LTEuMjQuNDctMS44OWExLjY3LDEuNjcsMCwwLDEsMi4zNiwwbDUuMTgsNS4xOUExLjY2LDEuNjYsMCwwLDEsMjEuNDgsOS43WlxcXCIvPjxwYXRoIGlkPVxcXCLlvaLnirZcXFwiIGNsYXNzPVxcXCJjbHMtNFxcXCIgZD1cXFwiTTguMzcsMjEuMjdhLjY2LjY2LDAsMCwxLS40Ny0uMTkuNjguNjgsMCwwLDEsMC0uOTVsOC04YS42Ni42NiwwLDAsMSwuOTQsMCwuNjguNjgsMCwwLDEsMCwuOTVsLTgsOEEuNjYuNjYsMCwwLDEsOC4zNywyMS4yN1pNNS43LDE4LjYxYS42Ny42NywwLDAsMS0uNDctMS4xNGw4LThhLjY4LjY4LDAsMCwxLC45NSwwLC42Ni42NiwwLDAsMSwwLC45NGwtOCw4QS42Ny42NywwLDAsMSw1LjcsMTguNjFaTTMsMTUuOTRhLjY3LjY3LDAsMCwxLS40Ny0xLjE0bDgtOGEuNjYuNjYsMCwwLDEsLjk0Ljk0bC04LDhBLjY3LjY3LDAsMCwxLDMsMTUuOTRaXFxcIi8+PC9nPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9ib3R0bGUuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZjgzNjQwO30uY2xzLTJ7ZmlsbDojZmY4OTg3O30uY2xzLTN7ZmlsbDojYWIxMzI1O30uY2xzLTR7ZmlsbDojOTA4MGZmO30uY2xzLTV7ZmlsbDojNTZhMzJjO30uY2xzLTZ7ZmlsbDojZmZjYzRkO308L3N0eWxlPjwvZGVmcz48dGl0bGU+Mzgt5bqG56WdPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTcuNTQsNC40OGEuNzguNzgsMCwwLDAtLjE3LjI2aDBMLjA5LDIxLjEyaDBjLS4xMy4yNi4wOS43OS41NiwxLjI1czEsLjY5LDEuMjUuNTZoMEwxOC4zLDE1LjY3aDBhLjc4Ljc4LDAsMCwwLC4yNi0uMTdjMS0xLS42My00LjMtMy42Ny03LjM0UzguNTYsMy40Nyw3LjU0LDQuNDhaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNOC40Myw3LjQxLjI3LDIwLjcxbC0uMTguNDFoMGMtLjEzLjI2LjA5Ljc5LjU2LDEuMjVhMi4xNCwyLjE0LDAsMCwwLC40Ni4zNkwxMSwxMC42NVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk0xNC45Myw4LjFjMywzLDQuNzEsNi4yNiwzLjc1LDcuMjFzLTQuMTgtLjcyLTcuMjItMy43NVM2Ljc1LDUuMyw3LjcxLDQuMzRzNC4xOS43Myw3LjIyLDMuNzZaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy00XFxcIiBkPVxcXCJNMTIuMDYsOC40NWEuNjMuNjMsMCwwLDEtLjQ4LjE0QTIuMzgsMi4zOCwwLDAsMSwxMC4yMSw4YTEuNDEsMS40MSwwLDAsMS0uNDctMS4yYy4wOC0uNzguODYtMS40OSwyLjE4LTEuMzQuNTEsMCwuNzQtLjExLjc1LS4xOVMxMi40OSw1LDEyLDQuOTRhMi4zOCwyLjM4LDAsMCwxLTEuMzctLjU2LDEuNDUsMS40NSwwLDAsMS0uNDgtMS4yMWMuMDktLjc4Ljg2LTEuNDksMi4xOC0xLjM0QTEuMDcsMS4wNywwLDAsMCwxMywxLjc0Yy4wNywwLC4wOS0uMDguMDktLjFzLS4xNy0uMjktLjY5LS4zNUEuNjQuNjQsMCwwLDEsMTEuOC41OC42NC42NCwwLDAsMSwxMi41MSwwYzEuMzIuMTUsMS45MywxLDEuODQsMS43OHMtLjg1LDEuNDgtMi4xOCwxLjM0YTEsMSwwLDAsMC0uNjUuMDljLS4wNywwLS4xLjA4LS4xLjFzLjE4LjI5LjcuMzRjMS4zMi4xNSwxLjkyLDEsMS44NCwxLjc4cy0uODYsMS40OC0yLjE4LDEuMzRhMS4xLDEuMSwwLDAsMC0uNjYuMDhjLS4wNiwwLS4wOS4wOC0uMDkuMTFzLjE4LjI4LjY5LjM0QS42NS42NSwwLDAsMSwxMi4zLDhhLjY1LjY1LDAsMCwxLS4yNC40M1pcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTVcXFwiIGQ9XFxcIk0xOS44OSwxNC40NWMxLjI4LS4zNiwyLjE2LjIxLDIuMzcsMVMyMiwxNy4xLDIwLjc0LDE3LjQ2Yy0uNS4xNC0uNjUuMzgtLjYzLjQ2cy4yNy4yLjc3LjA2YzEuMjgtLjM2LDIuMTYuMjEsMi4zNywxUzIzLDIwLjY0LDIxLjczLDIxYy0uNS4xNC0uNjUuMzgtLjYzLjQ1cy4yOC4yLjc3LjA2YS42NS42NSwwLDAsMSwuOC40NS42NC42NCwwLDAsMS0uNDUuOCwxLjc3LDEuNzcsMCwwLDEtMi4zNy0xYy0uMjEtLjc1LjI1LTEuNjksMS41My0yLjA1LjUtLjE0LjY1LS4zOC42Mi0uNDZzLS4yNy0uMi0uNzctLjA2Yy0xLjI4LjM2LTIuMTYtLjIxLTIuMzctMXMuMjQtMS43LDEuNTItMi4wNmMuNS0uMTQuNjUtLjM4LjYzLS40NXMtLjI3LS4yLS43Ny0uMDZhLjY2LjY2LDAsMCwxLS44LS40NS42NC42NCwwLDAsMSwuNDUtLjhaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy00XFxcIiBkPVxcXCJNMTQuOTIsMTIuN2EuNjUuNjUsMCwwLDEtLjUxLS4yNC42Ni42NiwwLDAsMSwuMS0uOTIsMTEuNDksMTEuNDksMCwwLDEsOC4yOC0yLjA4LjY1LjY1LDAsMSwxLS4xOCwxLjI5LDEwLjI2LDEwLjI2LDAsMCwwLTcuMjksMS44MS42Ny42NywwLDAsMS0uNC4xNFpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTVcXFwiIGQ9XFxcIk0zLjczLDEwbC0uMTgsMGEuNjQuNjQsMCwwLDEtLjQ0LS44Yy43NC0yLjQ1LDEuNC02LjM2LjU4LTcuMzdhLjU1LjU1LDAsMCwwLS41NC0uMjFjLS42MSwwLS41NSwxLjMzLS41NSwxLjM0QS42NS42NSwwLDAsMSwxLjMsM0MxLjI0LDIuMTQsMS41Mi40MSwzLjA1LjNBMS44NywxLjg3LDAsMCwxLDQuNzEsMWMxLjUzLDEuOTIsMCw3LjQ3LS4zNiw4LjU2QS42NC42NCwwLDAsMSwzLjczLDEwWlxcXCIvPjxjaXJjbGUgaWQ9XFxcIuakreWchuW9olxcXCIgY2xhc3M9XFxcImNscy01XFxcIiBjeD1cXFwiMTYuNTRcXFwiIGN5PVxcXCI1Ljc5XFxcIiByPVxcXCIxXFxcIi8+PGNpcmNsZSBjbGFzcz1cXFwiY2xzLTRcXFwiIGN4PVxcXCIxLjNcXFwiIGN5PVxcXCIxMS4zXFxcIiByPVxcXCIxLjNcXFwiLz48Y2lyY2xlIGNsYXNzPVxcXCJjbHMtNVxcXCIgY3g9XFxcIjIxLjA4XFxcIiBjeT1cXFwiMTIuMjdcXFwiIHI9XFxcIjFcXFwiLz48Y2lyY2xlIGNsYXNzPVxcXCJjbHMtNVxcXCIgY3g9XFxcIjE1LjI0XFxcIiBjeT1cXFwiMjAuMDZcXFwiIHI9XFxcIjFcXFwiLz48Y2lyY2xlIGNsYXNzPVxcXCJjbHMtNlxcXCIgY3g9XFxcIjE4LjE2XFxcIiBjeT1cXFwiMi4yMlxcXCIgcj1cXFwiMS4zXFxcIi8+PGNpcmNsZSBjbGFzcz1cXFwiY2xzLTZcXFwiIGN4PVxcXCIyMS4wOFxcXCIgY3k9XFxcIjUuMTRcXFwiIHI9XFxcIjFcXFwiLz48Y2lyY2xlIGNsYXNzPVxcXCJjbHMtNlxcXCIgY3g9XFxcIjE5LjE0XFxcIiBjeT1cXFwiNy43M1xcXCIgcj1cXFwiMVxcXCIvPjxjaXJjbGUgY2xhc3M9XFxcImNscy02XFxcIiBjeD1cXFwiNC44NlxcXCIgY3k9XFxcIjE0Ljg3XFxcIiByPVxcXCIxXFxcIi8+PC9nPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9jZWxlYnJhdGlvbi5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNkMmEwNzc7fS5jbHMtMntmaWxsOiNmZjk1MDA7fS5jbHMtM3tmaWxsOiNmM2QyYTI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT40NC3pvJPmjow8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxnIGlkPVxcXCLpobXpnaItMVxcXCI+PHBhdGggaWQ9XFxcIui3r+W+hFxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBkPVxcXCJNMjEuNTEsMTYuMmMtLjQ2LS42Ny0uMi0xLjY0LS4zMi0yLjcyYTcuMTcsNy4xNywwLDAsMC0yLjMzLTQuODFMMTMuODgsNGExLjM0LDEuMzQsMCwwLDAtMS44MiwybDIuMSwyTDE2LDkuNjZzLS40Ni40OS0yLjQ3LTEuMzlMNi42OSwxLjkzQTEuMzEsMS4zMSwwLDAsMCw0LjgsMmExLjMyLDEuMzIsMCwwLDAsLjA3LDEuOWw2LjQ0LDZzLS40OS40Ni0uNS40NUwzLjkyLDMuOTNBMS4zMSwxLjMxLDAsMCwwLDIsNCwxLjMsMS4zLDAsMCwwLDIuMSw1Ljg5TDksMTIuM3MtLjQ0LjUxLS40Mi41M0wyLjYyLDcuMjlhMS4zMSwxLjMxLDAsMCwwLTEuODkuMDdBMS4zMSwxLjMxLDAsMCwwLC44LDkuMjZsNi4zMiw1Ljg4Yy4wNiwwLS4zNC42LS4yNi42N0wyLjMsMTEuNTdhMS4zMSwxLjMxLDAsMCwwLTEuODkuMDcsMS4zMSwxLjMxLDAsMCwwLC4wNywxLjlsNy40Myw2LjlhNy4wOSw3LjA5LDAsMCwwLDQuMDUsMmMuMzEsMCwuNzEsMCwuODcuMDZhNCw0LDAsMCwxLDEuNTkuNjIsMi4xNCwyLjE0LDAsMCwwLDIuNjMsMGwyLjMtMi40NiwyLjEzLTIuMjhhMS40NiwxLjQ2LDAsMCwwLDAtMi4xWlxcXCIvPjxwYXRoIGlkPVxcXCLlvaLnirZcXFwiIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTEuMjgsMjMuMzJhLjY2LjY2LDAsMCwxLS40Ny0uMTkuNjguNjgsMCwwLDEsMC0uOTVsMi4zNy0yLjM2YS42Ni42NiwwLDEsMSwuOTQuOTRMMS43NSwyMy4xM0EuNjYuNjYsMCwwLDEsMS4yOCwyMy4zMlptNC41LjYyYS44NS44NSwwLDAsMS0uMjIsMCwuNjcuNjcsMCwwLDEtLjQxLS44NUw1LjgsMjEuMmEuNjYuNjYsMCwxLDEsMS4yNS40NGwtLjY0LDEuODVhLjY5LjY5LDAsMCwxLS42My40NVpNLjY3LDE4LjgzYS42Ny42NywwLDAsMS0uMjMtMS4zbDEuNjctLjU5YS42Ny42NywwLDEsMSwuNDQsMS4yNmwtMS42Ni41OWEuOTMuOTMsMCwwLDEtLjIyLDBaTTIwLjMxLDQuMzFhLjY2LjY2LDAsMCwxLS40Ny0uMTkuNjUuNjUsMCwwLDEsMC0uOTRMMjIuMi44MWEuNjguNjgsMCwwLDEsLjk1LDAsLjY2LjY2LDAsMCwxLDAsLjk0TDIwLjc4LDQuMTJhLjY2LjY2LDAsMCwxLS40Ny4xOVpNMTcuNTMsMy4xOGEuNTcuNTcsMCwwLDEtLjIyLDAsLjY2LjY2LDAsMCwxLS40MS0uODRMMTcuNTUuNDVBLjY3LjY3LDAsMCwxLDE4LjQsMGEuNjcuNjcsMCwwLDEsLjQxLjg1bC0uNjUsMS44NWEuNjcuNjcsMCwwLDEtLjYzLjQ0Wk0yMS42Myw3YS42Ni42NiwwLDAsMS0uMjMtMS4yOWwxLjY3LS41OWEuNjcuNjcsMCwxLDEsLjQ0LDEuMjZMMjEuODUsN2EuNi42LDAsMCwxLS4yMiwwWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTIzLjU3LDE1Ljg1Yy0uNDQtLjY5LS4xNS0xLjY1LS4yMy0yLjczYTcuMTIsNy4xMiwwLDAsMC0yLjE3LTQuODhsLTQuODItNC44YTEuMzEsMS4zMSwwLDAsMC0xLjg5LDAsMS4zLDEuMywwLDAsMCwwLDEuODlsMiwyLDEuNzYsMS43NXMtLjQ3LjQ4LTIuNDItMS40Nkw5LjI0LDEuMDlhMS4zMSwxLjMxLDAsMCwwLTEuODksMEExLjMsMS4zLDAsMCwwLDcuMzUsM0wxMy41OSw5LjJzLS41LjQ0LS41MS40M0w2LjQsM0ExLjMxLDEuMzEsMCwwLDAsNC41MSwzYTEuMywxLjMsMCwwLDAsMCwxLjg5bDYuNjgsNi42NHMtLjQ2LjUtLjQ0LjUxTDUsNi4zMWExLjMyLDEuMzIsMCwwLDAtMS45LDAsMS4zMSwxLjMxLDAsMCwwLDAsMS44OUw5LjIyLDE0LjNjLjA2LjA2LS4zNS42LS4yOC42N0w0LjUzLDEwLjU4YTEuMzQsMS4zNCwwLDEsMC0xLjg5LDEuOWw3LjE5LDcuMTVhNyw3LDAsMCwwLDQsMi4wOWMuMzEuMDYuNzEuMDcuODguMWEzLjg3LDMuODcsMCwwLDEsMS41Ni42NywyLjEzLDIuMTMsMCwwLDAsMi42My4wNWwyLjM4LTIuMzlMMjMuNDcsMThhMS40NiwxLjQ2LDAsMCwwLC4xLTIuMVpcXFwiLz48L2c+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL2NsYXAuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZjYzRkO30uY2xzLTJ7ZmlsbDojNjYyZTAwO30uY2xzLTN7ZmlsbDojNGRiNWZmO30uY2xzLTR7ZmlsbDojYzdlZGZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MTct5YaS5Ya35rGXPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yNCwxMkExMiwxMiwwLDEsMSwxMiwwLDEyLDEyLDAsMCwxLDI0LDEyXFxcIi8+PGVsbGlwc2UgaWQ9XFxcIuakreWchuW9olxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBjeD1cXFwiNy42N1xcXCIgY3k9XFxcIjExXFxcIiByeD1cXFwiMS42N1xcXCIgcnk9XFxcIjIuMzNcXFwiLz48ZWxsaXBzZSBjbGFzcz1cXFwiY2xzLTJcXFwiIGN4PVxcXCIxNi4zM1xcXCIgY3k9XFxcIjExXFxcIiByeD1cXFwiMS42N1xcXCIgcnk9XFxcIjIuMzNcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xNS42NiwxOC41OUEzLjkzLDMuOTMsMCwwLDAsMTIsMTUuNjdhMy45MywzLjkzLDAsMCwwLTMuNjYsMi45MkEuMzQuMzQsMCwwLDAsOC41LDE5YS4zNS4zNSwwLDAsMCwuNCwwcy42Ny0uNTgsMy4xLS41OCwzLjA4LjU2LDMuMS41OGEuMzUuMzUsMCwwLDAsLjIzLjA5LjMzLjMzLDAsMCwwLC4xNywwQS4zNS4zNSwwLDAsMCwxNS42NiwxOC41OVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk02LjY3LDIwQTMuMzQsMy4zNCwwLDAsMSwwLDIwYzAtMS44NCwyLjY3LTYuNjcsMy4zMy02LjY3UzYuNjcsMTguMTYsNi42NywyMFpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTRcXFwiIGQ9XFxcIk0xMiw3LjMzYzUuODMsMCwxMC42OSwzLDExLjc3LDdBMTEuODUsMTEuODUsMCwwLDAsMjQsMTIsMTIsMTIsMCwwLDAsMCwxMmExMS44NSwxMS44NSwwLDAsMCwuMjMsMi4zMkMxLjMxLDEwLjM0LDYuMTcsNy4zMywxMiw3LjMzWlxcXCIvPjxwYXRoIGlkPVxcXCLlvaLnirZcXFwiIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTIwLDhhNS45MSw1LjkxLDAsMCwxLTUuMjYtM0EuNjYuNjYsMCwwLDEsMTUsNC4wN2EuNjguNjgsMCwwLDEsLjkuM0E0LjYxLDQuNjEsMCwwLDAsMjAsNi42Ny42Ny42NywwLDEsMSwyMCw4Wk00LDhBLjY3LjY3LDAsMSwxLDQsNi42N2MzLjM5LDAsNC0yLjA4LDQtMi4xN0EuNjYuNjYsMCwwLDEsOC44Myw0YS42NS42NSwwLDAsMSwuNDguOEM5LjI4LDUsOC40Nyw4LDQsOFpcXFwiLz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvY29sZC1zd2VhdGluZy5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzY2MmUwMDt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yNTkuMjRcXFwiIGN5PVxcXCIzNzcuMTZcXFwiIHI9XFxcIjAuNzdcXFwiIGdyYWRpZW50VHJhbnNmb3JtPVxcXCJtYXRyaXgoMjQsIDAsIDAsIC0yNCwgNjIzMy42NywgOTA1OS42OClcXFwiIGdyYWRpZW50VW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIj48c3RvcCBvZmZzZXQ9XFxcIjBcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmU1YTNcXFwiLz48c3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmFkMjlcXFwiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48dGl0bGU+MTkt5Zuw5oORPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxnIGlkPVxcXCLnrKzkuInmjpJcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTI0LDEyQTEyLDEyLDAsMSwxLDEyLDAsMTIsMTIsMCwwLDEsMjQsMTJcXFwiLz48cGF0aCBpZD1cXFwi5b2i54q2XFxcIiBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk00LDguNjdBLjY3LjY3LDAsMCwxLDQsNy4zM2E1LjU4LDUuNTgsMCwwLDAsNC4xMy0yLjQuNjguNjgsMCwwLDEsLjk0LS4xMy42Ny42NywwLDAsMSwuMTMuOTNBNyw3LDAsMCwxLDQsOC42N1ptMTYsMGE3LDcsMCwwLDEtNS4yLTIuOTQuNjcuNjcsMCwwLDEsLjEzLS45My42OC42OCwwLDAsMSwuOTQuMTNBNS42LDUuNiwwLDAsMCwyMCw3LjMzYS42Ny42NywwLDAsMSwwLDEuMzRabS40LDQuOGExMi4yLDEyLjIsMCwwLDAtMy4xLTEuNTcuODUuODUsMCwwLDAsMC0uMjMsMSwxLDAsMCwwLS4yNC0uNjUsOS41LDkuNSwwLDAsMSwyLjI0LS4zNS42Ny42NywwLDAsMCwwLTEuMzQsOS4wOCw5LjA4LDAsMCwwLTUuOCwyLjIuNjguNjgsMCwwLDAtLjE1LjczLjY5LjY5LDAsMCwwLC42Mi40MSwxMC41MywxMC41MywwLDAsMSw1LjYsMS44Ni42Ny42NywwLDAsMCwuNC4xNC42OC42OCwwLDAsMCwuNTMtLjI3LjY3LjY3LDAsMCwwLS4xMy0uOTNabS05LjkzLTEuOTRhOS4wOCw5LjA4LDAsMCwwLTUuOC0yLjIuNjcuNjcsMCwwLDAsMCwxLjM0QTkuNSw5LjUsMCwwLDEsNi45MSwxMWExLDEsMCwwLDAtLjI0LjY1Ljg1Ljg1LDAsMCwwLDAsLjIzLDEyLjIsMTIuMiwwLDAsMC0zLjEsMS41Ny42Ny42NywwLDAsMC0uMTMuOTMuNjguNjgsMCwwLDAsLjUzLjI3LjY3LjY3LDAsMCwwLC40LS4xNEExMC40NCwxMC40NCwwLDAsMSwxMCwxMi42N2EuNjkuNjksMCwwLDAsLjYyLS40MS42OC42OCwwLDAsMC0uMTUtLjczWk0xMiwyMGEuNjcuNjcsMCwwLDEtLjUyLS4yNUw5LjM1LDE3LjA5bC0xLjQ4LDJhLjY4LjY4LDAsMCwxLS40OS4yNi42OC42OCwwLDAsMS0uNTItLjE5bC0uNjYtLjY3YS42NS42NSwwLDAsMSwwLS45NC42Ni42NiwwLDAsMSwuOTQsMGwuMTIuMTIsMS41NC0yYS42Ny42NywwLDAsMSwuNTItLjI3LjY5LjY5LDAsMCwxLC41My4yNUwxMiwxOC4yN2wyLjE1LTIuNjlhLjY2LjY2LDAsMCwxLC41My0uMjUuNjcuNjcsMCwwLDEsLjUyLjI3bDEuNTQsMiwuMTItLjEyYS42OC42OCwwLDAsMSwuOTUsMCwuNjYuNjYsMCwwLDEsMCwuOTRsLS42Ny42N2EuNjYuNjYsMCwwLDEtLjUyLjE5LjY4LjY4LDAsMCwxLS40OS0uMjZsLTEuNDgtMi0yLjEzLDIuNjZBLjY3LjY3LDAsMCwxLDEyLDIwWlxcXCIvPjwvZz48L2c+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL2NvbmZ1c2VkLnN2Z1wiLFwiL3N2Z1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6dXJsKCPmnKrlkb3lkI3nmoTmuJDlj5gpO30uY2xzLTJ7ZmlsbDojMDIwZTI3O2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTN7ZmlsbDojNjYyZTAwO308L3N0eWxlPjxyYWRpYWxHcmFkaWVudCBpZD1cXFwi5pyq5ZG95ZCN55qE5riQ5Y+YXFxcIiBjeD1cXFwiLTIzOS45M1xcXCIgY3k9XFxcIjM2NS44NVxcXCIgcj1cXFwiMC43N1xcXCIgZ3JhZGllbnRUcmFuc2Zvcm09XFxcIm1hdHJpeCgyNCwgMCwgMCwgLTI0LCA1NzcwLjQsIDg3ODguMTkpXFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCI+PHN0b3Agb2Zmc2V0PVxcXCIwXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZlNWEzXFxcIi8+PHN0b3Agb2Zmc2V0PVxcXCIxXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZhZDI5XFxcIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHRpdGxlPjYt5b6X5oSPPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxnIGlkPVxcXCLnrKzkuIDmjpJcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTI0LDEyQTEyLDEyLDAsMSwxLDEyLDAsMTIsMTIsMCwwLDEsMjQsMTJcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0uODMsNy4zNUMxLDcuNSwxLjc5LDgsMS45NCw4LjQ2cy40OCwzLjE5LDEuNDQsNCw0LjcyLjUyLDUuNDQuMTZjMS41OS0uOCwxLjc5LTMsMi4wNy00LjE1LjE2LS42NCwxLjEyLS42NCwxLjEyLS42NHMxLDAsMS4xMi42NGMuMjgsMS4xMy40OCwzLjM1LDIuMDgsNC4xNS43MS4zNiw0LjQ0LjY2LDUuNDMtLjE2czEuMjgtMy41MSwxLjQ0LTQsMS0xLDEuMTEtMS4xMWExLDEsMCwwLDAsMC0xYy0uMzItLjMyLTQuMDktLjYtOC4xNC0uMTZhMTQuMDksMTQuMDksMCwwLDEtMywuMzIsMTQuMDksMTQuMDksMCwwLDEtMy0uMzJjLTQuMDUtLjQ0LTcuODItLjE2LTguMTQuMTZhMSwxLDAsMCwwLDAsMVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk0xOC4yMiwxNS43NWEuMzUuMzUsMCwwLDAtLjQyLDBBMTAuODIsMTAuODIsMCwwLDEsMTIsMTcuNjdhMTAuODYsMTAuODYsMCwwLDEtNS44LTEuOTQuMzUuMzUsMCwwLDAtLjQyLDAsLjM0LjM0LDAsMCwwLS4wNy40MkE3LjY4LDcuNjgsMCwwLDAsMTIsMTkuNjdhNy42OCw3LjY4LDAsMCwwLDYuMjktMy41LjM0LjM0LDAsMCwwLS4wNy0uNDJaXFxcIi8+PC9nPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvY29vbC5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzI5MmYzMzt9LmNscy0ze2ZpbGw6I2ZmZjt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yMzkuMjJcXFwiIGN5PVxcXCIzNjUuODVcXFwiIHI9XFxcIjAuNjhcXFwiIGdyYWRpZW50VHJhbnNmb3JtPVxcXCJtYXRyaXgoMjQsIDAsIDAsIC0yNCwgNTc1My4zNiwgODc4OC4xOSlcXFwiIGdyYWRpZW50VW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIj48c3RvcCBvZmZzZXQ9XFxcIjBcXFwiIHN0b3AtY29sb3I9XFxcIiNmZjYyNjRcXFwiLz48c3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNmODM2NDBcXFwiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48dGl0bGU+MTAt6aqC5ZKSPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yNCwxMkExMiwxMiwwLDEsMSwxMiwwLDEyLDEyLDAsMCwxLDI0LDEyXFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMTAuNDcsMTAuMkE5LjA4LDkuMDgsMCwwLDAsNC42Nyw4YS42Ny42NywwLDEsMCwwLDEuMzMsOS41LDkuNSwwLDAsMSwyLjY1LjQ5LDIuNzYsMi43NiwwLDAsMC0uNjUsMS44NUM2LjY3LDEzLDcuNDEsMTQsOC4zMywxNFMxMCwxMywxMCwxMS42N2MwLS4xMiwwLS4yMywwLS4zNGgwYS42Ni42NiwwLDAsMCwuNDctMS4xM1pNMTkuMzMsOGE5LjA4LDkuMDgsMCwwLDAtNS44LDIuMkEuNjYuNjYsMCwwLDAsMTQsMTEuMzNoMGMwLC4xMSwwLC4yMiwwLC4zNEMxNCwxMywxNC43NSwxNCwxNS42NywxNHMxLjY2LTEsMS42Ni0yLjMzYTIuNzYsMi43NiwwLDAsMC0uNjUtMS44NSw5LjUsOS41LDAsMCwxLDIuNjUtLjQ5LjY3LjY3LDAsMSwwLDAtMS4zM1pcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xOS44MywyMkg0LjE3YTEuNTEsMS41MSwwLDAsMS0xLjUtMS41MVYxNi42N2ExLjUxLDEuNTEsMCwwLDEsMS41LTEuNTFIMTkuODNhMS41MSwxLjUxLDAsMCwxLDEuNSwxLjUxdjMuODJBMS41MSwxLjUxLDAsMCwxLDE5LjgzLDIyWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTUuMjMsMTguMDlINC42OGEuMzEuMzEsMCwwLDEsMC0uNjJoLjY0bC4xMy0xYzAtLjI0LjEzLS4zMi4zMi0uMzJhLjI4LjI4LDAsMCwxLC4yOS4yNi44Ni44NiwwLDAsMSwwLC4xNmwtLjEzLjk0aC42MWwuMTQtMWMwLS4yNC4xMy0uMzEuMzItLjMxYS4yNy4yNywwLDAsMSwuMjkuMjUuODYuODYsMCwwLDEsMCwuMTZsLS4xMy45NGguNTVhLjMxLjMxLDAsMCwxLDAsLjYySDcuMDVsLS4xLjc0SDcuNWEuMzEuMzEsMCwwLDEsMCwuNjJINi44Nkw2LjcyLDIwLjVjMCwuMjMtLjEyLjMxLS4zMS4zMWEuMjguMjgsMCwwLDEtLjMtLjI2LjQ3LjQ3LDAsMCwxLDAtLjE2bC4xMi0uOTRoLS42TDUuNTEsMjAuNWMwLC4yMy0uMTMuMzEtLjMyLjMxYS4yOC4yOCwwLDAsMS0uMjktLjI2LjkyLjkyLDAsMCwxLDAtLjE2TDUsMTkuNDVINC40OWEuMzEuMzEsMCwwLDEsMC0uNjJoLjY0Wm0uNTEuNzRoLjZsLjEtLjc0aC0uNlptMy4wOC0xLjdhMSwxLDAsMSwxLDEsMUExLDEsMCwwLDEsOC44MiwxNy4xM1ptMS4zLDBhLjMzLjMzLDAsMSwwLS42NiwwLC4zMy4zMywwLDEsMCwuNjYsMFptMS41NC0uODljLjA5LS4xNi4xNS0uMi4zLS4yYS4zNy4zNywwLDAsMSwuMzcuMzYuMzMuMzMsMCwwLDEtLjA1LjE5bC0yLjEzLDQuMDhjLS4xLjE0LS4xMy4yMS0uMjkuMjFhLjM5LjM5LDAsMCwxLS4zNi0uMzUuNDkuNDksMCwwLDEsLjA3LS4yNFptLS42MSwzLjU2YTEsMSwwLDEsMSwxLDEuMDVBMSwxLDAsMCwxLDExLjA1LDE5LjhabTEuMywwYS4zMy4zMywwLDEsMC0uNjYsMCwuMzMuMzMsMCwxLDAsLjY2LDBabTEuNjYuNTRhLjUuNSwwLDEsMSwuNS41MUEuNS41LDAsMCwxLDE0LDIwLjM0Wm0wLTMuODJhLjQ2LjQ2LDAsMCwxLC45MSwwVjE5YS40Ni40NiwwLDAsMS0uOTEsMFptNS4zOCw0LjM2YS4zMi4zMiwwLDAsMS0uMjgtLjEzbC0uNDktLjU0LDAsLjA1YTEuOSwxLjksMCwwLDEtMS4zNS42MiwxLjM3LDEuMzcsMCwwLDEtMS40OS0xLjM5LDEuNywxLjcsMCwwLDEsLjkyLTEuNDFsLjA4LDBMMTYuNzIsMThhMS4yMSwxLjIxLDAsMCwxLS40LS44N0ExLjEzLDEuMTMsMCwwLDEsMTcuNTgsMTZjLjUxLDAsMS4yMy4zMSwxLjIzLDFBMS4zOCwxLjM4LDAsMCwxLDE4LDE4LjE1TDE4LDE4LjJsLjc4LjkxLjI5LS4zN2MuMTctLjIuMjctLjI4LjQ0LS4yOGEuMzEuMzEsMCwwLDEsLjI4LjM1LDEuMjEsMS4yMSwwLDAsMS0uMzMuNmwtLjIuMjMuNDcuNTdhLjM4LjM4LDAsMCwxLC4xMi4yOS4zOS4zOSwwLDAsMS0uMzguMzhabS0yLjI5LTIuMzZhMS4wNiwxLjA2LDAsMCwwLS41OC44OC42OS42OSwwLDAsMCwuNzMuNzMsMS4xNCwxLjE0LDAsMCwwLC44NS0uNDFsMCwwLTEtMS4xOSwwLDBabS40NC0xLjg1YS40NC40NCwwLDAsMC0uNDQuNDFjMCwuMjQuMTEuMzguMzUuNjNsMCwwLDAsMGMuMzMtLjE3LjUtLjM3LjUtLjU5YS40NS40NSwwLDAsMC0uNDktLjQ2WlxcXCIvPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9jcnVzZS5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzY2MmUwMDt9LmNscy0ze2ZpbGw6IzRkYjVmZjt9LmNscy00e2ZpbGw6I2ZmNWU2MTt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yMzkuNVxcXCIgY3k9XFxcIjM2NS44NVxcXCIgcj1cXFwiMC43N1xcXCIgZ3JhZGllbnRUcmFuc2Zvcm09XFxcIm1hdHJpeCgyNCwgMCwgMCwgLTI0LCA1NzYwLjA4LCA4Nzg4LjE5KVxcXCIgZ3JhZGllbnRVbml0cz1cXFwidXNlclNwYWNlT25Vc2VcXFwiPjxzdG9wIG9mZnNldD1cXFwiMFxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmZTVhM1xcXCIvPjxzdG9wIG9mZnNldD1cXFwiMVxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmYWQyOVxcXCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT43LeWkp+WTrTwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PGcgaWQ9XFxcIumhtemdoi0xXFxcIj48ZyBpZD1cXFwi56ys5LiA5o6SXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yNCwxMkExMiwxMiwwLDEsMSwxMiwwLDEyLDEyLDAsMCwxLDI0LDEyXFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMTQuNjcsMThjMCwxLjg0LTEuMiwyLTIuNjcsMnMtMi42Ny0uMTYtMi42Ny0yLDEuMi00LDIuNjctNFMxNC42NywxNi4xNiwxNC42NywxOFpNMjAsMTBhLjc0Ljc0LDAsMCwxLS4yNS0uMDUsMTEsMTEsMCwwLDEtNS0zLjU4LjY3LjY3LDAsMSwxLDEuMTEtLjc0LDkuODksOS44OSwwLDAsMCw0LjM2LDMuMDguNjcuNjcsMCwwLDEsLjM3Ljg3QS42OC42OCwwLDAsMSwyMCwxMFpNNCwxMGEuNjguNjgsMCwwLDEtLjYyLS40Mi42Ny42NywwLDAsMSwuMzctLjg3QTkuODksOS44OSwwLDAsMCw4LjExLDUuNjNhLjY3LjY3LDAsMCwxLDEuMTEuNzQsMTEsMTEsMCwwLDEtNSwzLjU4QS43NC43NCwwLDAsMSw0LDEwWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTE2LDEwLjY3aDIuNjdWMjMuMzNMMTYsMjMuM1pNNS4zMywyMy4zMyw4LDIzLjNWMTAuNjdINS4zM1pcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xMCwxMmEuNjYuNjYsMCwwLDEtLjMtLjA3LDUuNzUsNS43NSwwLDAsMC00LjczLDAsLjY3LjY3LDAsMSwxLS42LTEuMTksNy4wNiw3LjA2LDAsMCwxLDUuOTMsMEEuNjYuNjYsMCwwLDEsMTAsMTJabTkuMzMsMGEuNTkuNTksMCwwLDEtLjI5LS4wNyw1Ljc3LDUuNzcsMCwwLDAtNC43NCwwLC42Ny42NywwLDEsMS0uNi0xLjE5LDcuMDYsNy4wNiwwLDAsMSw1LjkzLDAsLjY2LjY2LDAsMCwxLS4zLDEuMjZaXFxcIi8+PGVsbGlwc2UgaWQ9XFxcIuakreWchuW9olxcXCIgY2xhc3M9XFxcImNscy0zXFxcIiBjeD1cXFwiMTJcXFwiIGN5PVxcXCIyMi42N1xcXCIgcng9XFxcIjEyXFxcIiByeT1cXFwiMS4zM1xcXCIvPjxlbGxpcHNlIGNsYXNzPVxcXCJjbHMtNFxcXCIgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMThcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMS4zM1xcXCIvPjwvZz48L2c+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL2NyeS5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM5ZWRkZmY7fS5jbHMtMntmaWxsOiM2NjIxMTM7fS5jbHMtM3tmaWxsOiNjMTY5NGY7fS5jbHMtNHtmaWxsOiM0ZGI1ZmY7fS5jbHMtNXtmaWxsOiNmZmU1YTM7fS5jbHMtNntmaWxsOiNmZmMyNTI7fS5jbHMtN3tmaWxsOiNmODM1M2Y7fS5jbHMtOHtmaWxsOiMyMTk2ZjM7fS5jbHMtOXtmaWxsOiM3NWM5NDA7fS5jbHMtMTB7ZmlsbDojZmY5NTAwO30uY2xzLTExe2ZpbGw6IzYzNTRmNDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPjM1Leibi+ezlTwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PHBhdGggaWQ9XFxcIui3r+W+hFxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBkPVxcXCJNMS4zNCwxNC4yczEsMy43MSwxLjMsNS41Yy4zLDIsMi4zMSwzLjYxLDcuMTMsMy42MXM2Ljg0LTEuNTksNy4xNC0zLjYxYy4yNi0xLjc5LDEuMjktNS41LDEuMjktNS41WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTEuNCwxNC4yNmMuMTYuNzkuNDUsMS4yOS44NywxczEuMDctLjEyLjg3LjQxLjYzLjcxLDEsLjQyLDEtLjU3LDEuMDcsMGEuNjEuNjEsMCwwLDAsMS4wOC4zMS44NS44NSwwLDAsMSwxLjM3LjI2Yy4xNy41MiwxLC40NSwxLjI4LjA4YTEsMSwwLDAsMSwuODUtLjU3djBjLjM5LDAsLjYyLjI1Ljg1LjU5czEuMTIuNDQsMS4yOC0uMDhhLjg2Ljg2LDAsMCwxLDEuMzgtLjI2LjYuNiwwLDAsMCwxLjA3LS4zMWMuMDctLjYxLjc1LS4zMSwxLjA4LDBzMS4xNS4wNiwxLS40Mi40NS0uNjcuODctLjQxLjcxLS4yNC44Ny0xWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTE5LjUsMTIuMzFjMC0zLjE5LTQuMzYtNS43OC05Ljc1LTUuNzhTMCw5LjEyLDAsMTIuMzFjMCwyLjU4LDUuODQsMy45MSw5Ljc1LDMuOTFTMTkuNSwxNC45MywxOS41LDEyLjMxWlxcXCIvPjxwYXRoIGlkPVxcXCLlvaLnirZcXFwiIGNsYXNzPVxcXCJjbHMtNFxcXCIgZD1cXFwiTTkuNzcsMjNhLjMyLjMyLDAsMCwxLS4zMi0uMzJWMTcuMWEuMzIuMzIsMCwwLDEsLjMyLS4zMi4zMi4zMiwwLDAsMSwuMzMuMzJ2NS42MUEuMzIuMzIsMCwwLDEsOS43NywyM1ptLTQuMzQtLjgyYS4zMi4zMiwwLDAsMS0uMzItLjI4bC0uNjctNS4xOGEuMzEuMzEsMCwwLDEsLjI4LS4zNi4zMi4zMiwwLDAsMSwuMzYuMjhsLjY3LDUuMThhLjMyLjMyLDAsMCwxLS4yOC4zNlptMi4wNi42M2EuMzEuMzEsMCwwLDEtLjMyLS4yOUw2LjcxLDE3QS4zMi4zMiwwLDEsMSw3LjM1LDE3bC40Niw1LjUyYS4zMi4zMiwwLDAsMS0uMjkuMzVabS0zLjg3LTJhLjI0LjI0LDAsMCwxLS4yMy0uMTlsLTEtNC44M2EuMjQuMjQsMCwwLDEsLjQ4LS4wOWwxLDQuODJhLjI1LjI1LDAsMCwxLS4xOS4yOVptMTAuNDUsMS4yN0gxNGEuMzIuMzIsMCwwLDEtLjI3LS4zN2wuNzMtNS4xMWEuMzMuMzMsMCwwLDEsLjM3LS4yNy4zMi4zMiwwLDAsMSwuMjcuMzdsLS43Myw1LjFBLjMzLjMzLDAsMCwxLDE0LjA3LDIyLjE0Wm0tMiwuN2gwYS4zMy4zMywwLDAsMS0uMy0uMzVMMTIuMjMsMTdhLjM0LjM0LDAsMCwxLC4zNS0uMy4zMy4zMywwLDAsMSwuMy4zNWwtLjQ2LDUuNTNBLjMzLjMzLDAsMCwxLDEyLjA5LDIyLjg0Wk0xNiwyMC45aDBhLjIzLjIzLDAsMCwxLS4xOS0uMjhsLjkzLTQuODVhLjI0LjI0LDAsMCwxLC40OC4wOWwtLjk0LDQuODVhLjI0LjI0LDAsMCwxLS4yNC4yWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNVxcXCIgZD1cXFwiTTkuMDcsMGEyLjUxLDIuNTEsMCwwLDAsMS40MS43NkMxMiwuNzksMTMuMywxLjYxLDEzLjMsM2MwLDAsMy40MiwwLDMuNTMsMywwLDAsMS43MywwLDIuMTIsMywuMjksMi4yNS0yLDUuMzQtOS4xOCw1LjMxQzMuNDIsMTQuMzcuMTcsMTIuMTEuNiw5LjA5YTMuMjEsMy4yMSwwLDAsMSwyLjgyLTNTMywyLjI3LDcuNjUsMi4yN0E1LjU0LDUuNTQsMCwwLDEsOS4wNywwWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNlxcXCIgZD1cXFwiTTkuNzEsNi44MmMxLjkxLS43MiwzLjY1LTIsMy41OS0zLjc5YTIsMiwwLDAsMC0uNTUtMS4zOGMuNDIsMS44Mi0yLjM3LDMuOS01LjQ1LDQuMjJDMy40NSw2LjI4LDMuODksNCwzLjg5LDRoMGEzLjY5LDMuNjksMCwwLDAtLjQ3LDJDNCw3LjYxLDcsNy44Myw5LjcxLDYuODJaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy02XFxcIiBkPVxcXCJNMTYuODMsNi4wNmEyLjMsMi4zLDAsMCwwLDAtLjI2LDUuMDksNS4wOSwwLDAsMC0uNS0xLjM4QTIuMjgsMi4yOCwwLDAsMCwxNS44OSw0Yy43MiwyLjg3LTMuNjEsNi4zMi03Ljc0LDcuMTJDMi43NywxMi4xMy42LDkuMS42LDkuMUEzLjc1LDMuNzUsMCwwLDAsMi44MywxM0M5LjQ3LDE1LjY4LDE2Ljg5LDksMTYuODMsNi4wNlpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTdcXFwiIGQ9XFxcIk0zLjczLDkuMjJsLS43NiwxYS42Ni42NiwwLDAsMS0uOTEuMTQuNjUuNjUsMCwwLDEtLjE0LS45MWwuNzctMS4wNWEuNjQuNjQsMCwwLDEsLjktLjE0LjY1LjY1LDAsMCwxLC4xNC45MVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLThcXFwiIGQ9XFxcIk03Ljc4LDUuMzIsNi41Miw1LjA1QS42NS42NSwwLDAsMSw2LDQuMjhhLjY0LjY0LDAsMCwxLC43Ny0uNWwxLjI3LjI3YS42NC42NCwwLDAsMSwuNDkuNzdBLjY1LjY1LDAsMCwxLDcuNzgsNS4zMlpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTlcXFwiIGQ9XFxcIk04Ljc1LDkuMmwuODYsMWEuNjUuNjUsMCwwLDEtLjA3LjkxQS42NC42NCwwLDAsMSw4LjYzLDExbC0uODUtMWEuNjQuNjQsMCwwLDEsMS0uODVaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0xMFxcXCIgZD1cXFwiTTEzLjkxLDcuNDdsLTEuMjIuNDVhLjY0LjY0LDAsMCwxLS44My0uMzcuNjUuNjUsMCwwLDEsLjM3LS44NGwxLjIyLS40NmEuNjUuNjUsMCwwLDEsLjQ2LDEuMjJaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0xMVxcXCIgZD1cXFwiTTE3Ljc5LDkuMTJsLS42NCwxLjEyYS42NS42NSwwLDAsMS0uODkuMjRBLjY0LjY0LDAsMCwxLDE2LDkuNmwuNjUtMS4xM2EuNjUuNjUsMCwwLDEsLjg5LS4yMy42NC42NCwwLDAsMSwuMjMuODhaXFxcIi8+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL2N1cGNha2Uuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp1cmwoI+acquWRveWQjeeahOa4kOWPmCk7fS5jbHMtMntmaWxsOiM2NjJlMDA7fTwvc3R5bGU+PHJhZGlhbEdyYWRpZW50IGlkPVxcXCLmnKrlkb3lkI3nmoTmuJDlj5hcXFwiIGN4PVxcXCItMjM5LjIyXFxcIiBjeT1cXFwiMzY1Ljg1XFxcIiByPVxcXCIwLjc3XFxcIiBncmFkaWVudFRyYW5zZm9ybT1cXFwibWF0cml4KDI0LCAwLCAwLCAtMjQsIDU3NTMuMzYsIDg3ODguMTkpXFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCI+PHN0b3Agb2Zmc2V0PVxcXCIwXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZlNWEzXFxcIi8+PHN0b3Agb2Zmc2V0PVxcXCIxXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZhZDI5XFxcIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHRpdGxlPumavui/hzwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PGcgaWQ9XFxcIumhtemdoi0xXFxcIj48ZyBpZD1cXFwi56ys5LiA5o6SXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yNCwxMkExMiwxMiwwLDEsMSwxMiwwLDEyLDEyLDAsMCwxLDI0LDEyXFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMTUuNjYsMTkuMjVBMy45MywzLjkzLDAsMCwwLDEyLDE2LjMzYTMuOTMsMy45MywwLDAsMC0zLjY2LDIuOTIuMzUuMzUsMCwwLDAsLjE2LjM3LjM3LjM3LDAsMCwwLC40LDBTOS41NywxOSwxMiwxOXMzLjA4LjU1LDMuMS41OGEuMzUuMzUsMCwwLDAsLjIzLjA5LjM1LjM1LDAsMCwwLC4zMy0uNDJaTTE5LjMzLDhhNS45MSw1LjkxLDAsMCwxLTUuMjYtMywuNjYuNjYsMCwwLDEsMS4xOS0uNTksNC42Myw0LjYzLDAsMCwwLDQuMDcsMi4zLjY3LjY3LDAsMSwxLDAsMS4zM1pNNC42Nyw4YS42Ny42NywwLDEsMSwwLTEuMzNjMy4zOSwwLDQtMi4wOCw0LTIuMTdBLjY3LjY3LDAsMCwxLDEwLDQuODNDMTAsNSw5LjE0LDgsNC42Nyw4WlxcXCIvPjxlbGxpcHNlIGlkPVxcXCLmpK3lnIblvaJcXFwiIGNsYXNzPVxcXCJjbHMtMlxcXCIgY3g9XFxcIjhcXFwiIGN5PVxcXCIxMVxcXCIgcng9XFxcIjEuNjdcXFwiIHJ5PVxcXCIyLjMzXFxcIi8+PGVsbGlwc2UgY2xhc3M9XFxcImNscy0yXFxcIiBjeD1cXFwiMTZcXFwiIGN5PVxcXCIxMVxcXCIgcng9XFxcIjEuNjdcXFwiIHJ5PVxcXCIyLjMzXFxcIi8+PC9nPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvZGlzYXBwb2ludGVkLnN2Z1wiLFwiL3N2Z1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6dXJsKCPmnKrlkb3lkI3nmoTmuJDlj5gpO30uY2xzLTJ7ZmlsbDojNjY0NTAwO30uY2xzLTN7ZmlsbDojNjYyZTAwO30uY2xzLTR7ZmlsbDojZTJhNjJkO30uY2xzLTV7ZmlsbDojZjgzNTNmO30uY2xzLTZ7ZmlsbDojZmY4MzgzO30uY2xzLTd7ZmlsbDojMjI5NmYzO30uY2xzLTh7ZmlsbDojOWVkZGZmO30uY2xzLTl7ZmlsbDojMDc1NGE2O30uY2xzLTEwe2ZpbGw6IzRlYjVmZjt9LmNscy0xMXtmaWxsOiNmZjVlNjE7fS5jbHMtMTJ7ZmlsbDojNzVjOTQwO308L3N0eWxlPjxyYWRpYWxHcmFkaWVudCBpZD1cXFwi5pyq5ZG95ZCN55qE5riQ5Y+YXFxcIiBjeD1cXFwiLTIzOS4xOFxcXCIgY3k9XFxcIjM2NC45OFxcXCIgcj1cXFwiMC43N1xcXCIgZ3JhZGllbnRUcmFuc2Zvcm09XFxcIm1hdHJpeCgyMi42NywgMCwgMCwgLTIyLjY3LCA1NDMyLjc2LCA4MjgxLjUxKVxcXCIgZ3JhZGllbnRVbml0cz1cXFwidXNlclNwYWNlT25Vc2VcXFwiPjxzdG9wIG9mZnNldD1cXFwiMFxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmZTVhM1xcXCIvPjxzdG9wIG9mZnNldD1cXFwiMVxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmYWQyOVxcXCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT7lhbTlpYs8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxnIGlkPVxcXCLpobXpnaItMVxcXCI+PGcgaWQ9XFxcIuesrOS4gOaOklxcXCI+PGNpcmNsZSBpZD1cXFwi5qSt5ZyG5b2iXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGN4PVxcXCIxMS4zM1xcXCIgY3k9XFxcIjEyLjY3XFxcIiByPVxcXCIxMS4zM1xcXCIvPjxlbGxpcHNlIGNsYXNzPVxcXCJjbHMtMlxcXCIgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTcuMzNcXFwiIHJ4PVxcXCIxLjMzXFxcIiByeT1cXFwiMS42N1xcXCIvPjxwYXRoIGlkPVxcXCLlvaLnirZcXFwiIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTUuNDEsMTQuMjZhLjY5LjY5LDAsMCwxLS4zNi0uMTEuNjcuNjcsMCwwLDEtLjIxLS45Miw0Ljc4LDQuNzgsMCwwLDEsNS4xMy0yLC42Ni42NiwwLDEsMS0uMzIsMS4yOUEzLjQ4LDMuNDgsMCwwLDAsNiwxMy45NGEuNjQuNjQsMCwwLDEtLjU2LjMyWm04LTIuNWEuNjkuNjksMCwwLDEtLjUyLS4yNC42Ny42NywwLDAsMSwuMS0uOTQsNC43Niw0Ljc2LDAsMCwxLDUuNDctLjQzLjY2LjY2LDAsMCwxLC4yMS45Mi42Ny42NywwLDAsMS0uOTIuMjEsMy40MiwzLjQyLDAsMCwwLTMuOTIuMzNBLjY2LjY2LDAsMCwxLDEzLjM5LDExLjc2WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNFxcXCIgZD1cXFwiTTguOSwyMC44NWwtLjE0LDBhLjUuNSwwLDAsMS0uMzQtLjYyLDMuMTksMy4xOSwwLDAsMC0uMzMtMi43MiwxLjc1LDEuNzUsMCwwLDAtMS4zLS43OS40OS40OSwwLDAsMS0uNDYtLjUzLjQ4LjQ4LDAsMCwxLC41My0uNDYsMi43MSwyLjcxLDAsMCwxLDIsMS4yLDQuMTcsNC4xNywwLDAsMSwuNDgsMy41N0EuNS41LDAsMCwxLDguOSwyMC44NVptNy4zNi0yYS41Ny41NywwLDAsMS0uMjgtLjA4LDIuODEsMi44MSwwLDAsMS0xLjE5LTIuNDcsMy4xMSwzLjExLDAsMCwxLDEuMzItMi41OC41MS41MSwwLDAsMSwuNjkuMTcuNTEuNTEsMCwwLDEtLjE3LjY5LDIuMSwyLjEsMCwwLDAtLjg0LDEuNzQsMS43OSwxLjc5LDAsMCwwLC43NCwxLjYxLjUuNSwwLDAsMSwuMTQuNjkuNDguNDgsMCwwLDEtLjQxLjIzWlxcXCIvPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtNVxcXCIgZD1cXFwiTTExLjQ1LDEuODFhLjIzLjIzLDAsMCwwLS4xMi0uMDZTLjcxLS4yNi4yNS4xNC40OSwxMS4zMy40OSwxMS4zM2EuMjIuMjIsMCwwLDAsLjA1LjEzYy40LjQ2LDMuMTctMS4zMyw2LjE4LTRzNS4xNC01LjE5LDQuNzMtNS42NVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTZcXFwiIGQ9XFxcIk0uMjMuMThhLjE5LjE5LDAsMCwwLDAsLjA4Qy4zMSwxLjE4LDEuMzQsOC43LDIsMTEuMDVBMjQuMzgsMjQuMzgsMCwwLDAsNS4wNSw4Ljg4QzQuMDgsNy4xLjc3LjEuMjMuMThaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy03XFxcIiBkPVxcXCJNMTkuOTMsMTkuNDlsLTctLjg3Yy0uNzYtLjA3LTIuMDgtLjA4LTItMS4yN3MxLjM2LS45MiwyLjMyLS43N2w3LjA5LDEuMTgtLjM2LDEuNzNaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy04XFxcIiBkPVxcXCJNMjAuMjksMTcuNzZsLTIuODItLjQ4Yy0uMzMtLjA2LS42Mi40My0uNjQuOTVzLjE2Ljg3LjQ5LjkzbDIuNzYuMzUuMjEtMS43NVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTdcXFwiIGQ9XFxcIk0yMy4yOCwxNy41NmwtMS43NSwxLjYxLTMuMTItMy40LDEuNzQtMS42MWEyLjI1LDIuMjUsMCwwLDEsMy4xNy4xNGwuMDkuMDlBMi4yNCwyLjI0LDAsMCwxLDIzLjI4LDE3LjU2WlxcXCIvPjxlbGxpcHNlIGNsYXNzPVxcXCJjbHMtOFxcXCIgY3g9XFxcIjE5Ljk3XFxcIiBjeT1cXFwiMTcuNDdcXFwiIHJ4PVxcXCIxLjg1XFxcIiByeT1cXFwiMi4zMVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTYuNTYgMTguMTIpIHJvdGF0ZSgtNDIuNilcXFwiLz48ZWxsaXBzZSBjbGFzcz1cXFwiY2xzLTlcXFwiIGN4PVxcXCIxOS45N1xcXCIgY3k9XFxcIjE3LjQ3XFxcIiByeD1cXFwiMVxcXCIgcnk9XFxcIjEuMzhcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC02LjU2IDE4LjEyKSByb3RhdGUoLTQyLjYpXFxcIi8+PGNpcmNsZSBjbGFzcz1cXFwiY2xzLTEwXFxcIiBjeD1cXFwiMS42N1xcXCIgY3k9XFxcIjIyLjMzXFxcIiByPVxcXCIxXFxcIi8+PGNpcmNsZSBjbGFzcz1cXFwiY2xzLTEwXFxcIiBjeD1cXFwiMTkuMzNcXFwiIGN5PVxcXCIxLjMzXFxcIiByPVxcXCIxLjMzXFxcIi8+PHBvbHlnb24gY2xhc3M9XFxcImNscy0xMVxcXCIgcG9pbnRzPVxcXCIzLjI0IDE5LjUgMS42OCAxNS43NSAwLjI4IDE5Ljc4IDMuMjQgMTkuNVxcXCIvPjxwb2x5Z29uIGNsYXNzPVxcXCJjbHMtNVxcXCIgcG9pbnRzPVxcXCIxNy4zMyAzLjMzIDE0LjY3IDQgMTUuMzMgMS4zMyAxNy4zMyAzLjMzXFxcIi8+PHBvbHlnb24gY2xhc3M9XFxcImNscy0xMlxcXCIgcG9pbnRzPVxcXCIyMS4zMyA4LjY3IDI0IDUuMzMgMjIgNCAyMS4zMyA4LjY3XFxcIi8+PC9nPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvZXhjaXRlZC5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzY2MmUwMDt9LmNscy0ze2ZpbGw6I2Y0ZjdmOTt9LmNscy00e2ZpbGw6IzMyM2Y1OTt9LmNscy01e2ZpbGw6IzY5NzU4Yzt9LmNscy02e2ZpbGw6I2M3ZWRmZjt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yNzEuNDZcXFwiIGN5PVxcXCIzNzQuMTdcXFwiIHI9XFxcIjAuNzdcXFwiIGdyYWRpZW50VHJhbnNmb3JtPVxcXCJtYXRyaXgoMjQsIDAsIDAsIC0yNCwgNjUyNy4wNCwgODk4Ny45OSlcXFwiIGdyYWRpZW50VW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIj48c3RvcCBvZmZzZXQ9XFxcIjBcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmU1YTNcXFwiLz48c3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmFkMjlcXFwiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48dGl0bGU+MjQt5o6i57SiPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yNCwxMkExMiwxMiwwLDEsMSwxMiwwLDEyLDEyLDAsMCwxLDI0LDEyXFxcIi8+PGVsbGlwc2UgaWQ9XFxcIuakreWchuW9olxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBjeD1cXFwiOC4xMlxcXCIgY3k9XFxcIjkuODFcXFwiIHJ4PVxcXCIxLjc2XFxcIiByeT1cXFwiMi40N1xcXCIvPjxjaXJjbGUgY2xhc3M9XFxcImNscy0zXFxcIiBjeD1cXFwiMTYuNTlcXFwiIGN5PVxcXCI5LjUzXFxcIiByPVxcXCI0LjU5XFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNOS44OCw2LjYzYS43Mi43MiwwLDAsMS0uNTYtLjI4QTMsMywwLDAsMCw3LjI2LDVhMi41NywyLjU3LDAsMCwwLTEuODIuNzcuNzEuNzEsMCwwLDEtMS0xQTQsNCwwLDAsMSw3LjM2LDMuNTRhNC4zMiw0LjMyLDAsMCwxLDMuMDksMiwuNzEuNzEsMCwwLDEtLjE0LDFBLjc2Ljc2LDAsMCwxLDkuODgsNi42M1pcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTRcXFwiIGQ9XFxcIk0yMS44OCwyNGEuNy43LDAsMCwxLS43LS43MVY5Ljg4YS43LjcsMCwwLDEsLjctLjcuNy43LDAsMCwxLC43MS43VjIzLjI5QS43MS43MSwwLDAsMSwyMS44OCwyNFpcXFwiLz48cGF0aCBpZD1cXFwi5b2i54q2XFxcIiBjbGFzcz1cXFwiY2xzLTVcXFwiIGQ9XFxcIk0yMS44OCw4LjQ3aC0uMWE1LjMsNS4zLDAsMSwwLS4xOSwyLjc4LDEuMzYsMS4zNiwwLDAsMCwuMjksMCwxLjQxLDEuNDEsMCwwLDAsMC0yLjgyWm0tNS4yOSw0Ljk0YTMuODgsMy44OCwwLDEsMSwzLjg4LTMuODhBMy44OCwzLjg4LDAsMCwxLDE2LjU5LDEzLjQxWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTE0LjEyLDE5LjA2QS43Mi43MiwwLDAsMSwxMy44LDE5YTMuODIsMy44MiwwLDAsMC0zLjYsMCwuNy43LDAsMCwxLS45NS0uMzEuNzEuNzEsMCwwLDEsLjMyLTEsNS4xNiw1LjE2LDAsMCwxLDQuODYsMCwuNzEuNzEsMCwwLDEsLjMyLDEsLjY5LjY5LDAsMCwxLS42My4zOVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTZcXFwiIGQ9XFxcIk0xOC43LDYuMjdhMy44OCwzLjg4LDAsMCwwLTUuMzcsNS4zN1pNMTQuOTMsMTNhNCw0LDAsMCwwLDEuNjYuMzcsMy44OCwzLjg4LDAsMCwwLDMuODgtMy44OCw0LDQsMCwwLDAtLjM3LTEuNjZaXFxcIi8+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL2V4cGxvcmUuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp1cmwoI+acquWRveWQjeeahOa4kOWPmCk7fS5jbHMtMntmaWxsOiM2NjJlMDA7fS5jbHMtM3tmaWxsOiNmZjVlNjE7fS5jbHMtNHtmaWxsOiNmZjg5ODc7fS5jbHMtNXtmaWxsOiNmMTkwMjA7fS5jbHMtNntmaWxsOiNmODM2NDA7fS5jbHMtN3tmaWxsOiNkMTIyMzE7fS5jbHMtOHtmaWxsOiNmZmNiNGM7fTwvc3R5bGU+PHJhZGlhbEdyYWRpZW50IGlkPVxcXCLmnKrlkb3lkI3nmoTmuJDlj5hcXFwiIGN4PVxcXCItMjEwLjQxXFxcIiBjeT1cXFwiNDI2LjQ0XFxcIiByPVxcXCIwLjc3XFxcIiBncmFkaWVudFRyYW5zZm9ybT1cXFwibWF0cml4KDAsIDE2LjE3LCAxNi4xNywgMCwgLTY4ODIuODQsIDM0MTQuNTQpXFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCI+PHN0b3Agb2Zmc2V0PVxcXCIwXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZlNWEzXFxcIi8+PHN0b3Agb2Zmc2V0PVxcXCIxXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZhZDI5XFxcIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHRpdGxlPjE4LeWPkeaAkjwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PHBhdGggaWQ9XFxcIui3r+W+hFxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBkPVxcXCJNMjIuNjcsMTIuMzFhNC41OCw0LjU4LDAsMCwwLTQuNTgtNC41Nyw4LjI2LDguMjYsMCwwLDAtMS44NC4zOEw3LjUsOUE4LjA4LDguMDgsMCwwLDAsNC41OCw4LDQuNTgsNC41OCwwLDAsMCwwLDEyLjU3YzAsLjE2LDAsLjMxLDAsLjQ3YTExLjMzLDExLjMzLDAsMCwwLDIyLjY1LS40N3MwLS4wNywwLS4xUzIyLjY3LDEyLjM3LDIyLjY3LDEyLjMxWlxcXCIvPjxlbGxpcHNlIGlkPVxcXCLmpK3lnIblvaJcXFwiIGNsYXNzPVxcXCJjbHMtMlxcXCIgY3g9XFxcIjExLjMzXFxcIiBjeT1cXFwiMTguOTlcXFwiIHJ4PVxcXCIyLjg5XFxcIiByeT1cXFwiMy4zXFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNOC42NywxMy42NGMwLDEtLjYsMS43OC0xLjM0LDEuNzhTNiwxNC42Miw2LDEzLjY0cy42LTEuNzgsMS4zMy0xLjc4UzguNjcsMTIuNjYsOC42NywxMy42NFptOCwwYzAsMS0uNiwxLjc4LTEuMzQsMS43OFMxNCwxNC42MiwxNCwxMy42NHMuNi0xLjc4LDEuMzMtMS43OCwxLjM0LjgsMS4zNCwxLjc4WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTIwLjA4LDIuMzlhMS42MywxLjYzLDAsMCwwLS40NS4wNywyLjQ3LDIuNDcsMCwwLDAtMS45NC0uOTNoLS4xN0EyLjY0LDIuNjQsMCwwLDAsMTMuMjEsMmExLjQ5LDEuNDksMCwwLDAtMS4zOC0uOTEsMS40NywxLjQ3LDAsMCwwLTEuMTcuNTgsMi40OCwyLjQ4LDAsMCwwLTQuNDUtLjU0LDIuNDUsMi40NSwwLDAsMC0uMzgsMEEyLjQ4LDIuNDgsMCwwLDAsMy42NCwyLjQ0YTIsMiwwLDAsMC0uNDIsMCwyLjI1LDIuMjUsMCwwLDAsMCw0LjVBMi4yMSwyLjIxLDAsMCwwLDQuMyw2LjYxYTEuNDgsMS40OCwwLDAsMCwuODkuMzEsMS40MywxLjQzLDAsMCwwLC4yOSwwQTMuMiwzLjIsMCwwLDAsOC4yMiw4LjQyLDMuMjUsMy4yNSwwLDAsMCwxMC45Myw3YTIuNiwyLjYsMCwwLDAsNC41NC0xaC4wNmEyLjQ0LDIuNDQsMCwwLDAsLjU1LS4wNiwyLjQ2LDIuNDYsMCwwLDAsMS42Mi42MSwyLjUsMi41LDAsMCwwLDEuOTMtLjkzLDEuNjMsMS42MywwLDAsMCwuNDUuMDcsMS42NCwxLjY0LDAsMSwwLDAtMy4yOFpcXFwiLz48Y2lyY2xlIGNsYXNzPVxcXCJjbHMtNFxcXCIgY3g9XFxcIjE3Ljg2XFxcIiBjeT1cXFwiMy43NVxcXCIgcj1cXFwiMS40MVxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNFxcXCIgZD1cXFwiTTEyLjU4LDMuODRBMS40MywxLjQzLDAsMCwwLDExLjE0LDIuNGExLjM5LDEuMzksMCwwLDAtLjY3LjE3LDEuMTEsMS4xMSwwLDAsMC0xLjk0LS4yLDIuNDYsMi40NiwwLDAsMC0xLjctLjY4QTIuNDksMi40OSwwLDAsMCw0LjQyLDMuNThhMS4zNywxLjM3LDAsMCwwLTEtLjM5QTEuMzQsMS4zNCwwLDEsMCw0LjU4LDUuMjcsMi41LDIuNSwwLDAsMCw2LjQyLDYuNjVhMS40OCwxLjQ4LDAsMCwwLDEuMjkuNzVBMS41LDEuNSwwLDAsMCw5LjE3LDYuMjNhMS40OSwxLjQ5LDAsMCwwLDIuMTgtMSwxLjQ0LDEuNDQsMCwwLDAsMS4yMy0xLjQyWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNVxcXCIgZD1cXFwiTTMuODEsMTBhLjE4LjE4LDAsMCwwLC4wNywwbC4wOS4wN2E3LjQxLDcuNDEsMCwwLDAsMS41My41OWMuMjMuMDUuNDcuMTEuNzQuMTUsMS4xNi4yLDEuMTMtLjQxLDIuNDMtLjQ0Ljc2LDAsMS4xOS41MSwxLjc1LjgyLDEsLjU1LDEuNzItLjQ5LDIuNDgtLjQ5LjU3LDAsMS40OC44MSwyLjEyLjUxLDEtLjQ4LDEuMTItLjg4LDEuODYtLjg4czEsLjM5LDEuNDUuNDhhMi43NCwyLjc0LDAsMCwwLC4zNi0uMjNzMS44My0xLjI2LjczLTEuNTVjLS42My0uMTYtLjY3LjI2LTEuNDcuMTZzLjI5LS40OS0uMTMtLjcyLTEuOTIuMjctMy43MSwxLjE2Yy0uNDguMjMtNS40OS4xMy02LjQ3LS40MS0yLjE0LTEuMTYtMi4zMS40My0zLS4yQTEsMSwwLDAsMCwzLjUxLDlhLjM2LjM2LDAsMCwwLS4xNS4zN0ExLjEzLDEuMTMsMCwwLDAsMy44MSwxMFpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTZcXFwiIGQ9XFxcIk04LjY3LDEwLjQxYy43NiwwLDEuMTkuNTEsMS43NS44MiwxLC41NSwxLjcyLS40OSwyLjQ4LS40OS41NywwLDEuNDguODEsMi4xMi41MWExMiwxMiwwLDAsMCwxLjI1LS43NSwxMi41NywxMi41NywwLDAsMSwyLjYyLTQuMywyLjQxLDIuNDEsMCwwLDEtMS4xOS4zMywyLjQ2LDIuNDYsMCwwLDEtMS42Mi0uNjEsMi40NCwyLjQ0LDAsMCwxLS41NS4wNmgtLjA2YTIuNiwyLjYsMCwwLDEtNC41NCwxQTMuMjUsMy4yNSwwLDAsMSw4LjIyLDguNDIsMy4yLDMuMiwwLDAsMSw1LjQ4LDYuODlhMS40MywxLjQzLDAsMCwxLS4yOSwwLDEuNDgsMS40OCwwLDAsMS0uODktLjMxQTIsMiwwLDAsMSw0LDYuNzRhMTMuODYsMTMuODYsMCwwLDEsMi40LDQuMTNDNy4zOSwxMSw3LjQ0LDEwLjQ0LDguNjcsMTAuNDFaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy03XFxcIiBkPVxcXCJNMTcuNyw2LjUzYTIuNDYsMi40NiwwLDAsMS0xLjYyLS42MSwyLjQ0LDIuNDQsMCwwLDEtLjU1LjA2aC0uMDZhMi42LDIuNiwwLDAsMS00LjU0LDFBMy4yNSwzLjI1LDAsMCwxLDguMjIsOC40MiwzLjIsMy4yLDAsMCwxLDUuNDgsNi44OWExLjQzLDEuNDMsMCwwLDEtLjI5LDAsMS40OCwxLjQ4LDAsMCwxLS44OS0uMzFBMS42OSwxLjY5LDAsMCwxLDQsNi43NCwxNS44NywxNS44NywwLDAsMSw1LjQ0LDguODJTOC42MSwxMC40MiwxMSw4LjRhMy42OSwzLjY5LDAsMCwwLDUtMS4wNyw2LjU1LDYuNTUsMCwwLDAsMS42NC4zNSwxMi4wNiwxMi4wNiwwLDAsMSwxLjEyLTEuNDJBMi40MywyLjQzLDAsMCwxLDE3LjcsNi41M1pcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLThcXFwiIGQ9XFxcIk0xOS4zNCwxMC41M2MtMS4xNy44NS0xLjQtLjE2LTIuNDYtLjE2LS43NCwwLS44Mi40LTEuODYuODgtLjY0LjMtMS41NS0uNTEtMi4xMi0uNTEtLjc2LDAtMS40OCwxLTIuNDguNDktLjU2LS4zMS0xLS44NC0xLjc1LS44Mi0xLjMsMC0xLjI3LjY0LTIuNDMuNDQtMy0uNS0yLjktMS41OC0yLjktMS41OEwyLjksMTIuMDlIOS4xNWwyLjUzLDEuMiwzLTEuMmgzLjY2cy40My0uMTIuNzMtLjIzYzEuMDYtLjM4LDEuMTktMiwuMy0xLjMzWlxcXCIvPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9mbGFyZS11cC5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNhYjEzMjU7fS5jbHMtMntmaWxsOiNmZjk1MDA7fS5jbHMtM3tmaWxsOiNmZmQ1N2E7fS5jbHMtNHtmaWxsOiNmODM2NDA7fS5jbHMtNXtmaWxsOiNmZjg5ODc7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT41MS3olq/mnaE8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxnIGlkPVxcXCLpobXpnaItMVxcXCI+PHBhdGggaWQ9XFxcIui3r+W+hFxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBkPVxcXCJNMTAuOTEsMEM0Ljg4LDAsMCwzLjI3LDAsOS4wOWMwLDAsMCwuNTUuMDksMS4xLjE5LDAsMTAuODIsOC43MiwxMC44Miw4LjcyczEwLjYyLTguNzMsMTAuODEtOC43MmMwLS4zNi4xLTEsLjEtMS4xQzIxLjgyLDMuMjcsMTYuOTMsMCwxMC45MSwwWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTE5Ljc2LDYuOTJhMSwxLDAsMCwwLS42Ny4xNCwxLjczLDEuNzMsMCwwLDAtLjE1LS44bC4yOC0uODNhMS4wOCwxLjA4LDAsMCwwLS42OS0xLjM3LDEuMDcsMS4wNywwLDAsMC0uNzUsMCwxLjA5LDEuMDksMCwwLDAtMS4yLS44LDEsMSwwLDAsMC0uMjUuMDcsMS4xMSwxLjExLDAsMCwwLS45MS0uOCwxLjA5LDEuMDksMCwwLDAtMS4yMy45NEwxNCw1LjE3YTEuMDcsMS4wNywwLDAsMC0xLS40NCwxLjA4LDEuMDgsMCwwLDAtMSwuNzhMMTIsNWExLjA5LDEuMDksMCwwLDAtMi4xNy4yaDBhMS4wOCwxLjA4LDAsMCwwLS40NC0xbC0uMy0xLjUyYTEuMDksMS4wOSwwLDAsMC0yLjE0LjQzbC41MiwyLjYxTDcuMTcsNi45LDYuMTIsNGExLjA5LDEuMDksMCwwLDAtMiwuNzVMNC44Nyw3YTEuMSwxLjEsMCwwLDAtLjQ3Ljc3TDQuMjIsOS4yNSw0LDcuODJhMS4wOSwxLjA5LDAsMCwwLTIuMTYuMzZMMywxNC45NGgxN2MwLS4wOS44MS02LjgyLjgxLTYuODJhMS4wOCwxLjA4LDAsMCwwLTEtMS4yWlxcXCIvPjxwYXRoIGlkPVxcXCLlvaLnirZcXFwiIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTE3LjgxLDQuMjJsMC0uMTRhMS4xLDEuMSwwLDAsMC0xLjItLjgsMSwxLDAsMCwwLS4yNS4wNywxLjA4LDEuMDgsMCwwLDAtLjY4LDEuMTZsMS40MiwxMC40M2gyLjJaTTE0LjE4LDUuNzRBMS4xLDEuMSwwLDAsMCwxNCw1LjE3YTEuMDcsMS4wNywwLDAsMC0xLS40NCwxLjA4LDEuMDgsMCwwLDAtMSwuNzhBMSwxLDAsMCwwLDEyLDUuOWwuNjQsOXYuMDloMi4xOXYwbC0uNjUtOS4xOFptLTguNTcsMUExLjEyLDEuMTIsMCwwLDAsNC44Nyw3YTEuMSwxLjEsMCwwLDAtLjQ3Ljc3bC0uODQsNy4yMkg1Ljc1bC44Mi03QTEuMSwxLjEsMCwwLDAsNS42MSw2Ljc2Wk05LjA3LDIuN2ExLjA5LDEuMDksMCwxLDAtMi4xNC40Mkw5LjI5LDE0Ljk0aDIuMjNMOS4wNywyLjdaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy00XFxcIiBkPVxcXCJNMTguOTEsMTAuOTFjMCwyLTMuMTgsMy42NC04LDMuNjRzLTgtMS42My04LTMuNjRjMC0uOC0xLjM4LS43My0yLjE4LS43M0guMDljLjA1LjQ2LDEuMzYsMTAuOSwxLjM2LDEwLjlBMi45MSwyLjkxLDAsMCwwLDQuMzYsMjRIMTcuNDVhMi45MSwyLjkxLDAsMCwwLDIuOTEtMi45MWwxLjM2LTEwLjloLS42M0MyMC4yOSwxMC4xOCwxOC45MSwxMC4xMSwxOC45MSwxMC45MVpcXFwiLz48Y2lyY2xlIGlkPVxcXCLmpK3lnIblvaJcXFwiIGNsYXNzPVxcXCJjbHMtNVxcXCIgY3g9XFxcIjEwLjkxXFxcIiBjeT1cXFwiMTguOTFcXFwiIHI9XFxcIjIuOTFcXFwiLz48L2c+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL2ZyZW5jaC1maXJlcy5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZGQ4ODg7fS5jbHMtMntmaWxsOiNmY2FiNDA7fS5jbHMtM3tmaWxsOiNmODM2NDA7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT4zNy3npLzniak8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTIxLjA4LDE5LjI5YTIuNTYsMi41NiwwLDAsMS0yLjU1LDIuNTZINC40N2EyLjU2LDIuNTYsMCwwLDEtMi41NS0yLjU2VjguNDNBMi41NiwyLjU2LDAsMCwxLDQuNDcsNS44OEgxOC41M2EyLjU2LDIuNTYsMCwwLDEsMi41NSwyLjU1WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTIzLDYuNTFhMi41NiwyLjU2LDAsMCwxLTIuNTYsMi41NkgyLjU2QTIuNTYsMi41NiwwLDEsMSwyLjU2LDRIMjAuNDRBMi41NiwyLjU2LDAsMCwxLDIzLDYuNTFaXFxcIi8+PHBvbHlnb24gY2xhc3M9XFxcImNscy0yXFxcIiBwb2ludHM9XFxcIjEuOTIgOS4wNyAyMS4wOCA5LjA3IDIxLjA4IDEwLjM1IDEuOTIgMTAuMzUgMS45MiA5LjA3XFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNMTIuMTQsMS40SDEwLjg2QTEuOTIsMS45MiwwLDAsMCw4Ljk0LDMuMzJWMjEuODVoNS4xMlYzLjMyQTEuOTIsMS45MiwwLDAsMCwxMi4xNCwxLjRaXFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNMTAuMjIsNGMuNzEsMCwuODEtLjMzLjIzLS43M0w2LjE2LjIyQTEuMTUsMS4xNSwwLDAsMCw0LjQ4LjZMMy4xOSwyLjg1QzIuODQsMy40NiwzLjEzLDQsMy44Myw0Wm0yLjU2LDBjLS43MSwwLS44MS0uMzMtLjIzLS43M2w0LjI5LTNBMS4xNSwxLjE1LDAsMCwxLDE4LjUyLjZsMS4yOSwyLjI1Yy4zNS42MS4wNiwxLjExLS42NCwxLjExWlxcXCIvPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9naWZ0LnN2Z1wiLFwiL3N2Z1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6dXJsKCPmnKrlkb3lkI3nmoTmuJDlj5gpO30uY2xzLTJ7ZmlsbDojNjYyZTAwO30uY2xzLTN7ZmlsbDojZmZmO308L3N0eWxlPjxyYWRpYWxHcmFkaWVudCBpZD1cXFwi5pyq5ZG95ZCN55qE5riQ5Y+YXFxcIiBjeD1cXFwiLTI4Mi42M1xcXCIgY3k9XFxcIjQwNS4xXFxcIiByPVxcXCIwLjc3XFxcIiBncmFkaWVudFRyYW5zZm9ybT1cXFwibWF0cml4KDI0LCAwLCAwLCAtMjQsIDY3OTUuMjEsIDk3MzAuMTQpXFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCI+PHN0b3Agb2Zmc2V0PVxcXCIwXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZlNWEzXFxcIi8+PHN0b3Agb2Zmc2V0PVxcXCIxXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZhZDI5XFxcIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHRpdGxlPjI2LemsvOiEuDwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PGcgaWQ9XFxcIumhtemdoi0xXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yNCwxMkExMiwxMiwwLDEsMSwxMiwwLDEyLDEyLDAsMCwxLDI0LDEyXFxcIi8+PGVsbGlwc2UgaWQ9XFxcIuakreWchuW9olxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBjeD1cXFwiOFxcXCIgY3k9XFxcIjlcXFwiIHJ4PVxcXCIxLjY3XFxcIiByeT1cXFwiMi4zM1xcXCIvPjxlbGxpcHNlIGNsYXNzPVxcXCJjbHMtMlxcXCIgY3g9XFxcIjE2XFxcIiBjeT1cXFwiOVxcXCIgcng9XFxcIjEuNjdcXFwiIHJ5PVxcXCIyLjMzXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNMTYuNjcsMTRhMi42NywyLjY3LDAsMCwxLDAsNS4zM0g3LjMzYTIuNjcsMi42NywwLDAsMSwwLTUuMzNaXFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMTYuNjcsMTMuMzNINy4zM2EzLjM0LDMuMzQsMCwwLDAsMCw2LjY3aDkuMzRhMy4zNCwzLjM0LDAsMCwwLDAtNi42N1ptMCwxLjM0YTIsMiwwLDAsMSwyLDEuNjZoLTIuM1YxNC42N1ptLTEsMHYxLjY2aC0yVjE0LjY3Wm0tMi42NywwdjEuNjZIMTFWMTQuNjdabS0yLjY3LDB2MS42NmgtMlYxNC42N1ptLTMsMGguMzR2MS42Nkg1LjM3QTIsMiwwLDAsMSw3LjMzLDE0LjY3Wm0wLDRhMiwyLDAsMCwxLTItMS42N2gyLjN2MS42N1ptMSwwVjE3aDJ2MS42N1ptMi42NywwVjE3aDJ2MS42N1ptMi42NywwVjE3aDJ2MS42N1ptMywwaC0uMzRWMTdoMi4zQTIsMiwwLDAsMSwxNi42NywxOC42N1pcXFwiLz48L2c+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL2dyaW1hY2Uuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp1cmwoI+acquWRveWQjeeahOa4kOWPmCk7fS5jbHMtMntmaWxsOiM2NjJlMDA7fS5jbHMtM3tmaWxsOiNmZmY7fTwvc3R5bGU+PHJhZGlhbEdyYWRpZW50IGlkPVxcXCLmnKrlkb3lkI3nmoTmuJDlj5hcXFwiIGN4PVxcXCItMjA2LjMyXFxcIiBjeT1cXFwiMzcwLjY1XFxcIiByPVxcXCIwLjc3XFxcIiBncmFkaWVudFRyYW5zZm9ybT1cXFwibWF0cml4KDI0LCAwLCAwLCAtMjQsIDQ5NjMuNjksIDg5MDMuMzkpXFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCI+PHN0b3Agb2Zmc2V0PVxcXCIwXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZlNWEzXFxcIi8+PHN0b3Agb2Zmc2V0PVxcXCIxXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZhZDI5XFxcIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHRpdGxlPjEzLeW8gOW/gzwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PGNpcmNsZSBpZD1cXFwi5qSt5ZyG5b2iXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMlxcXCIvPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTEyLDE0YTI3Ljg1LDI3Ljg1LDAsMCwxLTYtLjY3Yy0uNDUtLjA4LTEuMzMsMC0xLjMzLDEuMzQsMCwyLjY2LDMuMDYsNiw3LjMzLDZzNy4zMy0zLjM0LDcuMzMtNmMwLTEuMzQtLjg4LTEuNDItMS4zMy0xLjM0QTI3Ljg1LDI3Ljg1LDAsMCwxLDEyLDE0WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTYsMTQuNjdhMjEuMTMsMjEuMTMsMCwwLDAsNiwuNjYsMjEuMTMsMjEuMTMsMCwwLDAsNi0uNjZzLTEuMzMsMi42Ni02LDIuNjZTNiwxNC42Nyw2LDE0LjY3WlxcXCIvPjxlbGxpcHNlIGNsYXNzPVxcXCJjbHMtMlxcXCIgY3g9XFxcIjhcXFwiIGN5PVxcXCI5XFxcIiByeD1cXFwiMS42N1xcXCIgcnk9XFxcIjIuMzNcXFwiLz48ZWxsaXBzZSBjbGFzcz1cXFwiY2xzLTJcXFwiIGN4PVxcXCIxNlxcXCIgY3k9XFxcIjlcXFwiIHJ4PVxcXCIxLjY3XFxcIiByeT1cXFwiMi4zM1xcXCIvPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9ncmluLnN2Z1wiLFwiL3N2Z1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6dXJsKCPmnKrlkb3lkI3nmoTmuJDlj5gpO30uY2xzLTJ7ZmlsbDojNjYyZTAwO30uY2xzLTN7ZmlsbDojZmZhZDI5O30uY2xzLTR7ZmlsbDojZjgzNTNmO308L3N0eWxlPjxyYWRpYWxHcmFkaWVudCBpZD1cXFwi5pyq5ZG95ZCN55qE5riQ5Y+YXFxcIiBjeD1cXFwiLTE4MC44N1xcXCIgY3k9XFxcIjM2Ny41OFxcXCIgcj1cXFwiMC43N1xcXCIgZ3JhZGllbnRUcmFuc2Zvcm09XFxcIm1hdHJpeCgyNCwgMCwgMCwgLTI0LCA0MzUyLjc5LCA4ODI5LjgyKVxcXCIgZ3JhZGllbnRVbml0cz1cXFwidXNlclNwYWNlT25Vc2VcXFwiPjxzdG9wIG9mZnNldD1cXFwiMFxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmZTVhM1xcXCIvPjxzdG9wIG9mZnNldD1cXFwiMVxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmYWQyOVxcXCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT7niLHlv4M8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxnIGlkPVxcXCLpobXpnaItMVxcXCI+PGcgaWQ9XFxcIuesrOS4gOaOklxcXCI+PGNpcmNsZSBpZD1cXFwi5qSt5ZyG5b2iXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMlxcXCIvPjxwYXRoIGlkPVxcXCLlvaLnirZcXFwiIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTEwLjY3LDExLjMxYS42OS42OSwwLDAsMS0uNjQtLjQ2Yy0uMTMtLjQtLjY3LTEuNTQtMS4zNi0xLjU0UzcuNDEsMTAuNTIsNy4zLDEwLjg1YS42Ni42NiwwLDAsMS0uODQuNDJBLjY3LjY3LDAsMCwxLDYsMTAuNDNDNi4xMiwxMC4xOCw2LjksOCw4LjY3LDhzMi41NSwyLjIxLDIuNjMsMi40NmEuNjYuNjYsMCwwLDEtLjQyLjg0Ljc4Ljc4LDAsMCwxLS4yMSwwWm02LjY2LDBhLjY2LjY2LDAsMCwxLS42My0uNDZjLS4xMy0uNC0uNjgtMS41NC0xLjM3LTEuNTRTMTQuMDcsMTAuNTIsMTQsMTAuODVhLjY3LjY3LDAsMCwxLS44NS40Mi42Ni42NiwwLDAsMS0uNDItLjg0Yy4wOC0uMjUuODctMi40NiwyLjYzLTIuNDZzMi41NSwyLjIxLDIuNjMsMi40NmEuNjYuNjYsMCwwLDEtLjQyLjg0Ljc4Ljc4LDAsMCwxLS4yMSwwWm0uODksMi40OGEuMzUuMzUsMCwwLDAtLjQyLDBBMTAuODIsMTAuODIsMCwwLDEsMTIsMTUuNzFhMTAuODYsMTAuODYsMCwwLDEtNS44LTEuOTQuMzUuMzUsMCwwLDAtLjQyLDAsLjM0LjM0LDAsMCwwLS4wNy40MkE3LjY2LDcuNjYsMCwwLDAsMTIsMTcuNzFhNy42Niw3LjY2LDAsMCwwLDYuMjktMy41LjM0LjM0LDAsMCwwLS4wNy0uNDJaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNMTQuMTUsMi42M2ExLjg0LDEuODQsMCwwLDAsLjA2LjQ3LDYuMzcsNi4zNywwLDAsMCwzLjY0LDQuMTMsNi44NSw2Ljg1LDAsMCwwLDMuMjctM0ExMS44NywxMS44NywwLDAsMCwxNS44My42MywyLDIsMCwwLDAsMTQuMTUsMi42M1ptLTUsMTYuNzZhMi4xNiwyLjE2LDAsMCwwLC4wNi0uNTEsMi4yMSwyLjIxLDAsMCwwLTQtMS4yOCwyLjIsMi4yLDAsMCwwLTMuNzIuMiwxMi4wNiwxMi4wNiwwLDAsMCw1LjM4LDUuMDUsNi4yNyw2LjI3LDAsMCwwLDIuMjktMy40NlptMTMuNzEtMi4zYTEuNTMsMS41MywwLDAsMC0yLjcxLS40NSwxLjUzLDEuNTMsMCwwLDAtMi43OC44OSwyLDIsMCwwLDAsMCwuMzUsNC44MSw0LjgxLDAsMCwwLDIuNjEsM0ExMi4yMiwxMi4yMiwwLDAsMCwyMi44NywxNy4wOVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTRcXFwiIGQ9XFxcIk0yMi40MiwyLjE4QTIsMiwwLDAsMCwxOC43MiwxLDIuMDcsMi4wNywwLDAsMCwxNy4wNi4xNGEyLDIsMCwwLDAtMiwyLDEuNzYsMS43NiwwLDAsMCwuMDYuNDYsNi4zNCw2LjM0LDAsMCwwLDMuNjUsNC4xMyw2LjM1LDYuMzUsMCwwLDAsMy42NC00LjEzQTEuNzYsMS43NiwwLDAsMCwyMi40MiwyLjE4Wk04LjE0LDE4Ljk0YTIuMjEsMi4yMSwwLDAsMC00LTEuMjksMi4yMSwyLjIxLDAsMCwwLTQsMS4yOSwyLjA3LDIuMDcsMCwwLDAsLjA2LjVjLjMsMS45MSwyLjQzLDMuOTIsNCw0LjQ4YTYuOTQsNi45NCwwLDAsMCw0LTQuNDgsMi4wNywyLjA3LDAsMCwwLC4wNi0uNVpNMjQsMTcuNDJhMS41MywxLjUzLDAsMCwwLTIuNzgtLjg5LDEuNTMsMS41MywwLDAsMC0yLjc4Ljg5LDEuMzksMS4zOSwwLDAsMCwwLC4zNSw0Ljc5LDQuNzksMCwwLDAsMi43NCwzLjEsNC44LDQuOCwwLDAsMCwyLjczLTMuMSwxLjQxLDEuNDEsMCwwLDAsMC0uMzVaXFxcIi8+PC9nPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvaGFwcGluZXNzLnN2Z1wiLFwiL3N2Z1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Y4MzY0MDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPjM0LeW/g+eijjwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PHBhdGggaWQ9XFxcIui3r+W+hFxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBkPVxcXCJNOSwxNi4zN2ExLDEsMCwwLDEsMC0xLjA2bDIuOTMtNC40NC00LTMuNDJhMSwxLDAsMCwxLS4yMS0xLjI4TDEwLjYsMS4zOUE2LjU2LDYuNTYsMCwwLDAsMCw2LjU4LDYuNjgsNi42OCwwLDAsMCwuMTgsOC4wN2MuOTEsNS42OCw3LjIyLDExLjY3LDExLjc0LDEzLjMxbC4wNSwwWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTE3LjI3LDBhNi41NCw2LjU0LDAsMCwwLTQuNjksMkw5Ljg4LDYuNDhsNCwzLjQ1YTEsMSwwLDAsMSwuMTgsMS4zMUwxMSwxNS44OGwyLjc4LDQuNjNDMTgsMTguMTUsMjIuODgsMTMsMjMuNjcsOC4wN0E2LjU1LDYuNTUsMCwwLDAsMTcuMjcsMFpcXFwiLz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvaGVhcnRicmVhay5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzY2MmUwMDt9LmNscy0ze2ZpbGw6I2ZmYWMzMzt9LmNscy00e2ZpbGw6I2RhZGZlODt9LmNscy01e2ZpbGw6I2Y4MzY0MDt9LmNscy02e2ZpbGw6I2EzYWNiZjt9LmNscy03e2ZpbGw6IzQ1MmUwNDt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yNzMuMDVcXFwiIGN5PVxcXCIzODAuNTJcXFwiIHI9XFxcIjAuNzdcXFwiIGdyYWRpZW50VHJhbnNmb3JtPVxcXCJtYXRyaXgoMjQsIDAsIDAsIC0yNCwgNjU2NS4yMSwgOTE0MC4zMilcXFwiIGdyYWRpZW50VW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIj48c3RvcCBvZmZzZXQ9XFxcIjBcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmU1YTNcXFwiLz48c3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmFkMjlcXFwiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48dGl0bGU+MjYt5oSf5YaSPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxjaXJjbGUgaWQ9XFxcIuakreWchuW9olxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTJcXFwiLz48ZWxsaXBzZSBjbGFzcz1cXFwiY2xzLTJcXFwiIGN4PVxcXCI4LjMzXFxcIiBjeT1cXFwiMTFcXFwiIHJ4PVxcXCIxLjY3XFxcIiByeT1cXFwiMi4zM1xcXCIvPjxlbGxpcHNlIGNsYXNzPVxcXCJjbHMtMlxcXCIgY3g9XFxcIjE1LjY3XFxcIiBjeT1cXFwiMTFcXFwiIHJ4PVxcXCIxLjY3XFxcIiByeT1cXFwiMi4zM1xcXCIvPjxwYXRoIGlkPVxcXCLlvaLnirZcXFwiIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTE5LjMzLDhhNS45MSw1LjkxLDAsMCwxLTUuMjYtMywuNjYuNjYsMCwwLDEsMS4xOS0uNTksNC42Myw0LjYzLDAsMCwwLDQuMDcsMi4zLjY3LjY3LDAsMSwxLDAsMS4zM1pNNC42Nyw4YS42Ny42NywwLDAsMSwwLTEuMzRjMy4zOSwwLDQtMi4wOCw0LTIuMTdBLjY3LjY3LDAsMCwxLDkuNSw0YS42Ni42NiwwLDAsMSwuNDguOEMxMCw1LDkuMTQsOCw0LjY3LDhaXFxcIi8+PHBhdGggaWQ9XFxcIui3r+W+hFxcXCIgY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNMjQsMTEuMzhsLTIuNjcuNTQtMTAuNzksNyw0Ljc0LjY0LDcuNzktNC44MWExLjU0LDEuNTQsMCwwLDAsLjgtMS4xNkExNS4xNywxNS4xNywwLDAsMCwyNCwxMS4zOFpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xNS42NiwxOS41OXMtLjc3LTEuOTItMy42Ni0xLjkyLTMuNjUsMS44OS0zLjY2LDEuOTJBLjM0LjM0LDAsMCwwLDguNSwyMGEuMzUuMzUsMCwwLDAsLjQsMHMuNjctLjU4LDMuMS0uNTgsMy4wOC41NiwzLjEuNThhLjM1LjM1LDAsMCwwLC4yMy4wOS4zMy4zMywwLDAsMCwuMTcsMEEuMzUuMzUsMCwwLDAsMTUuNjYsMTkuNTlaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy00XFxcIiBkPVxcXCJNMjMuNjUsMTAuNDlhMS42NiwxLjY2LDAsMCwwLTIuMzMtLjM0TDkuODQsMTguNzZhNi4zMiw2LjMyLDAsMCwxLDEuNzUtLjM1Yy4xNywwLDEuNzctLjQyLDEuNzctLjQybC44Ni42OXMuNjEuMjUuOC4zNmw4LjMtNi4yMmExLjY3LDEuNjcsMCwwLDAsLjMzLTIuMzNaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy01XFxcIiBkPVxcXCJNMTkuMTIsMTMuOTFjLS4yOS0uMzktLjUyLS43Ni0uOTItLjQ2bC02LjYxLDVjLjE3LDAsLjMzLDAsLjUyLDBhNi4zOSw2LjM5LDAsMCwxLDIuMTEuM2w1LjA2LTMuNzljLjQtLjMuMTQtLjU4LS4xNi0xWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNlxcXCIgZD1cXFwiTTEyLjQsMTYuODJsLjgyLDEuMDYuNS0uMzktLjgtMS4wNlptMS40OC0xLjExLjgyLDEuMDcuNS0uNC0uOC0xLjA2Wm0xLjQ2LTEuMDguODIsMS4wNy40OS0uNC0uNzktMS4wNlptMS40NS0xLjEuODIsMS4wNi41LS40LS44LTFabTEuNDktMS4xLjgzLDEuMDcuNDktLjRMMTguOCwxMlptMS40My0xLjA4LjgyLDEuMDdMMjEsMTIsMjAuMjMsMTFaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy03XFxcIiBkPVxcXCJNMTUsMTlsLjU0LjM1YTIuNywyLjcsMCwwLDAtLjM1LS40OFpcXFwiLz48L2c+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL2lsbC5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzY2MmUwMDt9LmNscy0ze2ZpbGw6I2ZmZjt9LmNscy00e2ZpbGw6IzRkYjVmZjt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yMzMuMzhcXFwiIGN5PVxcXCI0MDcuN1xcXCIgcj1cXFwiMC43N1xcXCIgZ3JhZGllbnRUcmFuc2Zvcm09XFxcIm1hdHJpeCgyNCwgMCwgMCwgLTI0LCA1NjEzLjA1LCA5NzkyLjY4KVxcXCIgZ3JhZGllbnRVbml0cz1cXFwidXNlclNwYWNlT25Vc2VcXFwiPjxzdG9wIG9mZnNldD1cXFwiMFxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmZTVhM1xcXCIvPjxzdG9wIG9mZnNldD1cXFwiMVxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmYWQyOVxcXCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT4xMS3nrJHlk608L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTI0LDEyQTEyLDEyLDAsMSwxLDEyLDAsMTIsMTIsMCwwLDEsMjQsMTJcXFwiLz48cGF0aCBpZD1cXFwi5b2i54q2XFxcIiBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xOSwxMS44NmMwLS4wOS0xLTIuMTktMy0yLjE5cy0yLjkzLDIuMS0zLDIuMTlhLjM0LjM0LDAsMCwwLC4xLjQuMzMuMzMsMCwwLDAsLjQsMCw0LjQyLDQuNDIsMCwwLDEsMi40Ny0uNiw0LjQsNC40LDAsMCwxLDIuNDcuNi4zNi4zNiwwLDAsMCwuMi4wNi4zMS4zMSwwLDAsMCwuMi0uMDcuMzQuMzQsMCwwLDAsLjEtLjRabS04LDBjMC0uMDktMS0yLjE5LTMtMi4xOXMtMi45MywyLjEtMywyLjE5YS4zNS4zNSwwLDAsMCwuMDkuNC4zNS4zNSwwLDAsMCwuNDEsMEE0LjQyLDQuNDIsMCwwLDEsOCwxMS42N2E0LjQsNC40LDAsMCwxLDIuNDcuNi4zNi4zNiwwLDAsMCwuMi4wNi4zMS4zMSwwLDAsMCwuMi0uMDcuMzQuMzQsMCwwLDAsLjEtLjRabTkuNy0xLjE5YS42Ni42NiwwLDAsMS0uNjItLjQyLDYuMiw2LjIsMCwwLDAtNC4xOC0zLjYuNjYuNjYsMCwwLDEsLjI2LTEuMyw3LjQ3LDcuNDcsMCwwLDEsNS4xNiw0LjQuNjguNjgsMCwwLDEtLjM4Ljg3QS42OS42OSwwLDAsMSwyMC42NywxMC42N1ptLTE3LjM0LDBhLjY5LjY5LDAsMCwxLS4yNC0uMDUuNjguNjgsMCwwLDEtLjM4LS44Nyw3LjUsNy41LDAsMCwxLDUuMTYtNC40LjY2LjY2LDAsMCwxLC43OC41Mi42NS42NSwwLDAsMS0uNTIuNzhBNi4xNyw2LjE3LDAsMCwwLDQsMTAuMjVhLjY2LjY2LDAsMCwxLS42Mi40MlptOC42Nyw0QTI3Ljg1LDI3Ljg1LDAsMCwxLDYsMTRjLS40NS0uMDktMS4zMywwLTEuMzMsMS4zMywwLDIuNjcsMy4wNiw2LDcuMzMsNnM3LjMzLTMuMzMsNy4zMy02YzAtMS4zMy0uODgtMS40Mi0xLjMzLTEuMzNBMjcuODUsMjcuODUsMCwwLDEsMTIsMTQuNjdaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNNiwxNS4zM0EyMC44MywyMC44MywwLDAsMCwxMiwxNmEyMC44MywyMC44MywwLDAsMCw2LS42N1MxNi42NywxOCwxMiwxOCw2LDE1LjMzLDYsMTUuMzNaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy00XFxcIiBkPVxcXCJNNy4yMywxOC44MkEzLjMzLDMuMzMsMCwwLDEsLjc3LDE3LjE4Yy40NS0xLjc5LDQuMjItNS44MSw0Ljg3LTUuNjRTNy42OCwxNyw3LjIzLDE4LjgyWm05LjUzLDBhMy4zMywzLjMzLDAsMSwwLDYuNDYtMS42NGMtLjQ2LTEuNzktNC4yMy01LjgxLTQuODctNS42NFMxNi4zLDE3LDE2Ljc2LDE4LjgyWlxcXCIvPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9qb3kuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp1cmwoI+acquWRveWQjeeahOa4kOWPmCk7fS5jbHMtMntmaWxsOiM2NjJlMDA7fS5jbHMtM3tmaWxsOiNmZmFjMzM7fS5jbHMtNHtmaWxsOiNmODM2NDA7fTwvc3R5bGU+PHJhZGlhbEdyYWRpZW50IGlkPVxcXCLmnKrlkb3lkI3nmoTmuJDlj5hcXFwiIGN4PVxcXCItMjg2LjIzXFxcIiBjeT1cXFwiNDAzLjQxXFxcIiByPVxcXCIwLjc3XFxcIiBncmFkaWVudFRyYW5zZm9ybT1cXFwibWF0cml4KDI0LCAwLCAwLCAtMjQsIDY4ODEuNDUsIDk2ODkuNjUpXFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCI+PHN0b3Agb2Zmc2V0PVxcXCIwXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZlNWEzXFxcIi8+PHN0b3Agb2Zmc2V0PVxcXCIxXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZhZDI5XFxcIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHRpdGxlPjE0LemjnuWQuzwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PGNpcmNsZSBpZD1cXFwi5qSt5ZyG5b2iXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMlxcXCIvPjxlbGxpcHNlIGNsYXNzPVxcXCJjbHMtMlxcXCIgY3g9XFxcIjcuNjdcXFwiIGN5PVxcXCIxMC4zM1xcXCIgcng9XFxcIjEuNjdcXFwiIHJ5PVxcXCIyLjMzXFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMTksMTEuODZjMC0uMDktMS0yLjE5LTMtMi4xOXMtMi45MywyLjEtMywyLjE5YS4zNC4zNCwwLDAsMCwuMS40LjMzLjMzLDAsMCwwLC40LDAsNC40Miw0LjQyLDAsMCwxLDIuNDctLjYsNC40LDQuNCwwLDAsMSwyLjQ3LjYuMzYuMzYsMCwwLDAsLjIuMDYuMzEuMzEsMCwwLDAsLjItLjA3LjM0LjM0LDAsMCwwLC4xLS40Wk00LDcuMzNhLjY2LjY2LDAsMCwxLS40LS4xMy42Ny42NywwLDAsMS0uMTMtLjkzLDcsNywwLDAsMSw1LjItMi45NC42Ny42NywwLDAsMSwwLDEuMzQsNS42LDUuNiwwLDAsMC00LjE0LDIuNEEuNjcuNjcsMCwwLDEsNCw3LjMzWm0xNS4zMywyYS42Ny42NywwLDAsMS0uNTMtLjI2LDUsNSwwLDAsMC00LjY3LTEuNzUuNjYuNjYsMCwwLDEtLjc4LS41MkEuNjcuNjcsMCwwLDEsMTMuODcsNmE2LjI4LDYuMjgsMCwwLDEsNiwyLjI2LjY3LjY3LDAsMCwxLS41NCwxLjA2Wk0xMy4zOSwxOGMuODktLjI4LDEuNzUtLjc3LDEuNzUtMS42NywwLTEuNzQtMy4yOC0yLTMuNjUtMmEuMzMuMzMsMCwwLDAtLjM1LjMxLjM0LjM0LDAsMCwwLC4zMS4zNnMyLjM2LjIsMi4zNiwxLjMzLTIuMzQsMS4zMy0yLjM2LDEuMzRoMGwtLjA5LDBoMGEuMjEuMjEsMCwwLDAtLjA4LjA2bDAsMCwwLC4wN3MwLDAsMCwuMDYsMCwwLDAsLjA1djBzMCwwLDAsMCwwLC4wNSwwLC4wNmwwLC4wNiwwLC4wNS4wNiwwLC4wNSwwLC4wNiwwaDBzMi4zNi4yLDIuMzYsMS4zNFMxMS40NywyMSwxMS40NSwyMWEuMzMuMzMsMCwwLDAtLjMxLjM1LjM0LjM0LDAsMCwwLC4zMy4zMmgwYy4zNywwLDMuNjUtLjI1LDMuNjUtMiwwLS45LS44Ni0xLjQtMS43NS0xLjY3WlxcXCIvPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTIyLjgsMTcuMkEyLjA2LDIuMDYsMCwwLDAsMjEuNzUsMTZhMiwyLDAsMCwwLTEuODYsMCwyLDIsMCwwLDAtMy44NC0uNTUsMS43NiwxLjc2LDAsMCwwLS4xNS40NCw2LjM1LDYuMzUsMCwwLDAsMS40Niw1LjMsNi42MSw2LjYxLDAsMCwwLDMtLjU5QTExLjg4LDExLjg4LDAsMCwwLDIyLjgsMTcuMlpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTRcXFwiIGQ9XFxcIk0yMy43NywxOC4xNUEyLDIsMCwwLDAsMjEsMTUuNDZhMiwyLDAsMCwwLTMuODQtLjU1LDEuNzYsMS43NiwwLDAsMC0uMTUuNDQsNi4zNyw2LjM3LDAsMCwwLDEuNDYsNS4zLDYuMzgsNi4zOCwwLDAsMCw1LjA4LTIuMTFBMi41OSwyLjU5LDAsMCwwLDIzLjc3LDE4LjE1WlxcXCIvPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9raXNzLnN2Z1wiLFwiL3N2Z1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmYWQyOTt9LmNscy0ye2ZpbGw6I2Y4MzY0MDt9LmNscy0ze2ZpbGw6I2ZmODk4Nzt9LmNscy00e2ZpbGw6I2ZmZGNkOTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPjQ5LeajkuajkuezljwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PGcgaWQ9XFxcIumhtemdoi0xXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yMy4xNCwyMy4xNGExLjMxLDEuMzEsMCwwLDEtMS44NSwwTDcuODksOS43NEExLjMxLDEuMzEsMCwxLDEsOS43NCw3Ljg5bDEzLjQsMTMuNEExLjMxLDEuMzEsMCwwLDEsMjMuMTQsMjMuMTRaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMTguMjksOS4xNUE5LjE1LDkuMTUsMCwxLDEsOS4xNSwwLDkuMTQsOS4xNCwwLDAsMSwxOC4yOSw5LjE1WlxcXCIvPjxwYXRoIGlkPVxcXCLlvaLnirZcXFwiIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTExLjM3LDE4YTguMTgsOC4xOCwwLDAsMS03Ljc5LTQuMzRBNi40NSw2LjQ1LDAsMCwxLDYuMjQsNC45NCw1LDUsMCwwLDEsMTMuMDUsN2EzLjksMy45LDAsMCwxLTEuNiw1LjI3LDMsMywwLDAsMS00LTEuMjNBMi4yNSwyLjI1LDAsMCwxLDguMzQsOGExLjY1LDEuNjUsMCwwLDEsMS4yNy0uMTMsMS44OSwxLjg5LDAsMCwxLC40My4yLDEuNiwxLjYsMCwwLDAtMS40NiwwLDEuODQsMS44NCwwLDAsMC0uNzYsMi40OSwyLjE0LDIuMTQsMCwwLDAsMi45Ljg5LDIuNTMsMi41MywwLDAsMCwxLTMuNDEsMywzLDAsMCwwLTQtMS4yMywzLjU5LDMuNTksMCwwLDAtMS40Nyw0LjgzLDQuMzIsNC4zMiwwLDAsMCw1LjgxLDEuNzcsNS4yLDUuMiwwLDAsMCwyLjE0LTdBNi4zMiw2LjMyLDAsMCwwLDUuNjIsMy43OWE3Ljc1LDcuNzUsMCwwLDAtMy4xOSwxMC41LDkuNjYsOS42NiwwLDAsMCwyLjQxLDIuOTMsOS4yLDkuMiwwLDAsMCw0LjMxLDEuMDdBOS4wNiw5LjA2LDAsMCwwLDExLjM3LDE4Wm0tLjg5LTguMzZhLjc2Ljc2LDAsMCwwLC4yNi0uMjQsMS4yNCwxLjI0LDAsMCwxLS42NC45MkEuODQuODQsMCwwLDEsOSwxMGEuNTQuNTQsMCwwLDEsLjIyLS43M2wuMTQsMGEuMjkuMjksMCwwLDEsLjI3LjE2QS42Ni42NiwwLDAsMCwxMC40OCw5LjY1WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNFxcXCIgZD1cXFwiTTE2LjEsNS40M0ExMC4wOSwxMC4wOSwwLDAsMCw4LjI2LjE0TDcuODMuMUE5LjExLDkuMTEsMCwwLDAsMS45MiwzLjU2YTguMDYsOC4wNiwwLDAsMSw2LjE4LTJBOC42MSw4LjYxLDAsMCwxLDE0Ljc3LDZhNS45Miw1LjkyLDAsMCwxLTIuOTUsNy44MSw0LjU3LDQuNTcsMCwwLDEtNi4wNS0yLjI5QTMuNTIsMy41MiwwLDAsMSw3LjUyLDYuOWEyLjY5LDIuNjksMCwwLDEsMy41MywxLjMzLDIsMiwwLDAsMS0uNTUsMi4zNSwxLjg4LDEuODgsMCwwLDAsLjQtLjYzLDEuODQsMS44NCwwLDAsMCwwLTEuNDJBMi4xNiwyLjE2LDAsMCwwLDkuNjcsNy40MmEyLjEyLDIuMTIsMCwwLDAtMS42MiwwLDIuNDcsMi40NywwLDAsMC0xLjI0LDMuMjcsMi45MywyLjkzLDAsMCwwLDEuNjIsMS41MywzLDMsMCwwLDAsMi4yMy0uMDcsMy40NiwzLjQ2LDAsMCwwLDEuNzItNC41N0E0LjEzLDQuMTMsMCwwLDAsNi45Miw1LjU3YTUsNSwwLDAsMC0yLjQ5LDYuNThBNiw2LDAsMCwwLDcuOCwxNS4zMmE2LjEzLDYuMTMsMCwwLDAsMi4xNC4zOSw2LDYsMCwwLDAsMi40OC0uNTRBNy4zNyw3LjM3LDAsMCwwLDE2LjEsNS40M1ptLTYuNTcsNGEuNDEuNDEsMCwwLDEtLjIuMjEuNzMuNzMsMCwwLDAsMCwxLjM0LDEuNDQsMS40NCwwLDAsMS0uNC0uMDksMS40LDEuNCwwLDAsMS0uOC0uNzUsMSwxLDAsMCwxLDAtLjc3LDEsMSwwLDAsMSwuNTMtLjU2LjY2LjY2LDAsMCwxLC4yNy0uMDYuNTkuNTksMCwwLDEsLjIzLDAsLjY3LjY3LDAsMCwxLC4zNy4zNS4zNi4zNiwwLDAsMSwwLC4yOVpcXFwiLz48L2c+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL2xvbGxpcG9wLnN2Z1wiLFwiL3N2Z1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2YzZDJhMjt9LmNscy0ye2ZpbGw6I2QyYTA3Nzt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPueIseS9oDwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PHBhdGggaWQ9XFxcIui3r+W+hFxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBkPVxcXCJNMTEuOSwyMy4wOGE3LjU5LDcuNTksMCwwLDAsMy43Ni00YzEuMTItMi40NCw1LjA2LTMuNDQsNi00LjE0LDEuMzYtMSwuMTItMi45MS0xLjktMi41OS0yLjE4LjM1LTIuNzEsMS4yOS00LDEuODctLjY3LjI5LTEuMTQuMi0xLjIzLTEtLjA3LS45LDEuMS04LDEuNDYtMTEuMzFDMTYuMTIuNzgsMTUuNjUuMTQsMTQuNzUsMFMxMy4yLjQ0LDEzLDEuNDdDMTIuNDQsNCwxMS41OCw5LDExLjIyLDkuMzFjLTEuOTMsMS4yMS00LjUsMi44LTYuOC0uMjgsMCwwLTEuMS01Ljc3LTEuMjctNi45NGExLjQyLDEuNDIsMCwxLDAtMi44LjQ1Yy4yMSwyLC44Niw2LjY2LjI5LDguMzItLjUsMS40Ni0xLjM4LDYuNDcuNTYsOS41MlM4LjI0LDI0LjY1LDExLjksMjMuMDhaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNNSwxNUM1LjYsMTcuNzUsOSwxNy40NCw4LjczLDE0LjhjLS4xNy0yLjE1LS44Mi01LjktMS02LjgzLS40My0xLjkyLTMuNzctMS41LTMuNS43Ny4xOCwxLjQ3LjM3LDQuMDguODIsNi4yNFpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk01LjY0LDE0LjdjLjUzLDIuMywzLDEuNjYsMi44My0uNDlzLS42Mi01LjQzLS43OC02LjM4Yy0uMzUtMi4yMS0zLjItMS4yMi0zLC40MnMuNTIsNC43My45Miw2LjQ1WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTcuNjIsMTUuNThjMCwzLjMsMy43MiwzLjEyLDQsLjY1YTU5LjY0LDU5LjY0LDAsMCwwLS4zMi03LjgxYy0uMDgtMS43OS0zLjM0LTEuOC0zLjQ1LjIzLS4wOSwxLjY1LS4yNyw1LjE4LS4yNCw2LjkzWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTguMjQsMTUuNjhhMS40NSwxLjQ1LDAsMSwwLDIuODguMTRjLjItMi4xNC4xNS02LjczLjE0LTcuNjksMC0xLjY3LTIuODMtMS42MS0yLjkuNDQtLjA3LDEuNjUsMCw1LjM1LS4xMiw3LjExWlxcXCIvPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9sb3ZlLXlvdS5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzY2MmUwMDt9LmNscy0ze2ZpbGw6I2Y4MzY0MDt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yMzkuMDdcXFwiIGN5PVxcXCIzNjUuODVcXFwiIHI9XFxcIjAuNzdcXFwiIGdyYWRpZW50VHJhbnNmb3JtPVxcXCJtYXRyaXgoMjQsIDAsIDAsIC0yNCwgNTc0OS43NiwgODc4OC4xOSlcXFwiIGdyYWRpZW50VW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIj48c3RvcCBvZmZzZXQ9XFxcIjBcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmU1YTNcXFwiLz48c3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmFkMjlcXFwiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48dGl0bGU+6ImyPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxnIGlkPVxcXCLnrKzkuIDmjpJcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTI0LDEyQTEyLDEyLDAsMSwxLDEyLDAsMTIsMTIsMCwwLDEsMjQsMTJcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xMiwxNC41N0EyMi43NCwyMi43NCwwLDAsMSw3LjA5LDE0QzYuNzIsMTQsNiwxNCw2LDE1LjExLDYsMTcuMyw4LjUsMjAsMTIsMjBzNi0yLjcyLDYtNC45MUMxOCwxNCwxNy4yOCwxNCwxNi45MSwxNGEyMi43NCwyMi43NCwwLDAsMS00LjkxLjU1XFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNMTEuMSwyLjE5YTMuMTEsMy4xMSwwLDAsMC01LjkyLjE3QTMuMTEsMy4xMSwwLDAsMCwuNDYsNS45NGEzLDMsMCwwLDAsLjMyLjY0QzIuMDgsOSw1LjgzLDEwLjY1LDguMTEsMTAuNjdjMS43Ni0xLjQ1LDMuNjMtNS4xMSwzLjE1LTcuNzlBMy40NCwzLjQ0LDAsMCwwLDExLjEsMi4xOVptMS44LDBhMy4xMSwzLjExLDAsMCwxLDUuOTIuMTcsMy4xMSwzLjExLDAsMCwxLDQuNzIsMy41OCwzLDMsMCwwLDEtLjMyLjY0Yy0xLjMsMi4zOS01LDQuMDctNy4zMyw0LjA5LTEuNzYtMS40NS0zLjYzLTUuMTEtMy4xNC03Ljc5QTIuODUsMi44NSwwLDAsMSwxMi45LDIuMTlaXFxcIi8+PC9nPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvbG92ZS5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzY2MmUwMDt9LmNscy0ze2ZpbGw6I2NjZDZkZDt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yMzkuMDhcXFwiIGN5PVxcXCIzNjUuODVcXFwiIHI9XFxcIjAuNzdcXFwiIGdyYWRpZW50VHJhbnNmb3JtPVxcXCJtYXRyaXgoMjQsIDAsIDAsIC0yNCwgNTc1MCwgODc4OC4xOSlcXFwiIGdyYWRpZW50VW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIj48c3RvcCBvZmZzZXQ9XFxcIjBcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmU1YTNcXFwiLz48c3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmFkMjlcXFwiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48dGl0bGU+5oqT54uCPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTI0LDEyQTEyLDEyLDAsMSwxLDEyLDAsMTIsMTIsMCwwLDEsMjQsMTJcXFwiLz48cGF0aCBpZD1cXFwi5b2i54q2XFxcIiBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xMiwxNC4zM0E2LjcyLDYuNzIsMCwwLDAsNSwyMGEuMzQuMzQsMCwwLDAsLjEyLjMuMzMuMzMsMCwwLDAsLjIxLjA3aC4xMUEyNi41NSwyNi41NSwwLDAsMSwxMiwxOWExNi44NiwxNi44NiwwLDAsMSw2LjUyLDEuM0EuMzQuMzQsMCwwLDAsMTksMjAsNi43Miw2LjcyLDAsMCwwLDEyLDE0LjMzWm03LjMzLTcuNjZhNS45MSw1LjkxLDAsMCwxLTUuMjYtMywuNjYuNjYsMCwwLDEsLjMtLjg5LjY1LjY1LDAsMCwxLC44OS4yOSw0LjYxLDQuNjEsMCwwLDAsNC4wNywyLjMuNjcuNjcsMCwwLDEsMCwxLjM0Wm0tMTQuNjYsMGEuNjcuNjcsMCwwLDEsMC0xLjM0YzMuMzksMCw0LTIuMDgsNC0yLjE3QS42Ny42NywwLDAsMSwxMCwzLjVDMTAsMy42Miw5LjE0LDYuNjcsNC42Nyw2LjY3WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTEyLDE1LjMzYTUuODEsNS44MSwwLDAsMSw0LDEuMzRIOEE1LjgxLDUuODEsMCwwLDEsMTIsMTUuMzNaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNNCwxMi42N2EuNjguNjgsMCwwLDEtLjUzLS4yNy42Ny42NywwLDAsMSwuMTMtLjkzLDEyLjE4LDEyLjE4LDAsMCwxLDQuNTctMiw4Ljg0LDguODQsMCwwLDAtMy41LS44NC42Ny42NywwLDAsMSwwLTEuMzQsOS4wOCw5LjA4LDAsMCwxLDUuOCwyLjIuNjguNjgsMCwwLDEsLjE1LjczLjY5LjY5LDAsMCwxLS42Mi40MSwxMC40NCwxMC40NCwwLDAsMC01LjYsMS44NkEuNjcuNjcsMCwwLDEsNCwxMi42N1ptMTYsMGEuNjcuNjcsMCwwLDEtLjQtLjE0QTEwLjUzLDEwLjUzLDAsMCwwLDE0LDEwLjY3YS42OS42OSwwLDAsMS0uNjItLjQxLjY4LjY4LDAsMCwxLC4xNS0uNzMsOS4wOCw5LjA4LDAsMCwxLDUuOC0yLjIuNjcuNjcsMCwwLDEsMCwxLjM0LDguODQsOC44NCwwLDAsMC0zLjUuODQsMTIuMTgsMTIuMTgsMCwwLDEsNC41NywyLC42Ny42NywwLDAsMSwuMTMuOTNBLjY4LjY4LDAsMCwxLDIwLDEyLjY3WlxcXCIvPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvbWFkLnN2Z1wiLFwiL3N2Z1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6dXJsKCPmnKrlkb3lkI3nmoTmuJDlj5gpO30uY2xzLTJ7ZmlsbDojNjYyZTAwO30uY2xzLTN7ZmlsbDojNTZhMzJjO30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPjxyYWRpYWxHcmFkaWVudCBpZD1cXFwi5pyq5ZG95ZCN55qE5riQ5Y+YXFxcIiBjeD1cXFwiLTIzOS4wOFxcXCIgY3k9XFxcIjM2NS44NVxcXCIgcj1cXFwiMC43N1xcXCIgZ3JhZGllbnRUcmFuc2Zvcm09XFxcIm1hdHJpeCgyNCwgMCwgMCwgLTI0LCA1NzUwLCA4Nzg4LjE5KVxcXCIgZ3JhZGllbnRVbml0cz1cXFwidXNlclNwYWNlT25Vc2VcXFwiPjxzdG9wIG9mZnNldD1cXFwiMFxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmZTVhM1xcXCIvPjxzdG9wIG9mZnNldD1cXFwiMVxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmYWQyOVxcXCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT4yOS3otKLov7c8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxnIGlkPVxcXCLpobXpnaItMVxcXCI+PHBhdGggaWQ9XFxcIui3r+W+hFxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBkPVxcXCJNMjQsMTJBMTIsMTIsMCwxLDEsMTIsMCwxMiwxMiwwLDAsMSwyNCwxMlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTQuNjcsMTQuMThjMCwyLjY0LDMuMDYsNiw3LjMzLDZzNy4zMy0zLjM0LDcuMzMtNkEzMy40MywzMy40MywwLDAsMSw0LjY3LDE0LjE4WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTgsMTUuMzRWMjBhMy44NCwzLjg0LDAsMCwwLDQsNCwzLjg0LDMuODQsMCwwLDAsNC00VjE1LjM2YTIxLDIxLDAsMCwxLTgsMFpcXFwiLz48cGF0aCBpZD1cXFwi5b2i54q2XFxcIiBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk04LjE5LDguMjJjLS41LS4xOS0xLS4zOC0xLS42NSwwLS40My41OS0uNDYuNzEtLjQ2YTEuMTcsMS4xNywwLDAsMSwuOC4zLjg0Ljg0LDAsMCwwLC40OS4yMS41LjUsMCwwLDAsLjU1LS41MWMwLS40OS0uNi0uODQtMS4yNC0xVjUuODdhLjYzLjYzLDAsMSwwLTEuMjUsMHYuMjhBMS41NCwxLjU0LDAsMCwwLDYsNy42NGMwLC44Ny44NiwxLjIzLDEuNjIsMS41NS41NC4yMywxLjA2LjQ0LDEuMDYuNzdzLS4zMS41MS0uOC41MWExLjY5LDEuNjksMCwwLDEtMS0uMzcuOTQuOTQsMCwwLDAtLjU0LS4yNC41Mi41MiwwLDAsMC0uNTEuNTVjMCwuNDUuNjIuOSwxLjQ0LDEuMDZ2LjMxYS42My42MywwLDEsMCwxLjI1LDB2LS4zM0ExLjY0LDEuNjQsMCwwLDAsOS44OSw5LjgxYzAtLjkzLS45NC0xLjMtMS43LTEuNTlabTkuNjEsMS42YzAtLjkzLS45NS0xLjMtMS43MS0xLjU5LS41LS4xOS0xLS4zOC0xLS42NCwwLS40NC41OS0uNDcuNzEtLjQ3YTEuMTcsMS4xNywwLDAsMSwuODEuMy44MS44MSwwLDAsMCwuNDkuMjEuNS41LDAsMCwwLC41NC0uNTFjMC0uNDktLjYtLjgzLTEuMjQtMVY1Ljg4YS42My42MywwLDEsMC0xLjI1LDB2LjI4YTEuNTYsMS41NiwwLDAsMC0xLjIzLDEuNDljMCwuODguODYsMS4yNCwxLjYyLDEuNTUuNTUuMjMsMS4wNi40NCwxLjA2Ljc4cy0uMy41LS44LjVhMS43MSwxLjcxLDAsMCwxLTEtLjM3LDEsMSwwLDAsMC0uNTMtLjI0LjUzLjUzLDAsMCwwLS41Mi41NWMwLC40NS42My45LDEuNDQsMS4wNnYuMzJhLjYzLjYzLDAsMCwwLDEuMjUsMHYtLjM0QTEuNjQsMS42NCwwLDAsMCwxNy44LDkuODJaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy00XFxcIiBkPVxcXCJNMTQsMjAuNzFjMC0uOTEtLjkyLTEuMjYtMS42Ni0xLjU1LS40OS0uMTktMS0uMzctMS0uNjMsMC0uNDMuNTctLjQ1LjY5LS40NWExLjEzLDEuMTMsMCwwLDEsLjc4LjI5LjgxLjgxLDAsMCwwLC40OC4yMS41LjUsMCwwLDAsLjUzLS41YzAtLjQ4LS41OC0uODItMS4yMS0xdi0uMjVhLjYxLjYxLDAsMCwwLS42MS0uNjEuNjEuNjEsMCwwLDAtLjYxLjYxdi4yN2ExLjUzLDEuNTMsMCwwLDAtMS4yLDEuNDZjMCwuODUuODQsMS4yLDEuNTgsMS41MS41NC4yMiwxLC40MywxLC43NXMtLjMuNS0uNzguNUExLjY1LDEuNjUsMCwwLDEsMTEsMjFhLjk0Ljk0LDAsMCwwLS41Mi0uMjMuNTEuNTEsMCwwLDAtLjUuNTNjMCwuNDUuNi44OCwxLjQsMXYuMzFhLjYxLjYxLDAsMCwwLC42MS42LjYuNiwwLDAsMCwuNjEtLjZ2LS4zM0ExLjYsMS42LDAsMCwwLDE0LDIwLjcxWlxcXCIvPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvbWlzZXIuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZDJhMDc3O30uY2xzLTJ7ZmlsbDojZjNkMmEyO308L3N0eWxlPjwvZGVmcz48dGl0bGU+NDYtT0s8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTEyLjc0LDEzLjkyLDExLjU5LDkuMzUsOSwzLjQ3YTEuNjgsMS42OCwwLDEsMSwzLjEzLTEuMjFsNC4xNCwxMC41MVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xOC4zLDEyLjI2QTMyLjQyLDMyLjQyLDAsMCwwLDE3LDcuOTJsLTMuODYtN2ExLjY4LDEuNjgsMCwwLDAtMywxLjUyTDEzLjY4LDguOGwuOTQsMy42NmMtLjcyLS42Ni0xLjc0LTEuNTctMi42OC0yLjQxQTIxLjEzLDIxLjEzLDAsMCwwLDguNjUsNy41MWExLjIyLDEuMjIsMCwwLDAtMS40MiwwTDMuMzEsOS4xOGEuNzguNzgsMCwwLDAtLjI2LjIyTDEuNTEsMTEuNDZhMS42OCwxLjY4LDAsMCwwLDIuNTcsMi4xNXMxLjE5LTEuNywxLjI5LTEuNzZhOC4yMSw4LjIxLDAsMCwxLDIuNTQtLjk0Yy42LDAsNC4xOSw0LDQuMTksNGEuNTMuNTMsMCwwLDEsMCwuNkwxMC4yLDE5YS42My42MywwLDAsMS0uMjIuMjFsLTEuNzksMWEuNTMuNTMsMCwwLDEtLjMzLDBMNC4zNSwxOC43QS43OC43OCwwLDAsMSw0LDE4LjMxYTguMDcsOC4wNywwLDAsMS0uNi0yLjQzQTEuNjgsMS42OCwwLDAsMCwwLDE2YTkuMzUsOS4zNSwwLDAsMCwzLjE1LDYuMTksNy44NSw3Ljg1LDAsMCwwLDYuNDQsMS41OWMzLjA3LS40MSw1LS44Miw3LjY3LTYuMzdhMTAuNjksMTAuNjksMCwwLDAsMS01LjE5WlxcXCIvPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9vay5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzY2MmUwMDt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yMzkuMDhcXFwiIGN5PVxcXCIzNjUuODVcXFwiIHI9XFxcIjAuNzdcXFwiIGdyYWRpZW50VHJhbnNmb3JtPVxcXCJtYXRyaXgoMjQsIDAsIDAsIC0yNCwgNTc1MCwgODc4OC4xOSlcXFwiIGdyYWRpZW50VW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIj48c3RvcCBvZmZzZXQ9XFxcIjBcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmU1YTNcXFwiLz48c3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmFkMjlcXFwiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48dGl0bGU+Mjct5b+n5LykPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxjaXJjbGUgaWQ9XFxcIuakreWchuW9olxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTJcXFwiLz48cGF0aCBpZD1cXFwi5b2i54q2XFxcIiBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xNS42NiwxOS4yNUEzLjkzLDMuOTMsMCwwLDAsMTIsMTYuMzNhMy45MywzLjkzLDAsMCwwLTMuNjYsMi45Mi4zNS4zNSwwLDAsMCwuMTYuMzcuMzcuMzcsMCwwLDAsLjQsMFM5LjU3LDE5LDEyLDE5czMuMDguNTUsMy4xLjU4YS4zNS4zNSwwLDAsMCwuMjMuMDkuMzUuMzUsMCwwLDAsLjMzLS40MlpNNy40OCwxMC4zNGEyLjcyLDIuNzIsMCwwLDAtLjYzLjA4Yy0xLjkxLjQ3LTIuMzQsMi43NS0yLjM2LDIuODRhLjM0LjM0LDAsMCwwLC4xOS4zNi4zNS4zNSwwLDAsMCwuMTQsMCwuMzQuMzQsMCwwLDAsLjI2LS4xMiw0LjQ4LDQuNDgsMCwwLDEsMi4yNS0xLjE3LDUuNjksNS42OSwwLDAsMSwxLjM4LS4xOCwzLjM2LDMuMzYsMCwwLDEsMS4xNi4xNy4zMi4zMiwwLDAsMCwuMTQsMCwuMzQuMzQsMCwwLDAsLjM0LS4zMy4zNS4zNSwwLDAsMC0uMTQtLjI3LDMuODksMy44OSwwLDAsMC0yLjczLTEuNDRabTksMGEyLjcyLDIuNzIsMCwwLDEsLjYzLjA4YzEuOTEuNDcsMi4zNCwyLjc1LDIuMzYsMi44NGEuMzQuMzQsMCwwLDEtLjE5LjM2LjM1LjM1LDAsMCwxLS4xNCwwLC4zNC4zNCwwLDAsMS0uMjYtLjEyLDQuNDgsNC40OCwwLDAsMC0yLjI1LTEuMTcsNS42OSw1LjY5LDAsMCwwLTEuMzgtLjE4LDMuMzYsMy4zNiwwLDAsMC0xLjE2LjE3LjMyLjMyLDAsMCwxLS4xNCwwLC4zNC4zNCwwLDAsMS0uMzQtLjMzLjM1LjM1LDAsMCwxLC4xNC0uMjcsMy44OSwzLjg5LDAsMCwxLDIuNzMtMS40NFpcXFwiLz48L2c+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL3BlbnNpdmUuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZkY2Q5O30uY2xzLTJ7ZmlsbDojZmY4OTg3O30uY2xzLTN7ZmlsbDojODUwODFjO30uY2xzLTR7ZmlsbDojNWUwNTE1O308L3N0eWxlPjwvZGVmcz48dGl0bGU+Mzkt54yq5aS0PC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yMi44LDguMWE0LjMzLDQuMzMsMCwwLDAsLjY3LS44NWMxLjEzLTEuOTEuMTgtNi44Ny0uMzktNy4ycy0zLjY5LjctNS41LDIuMDhBMTAuODcsMTAuODcsMCwwLDAsMTIsLjU1LDEwLjg4LDEwLjg4LDAsMCwwLDYuNDMsMi4xMkM0LjYyLjc0LDEuNDEtLjIzLDEsLjA1Uy0uNTcsNS4zNC41NSw3LjI1YTQuMTYsNC4xNiwwLDAsMCwuNjYuODNBMTMuMjUsMTMuMjUsMCwwLDAsMCwxMy41M2MwLDYuNjYsNS4zNCw4LjM1LDEyLDguMzVzMTItMS42OSwxMi04LjM1QTEzLjM1LDEzLjM1LDAsMCwwLDIyLjgsOC4xWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTQuOTMsMy4xOUMzLjQ5LDIuMzUsMiwxLjgsMS43MywyUzEsNS4yOSwxLjUsNy40N0ExMy41MiwxMy41MiwwLDAsMSw0LjkzLDMuMTlaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMjIuNSw3LjQ3Yy40OS0yLjE4LjE1LTUuMjktLjIzLTUuNTFzLTEuNzYuMzgtMy4yLDEuMjNBMTMuNTIsMTMuNTIsMCwwLDEsMjIuNSw3LjQ3WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTE4LjY3LDE0LjYzYzAsMy0yLjA3LDYuMjUtNi42Nyw2LjI1cy02LjY3LTMuMjYtNi42Ny02LjI1UzcuNCwxMC44OCwxMiwxMC44OCwxOC42NywxMS42NCwxOC42NywxNC42M1pcXFwiLz48cGF0aCBpZD1cXFwi5b2i54q2XFxcIiBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk0xMCwxNS42MWMwLDEuMjQtLjIzLDEuNi0xLDEuNnMtMS0uMzYtMS0xLjZTOC4yMywxNCw5LDE0LDEwLDE0LjM4LDEwLDE1LjYxWm02LDBjMCwxLjI0LS4yMywxLjYtMSwxLjZzLTEtLjM2LTEtMS42LjIzLTEuNiwxLTEuNlMxNiwxNC4zOCwxNiwxNS42MVpcXFwiLz48Y2lyY2xlIGlkPVxcXCLmpK3lnIblvaJcXFwiIGNsYXNzPVxcXCJjbHMtNFxcXCIgY3g9XFxcIjQuNjdcXFwiIGN5PVxcXCIxMC41NVxcXCIgcj1cXFwiMS4zM1xcXCIvPjxjaXJjbGUgY2xhc3M9XFxcImNscy00XFxcIiBjeD1cXFwiMTkuMzNcXFwiIGN5PVxcXCIxMC41NVxcXCIgcj1cXFwiMS4zM1xcXCIvPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9waWcuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojYmY2OTUyO30uY2xzLTJ7ZmlsbDojZjVmOGZhO30uY2xzLTN7ZmlsbDojMjcyNzI3O30uY2xzLTR7ZmlsbDojNWUwNTE1O30uY2xzLTV7ZmlsbDojZjJhYmJhO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MzUt5L6/5L6/PC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yMi4zNiwxNS40NmE1LjQxLDUuNDEsMCwwLDAtMi40OS01LjgxLDMuNywzLjcsMCwwLDAtLjIxLTIuNSw0LjE2LDQuMTYsMCwwLDAtMy4xNC0yLjM3LDIsMiwwLDAsMCwwLTEuNDVjLS42Ny0yLTMuMzMtLjY2LTUuMzMtMy4zM0EzLjgsMy44LDAsMCwwLDkuMjksMy42NmExNC42MiwxNC42MiwwLDAsMC0yLjUzLjYyaDBhMi40OCwyLjQ4LDAsMCwwLTEuNTUsMi4zLDIuNDUsMi40NSwwLDAsMCwuNTUsMS41NGwtLjQ2LjE3aDBhMy45NCwzLjk0LDAsMCwwLTIuNjUsMy42MywzLjY0LDMuNjQsMCwwLDAsLjU1LDEuOTJBNS4zLDUuMywwLDAsMCwwLDE4LjY3LDUuNDIsNS40MiwwLDAsMCw1LjUsMjRhMjEsMjEsMCwwLDAsNi4zNS0xLjExQTE3LjkzLDE3LjkzLDAsMCwwLDE5LjExLDI0YTQuODksNC44OSwwLDAsMCwzLjI1LTguNTRaXFxcIi8+PGVsbGlwc2UgaWQ9XFxcIuakreWchuW9olxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBjeD1cXFwiOVxcXCIgY3k9XFxcIjEwLjMzXFxcIiByeD1cXFwiMi4zM1xcXCIgcnk9XFxcIjNcXFwiLz48ZWxsaXBzZSBjbGFzcz1cXFwiY2xzLTJcXFwiIGN4PVxcXCIxNS42N1xcXCIgY3k9XFxcIjEwLjMzXFxcIiByeD1cXFwiMi4zM1xcXCIgcnk9XFxcIjNcXFwiLz48ZWxsaXBzZSBjbGFzcz1cXFwiY2xzLTNcXFwiIGN4PVxcXCI5LjMzXFxcIiBjeT1cXFwiMTAuMzNcXFwiIHJ4PVxcXCIxLjMzXFxcIiByeT1cXFwiMS42N1xcXCIvPjxlbGxpcHNlIGNsYXNzPVxcXCJjbHMtM1xcXCIgY3g9XFxcIjE1LjMzXFxcIiBjeT1cXFwiMTAuMzNcXFwiIHJ4PVxcXCIxLjMzXFxcIiByeT1cXFwiMS42N1xcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNFxcXCIgZD1cXFwiTTYuMywxNi42YS4zOC4zOCwwLDAsMSwuMzctLjZoMTJhLjM4LjM4LDAsMCwxLC4zNy42QTcuMDYsNy4wNiwwLDAsMSwxMi42NywyMCw3LDcsMCwwLDEsNi4zLDE2LjZaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy01XFxcIiBkPVxcXCJNMTIuNjcsMTcuMzNhNS42Niw1LjY2LDAsMCwwLTQuMiwxLjUxQTcuNzEsNy43MSwwLDAsMCwxMi42NywyMGE3LjY1LDcuNjUsMCwwLDAsNC4xOS0xLjE2QTUuNjUsNS42NSwwLDAsMCwxMi42NywxNy4zM1pcXFwiLz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvcG9vcC5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNkYWRmZTg7fS5jbHMtMntmaWxsOiNmODM2NDA7fS5jbHMtM3tmaWxsOiM5OWFhYjU7b3BhY2l0eTowLjY7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNmZmQ1N2E7fS5jbHMtNXtmaWxsOiNmZmFjMzM7fS5jbHMtNntmaWxsOiNmZmFkMjk7fS5jbHMtN3tmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT41Mi3niIbnsbPoirE8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxnIGlkPVxcXCLpobXpnaItMVxcXCI+PHBhdGggaWQ9XFxcIui3r+W+hFxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBkPVxcXCJNMjAuOTIsNy4wNkgyLjEyYTIuMTIsMi4xMiwwLDEsMCwwLDQuMjMsMi4yMiwyLjIyLDAsMCwwLC4zNywwdjBsLjQ1LDkuODlBMywzLDAsMCwwLDUuODgsMjRoMTEuM2EzLDMsMCwwLDAsMi45NS0yLjgybC40NS05Ljg5djBhMiwyLDAsMCwwLC4zNSwwLDIuMTIsMi4xMiwwLDEsMCwwLTQuMjNaXFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMTkuMDYsMTEuMjl2MTJhMi45MiwyLjkyLDAsMCwwLDEuMDUtMi4xMWwuNDgtOS44OVptLTQuMjQsMGgyLjEyVjI0SDE0LjgyWk0xMC41OSwyNFYxMS4yOWgyLjEyVjI0Wk02LjM1LDExLjI5SDguNDdWMjRINi4zNVptLTMuODksMCwuNDgsOS44OWEzLDMsMCwwLDAsMS4zLDIuM1YxMS4yOVpcXFwiLz48cG9seWdvbiBjbGFzcz1cXFwiY2xzLTNcXFwiIHBvaW50cz1cXFwiMi40NiAxMS4yOSAyLjUzIDEyLjcxIDIwLjUyIDEyLjcxIDIwLjU5IDExLjI5IDIuNDYgMTEuMjlcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTRcXFwiIGQ9XFxcIk0yMC42NSw3LjExYTEuMzcsMS4zNywwLDAsMCwuMDUtLjQsMS43OSwxLjc5LDAsMCwwLS40OS0xLjIzLDEsMSwwLDAsMCwuNDktLjg5LDEsMSwwLDAsMC0xLjQ1LTEsMS4wNiwxLjA2LDAsMCwwLS43NC0uNzUsMSwxLDAsMCwwLC4wOC0uMzksMS4wNywxLjA3LDAsMCwwLTEuMDYtMS4wNiwxLDEsMCwwLDAtLjM4LjA4LDEuNzYsMS43NiwwLDAsMC0zLjUuMjcsMS42NywxLjY3LDAsMCwwLDAsLjM5LDEuNzUsMS43NSwwLDAsMC0xLjEuNjgsMS43NywxLjc3LDAsMCwwLTMuMTgsMWgwYTEuNzIsMS43MiwwLDAsMC0uNzQtLjMzLDEuNzYsMS43NiwwLDAsMC0zLjQ2LDAsMi41OCwyLjU4LDAsMCwwLS4zOSwwQTIuNDgsMi40OCwwLDAsMCwyLjM1LDYsMi41OSwyLjU5LDAsMCwwLDIuNiw3LjA3YTEuMDYsMS4wNiwwLDAsMCwuMSwyLjExSDIwLjM1YTEuMDYsMS4wNiwwLDAsMCwuMy0yLjA3WlxcXCIvPjxnIGlkPVxcXCLnvJbnu4RcXFwiPjxjaXJjbGUgaWQ9XFxcIuakreWchuW9olxcXCIgY2xhc3M9XFxcImNscy01XFxcIiBjeD1cXFwiMTguNTlcXFwiIGN5PVxcXCI0Ljk0XFxcIiByPVxcXCIxXFxcIi8+PGNpcmNsZSBjbGFzcz1cXFwiY2xzLTVcXFwiIGN4PVxcXCIxNi4xMlxcXCIgY3k9XFxcIjMuMThcXFwiIHI9XFxcIjEuMDZcXFwiLz48Y2lyY2xlIGNsYXNzPVxcXCJjbHMtNVxcXCIgY3g9XFxcIjcuMjlcXFwiIGN5PVxcXCI0LjI0XFxcIiByPVxcXCIxXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy02XFxcIiBkPVxcXCJNMjAuNyw4LjEyYTEuMDUsMS4wNSwwLDAsMC0yLjA1LS4zNGwtLjA2LDBhLjcxLjcxLDAsMCwwLS43MS43MWgyLjc2QTEsMSwwLDAsMCwyMC43LDguMTJaTTUuNTMsNy43NmExLDEsMCwwLDEsLjM5LjA4QTEuMDYsMS4wNiwwLDAsMSw4LDguMTJhMSwxLDAsMCwxLS4wNy4zNWgzYTEsMSwwLDAsMS0uMDctLjM1LDEuMDYsMS4wNiwwLDAsMSwxLjA2LTEuMDYsMSwxLDAsMCwxLC40Ny4xMSwxLDEsMCwwLDEtLjEyLS40NiwxLjA2LDEuMDYsMCwwLDEsMi4xMiwwLDEsMSwwLDAsMS0uMDguMzksMS4wNiwxLjA2LDAsMCwxLC43OSwxLDEsMSwwLDAsMS0uMDcuMzVoMi4xbC0uNC0uMzVhMS40NCwxLjQ0LDAsMCwwLC40OS0xLjA2LDEuNDIsMS40MiwwLDAsMC0xLjQyLTEuNDEsMS40NywxLjQ3LDAsMCwwLS43Mi4yLDEuMjMsMS4yMywwLDAsMCwwLS4yLDEuNDEsMS40MSwwLDAsMC0xLjQxLTEuNDEsMS40NCwxLjQ0LDAsMCwwLTEuMjkuODJBMS4wNSwxLjA1LDAsMCwwLDEwLjgyLDZhMSwxLDAsMCwwLC4wOC4zOSwxLjA2LDEuMDYsMCwwLDAtLjc4LDEsMS4wOSwxLjA5LDAsMCwwLC4wNy40QTEuMDYsMS4wNiwwLDAsMCw5Ljc2LDhhMSwxLDAsMCwwLS43LS4yOCwxLjA2LDEuMDYsMCwwLDAtLjQ3LjEyQTEuMDUsMS4wNSwwLDAsMCw3LjI1LDYuNDNhMS4wNSwxLjA1LDAsMCwwLTIuMDcuMjgsMSwxLDAsMCwwLC4wNy4zOSwxLDEsMCwwLDAtLjQzLjIzLDEsMSwwLDAsMC0uNy0uMjdBMS4wNSwxLjA1LDAsMCwwLDMuMDYsOC4xMmExLDEsMCwwLDAsLjA2LjM1SDQuNTNBMS4wNywxLjA3LDAsMCwxLDUuNTMsNy43NlpcXFwiLz48L2c+PHBhdGggY2xhc3M9XFxcImNscy03XFxcIiBkPVxcXCJNMS42NSw4LjQ3di43MWEuNy43LDAsMCwwLC43LjdIMjAuN2EuNy43LDAsMCwwLC43MS0uN1Y4LjQ3WlxcXCIvPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvcG9wY29ybi5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM1MGE1ZTY7fS5jbHMtMntmaWxsOiMxYzYzOTk7fS5jbHMtM3tmaWxsOiNkMmEwNzc7fS5jbHMtNHtmaWxsOiNmM2QyYTI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT40My3lkIjljYE8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxnIGlkPVxcXCLpobXpnaItMVxcXCI+PHBhdGggaWQ9XFxcIui3r+W+hFxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBkPVxcXCJNMjAsMTQuNjdjLTIsMC00LjQ2LDQuNzMtNC42Nyw2LjY2QzE1LjA1LDIzLjk0LDE2LjY3LDI0LDE2LjY3LDI0SDI0VjE3LjMzUzIxLjcxLDE0LjY3LDIwLDE0LjY3WlxcXCIvPjxlbGxpcHNlIGlkPVxcXCLmpK3lnIblvaJcXFwiIGNsYXNzPVxcXCJjbHMtMlxcXCIgY3g9XFxcIjE4LjM4XFxcIiBjeT1cXFwiMTguOTlcXFwiIHJ4PVxcXCIzLjlcXFwiIHJ5PVxcXCIxLjA5XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtNy4yNiAyNS40Mikgcm90YXRlKC02MClcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk0xMy4zOSwwYTEuNDMsMS40MywwLDAsMSwxLjQzLDEuNDNjMCwuNTIuNDQsNy4yMS40NCw3LjIxTDEyLDEyVjEuNDNBMS40MiwxLjQyLDAsMCwxLDEzLjM5LDBaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy00XFxcIiBkPVxcXCJNMTIuNTgsMi44OGExLjI3LDEuMjcsMCwxLDEsMi41NCwwcy4zNiw0LC44LDYuMjVhMTAuMTMsMTAuMTMsMCwwLDEsLjg0LDQuMTYsNDYuMjYsNDYuMjYsMCwwLDAsMy43NSwzLjM0LDExLDExLDAsMCwxLTMuMTgsNS40NEwxNSwyMC4xMmEzLjczLDMuNzMsMCwwLDEtMy0yLjg0YzAtMiwuNTctMTQuNC41Ny0xNC40WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTQsMTQuNjdjMiwwLDQuNDYsNC43Myw0LjY3LDYuNjZDOSwyMy45NCw3LjMzLDI0LDcuMzMsMjRIMFYxNy4zM1MyLjI5LDE0LjY3LDQsMTQuNjdaXFxcIi8+PGVsbGlwc2UgY2xhc3M9XFxcImNscy0yXFxcIiBjeD1cXFwiNS42MlxcXCIgY3k9XFxcIjE4Ljk5XFxcIiByeD1cXFwiMS4wOVxcXCIgcnk9XFxcIjMuOVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTguNzQgNS4zNSkgcm90YXRlKC0zMClcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk0xMC43MSwwYTEuNCwxLjQsMCwwLDAtMS41NiwxLjRDOS4xNSwxLjkzLDksOC4yOSw5LDguMjlMMTEuOTMsMTIsMTIsMS40OUExLjQ2LDEuNDYsMCwwLDAsMTAuNzEsMFpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTRcXFwiIGQ9XFxcIk0xMS40MiwyLjg4YTEuMjcsMS4yNywwLDEsMC0yLjU0LDBzLS4zNiw0LS44LDYuMjVhMTAuMTMsMTAuMTMsMCwwLDAtLjg0LDQuMTYsNDYuMjYsNDYuMjYsMCwwLDEtMy43NSwzLjM0LDExLDExLDAsMCwwLDMuMTgsNS40NEw5LDIwLjEyYTMuNzMsMy43MywwLDAsMCwzLTIuODRDMTIsMTUuMjksMTEuNDIsMi44OCwxMS40MiwyLjg4WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTEyLDE3LjIyYS41LjUsMCwwLDEtLjUtLjVWMS44NmEuNS41LDAsMSwxLDEsMFYxNi43MkEuNS41LDAsMCwxLDEyLDE3LjIyWlxcXCIvPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvcHJheS5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzY2MmUwMDt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yMzkuMDhcXFwiIGN5PVxcXCIzNjUuODVcXFwiIHI9XFxcIjAuNzdcXFwiIGdyYWRpZW50VHJhbnNmb3JtPVxcXCJtYXRyaXgoMjQsIDAsIDAsIC0yNCwgNTc1MCwgODc4OC4xOSlcXFwiIGdyYWRpZW50VW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIj48c3RvcCBvZmZzZXQ9XFxcIjBcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmU1YTNcXFwiLz48c3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmFkMjlcXFwiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48dGl0bGU+MzAt6YeK54S2PC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTI0LDEyQTEyLDEyLDAsMSwxLDEyLDAsMTIsMTIsMCwwLDEsMjQsMTJcXFwiLz48cGF0aCBpZD1cXFwi5b2i54q2XFxcIiBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xOC44NywxMC40MWEuMzIuMzIsMCwwLDAtLjQsMEE0LjUzLDQuNTMsMCwwLDEsMTYsMTFhNC41Myw0LjUzLDAsMCwxLTIuNDctLjYuMzIuMzIsMCwwLDAtLjQsMCwuMzIuMzIsMCwwLDAtLjEuMzljMCwuMDksMSwyLjIsMywyLjJzMi45My0yLjExLDMtMi4yQS4zMi4zMiwwLDAsMCwxOC44NywxMC40MVptLTguNCwwQTQuNTMsNC41MywwLDAsMSw4LDExYTQuNTMsNC41MywwLDAsMS0yLjQ3LS42LjMyLjMyLDAsMCwwLS40LDAsLjMyLjMyLDAsMCwwLS4xLjM5YzAsLjA5LDEsMi4yLDMsMi4yczIuOTMtMi4xMSwzLTIuMmEuMzIuMzIsMCwwLDAtLjEtLjM5QS4zMi4zMiwwLDAsMCwxMC40NywxMC40Wm04Ljg2LTEuNzNhLjY4LjY4LDAsMCwxLS41My0uMjcsNSw1LDAsMCwwLTQuNjctMS43NS42Ni42NiwwLDAsMS0uMjYtMS4zLDYuMjQsNi4yNCwwLDAsMSw2LDIuMjUuNjYuNjYsMCwwLDEtLjE0LjkzLjY3LjY3LDAsMCwxLS40LjE0Wm0tMTQuNjYsMGEuNjcuNjcsMCwwLDEtLjQtLjE0LjY2LjY2LDAsMCwxLS4xNC0uOTMsNi4yNiw2LjI2LDAsMCwxLDYtMi4yNS42Ni42NiwwLDAsMS0uMjYsMS4zQTUsNSwwLDAsMCw1LjIsOC40LjY4LjY4LDAsMCwxLDQuNjcsOC42N1pNMTUuNSwxNS43MmEuMzMuMzMsMCwwLDAtLjQsMHMtLjY3LjU3LTMuMS41Ny0zLjEtLjU3LTMuMS0uNTdhLjM1LjM1LDAsMCwwLS40LDAsLjM0LjM0LDAsMCwwLS4xNi4zN0EzLjkzLDMuOTMsMCwwLDAsMTIsMTlhMy45MywzLjkzLDAsMCwwLDMuNjYtMi45Mi4zMy4zMywwLDAsMC0uMTYtLjM2WlxcXCIvPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvcmVsaWV2ZS5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM1NmEzMmM7fS5jbHMtMntmaWxsOiNkMTIyMzE7fS5jbHMtM3tmaWxsOiNmODM2NDA7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT40MC3njqvnkbA8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTguMTUsMTYuOTFINy45NHYtLjI4YzMuMi0uMzIsNS43LTIuODQsNS43LTQuODdzMCwxLTYuMzcsMVMuODksOS42Ljg5LDExLjc2czIuNTEsNC41Niw1LjcyLDQuODd2LjI4SDYuMzlDNC42OSwxNi45MSwyLDE1LjU0LDIsMTZzMi43OSwyLjY3LDQuNjIsMy4xOXY0LjExYS42Ny42NywwLDEsMCwxLjMzLDBWMTkuMjJjMS44My0uNTIsNC42Mi0yLjc2LDQuNjItMy4xOXMtMi43Ljg4LTQuNDEuODhaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMTMsNC45QzEwLjM3LDIsMTQsMSwxMS4yMywxQTUuNDksNS40OSwwLDAsMCw5LDEuNzdDOC41OC43Myw4LDAsNy4yNywwLDUuOTEsMCw0Ljc5LDIuODksNC42OSw1LjUxQTUuNzgsNS43OCwwLDAsMCwzLjQ2LDguODJjMCw0LjA2LDEuNzIsNS44OSw0LjMyLDUuODlDMTMsMTQuNzEsMTYuODcsOS4zNCwxMyw0LjlaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNMTEuMDksOC44MmMwLDQuMDYtMS43Miw1Ljg5LTQuMzIsNS44OS01LjE4LDAtOS4wOS01LjM3LTUuMTgtOS44MUM0LjE4LDIsLjU5LDEsMy4zMiwxLDUuMDUsMSwxMS4wOSw0Ljc2LDExLjA5LDguODJaXFxcIi8+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL3Jvc2Uuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZjNkMmEyO30uY2xzLTJ7ZmlsbDojZjgzNjQwO30uY2xzLTN7ZmlsbDojNjYyZTAwO30uY2xzLTR7ZmlsbDojYjM1YzAwO30uY2xzLTV7ZmlsbDojZjBmMWY1O30uY2xzLTZ7ZmlsbDojZjFmMmYyO30uY2xzLTd7ZmlsbDojZjVmNmZhO30uY2xzLTh7ZmlsbDojZDFkM2Q0O308L3N0eWxlPjwvZGVmcz48dGl0bGU+NDEt5Zyj6K+e6ICB5Lq6PC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48cGF0aCBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0xOC4zMywxMS4zM2ExLDEsMCwwLDAtLjM3LjA4Yy0uMzgtNS4yMy0zLjgtOS4zMy04LTkuMzNzLTcuNTgsNC4xLTgsOS4zM2ExLDEsMCwwLDAtLjM3LS4wOEMuNzUsMTEuMzMsMCwxMi41MywwLDE0cy43NSwyLjY3LDEuNjcsMi42N2ExLjI1LDEuMjUsMCwwLDAsLjkxLS40NUMzLjc3LDIwLDYuNjQsMjIuNjcsMTAsMjIuNjdzNi4yMy0yLjY3LDcuNDItNi40NWExLjI1LDEuMjUsMCwwLDAsLjkxLjQ1Yy45MiwwLDEuNjctMS4yLDEuNjctMi42N1MxOS4yNSwxMS4zMywxOC4zMywxMS4zM1pcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0yMS4zMywxNi42N2EyLjc2LDIuNzYsMCwwLDEsLjkxLjE2Yy4xLS43OC4yNS0xLjc1LjQzLTIuODMuNjYtNCwuMzUtMTQtOS4zNC0xNGgtLjY2QzYsMCwxLjMzLDMuMDUsMS4zMyw2UzUuNTgsOC42NywxMCw4LjY3YzMsMCw1LjEsMCw2LjY0LS4wNmwwLC4wNkwyMCwxN0EyLjY5LDIuNjksMCwwLDEsMjEuMzMsMTYuNjdaXFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNNi42NywxNEEuNjcuNjcsMCwwLDEsNiwxMy4zM1YxMmEuNjcuNjcsMCwxLDEsMS4zMywwdjEuMzNBLjY3LjY3LDAsMCwxLDYuNjcsMTRabTYuNjYsMGEuNjYuNjYsMCwwLDEtLjY2LS42N1YxMmEuNjYuNjYsMCwwLDEsLjY2LS42N0EuNjcuNjcsMCwwLDEsMTQsMTJ2MS4zM0EuNjcuNjcsMCwwLDEsMTMuMzMsMTRaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy00XFxcIiBkPVxcXCJNMTAuNjcsMTcuMzNIOS4zM2EuNjYuNjYsMCwwLDEtLjY2LS42NkEuNjcuNjcsMCwwLDEsOS4zMywxNmgxLjM0YS42Ny42NywwLDAsMSwuNjYuNjdBLjY2LjY2LDAsMCwxLDEwLjY3LDE3LjMzWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNVxcXCIgZD1cXFwiTTE4LDE2LjY3YzAtMS4zNC0xLjUzLS40Ny0yLDAtLjY3LjY2LTIsMi0zLjMzLDEuMzMtMS44OS0uOTQtMi42Ny0uNjctMi42Ny0uNjdzLS43OC0uMjctMi42Ny42N0M2LDE4LjY3LDQuNjcsMTcuMzMsNCwxNi42N2MtLjQ3LS40Ny0yLTEuMzQtMiwwUzIuNjcsMTgsMi42NywxOGExLjQ2LDEuNDYsMCwwLDAsLjY2LDIsMiwyLDAsMCwwLDIsMkM1LjMzLDI0LDgsMjMuMzMsOCwyMy4zM2EzLjMyLDMuMzIsMCwwLDAsNCwwUzE0LjY3LDI0LDE0LjY3LDIyYTIsMiwwLDAsMCwyLTIsMS40NiwxLjQ2LDAsMCwwLC42Ni0yUzE4LDE4LDE4LDE2LjY3WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTEwLDE4LjY3YzQuNjcsMCwyLjY3LDEuMzMsMCwxLjMzUzUuMzMsMTguNjcsMTAsMTguNjdaXFxcIi8+PGNpcmNsZSBjbGFzcz1cXFwiY2xzLTZcXFwiIGN4PVxcXCIyMS4zM1xcXCIgY3k9XFxcIjE5LjMzXFxcIiByPVxcXCIyLjY3XFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy03XFxcIiBkPVxcXCJNMTkuMzMsOEExLjMyLDEuMzIsMCwwLDEsMTgsOS4zM0gxLjMzQTEuMzMsMS4zMywwLDAsMSwwLDhWNy4zM0ExLjM0LDEuMzQsMCwwLDEsMS4zMyw2SDE4YTEuMzMsMS4zMywwLDAsMSwxLjMzLDEuMzNaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy04XFxcIiBkPVxcXCJNMTgsOS4zM0gxNmMwLDEuNDguNiwyLjY3LDEuMzMsMi42N3MxLjM0LTEuMTksMS4zNC0yLjY3YzAtLjA2LDAtLjEzLDAtLjE5QTEuMzcsMS4zNywwLDAsMSwxOCw5LjMzWlxcXCIvPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9zYW50YS1jbGF1cy5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmNjNGQ7fS5jbHMtMntmaWxsOiM5ZWRkZmY7fS5jbHMtM3tmaWxsOiNmNWY4ZmE7fS5jbHMtNHtmaWxsOiM2NjJlMDA7fS5jbHMtNXtmaWxsOiNmZjk1MDA7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT4yMi3mg4rmgZA8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTEyLDBBMTIsMTIsMCwwLDAsNS4wNSwyMS43N2MuMDctNC4yOS0xLjQ5LTkuMS00LjExLTkuMWEyLjE1LDIuMTUsMCwwLDAtLjc3LjEyYy4yLS41MS42NC0uNzksMS40Ni0uNzksMi44NCwwLDQuNDQsNS42Nyw0LjA2LDEwLjE5YTExLjksMTEuOSwwLDAsMCwxMi42MiwwQzE3LjkzLDE3LjY1LDE5LjUzLDEyLDIyLjM3LDEyYy44MywwLDEuMjcuMjgsMS40Ny43OWEyLjIxLDIuMjEsMCwwLDAtLjc4LS4xMmMtMi42MiwwLTQuMTgsNC44LTQuMTEsOS4xQTEyLDEyLDAsMCwwLDEyLDBaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMTIsMEExMiwxMiwwLDAsMCwwLDEyYTExLjg1LDExLjg1LDAsMCwwLC4yMywyLjMyLDcuNDQsNy40NCwwLDAsMSwuNy0xLjY1LDIuMTMsMi4xMywwLDAsMC0uNzYuMTJBMS4yNSwxLjI1LDAsMCwxLDEuMzUsMTJjMi0yLjc5LDYtNC43LDEwLjY1LTQuN1MyMC42Niw5LjI0LDIyLjY1LDEyYTEuMjQsMS4yNCwwLDAsMSwxLjE4Ljc2LDIuMDUsMi4wNSwwLDAsMC0uNzYtLjEyLDcuNDQsNy40NCwwLDAsMSwuNywxLjY1QTExLjg1LDExLjg1LDAsMCwwLDI0LDEyLDEyLDEyLDAsMCwwLDEyLDBaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNNC45LDcuOTRjLS42MywyLjEyLjA3LDQuMiwxLjU3LDQuNjRzMy4yMi0uOTEsMy44NS0zLS4wNy00LjItMS41Ny00LjY1UzUuNTMsNS44Miw0LjksNy45NFpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk0xOS4xLDcuOTRjLjYzLDIuMTItLjA3LDQuMi0xLjU3LDQuNjRzLTMuMjItLjkxLTMuODUtMywuMDctNC4yLDEuNTctNC42NVMxOC40Nyw1LjgyLDE5LjEsNy45NFpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTRcXFwiIGQ9XFxcIk0xMiwxMmEzLjM0LDMuMzQsMCwwLDAtMy4zMywzLjMzdjRhMy4zMywzLjMzLDAsMSwwLDYuNjYsMHYtNEEzLjM0LDMuMzQsMCwwLDAsMTIsMTJaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy01XFxcIiBkPVxcXCJNLjk0LDEyLjY3YTIuMTUsMi4xNSwwLDAsMC0uNzcuMTIsMS40LDEuNCwwLDAsMSwuMTgtLjMyQy0uODksMTQsMS45LDE5LC41NSwyNGg0LjNDNS42NSwxOS4zNiw0LDEyLjY3Ljk0LDEyLjY3WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNVxcXCIgZD1cXFwiTTIzLjg0LDEyLjc5YTIuMjEsMi4yMSwwLDAsMC0uNzgtLjEyYy0zLjA5LDAtNC43MSw2LjY2LTMuOTEsMTEuMzNoNC4zMUMyMi4xOCwxOS4zLDI0LjU2LDE0LjYxLDIzLjg0LDEyLjc5WlxcXCIvPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9zY3JlYW0uc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp1cmwoI+acquWRveWQjeeahOa4kOWPmCk7fS5jbHMtMntmaWxsOiM2NTQ3MWI7fS5jbHMtM3tmaWxsOiNlOTlkMWI7fS5jbHMtNHtmaWxsOiNmM2QyYTI7fS5jbHMtNXtmaWxsOiNhNjcxMjU7fTwvc3R5bGU+PHJhZGlhbEdyYWRpZW50IGlkPVxcXCLmnKrlkb3lkI3nmoTmuJDlj5hcXFwiIGN4PVxcXCItMjM5LjQzXFxcIiBjeT1cXFwiMzY0Ljk4XFxcIiByPVxcXCIwLjc3XFxcIiBncmFkaWVudFRyYW5zZm9ybT1cXFwibWF0cml4KDIyLjY3LCAwLCAwLCAtMjIuNjcsIDU0MzguMzMsIDgyODAuMTgpXFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCI+PHN0b3Agb2Zmc2V0PVxcXCIwXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZlNWEzXFxcIi8+PHN0b3Agb2Zmc2V0PVxcXCIxXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZhZDI5XFxcIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHRpdGxlPjI4LeWYmDwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PGcgaWQ9XFxcIumhtemdoi0xXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yMi42NywxMS4zM0ExMS4zNCwxMS4zNCwwLDEsMSwxMS4zMywwLDExLjM0LDExLjM0LDAsMCwxLDIyLjY3LDExLjMzXFxcIi8+PGVsbGlwc2UgaWQ9XFxcIuakreWchuW9olxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBjeD1cXFwiMTEuMjFcXFwiIGN5PVxcXCIxNS40MlxcXCIgcng9XFxcIjIuNzFcXFwiIHJ5PVxcXCIxLjI5XFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNMTcuMjMsMTcuMzJoMGExLjE5LDEuMTksMCwwLDAtMS42NC4zOWwtLjEuMTZhMi42NSwyLjY1LDAsMCwwLTEuMzgtLjc2bC0uOTMtLjE5TDE0LDEyLjc2YTEuMjEsMS4yMSwwLDAsMC0uOTMtMS40MWgwYTEuMiwxLjIsMCwwLDAtMS40MS45M2wtMS4xMSw1LjQ1di4wNWwtLjIxLDFoMEw5LjU2LDIyLjVBMS4xNywxLjE3LDAsMCwwLDEwLjgyLDI0SDEzYzEuODcsMCwyLjQyLS42NywyLjgtMi4wNmwxLjgzLTNhMS4yLDEuMiwwLDAsMC0uNC0xLjY0WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNFxcXCIgZD1cXFwiTTE2LjIzLDE3LjMyaDBhMS4xOSwxLjE5LDAsMCwwLTEuNjQuMzlsLS4xLjE2YTIuNjUsMi42NSwwLDAsMC0xLjM4LS43NmwtLjkzLS4xOUwxMywxMi43NmExLjIxLDEuMjEsMCwwLDAtLjkzLTEuNDFoMGExLjIsMS4yLDAsMCwwLTEuNDEuOTNMOS41MywxNy43M3YuMDVsLS4yMSwxaDBMOC41NiwyMi41QTEuMTcsMS4xNywwLDAsMCw5LjgyLDI0SDEyYzEuODcsMCwyLjQyLS42NywyLjgtMi4wNmwxLjgzLTNhMS4yLDEuMiwwLDAsMC0uNC0xLjY0WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNVxcXCIgZD1cXFwiTTE0LjI3LDIwLjVoMGEuMjMuMjMsMCwwLDEtLjE4LS4yNi42OS42OSwwLDAsMC0uMTItLjU2QTMuMjcsMy4yNywwLDAsMCwxMiwxOC44NGEuMjMuMjMsMCwwLDEtLjItLjI2LjIxLjIxLDAsMCwxLC4yNS0uMTksMy43MSwzLjcxLDAsMCwxLDIuMjQsMSwxLjEsMS4xLDAsMCwxLC4yLjkxLjIyLjIyLDAsMCwxLS4yMi4xOVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTVcXFwiIGQ9XFxcIk0xMi4xLDIzLjY1YTIuMzgsMi4zOCwwLDAsMS0uNTYtLjA3LDEsMSwwLDAsMS0uNzgtLjY1Ljc3Ljc3LDAsMCwxLC4xOS0uNzYsMS4xNSwxLjE1LDAsMCwxLDEuMTMtLjIzLjIyLjIyLDAsMCwxLS4xMS40My43MS43MSwwLDAsMC0uNjkuMTIuMzEuMzEsMCwwLDAtLjA5LjMxLjU4LjU4LDAsMCwwLC40Ni4zNCwxLjI5LDEuMjksMCwwLDAsMS40NS0uNDIsMS4zNywxLjM3LDAsMCwwLC4yNi0xLjI1Yy0uMjktLjU0LTEuMzctLjY2LTEuNzYtLjY2YS4yMy4yMywwLDAsMS0uMjMtLjIzLjIzLjIzLDAsMCwxLC4yMy0uMjNjLjA2LDAsMS42OSwwLDIuMTYuOTFBMS44LDEuOCwwLDAsMSwxMy40NSwyM2ExLjY1LDEuNjUsMCwwLDEtMS4zNS42NVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk04LjgxLDguODFjMCwuOTMtLjU2LDEuNjgtMS4yNSwxLjY4UzYuMyw5Ljc0LDYuMyw4Ljgxcy41Ni0xLjY3LDEuMjYtMS42N1M4LjgxLDcuODksOC44MSw4LjgxWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTE5LjI2LDYuODVhLjczLjczLDAsMCwwLC40Mi0uMTQuNzEuNzEsMCwwLDAsLjE0LTFBNy4zNiw3LjM2LDAsMCwwLDE0LjMsMi42LjcxLjcxLDAsMSwwLDE0LjMsNGE2LDYsMCwwLDEsNC4zOSwyLjU1LjcuNywwLDAsMCwuNTcuMjlaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMTMuODUsOC44MWMwLC45My41NywxLjY4LDEuMjYsMS42OHMxLjI2LS43NSwxLjI2LTEuNjgtLjU2LTEuNjctMS4yNi0xLjY3UzEzLjg1LDcuODksMTMuODUsOC44MVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0zLjQxLDYuODVBLjc2Ljc2LDAsMCwxLDMsNi43MWEuNzIuNzIsMCwwLDEtLjE0LTFBNy4zNyw3LjM3LDAsMCwxLDguMzcsMi42LjcxLjcxLDAsMSwxLDguMzcsNCw2LDYsMCwwLDAsNCw2LjU2YS43Mi43MiwwLDAsMS0uNTcuMjlaXFxcIi8+PC9nPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9zaHVzaC5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzY2MmUwMDt9LmNscy0ze2ZpbGw6I2MzY2FkOTt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yMTkuMVxcXCIgY3k9XFxcIjQwNy4wMVxcXCIgcj1cXFwiMC43N1xcXCIgZ3JhZGllbnRUcmFuc2Zvcm09XFxcIm1hdHJpeCgyNCwgMCwgMCwgLTI0LCA1MjcwLjQ1LCA5Nzc1Ljk4KVxcXCIgZ3JhZGllbnRVbml0cz1cXFwidXNlclNwYWNlT25Vc2VcXFwiPjxzdG9wIG9mZnNldD1cXFwiMFxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmZTVhM1xcXCIvPjxzdG9wIG9mZnNldD1cXFwiMVxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmYWQyOVxcXCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT4yMC3pl63lmLQ8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxjaXJjbGUgaWQ9XFxcIuakreWchuW9olxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTJcXFwiLz48cGF0aCBpZD1cXFwi5b2i54q2XFxcIiBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk05LjM2LDkuNjdDOS4zNiwxMSw4LjYxLDEyLDcuNjksMTJTNiwxMSw2LDkuNjdzLjc1LTIuMzQsMS42Ny0yLjM0UzkuMzYsOC4zOCw5LjM2LDkuNjdtOC42NiwwQzE4LDExLDE3LjI4LDEyLDE2LjM2LDEycy0xLjY3LTEtMS42Ny0yLjMzLjc1LTIuMzQsMS42Ny0yLjM0UzE4LDguMzgsMTgsOS42N00xNi42NywxOGgtMTBBLjY1LjY1LDAsMCwxLDYsMTcuMzR2LS42N0EuNjYuNjYsMCwwLDEsNi42NywxNmgxMFpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk0yMy41LDE3LjM5LDE4LjM2LDE2YS42Mi42MiwwLDAsMC0uNzguMzZsLTEuMDktLjUyLS40OSwxVjE1LjMzSDE0LjY3djEuMzRIMTMuMzNWMTUuMzNIMTJ2MS4zNEgxMC42N1YxNS4zM0g5LjMzdjEuMzRIOFYxNS4zM0g2LjY3djJIOHYxLjM0SDkuMzNWMTcuMzNoMS4zNHYxLjM0SDEyVjE3LjMzaDEuMzN2MS4zNGgxLjM0VjE3LjMzaDEuMDlsLS4zOC44MSwxLjA5LjUzLS4wNi4xNGEuODEuODEsMCwwLDAsLjI1Ljg1Yy40MS4zNSwzLjUyLDMuMTUsMy41MiwzLjE1YS44Ni44NiwwLDAsMCwxLjE4LjA1QTI1LjgxLDI1LjgxLDAsMCwwLDI0LDE4LjIxYS42NS42NSwwLDAsMC0uNDctLjgyWk0yMSwyMS40NGwtMS43Ni0xLjUsMS4wNy0yLjA1LDIuMjMuNzZaXFxcIi8+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL3NodXQtdXAuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp1cmwoI+acquWRveWQjeeahOa4kOWPmCk7fS5jbHMtMntmaWxsOiM2NjJlMDA7fS5jbHMtM3tmaWxsOiNmZmMyNTI7fS5jbHMtNHtmaWxsOiMxMjcyY2M7fTwvc3R5bGU+PHJhZGlhbEdyYWRpZW50IGlkPVxcXCLmnKrlkb3lkI3nmoTmuJDlj5hcXFwiIGN4PVxcXCItMjM5LjA4XFxcIiBjeT1cXFwiMzY1Ljg1XFxcIiByPVxcXCIwLjc3XFxcIiBncmFkaWVudFRyYW5zZm9ybT1cXFwibWF0cml4KDI0LCAwLCAwLCAtMjQsIDU3NTAsIDg3ODguMTkpXFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCI+PHN0b3Agb2Zmc2V0PVxcXCIwXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZlNWEzXFxcIi8+PHN0b3Agb2Zmc2V0PVxcXCIxXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZhZDI5XFxcIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHRpdGxlPjkt552hPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxnIGlkPVxcXCLnrKzkuozmjpJcXFwiPjxjaXJjbGUgaWQ9XFxcIuakreWchuW9olxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTJcXFwiLz48Y2lyY2xlIGNsYXNzPVxcXCJjbHMtMlxcXCIgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTcuMzNcXFwiIHI9XFxcIjJcXFwiLz48cGF0aCBpZD1cXFwi5b2i54q2XFxcIiBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xMS41NCwxMS4wN2EuMzQuMzQsMCwwLDAtLjQxLDAsNC40Nyw0LjQ3LDAsMCwxLTIuNDYuNiw0LjUzLDQuNTMsMCwwLDEtMi40Ny0uNi4zNS4zNSwwLDAsMC0uNDEsMCwuMzMuMzMsMCwwLDAtLjA5LjRjMCwuMDksMSwyLjIsMywyLjJzMi45My0yLjExLDMtMi4yYS4zNC4zNCwwLDAsMC0uMS0uNFptNi42NywwYS4zNS4zNSwwLDAsMC0uNDEsMCw0LjUzLDQuNTMsMCwwLDEtMi40Ny42LDQuNDcsNC40NywwLDAsMS0yLjQ2LS42LjMzLjMzLDAsMCwwLS41MS40YzAsLjA5LDEsMi4yLDMsMi4yczIuOTMtMi4xMSwzLTIuMmEuMzMuMzMsMCwwLDAtLjA5LS40WlxcXCIvPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTIzLDguMzZhLjI5LjI5LDAsMCwwLDAtLjA5Ljc3Ljc3LDAsMCwwLS44Mi0uNzlIMTkuNzZsMi44Ni00QS44Mi44MiwwLDAsMCwyMi44LDNhLjU1LjU1LDAsMCwwLS41OS0uNTdIMTguNjVsMC0uNDYtMSwuNTlhLjc3Ljc3LDAsMCwwLS4zNC42Ni43Ni43NiwwLDAsMCwuODIuNzlIMjAuMkwxNy4zNiw4YTEsMSwwLDAsMC0uMTYuNDljMCwuNDEuMzQuNjEuNzQuNjFoNC4yMUExLDEsMCwwLDAsMjIuNjEsOWwxLS42SDIzWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNFxcXCIgZD1cXFwiTTIxLjE4LDMuMzloLTIuMWEuNzcuNzcsMCwwLDEtLjgyLS43OS43Ny43NywwLDAsMSwuODItLjc5aDQuMTFhLjU1LjU1LDAsMCwxLC41OS41Ni43Ni43NiwwLDAsMS0uMTkuNTRsLTIuODUsNGgyLjM5YS43OS43OSwwLDEsMSwwLDEuNThIMTguOTJjLS40LDAtLjc0LS4yLS43NC0uNjJhMSwxLDAsMCwxLC4xNi0uNDlsMi44NC00WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTE2LjU5LDVzMCwwLDAtLjA2YS41Ny41NywwLDAsMC0uNjEtLjZIMTQuMmwyLjE0LTNhLjU4LjU4LDAsMCwwLC4xNC0uNEEuNDIuNDIsMCwwLDAsMTYsLjUxSDEzLjM3bDAtLjM0TDEyLjYuNjFhLjYyLjYyLDAsMCwwLS4yNS41QS41Ny41NywwLDAsMCwxMywxLjdoMS41N2wtMi4xMiwzYS43NC43NCwwLDAsMC0uMTMuMzdjMCwuMzEuMjYuNDYuNTYuNDZIMTZhLjY4LjY4LDAsMCwwLC4zNC0uMDlMMTcuMDgsNVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTRcXFwiIGQ9XFxcIk0xNS4yNiwxLjI3SDEzLjY5YS41Ny41NywwLDAsMS0uNjEtLjU5LjU3LjU3LDAsMCwxLC42MS0uNmgzLjA4YS40Mi40MiwwLDAsMSwuNDQuNDMuNTguNTgsMCwwLDEtLjE0LjRsLTIuMTMsM2gxLjc4YS41Ny41NywwLDAsMSwuNjEuNi41Ny41NywwLDAsMS0uNjEuNTlIMTMuNTdjLS4zLDAtLjU1LS4xNS0uNTUtLjQ2YS43NC43NCwwLDAsMSwuMTItLjM3bDIuMTItM1pcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk0xMS44Myw3czAsMCwwLDBhLjUuNSwwLDAsMC0uNTMtLjUxSDkuNzhsMS44My0yLjU2YS40OC40OCwwLDAsMCwuMTItLjM1LjM1LjM1LDAsMCwwLS4zOC0uMzZIOS4wN1YyLjgzbC0uNjUuMzhhLjUyLjUyLDAsMCwwLC4zMS45M2gxLjM1TDguMjUsNi43QS41OS41OSwwLDAsMCw4LjE0LDdjMCwuMjcuMjIuMzkuNDguMzloMi42OWEuNjIuNjIsMCwwLDAsLjI5LS4wN0wxMi4yNSw3WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNFxcXCIgZD1cXFwiTTEwLjY5LDMuNzdIOS4zNWEuNTEuNTEsMCwxLDEsMC0xSDEyYS4zNi4zNiwwLDAsMSwuMzguMzcuNDcuNDcsMCwwLDEtLjEyLjM0TDEwLjQxLDZoMS41M2EuNTEuNTEsMCwxLDEsMCwxSDkuMjRjLS4yNiwwLS40Ny0uMTMtLjQ3LS40YS42LjYsMCwwLDEsLjEtLjMxbDEuODItMi41NlpcXFwiLz48L2c+PC9nPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9zbGVlcC5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzY2MmUwMDt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yMDIuNTJcXFwiIGN5PVxcXCIzOTAuMDhcXFwiIHI9XFxcIjAuNzdcXFwiIGdyYWRpZW50VHJhbnNmb3JtPVxcXCJtYXRyaXgoMjQsIDAsIDAsIC0yNCwgNDg3Mi40MSwgOTM2OS43NClcXFwiIGdyYWRpZW50VW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIj48c3RvcCBvZmZzZXQ9XFxcIjBcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmU1YTNcXFwiLz48c3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmFkMjlcXFwiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48dGl0bGU+5b6u56yRPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxnIGlkPVxcXCLnrKzkuIDmjpJcXFwiPjxjaXJjbGUgaWQ9XFxcIuakreWchuW9olxcXCIgY2xhc3M9XFxcImNscy0xXFxcIiBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTJcXFwiLz48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk03LDE1Ljc1YzAsLjEyLjc4LDIuOTIsNSwyLjkyczUtMi44LDUtMi45MmEuMzIuMzIsMCwwLDAtLjE2LS4zNy4zMy4zMywwLDAsMC0uNCwwcy0xLjMsMS4yNC00LjQzLDEuMjQtNC40Mi0xLjIzLTQuNDMtMS4yNGEuMzcuMzcsMCwwLDAtLjI0LS4xLjMzLjMzLDAsMCwwLS4xNi4wNUEuMzIuMzIsMCwwLDAsNywxNS43NVpcXFwiLz48ZWxsaXBzZSBjbGFzcz1cXFwiY2xzLTJcXFwiIGN4PVxcXCI4XFxcIiBjeT1cXFwiOVxcXCIgcng9XFxcIjEuNjdcXFwiIHJ5PVxcXCIyLjMzXFxcIi8+PGVsbGlwc2UgY2xhc3M9XFxcImNscy0yXFxcIiBjeD1cXFwiMTZcXFwiIGN5PVxcXCI5XFxcIiByeD1cXFwiMS42N1xcXCIgcnk9XFxcIjIuMzNcXFwiLz48L2c+PC9nPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9zbWlsZS5zdmdcIixcIi9zdmdcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5mdW5jdGlvbiBmb3JtYXQodGV4dCkge3JldHVybiBmdW5jdGlvbih4LCB5KSB7eCA9ICgreHwwKTt5ID0gKCt5fDApO3ZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZWwuaW5uZXJIVE1MID0gXCI8c3ZnPjxnPjxnPlwiICsgdGV4dCArIFwiPC9nPjwvZz48L3N2Zz5cIjtlbCA9IGVsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtlbC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIik7cmV0dXJuIGVsfX1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0KFwiPGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgj5pyq5ZG95ZCN55qE5riQ5Y+YKTt9LmNscy0ye2ZpbGw6IzY2MmUwMDt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9XFxcIuacquWRveWQjeeahOa4kOWPmFxcXCIgY3g9XFxcIi0yOTAuODRcXFwiIGN5PVxcXCIzOTEuOTRcXFwiIHI9XFxcIjAuNzdcXFwiIGdyYWRpZW50VHJhbnNmb3JtPVxcXCJtYXRyaXgoMjQsIDAsIDAsIC0yNCwgNjk5Mi4yOCwgOTQxNC4yNilcXFwiIGdyYWRpZW50VW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIj48c3RvcCBvZmZzZXQ9XFxcIjBcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmU1YTNcXFwiLz48c3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmFkMjlcXFwiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48dGl0bGU+MjMt5Z2P56yRPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yNCwxMkExMiwxMiwwLDEsMSwxMiwwLDEyLDEyLDAsMCwxLDI0LDEyXFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMTYuMjIsMTUuNzVhLjM0LjM0LDAsMCwwLS4zNy0uMDVMMTMuMTgsMTdjLTEuMjQuNjItNC40OC42My00LjUxLjYzYS4zNC4zNCwwLDAsMC0uMzQuMzMuMzQuMzQsMCwwLDAsLjE3LjI5aDBhLjI5LjI5LDAsMCwwLC4xNiwwaDQuNjdhMy4yNywzLjI3LDAsMCwwLDMtMi4yMi4zNS4zNSwwLDAsMC0uMS0uMzZabTQuNDUtNS4wOGEuNjguNjgsMCwwLDEtLjU0LS4yN0E1LjYsNS42LDAsMCwwLDE2LDhhLjY3LjY3LDAsMCwxLDAtMS4zM0E2Ljk0LDYuOTQsMCwwLDEsMjEuMiw5LjZhLjY3LjY3LDAsMCwxLS41MywxLjA3Wm0tMTcuMzQsMEEuNjcuNjcsMCwwLDEsMi44LDkuNiw2LjkzLDYuOTMsMCwwLDEsOCw2LjY3LjY3LjY3LDAsMSwxLDgsOGE1LjYyLDUuNjIsMCwwLDAtNC4xMywyLjRBLjY4LjY4LDAsMCwxLDMuMzMsMTAuNjdabTcuMjcuOTNzMC0uMDcuMDUtLjExYS42Ni42NiwwLDAsMC0uNDktLjgsNy4yMSw3LjIxLDAsMCwwLTUuMi43NS42Ny42NywwLDAsMCwuMzcsMS4yMy42My42MywwLDAsMCwuMzctLjEyQTQuNjksNC42OSwwLDAsMSw4LDExLjg1Ljc3Ljc3LDAsMCwwLDgsMTJhMS4zNCwxLjM0LDAsMCwwLDIuNjcsMCwxLjM0LDEuMzQsMCwwLDAtLjA3LS40Wm04LDBhLjkzLjkzLDAsMCwxLDAtLjEuNjcuNjcsMCwwLDAtLjQ5LS44MSw3LjE4LDcuMTgsMCwwLDAtNS4yLjc2LjY2LjY2LDAsMCwwLS4xOC45Mi42OC42OCwwLDAsMCwuNTUuMy42My42MywwLDAsMCwuMzctLjEyLDQuNjksNC42OSwwLDAsMSwyLjMyLS43QS43Ny43NywwLDAsMCwxNiwxMmExLjM0LDEuMzQsMCwwLDAsMi42NywwLDEuMjksMS4yOSwwLDAsMC0uMDctLjRaXFxcIi8+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL3NtaXJrLnN2Z1wiLFwiL3N2Z1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2YzZDJhMjt9LmNscy0ye2ZpbGw6I2QyYTA3Nzt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPjU1LeW8uuWjrjwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PGcgaWQ9XFxcIumhtemdoi0xXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk03LjYyLDE0LjY3YTI0LjIxLDI0LjIxLDAsMCwxLC4yLTcuMjVBMTIuMzcsMTIuMzcsMCwwLDAsMTAsOGMuNjcsMCwyLjY3LS42NywyLjY3LTEuMzNBMi4zNCwyLjM0LDAsMCwwLDEyLDUuMzNsMS4zMy0uNjZDMTQsNCwxMy4zMywwLDEwLjY3LDAsNiwwLDQuMjksNC42Nyw0LjI5LDQuNjdoMFMuMjksMTIsLjI5LDE4YzAsMC0uNjcsMy4zMywwLDRzMy4zMy42NiwzLjMzLjY2YzYuNjcsMi42NiwxOS4wNS42NiwxOS4wNS01LjM0QzIyLjY3LDguNjcsOS42MiwxMC42Nyw3LjYyLDE0LjY3WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTEyLjMzLDIxLjVhOS43NSw5Ljc1LDAsMCwxLTQtLjkuNjguNjgsMCwwLDEtLjMtLjlBLjY2LjY2LDAsMCwxLDksMTkuNGE3LjQ5LDcuNDksMCwwLDAsNS4zMS40Myw1LjU4LDUuNTgsMCwwLDAsMy4xMS0zLjQxLjY3LjY3LDAsMCwxLC44Ny0uMzcuNjYuNjYsMCwwLDEsLjM3Ljg2LDYuODgsNi44OCwwLDAsMS0zLjg4LDQuMTdBNi43Nyw2Ljc3LDAsMCwxLDEyLjMzLDIxLjVaXFxcIi8+PC9nPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy9zdHJvbmcuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmY5NTAwO30uY2xzLTJ7ZmlsbDojZmZkNTdhO3N0cm9rZTojZmZkNTdhO30uY2xzLTN7ZmlsbDojZDk3NzAwO308L3N0eWxlPjwvZGVmcz48dGl0bGU+NTMt5aSq6ZizPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTExLjg3LDIzLjczYS43LjcsMCwwLDEtLjYyLS4zN0wxMC4wNSwyMSw4LDIyLjcyYS42OS42OSwwLDAsMS0uNDUuMTYuNTguNTgsMCwwLDEtLjI2LS4wNS42OS42OSwwLDAsMS0uNDMtLjU4TDYuNywxOS42bC0yLjUyLjgzYS44My44MywwLDAsMS0uMjIsMCwuNzEuNzEsMCwwLDEtLjQ5LS4yLjY5LjY5LDAsMCwxLS4xNi0uN0w0LjEzLDE3bC0yLjY0LS4yYS42OS42OSwwLDAsMS0uNTktLjQyQS42OC42OCwwLDAsMSwxLDE1LjdsMS43My0yTC4zOCwxMi40OEEuNjkuNjksMCwwLDEsMCwxMS44N2EuNzEuNzEsMCwwLDEsLjM4LS42MmwyLjM3LTEuMkwxLDhBLjY5LjY5LDAsMCwxLC45LDcuMzNhLjcuNywwLDAsMSwuNTktLjQzbDIuNjQtLjJMMy4zMSw0LjE4QS42OC42OCwwLDAsMSw0LDMuMjdhLjg1Ljg1LDAsMCwxLC4yMiwwbDIuNTIuODIuMi0yLjY0QS43LjcsMCwwLDEsNy4zMy45Ljc1Ljc1LDAsMCwxLDcuNTkuODUuNy43LDAsMCwxLDgsMWwyLDEuNzNMMTEuMjUuMzhBLjcxLjcxLDAsMCwxLDExLjg3LDBhLjY5LjY5LDAsMCwxLC42MS4zOGwxLjIsMi4zN0wxNS43LDFhLjY2LjY2LDAsMCwxLC40NC0uMTcuODYuODYsMCwwLDEsLjI3LjA1LjY5LjY5LDAsMCwxLC40Mi41OUwxNyw0LjEzbDIuNTMtLjgyYS41Mi41MiwwLDAsMSwuMjEsMCwuNjguNjgsMCwwLDEsLjY1LjkxTDE5LjYsNi43bDIuNjUuMkEuNy43LDAsMCwxLDIyLjcyLDhsLTEuNzMsMiwyLjM3LDEuMmEuNy43LDAsMCwxLC4zNy42Mi42OC42OCwwLDAsMS0uMzcuNjFMMjEsMTMuNjhsMS43MywyYS42OS42OSwwLDAsMS0uNDcsMS4xM0wxOS42LDE3bC44MywyLjUzYS42OS42OSwwLDAsMS0uNjYuOS43Ni43NiwwLDAsMS0uMjEsMEwxNywxOS42bC0uMiwyLjY1YS42OC42OCwwLDAsMS0uNDIuNTguNjMuNjMsMCwwLDEtLjI2LjA1LjY5LjY5LDAsMCwxLS40NS0uMTZsLTItMS43My0xLjIsMi4zN2EuNjguNjgsMCwwLDEtLjYxLjM3WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTIwLjUzLDExLjg3QTguNjcsOC42NywwLDEsMSwxMS44NywzLjJhOC42Niw4LjY2LDAsMCwxLDguNjYsOC42N1xcXCIvPjxwYXRoIGlkPVxcXCLlvaLnirZcXFwiIGNsYXNzPVxcXCJjbHMtM1xcXCIgZD1cXFwiTTExLjg3LDE1LjUxYy00LjE1LDAtNS4zNC0xLjU1LTUuMzQtLjgxczIuMzcsMi42NSw1LjM0LDIuNjUsNS4zMy0xLjkyLDUuMzMtMi42NS0xLjE4LjgxLTUuMzMuODFNMTcuMiw5LjY0YTEuNzgsMS43OCwwLDEsMS0xLjc4LTEuNzdBMS43OCwxLjc4LDAsMCwxLDE3LjIsOS42NG0tNy4xMSwwQTEuNzgsMS43OCwwLDEsMSw4LjMxLDcuODdhMS43OCwxLjc4LDAsMCwxLDEuNzgsMS43N1xcXCIvPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvc3VuLnN2Z1wiLFwiL3N2Z1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2YzZDJhMjt9LmNscy0ye2ZpbGw6I2QyYTA3Nzt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPjQ4Lei4qTwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PGcgaWQ9XFxcIumhtemdoi0xXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0yMS4zNSwxMi4wNmEyLjA5LDIuMDksMCwwLDEtLjIyLjkzYy0uODksMi44OS01LjA4LDIuNjgtMTEsMi44Mi0xLDAtLjQzLDEuMTktLjA4LDMuNzcuMjMsMS42OC0uODUsNC4yNi0yLjY3LDQuMjYtMywwLS4xMi0yLjM3LTIuNzctOC4yMkMzLjE3LDEyLjUsMCwxNC4yNSwwLDExLjExVjRjMC0xLjIzLjEyLTIuNCwxLjg0LTIuNTlTMy4xMywwLDUuNTMsMGgxMmEyLjIyLDIuMjIsMCwwLDEsMS43NiwzLjU3QTIuMjIsMi4yMiwwLDAsMSwyMC40Nyw1LjUsMi4xNiwyLjE2LDAsMCwxLDIwLDYuODRhMi4yMiwyLjIyLDAsMCwxLC41MSwzLjVBMi4xOCwyLjE4LDAsMCwxLDIxLjM1LDEyLjA2WlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTEzLjM5LDkuODNoNS43M0EyLjIyLDIuMjIsMCwwLDEsMjEsMTAuOTJhLjU3LjU3LDAsMCwxLS4yLjguNTguNTgsMCwwLDEtLjgtLjIsMS4wNywxLjA3LDAsMCwwLS45MS0uNTJIMTMuMjVhMS4wNiwxLjA2LDAsMSwwLDAsMi4xMWgzLjkyYS41OS41OSwwLDEsMSwwLDEuMTdIMTMuMjVBMi4yMiwyLjIyLDAsMCwxLDExLDEyLjA2YTIuMiwyLjIsMCwwLDEsLjgtMS43QTIuMjEsMi4yMSwwLDAsMSwxMiw3LjA4YTIuMjIsMi4yMiwwLDAsMSwuMjgtMy4zOSwyLjE5LDIuMTksMCwwLDEtLjU3LTEuNDdBMi4yMywyLjIzLDAsMCwxLDEzLjkxLDBoMy42NWEyLjIyLDIuMjIsMCwwLDEsMS45MSwxLjA5LjU4LjU4LDAsMCwxLS4yLjguNTkuNTksMCwwLDEtLjgtLjIxLDEuMDgsMS4wOCwwLDAsMC0uOTEtLjUxSDEzLjkxYTEuMDYsMS4wNiwwLDEsMCwwLDIuMTFoNC4zM2EyLjI1LDIuMjUsMCwwLDEsMS45MiwxLjA5LjU4LjU4LDAsMSwxLTEsLjU5LDEuMDUsMS4wNSwwLDAsMC0uOTEtLjUyaC00LjdhMS4wNiwxLjA2LDAsMSwwLDAsMi4xMmg1LjM5YTIuMjMsMi4yMywwLDAsMSwxLjkxLDEuMDguNTguNTgsMCwwLDEtLjIuOC41Ny41NywwLDAsMS0uOC0uMiwxLjA1LDEuMDUsMCwwLDAtLjkxLS41MkgxMy4zOWExLjA2LDEuMDYsMCwxLDAsMCwyLjExWlxcXCIvPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvdGh1bWJzLWRvd24uc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZjNkMmEyO30uY2xzLTJ7ZmlsbDojZDJhMDc3O308L3N0eWxlPjwvZGVmcz48dGl0bGU+NDct6LWePC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTIxLjM1LDExLjc4YTIuMDksMi4wOSwwLDAsMC0uMjItLjkzQzIwLjI0LDgsMTYuMDUsOC4xNywxMC4xLDhjLTEsMC0uNDMtMS4yLS4wOC0zLjc4QzEwLjI1LDIuNTgsOS4xNywwLDcuMzUsMGMtMywwLS4xMiwyLjM3LTIuNzcsOC4yMUMzLjE3LDExLjM0LDAsOS41OSwwLDEyLjczdjcuMTRjMCwxLjIzLjEyLDIuNCwxLjg0LDIuNTlzMS4yOSwxLjM4LDMuNjksMS4zOGgxMmEyLjIyLDIuMjIsMCwwLDAsMS43Ni0zLjU3LDIuMjIsMi4yMiwwLDAsMCwxLjE1LTEuOTNBMi4xNiwyLjE2LDAsMCwwLDIwLDE3YTIuMjIsMi4yMiwwLDAsMCwuNTEtMy41QTIuMTgsMi4xOCwwLDAsMCwyMS4zNSwxMS43OFpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xMy4zOSwxNGg1LjczQTIuMjIsMi4yMiwwLDAsMCwyMSwxMi45MmEuNTcuNTcsMCwwLDAtLjItLjguNTguNTgsMCwwLDAtLjguMiwxLjA3LDEuMDcsMCwwLDEtLjkxLjUySDEzLjI1YTEuMDYsMS4wNiwwLDEsMSwwLTIuMTFoMy45MmEuNTkuNTksMCwxLDAsMC0xLjE3SDEzLjI1QTIuMjIsMi4yMiwwLDAsMCwxMSwxMS43OGEyLjIsMi4yLDAsMCwwLC44LDEuN0EyLjIxLDIuMjEsMCwwLDAsMTIsMTYuNzZhMi4yMiwyLjIyLDAsMCwwLC4yOCwzLjM5LDIuMTksMi4xOSwwLDAsMC0uNTcsMS40NywyLjIzLDIuMjMsMCwwLDAsMi4yMywyLjIyaDMuNjVhMi4yMiwyLjIyLDAsMCwwLDEuOTEtMS4wOS41OC41OCwwLDAsMC0uMi0uOC41OS41OSwwLDAsMC0uOC4yLDEuMDcsMS4wNywwLDAsMS0uOTEuNTJIMTMuOTFhMS4wNiwxLjA2LDAsMSwxLDAtMi4xMWg0LjMzYTIuMjUsMi4yNSwwLDAsMCwxLjkyLTEuMDkuNTguNTgsMCwxLDAtMS0uNTksMSwxLDAsMCwxLS45MS41MWgtNC43YTEuMDYsMS4wNiwwLDEsMSwwLTIuMTFoNS4zOWEyLjIzLDIuMjMsMCwwLDAsMS45MS0xLjA4LjU4LjU4LDAsMCwwLS4yLS44LjU3LjU3LDAsMCwwLS44LjIsMS4wNSwxLjA1LDAsMCwxLS45MS41MkgxMy4zOWExLjA2LDEuMDYsMCwxLDEsMC0yLjExWlxcXCIvPjwvZz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvdGh1bWJzLXVwLnN2Z1wiLFwiL3N2Z1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2QyYTA3Nzt9LmNscy0ye2ZpbGw6I2YzZDJhMjt9LmNscy0ze2ZpbGw6IzRkYjVmZjt9LmNscy00e2ZpbGw6IzVkYWRlYzt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPjU2LeaMpeaJizwvdGl0bGU+PGcgaWQ9XFxcIuWbvuWxgl8yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAyXFxcIj48ZyBpZD1cXFwi5Zu+5bGCXzEtMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMVxcXCI+PGcgaWQ9XFxcIumhtemdoi0xXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0zLjI0LDYuMDdhMS44NSwxLjg1LDAsMCwxLDIuMTMuMTFsLS42NC0uOTRhMS4zOSwxLjM5LDAsMCwxLC40MS0yLjA2QzUuODgsMi42Niw4LDQuMDYsOCw0LjA2QTEuNTUsMS41NSwwLDAsMSw4LjMsMS44M2ExLjY3LDEuNjcsMCwwLDEsMi4zMS40MWw2Ljk0LDkuODItLjg4LDguNTgtNy4zOS0yLjdMMi44Myw4LjM5QTEuNjcsMS42NywwLDAsMSwzLjI0LDYuMDdaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMS44LDExLjUzYTEuMywxLjMsMCwwLDEsLjM0LTEuODVBMS4zMSwxLjMxLDAsMCwxLDQsMTBsMy41LDUuMTFhNS42OSw1LjY5LDAsMCwxLC40LS42TDMsNy40NWExLjMzLDEuMzMsMCwxLDEsMi4yLTEuNTFMOS44MSwxMi42Yy4xNy0uMTQuMzQtLjI4LjUyLS40MUw1LDQuNDZhMS4zLDEuMywwLDAsMSwuMzUtMS44NUExLjMsMS4zLDAsMCwxLDcuMjMsM2w1LjMsNy43M2MuMTktLjEyLjM5LS4yMi41OC0uMzNMOC4xNiwzLjEyQTEuMywxLjMsMCwwLDEsOC41LDEuMjdhMS4zMiwxLjMyLDAsMCwxLDEuODYuMzVsNS4yMyw3LjYzLjgsMS4xNmE2LjY5LDYuNjksMCwwLDAtMS43Myw5LjI3LjY2LjY2LDAsMCwwLC45My4xOCw2LjMsNi4zLDAsMCwxLDEuNzMtOS4yN2wtMS00Ljg3QTEuMzQsMS4zNCwwLDAsMSwxOC45MSw1TDIwLDguMzNhMjkuNiwyOS42LDAsMCwwLDEuNTUsMy44OEE4LDgsMCwwLDEsNy44MywyMC4zM1pcXFwiLz48ZyBpZD1cXFwi57yW57uEXFxcIj48cGF0aCBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk04LDIxLjMzQTUuNzgsNS43OCwwLDAsMSwyLjY0LDE2LC42NC42NCwwLDAsMCwyLDE1LjMxYS42OC42OCwwLDAsMC0uNjkuNjZBNi4zNCw2LjM0LDAsMCwwLDgsMjIuNjdhLjcuNywwLDAsMCwuNjctLjdBLjY1LjY1LDAsMCwwLDgsMjEuMzNaXFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNNC42NywyMi42NGEzLjE1LDMuMTUsMCwwLDEtMy4zNC0zLjMzLjY2LjY2LDAsMCwwLS42Ni0uNjcuNjcuNjcsMCwwLDAtLjY3LjY3QTQuNTYsNC41NiwwLDAsMCw0LjY3LDI0YS42Ny42NywwLDAsMCwwLTEuMzNaTTE2LDEuMzFhLjY2LjY2LDAsMCwwLS42Ny42Ni42Ny42NywwLDAsMCwuNjcuNjdBNS41Miw1LjUyLDAsMCwxLDIxLjMzLDhhLjY3LjY3LDAsMSwwLDEuMzQsMEE2LjQ4LDYuNDgsMCwwLDAsMTYsMS4zMVpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTRcXFwiIGQ9XFxcIk0xOS4zMywwYS42NC42NCwwLDAsMC0uNjYuNjQuNjkuNjksMCwwLDAsLjY2LjY5LDMuMjEsMy4yMSwwLDAsMSwzLjMxLDMuMzEuNjkuNjksMCwwLDAsLjY5LjY3QS42NS42NSwwLDAsMCwyNCw0LjY0LDQuNTcsNC41NywwLDAsMCwxOS4zMywwWlxcXCIvPjwvZz48L2c+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL3dhdmUuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNzVjOTQwO30uY2xzLTJ7ZmlsbDojYjZlMzkxO30uY2xzLTN7ZmlsbDojZDdmMGMwO30uY2xzLTR7ZmlsbDojNTZhMzJjO30uY2xzLTV7ZmlsbDojZDEyMjMxO30uY2xzLTZ7ZmlsbDojZjgzNjQwO308L3N0eWxlPjwvZGVmcz48dGl0bGU+MzMt5YeL6LCiPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0xMC42MSwzLjA5UzYuODItMS42NywzLjUxLjYzYy0yLjQ1LDEuNy0yLjQ0LDQuODEtMi4yLDYuMzFzMSw1LDEuNDYsOFMzLjU2LDIwLjQ0LDQsMjMuNWMuMTIuNzcsMi43Mi4zNCwyLjY1LS40MS0uMTItMS4zLTEuMjItNi0xLjUxLThTNC4yNiw5LjQ0LDMuODksNy4yOUMzLjQ3LDQuOTIsMy43LDIuODQsNS4zMiwyLjM2LDcuMTgsMS44MSw5LDQuOTIsOSw0LjkybDEuNTktMS44M1pcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk00LjE1LDEwLjlhNiw2LDAsMCwxLDEuOTEsMS4yLDUuMSw1LjEsMCwwLDEsLjg1LDUuM2MtLjQ5LDEuMzkuNzEsMy4zOC43MSwzLjM4QTguMDUsOC4wNSwwLDAsMSw1LjQ0LDE5YTcuNzQsNy43NCwwLDAsMS0xLjUzLTMuNzcsMTYuMSwxNi4xLDAsMCwxLC4yNC00LjMzXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy0zXFxcIiBkPVxcXCJNMi4yOCw5LjI2QTYuNjYsNi42NiwwLDAsMCwuMTIsMTIuNDQsOS4xNCw5LjE0LDAsMCwwLDIsMTkuNjZhMTEuNzIsMTEuNzIsMCwwLDEsMS4xNy0zLjYxYy44My0xLjEyLjM2LTMuNzksMC00Ljc3LS4yNi0uNy0uOTMtMi0uOTMtMlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNFxcXCIgZD1cXFwiTTExLjkyLDUuNDVhMS45MywxLjkzLDAsMCwxLTIuNjcsMCwxLjkyLDEuOTIsMCwwLDEtLjc3LTIuNTUsMS45MywxLjkzLDAsMCwxLDIuNjcsMCwxLjkzLDEuOTMsMCwwLDEsLjc3LDIuNTVcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTRcXFwiIGQ9XFxcIk0xMi45LDMuNTNjLjU2Ljg1LjA3LDIuMTctMS4xLDIuOTRzLTIuNTcuNy0zLjEzLS4xNlM4LjYsNC4xNCw5Ljc2LDMuMzdzMi41Ny0uNywzLjE0LjE2XFxcIi8+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy00XFxcIiBkPVxcXCJNOS4yMyw1LjM4YTMuNTIsMy41MiwwLDAsMS0xLjkzLDFzMS4xMy44NCwxLjgyLjM2LjExLTEuMzQuMTEtMS4zNG0xLjctMi4xOWMwLS41NS44OC0xLjUzLDEuMzItMS4yOCwwLDAtLjU5LjY2LDAsMS4wNnMtMS4yOC4yMi0xLjI4LjIyXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy01XFxcIiBkPVxcXCJNOS41OSw1LjcyYy0xLjE5LjY0LTIuMjYsMi4xNi0xLjcsNS4wNy40OCwyLjUxLDIuNjEsMy41NCwxLjksNS4yMnMuNTUsNC4wNywyLjE1LjI2Yy41MS0xLjE5LDEuODgtNi4xOC41Mi05LjI0QTIuMDcsMi4wNywwLDAsMCw5LjU5LDUuNzJaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy02XFxcIiBkPVxcXCJNMTEsNC42N2MuODgtMS4yOSwyLjE2LTEuNDUsMy0uNjMsNCwzLjgxLDIuMzcsMTEuMjktLjM0LDEyLjkxLTEuNi45NS0uNTctNC44MS0yLjczLTcuMTZBMy44MywzLjgzLDAsMCwxLDExLDQuNjdcXFwiLz48L2c+PC9nPlwiKVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9zdmcvd2lsdGVkLnN2Z1wiLFwiL3N2Z1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6dXJsKCPmnKrlkb3lkI3nmoTmuJDlj5gpO30uY2xzLTJ7ZmlsbDojNjYyZTAwO30uY2xzLTN7ZmlsbDojZjRmN2Y5O30uY2xzLTR7ZmlsbDojMjkyZjMzO30uY2xzLTV7ZmlsbDojZjgzNjQwO30uY2xzLTZ7ZmlsbDojZDEyMjMxO308L3N0eWxlPjxyYWRpYWxHcmFkaWVudCBpZD1cXFwi5pyq5ZG95ZCN55qE5riQ5Y+YXFxcIiBjeD1cXFwiLTI3OC4wNlxcXCIgY3k9XFxcIjM4Mi4yOFxcXCIgcj1cXFwiMC43N1xcXCIgZ3JhZGllbnRUcmFuc2Zvcm09XFxcIm1hdHJpeCgyNCwgMCwgMCwgLTI0LCA2Njg1LjQ5LCA5MTgyLjQ4KVxcXCIgZ3JhZGllbnRVbml0cz1cXFwidXNlclNwYWNlT25Vc2VcXFwiPjxzdG9wIG9mZnNldD1cXFwiMFxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmZTVhM1xcXCIvPjxzdG9wIG9mZnNldD1cXFwiMVxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmYWQyOVxcXCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT4xMi3osIPnmq48L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTI0LDEyQTEyLDEyLDAsMSwxLDEyLDAsMTIsMTIsMCwwLDEsMjQsMTJcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xMC4zLDEwLjU0YzAtLjA5LTEtMi4xOS0zLTIuMTlzLTIuOTMsMi4xLTMsMi4xOWEuMzQuMzQsMCwwLDAsLjEuNC4zMy4zMywwLDAsMCwuNCwwLDQuNDYsNC40NiwwLDAsMSwyLjQ3LS42QTQuNCw0LjQsMCwwLDEsOS44LDExLC4zNi4zNiwwLDAsMCwxMCwxMWEuMzMuMzMsMCwwLDAsLjIxLS4wN0EuMzMuMzMsMCwwLDAsMTAuMywxMC41NFpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk0yMC42Nyw5YTQuMzQsNC4zNCwwLDEsMS00LjM0LTQuMzNBNC4zMyw0LjMzLDAsMCwxLDIwLjY3LDlaXFxcIi8+PGNpcmNsZSBpZD1cXFwi5qSt5ZyG5b2iXFxcIiBjbGFzcz1cXFwiY2xzLTRcXFwiIGN4PVxcXCIxNi4zM1xcXCIgY3k9XFxcIjlcXFwiIHI9XFxcIjEuNjdcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk00LjY3LDE0LjE3YzAsMi42NSwzLjA2LDYsNy4zMyw2czcuMzMtMy4zMyw3LjMzLTZBMzMuMjUsMzMuMjUsMCwwLDEsNC42NywxNC4xN1pcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTVcXFwiIGQ9XFxcIk0xMi4zNiwxNS43NGgtLjcyQTIwLjE2LDIwLjE2LDAsMCwxLDgsMTUuMzRWMjBhMy44NCwzLjg0LDAsMCwwLDQsNCwzLjg0LDMuODQsMCwwLDAsNC00VjE1LjM2YTE5LjI2LDE5LjI2LDAsMCwxLTMuNjQuMzhaXFxcIi8+PHBhdGggY2xhc3M9XFxcImNscy02XFxcIiBkPVxcXCJNMTIsMjEuMjNhLjM2LjM2LDAsMCwwLC4zNi0uMzZWMTUuNzRoLS43MnY1LjE0YS4zNi4zNiwwLDAsMCwuMzYuMzZaXFxcIi8+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL3dpbmsuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp1cmwoI+acquWRveWQjeeahOa4kOWPmCk7fS5jbHMtMntmaWxsOiM2NjJlMDA7fS5jbHMtM3tmaWxsOiNmZmY7fS5jbHMtNHtmaWxsOiNmODM1M2Y7fTwvc3R5bGU+PHJhZGlhbEdyYWRpZW50IGlkPVxcXCLmnKrlkb3lkI3nmoTmuJDlj5hcXFwiIGN4PVxcXCItMjM5LjM2XFxcIiBjeT1cXFwiMzY1Ljg1XFxcIiByPVxcXCIwLjc3XFxcIiBncmFkaWVudFRyYW5zZm9ybT1cXFwibWF0cml4KDI0LCAwLCAwLCAtMjQsIDU3NTYuNzIsIDg3ODguMTkpXFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCI+PHN0b3Agb2Zmc2V0PVxcXCIwXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZlNWEzXFxcIi8+PHN0b3Agb2Zmc2V0PVxcXCIxXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZhZDI5XFxcIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHRpdGxlPjUt5ZOHPC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48ZyBpZD1cXFwi6aG16Z2iLTFcXFwiPjxnIGlkPVxcXCLnrKzkuIDmjpJcXFwiPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTI0LDEyQTEyLDEyLDAsMSwxLDEyLDAsMTIsMTIsMCwwLDEsMjQsMTJcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xMiwxNGEyNy44NSwyNy44NSwwLDAsMS02LS42N2MtLjQ1LS4wOC0xLjMzLDAtMS4zMywxLjM0LDAsMi42NiwzLjA2LDYsNy4zMyw2czcuMzMtMy4zNCw3LjMzLTZjMC0xLjM0LS44OC0xLjQyLTEuMzMtMS4zNEEyNy44NSwyNy44NSwwLDAsMSwxMiwxNFpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk02LDE0LjY3YTIxLjEzLDIxLjEzLDAsMCwwLDYsLjY2LDIxLjEzLDIxLjEzLDAsMCwwLDYtLjY2cy0xLjMzLDIuNjYtNiwyLjY2UzYsMTQuNjcsNiwxNC42N1pcXFwiLz48cGF0aCBpZD1cXFwi5b2i54q2XFxcIiBjbGFzcz1cXFwiY2xzLTRcXFwiIGQ9XFxcIk0xMC40NSwyLjk0bC0zLC41NEw1Ljg3LjY0QS44NS44NSwwLDAsMCw1LC4yMmEuODQuODQsMCwwLDAtLjY4LjY5bC0uNDksMy4yLTMsLjU0QS44My44MywwLDAsMCwuNTgsNi4yMkwzLjI5LDcuNTFsLS41LDMuMjFhLjg0Ljg0LDAsMCwwLC44MiwxLC44Ni44NiwwLDAsMCwuNi0uMjVMNi41NSw5LjA2bDMsMS40M2EuODQuODQsMCwwLDAsMS4wOS0xLjE2TDkuMDgsNi40OWwyLjExLTIuMTRhLjgyLjgyLDAsMCwwLC4xNS0xQS44NC44NCwwLDAsMCwxMC40NSwyLjk0Wm0zLjEsMCwzLC41NEwxOC4xMy42NEEuODUuODUsMCwwLDEsMTksLjIyYS44NC44NCwwLDAsMSwuNjguNjlsLjQ5LDMuMiwzLC41NGEuODMuODMsMCwwLDEsLjIxLDEuNTdMMjAuNzEsNy41MWwuNSwzLjIxYS44NC44NCwwLDAsMS0uODIsMSwuODYuODYsMCwwLDEtLjYtLjI1TDE3LjQ1LDkuMDZsLTMsMS40M2EuODQuODQsMCwwLDEtMS4wOS0xLjE2bDEuNTctMi44NEwxMi44MSw0LjM1YS44Mi44MiwwLDAsMS0uMTUtMUEuODQuODQsMCwwLDEsMTMuNTUsMi45NFpcXFwiLz48L2c+PC9nPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy93b3cuc3ZnXCIsXCIvc3ZnXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZnVuY3Rpb24gZm9ybWF0KHRleHQpIHtyZXR1cm4gZnVuY3Rpb24oeCwgeSkge3ggPSAoK3h8MCk7eSA9ICgreXwwKTt2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2VsLmlubmVySFRNTCA9IFwiPHN2Zz48Zz48Zz5cIiArIHRleHQgKyBcIjwvZz48L2c+PC9zdmc+XCI7ZWwgPSBlbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07ZWwuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO3JldHVybiBlbH19XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdChcIjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZDJhMDc3O30uY2xzLTJ7ZmlsbDojZjNkMmEyO308L3N0eWxlPjwvZGVmcz48dGl0bGU+NDIt6IC2PC90aXRsZT48ZyBpZD1cXFwi5Zu+5bGCXzJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDJcXFwiPjxnIGlkPVxcXCLlm77lsYJfMS0yXFxcIiBkYXRhLW5hbWU9XFxcIuWbvuWxgiAxXFxcIj48cGF0aCBpZD1cXFwi6Lev5b6EXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGQ9XFxcIk0xMy43MSwxMS4wNmEyLjU4LDIuNTgsMCwwLDAtLjYtLjQ0bC0uMjgtLjkzLTUuNDksMC0uMjEuNzVhMi4zNywyLjM3LDAsMCwwLTEsLjQ5TDMuNyw4LjE4YTEuNiwxLjYsMCwwLDAtMSwxLjQ3di42NUwwLDEzLjE2djEuNUw2Ljg2LDIyczcuMjEtMTAuNDgsNy4yMy0xMC40NkEzLDMsMCwwLDAsMTMuNzEsMTEuMDZaXFxcIi8+PGcgaWQ9XFxcIue8lue7hFxcXCI+PHBhdGggaWQ9XFxcIuW9oueKtlxcXCIgY2xhc3M9XFxcImNscy0yXFxcIiBkPVxcXCJNMTIuMDYsMTAuMzZINy41NGEyLjcxLDIuNzEsMCwwLDAtLjQxLDBsMC0uMTlMNC44MywxLjY3QTEuMzUsMS4zNSwwLDAsMSw1Ljg5LDAsMS4zMywxLjMzLDAsMCwxLDcuNTEsMS4xTDkuNjQsOWwuODkuMDdMMTIsMS44OWExLjM3LDEuMzcsMCwwLDEsMi43My4yNkwxMy4yNiw5LjhsLS4xNS44MkEyLjMzLDIuMzMsMCwwLDAsMTIuMDYsMTAuMzZaTTEuMzEsOWguMTJBMS4zMSwxLjMxLDAsMCwxLDIuNzQsMTAuM3YyLjg2YTEuMzEsMS4zMSwwLDAsMS0xLjMxLDEuMzJIMS4zMUExLjMyLDEuMzIsMCwwLDEsMCwxMy4xNlYxMC4zQTEuMzEsMS4zMSwwLDAsMSwxLjMxLDlabTQuNzUsMiwwLDBhMiwyLDAsMCwwLS41MywxLjM2LjYyLjYyLDAsMCwwLDAsLjEzQTIsMiwwLDAsMCw2LDEzLjc2YTEuMDgsMS4wOCwwLDAsMS0uMTguMjQsMS4zNCwxLjM0LDAsMCwxLTEsLjQ4QTEuMzcsMS4zNywwLDAsMSwzLjQzLDEzLjFWOWExLjM2LDEuMzYsMCwwLDEsLjI3LS44MSwxLjM0LDEuMzQsMCwwLDEsMS4xLS41NkExLjM3LDEuMzcsMCwwLDEsNi4xNyw5VjEwLjlhMS4zMSwxLjMxLDAsMCwwLS4xMS4xMlpcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xzLTJcXFwiIGQ9XFxcIk0xLjQxLDE1LjE2YTIsMiwwLDAsMCwxLjY4LS45LDMuMTcsMy4xNywwLDAsMCwuMy4zNCwyLjA3LDIuMDcsMCwwLDAsMi44Ni0uMDYsMi4zLDIuMywwLDAsMCwuMjgtLjM0aDBhMS41LDEuNSwwLDAsMCwxLC4yOEg5LjI4YTQuNDgsNC40OCwwLDAsMC0uNy42OEE2LjQ2LDYuNDYsMCwwLDAsNy4yLDE5LjI4YS4zNC4zNCwwLDAsMCwuMzQuMzQuMzUuMzUsMCwwLDAsLjM1LS4zNCw1LjQ1LDUuNDUsMCwwLDEsMS42My00LjEyLDIuNjEsMi42MSwwLDAsMSwxLjcxLS42OGMuNDksMCwuNTgtLjY5LjA4LS42OUg3LjU0YTEuMzcsMS4zNywwLDAsMSwwLTIuNzRIMTNhMS40LDEuNCwwLDAsMSwxLjMxLDFsLjc1LDIuNDZhNy4zMiw3LjMyLDAsMCwxLC4yOCwxLjVjMCwzLjMtMy4yMiw2LjcyLTcuMTQsNi43MmE4LjIyLDguMjIsMCwwLDEtOC4yMi04SDBhMiwyLDAsMCwwLDEuMzEuNDlaXFxcIi8+PC9nPjwvZz48L2c+XCIpXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3N2Zy95ZWFoLnN2Z1wiLFwiL3N2Z1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmZ1bmN0aW9uIGZvcm1hdCh0ZXh0KSB7cmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHt4ID0gKCt4fDApO3kgPSAoK3l8MCk7dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlbC5pbm5lckhUTUwgPSBcIjxzdmc+PGc+PGc+XCIgKyB0ZXh0ICsgXCI8L2c+PC9nPjwvc3ZnPlwiO2VsID0gZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO2VsLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiKTtyZXR1cm4gZWx9fVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQoXCI8ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6dXJsKCPmnKrlkb3lkI3nmoTmuJDlj5gpO30uY2xzLTJ7ZmlsbDojZmZhYzMzO30uY2xzLTN7ZmlsbDojNjYyZTAwO30uY2xzLTR7ZmlsbDojZmY1ZTYxO308L3N0eWxlPjxyYWRpYWxHcmFkaWVudCBpZD1cXFwi5pyq5ZG95ZCN55qE5riQ5Y+YXFxcIiBjeD1cXFwiLTI2OC43OVxcXCIgY3k9XFxcIjM4My4xMlxcXCIgcj1cXFwiMC43N1xcXCIgZ3JhZGllbnRUcmFuc2Zvcm09XFxcIm1hdHJpeCgyNCwgMCwgMCwgLTI0LCA2NDYyLjg4LCA5MjAyLjY3KVxcXCIgZ3JhZGllbnRVbml0cz1cXFwidXNlclNwYWNlT25Vc2VcXFwiPjxzdG9wIG9mZnNldD1cXFwiMFxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmZTVhM1xcXCIvPjxzdG9wIG9mZnNldD1cXFwiMVxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZmYWQyOVxcXCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT4yMS3lpb3lkIM8L3RpdGxlPjxnIGlkPVxcXCLlm77lsYJfMlxcXCIgZGF0YS1uYW1lPVxcXCLlm77lsYIgMlxcXCI+PGcgaWQ9XFxcIuWbvuWxgl8xLTJcXFwiIGRhdGEtbmFtZT1cXFwi5Zu+5bGCIDFcXFwiPjxnIGlkPVxcXCLpobXpnaItMVxcXCI+PGcgaWQ9XFxcIuesrOS4ieaOklxcXCI+PGNpcmNsZSBpZD1cXFwi5qSt5ZyG5b2iXFxcIiBjbGFzcz1cXFwiY2xzLTFcXFwiIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMlxcXCIvPjxwYXRoIGlkPVxcXCLot6/lvoRcXFwiIGNsYXNzPVxcXCJjbHMtMlxcXCIgZD1cXFwiTTIxLjQsMTkuNDVhMywzLDAsMCwwLS43LTEuMTNsLTIuNDUtMi41M2E4LjA3LDguMDcsMCwwLDEtNC43OSw0LjUzbDIuNDYsMi40NmEyLjg5LDIuODksMCwwLDAsLjQ3LjM4LDEyLjA5LDEyLjA5LDAsMCwwLDUtMy43MVpcXFwiLz48cGF0aCBpZD1cXFwi5b2i54q2XFxcIiBjbGFzcz1cXFwiY2xzLTNcXFwiIGQ9XFxcIk00LjY3LDExLjMzYS42My42MywwLDAsMS0uMy0uMDcuNjYuNjYsMCwwLDEtLjMtLjg5LDMuNTUsMy41NSwwLDAsMSwzLjI2LTEuNywzLjU2LDMuNTYsMCwwLDEsMy4yNywxLjcuNjYuNjYsMCwwLDEtLjMuODlBLjY1LjY1LDAsMCwxLDkuNDEsMTFhMi4yOSwyLjI5LDAsMCwwLTIuMDgtMSwyLjMxLDIuMzEsMCwwLDAtMi4wNywxQS42NC42NCwwLDAsMSw0LjY3LDExLjMzWm0xNC42NiwwYS42My42MywwLDAsMCwuMy0uMDcuNjYuNjYsMCwwLDAsLjMtLjg5LDMuNTUsMy41NSwwLDAsMC0zLjI2LTEuNywzLjU2LDMuNTYsMCwwLDAtMy4yNywxLjcuNjYuNjYsMCwwLDAsLjMuODkuNjUuNjUsMCwwLDAsLjg5LS4yOSwyLjI5LDIuMjksMCwwLDEsMi4wOC0xLDIuMzEsMi4zMSwwLDAsMSwyLjA3LDEsLjY0LjY0LDAsMCwwLC41OS4zN1ptLjM0LDQuMzVhNy40OCw3LjQ4LDAsMCwwLC4zMS0uODUuNjcuNjcsMCwwLDAtMS4yOS0uMzNBNi43LDYuNywwLDAsMSwxMiwxOS4zMyw2LjcsNi43LDAsMCwxLDUuMzEsMTQuNS42Ny42NywwLDAsMCw0LDE0LjgzYTguMTIsOC4xMiwwLDAsMCw4LDUuODQsOC45Miw4LjkyLDAsMCwwLDIuODgtLjQ2LDguMSw4LjEsMCwwLDAsNC43OS00LjUzWlxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHMtNFxcXCIgZD1cXFwiTTIyLjEyLDE4LjIxbC0yLjQ1LTIuNTNhOC4xLDguMSwwLDAsMS00Ljc5LDQuNTNsMi40NSwyLjQ2YTMuMzksMy4zOSwwLDAsMCw0LjY3LDBBMy4xNCwzLjE0LDAsMCwwLDIyLjEyLDE4LjIxWlxcXCIvPjwvZz48L2c+PC9nPjwvZz5cIilcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvc3ZnL3l1bS5zdmdcIixcIi9zdmdcIikiLG51bGwsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cdHZhciBQTFVTX1VSTF9TQUZFID0gJy0nLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIX1VSTF9TQUZFID0gJ18nLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUyB8fFxuXHRcdCAgICBjb2RlID09PSBQTFVTX1VSTF9TQUZFKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSCB8fFxuXHRcdCAgICBjb2RlID09PSBTTEFTSF9VUkxfU0FGRSlcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qc1wiLFwiLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MlxuXG4vKipcbiAqIElmIGBCdWZmZXIuX3VzZVR5cGVkQXJyYXlzYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKGNvbXBhdGlibGUgZG93biB0byBJRTYpXG4gKi9cbkJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBEZXRlY3QgaWYgYnJvd3NlciBzdXBwb3J0cyBUeXBlZCBBcnJheXMuIFN1cHBvcnRlZCBicm93c2VycyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLFxuICAvLyBDaHJvbWUgNyssIFNhZmFyaSA1LjErLCBPcGVyYSAxMS42KywgaU9TIDQuMisuIElmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYWRkaW5nXG4gIC8vIHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcywgdGhlbiB0aGF0J3MgdGhlIHNhbWUgYXMgbm8gYFVpbnQ4QXJyYXlgIHN1cHBvcnRcbiAgLy8gYmVjYXVzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gYWRkIGFsbCB0aGUgbm9kZSBCdWZmZXIgQVBJIG1ldGhvZHMuIFRoaXMgaXMgYW4gaXNzdWVcbiAgLy8gaW4gRmlyZWZveCA0LTI5LiBOb3cgZml4ZWQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOFxuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiZcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAvLyBDaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gV29ya2Fyb3VuZDogbm9kZSdzIGJhc2U2NCBpbXBsZW1lbnRhdGlvbiBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgc3RyaW5nc1xuICAvLyB3aGlsZSBiYXNlNjQtanMgZG9lcyBub3QuXG4gIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcgJiYgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzdWJqZWN0ID0gc3RyaW5ndHJpbShzdWJqZWN0KVxuICAgIHdoaWxlIChzdWJqZWN0Lmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0ICsgJz0nXG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0KVxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QubGVuZ3RoKSAvLyBhc3N1bWUgdGhhdCBvYmplY3QgaXMgYXJyYXktbGlrZVxuICBlbHNlXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCBuZWVkcyB0byBiZSBhIG51bWJlciwgYXJyYXkgb3Igc3RyaW5nLicpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgICBlbHNlXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3RbaV1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuLy8gU1RBVElDIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPT0gbnVsbCAmJiBiICE9PSB1bmRlZmluZWQgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoIC8gMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGFzc2VydChpc0FycmF5KGxpc3QpLCAnVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdCwgW3RvdGFsTGVuZ3RoXSlcXG4nICtcbiAgICAgICdsaXN0IHNob3VsZCBiZSBhbiBBcnJheS4nKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB0b3RhbExlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBCVUZGRVIgSU5TVEFOQ0UgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gX2hleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgYXNzZXJ0KHN0ckxlbiAlIDIgPT09IDAsICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBhc3NlcnQoIWlzTmFOKGJ5dGUpLCAnSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPSBpICogMlxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBfdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2FzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2JpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIF9hc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcbiAgc3RhcnQgPSBOdW1iZXIoc3RhcnQpIHx8IDBcbiAgZW5kID0gKGVuZCAhPT0gdW5kZWZpbmVkKVxuICAgID8gTnVtYmVyKGVuZClcbiAgICA6IGVuZCA9IHNlbGYubGVuZ3RoXG5cbiAgLy8gRmFzdHBhdGggZW1wdHkgc3RyaW5nc1xuICBpZiAoZW5kID09PSBzdGFydClcbiAgICByZXR1cm4gJydcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGFzc2VydCh0YXJnZXRfc3RhcnQgPj0gMCAmJiB0YXJnZXRfc3RhcnQgPCB0YXJnZXQubGVuZ3RoLFxuICAgICAgJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSBzb3VyY2UubGVuZ3RoLCAnc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAgfHwgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBfdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKylcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gX2JpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIF9hc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gX2hleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSsxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSBjbGFtcChzdGFydCwgbGVuLCAwKVxuICBlbmQgPSBjbGFtcChlbmQsIGxlbiwgbGVuKVxuXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgdmFsID0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICB9IGVsc2Uge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDJdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgICB2YWwgfD0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0ICsgM10gPDwgMjQgPj4+IDApXG4gIH0gZWxzZSB7XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMV0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMl0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAzXVxuICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0XSA8PCAyNCA+Pj4gMClcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsXG4gICAgICAgICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICB2YXIgbmVnID0gdGhpc1tvZmZzZXRdICYgMHg4MFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQxNihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MzIoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMDAwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZmZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRmxvYXQgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWREb3VibGUgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuXG5cbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAgICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZmZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2YsIC0weDgwKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICB0aGlzLndyaXRlVUludDgodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICB0aGlzLndyaXRlVUludDgoMHhmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmLCAtMHg4MDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQxNihidWYsIDB4ZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQzMihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MzIoYnVmLCAweGZmZmZmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCxcbiAgICAgICAgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5jaGFyQ29kZUF0KDApXG4gIH1cblxuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpLCAndmFsdWUgaXMgbm90IGEgbnVtYmVyJylcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgdGhpcy5sZW5ndGgsICdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSB0aGlzLmxlbmd0aCwgJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHRoaXNbaV0gPSB2YWx1ZVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dCA9IFtdXG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgb3V0W2ldID0gdG9IZXgodGhpc1tpXSlcbiAgICBpZiAoaSA9PT0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUykge1xuICAgICAgb3V0W2kgKyAxXSA9ICcuLi4nXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIG91dC5qb2luKCcgJykgKyAnPidcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpXG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxuLy8gc2xpY2Uoc3RhcnQsIGVuZClcbmZ1bmN0aW9uIGNsYW1wIChpbmRleCwgbGVuLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgaW5kZXggPSB+fmluZGV4OyAgLy8gQ29lcmNlIHRvIGludGVnZXIuXG4gIGlmIChpbmRleCA+PSBsZW4pIHJldHVybiBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICBpbmRleCArPSBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICByZXR1cm4gMFxufVxuXG5mdW5jdGlvbiBjb2VyY2UgKGxlbmd0aCkge1xuICAvLyBDb2VyY2UgbGVuZ3RoIHRvIGEgbnVtYmVyIChwb3NzaWJseSBOYU4pLCByb3VuZCB1cFxuICAvLyBpbiBjYXNlIGl0J3MgZnJhY3Rpb25hbCAoZS5nLiAxMjMuNDU2KSB0aGVuIGRvIGFcbiAgLy8gZG91YmxlIG5lZ2F0ZSB0byBjb2VyY2UgYSBOYU4gdG8gMC4gRWFzeSwgcmlnaHQ/XG4gIGxlbmd0aCA9IH5+TWF0aC5jZWlsKCtsZW5ndGgpXG4gIHJldHVybiBsZW5ndGggPCAwID8gMCA6IGxlbmd0aFxufVxuXG5mdW5jdGlvbiBpc0FycmF5IChzdWJqZWN0KSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoc3ViamVjdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ViamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgfSkoc3ViamVjdClcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3RilcbiAgICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKylcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgcG9zXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuXG4vKlxuICogV2UgaGF2ZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdmFsdWUgaXMgYSB2YWxpZCBpbnRlZ2VyLiBUaGlzIG1lYW5zIHRoYXQgaXRcbiAqIGlzIG5vbi1uZWdhdGl2ZS4gSXQgaGFzIG5vIGZyYWN0aW9uYWwgY29tcG9uZW50IGFuZCB0aGF0IGl0IGRvZXMgbm90XG4gKiBleGNlZWQgdGhlIG1heGltdW0gYWxsb3dlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gdmVyaWZ1aW50ICh2YWx1ZSwgbWF4KSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA+PSAwLCAnc3BlY2lmaWVkIGEgbmVnYXRpdmUgdmFsdWUgZm9yIHdyaXRpbmcgYW4gdW5zaWduZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgaXMgbGFyZ2VyIHRoYW4gbWF4aW11bSB2YWx1ZSBmb3IgdHlwZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmc2ludCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmSUVFRTc1NCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAodGVzdCwgbWVzc2FnZSkge1xuICBpZiAoIXRlc3QpIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICdGYWlsZWQgYXNzZXJ0aW9uJylcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCIsXCIvLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIixcIi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qc1wiLFwiLy4uL25vZGVfbW9kdWxlcy9pZWVlNzU0XCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qc1wiLFwiLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qc1wiLFwiLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXCIsXCIvLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzXCIsXCIvLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiK3hLdmFiXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcIixcIi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1wiLFwiLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYlwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcIixcIi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0Jzt2YXIgYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLGM9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxkPWI/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixlPWI/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGY9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsZz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxoPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGs9Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxsPWI/U3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsbT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsbj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixwPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLHE9Yj9cblN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpOjYwMTIwLHI9Yj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTo2MDExNSx0PWI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsdj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5ibG9ja1wiKTo2MDEyMSx3PWI/U3ltYm9sLmZvcihcInJlYWN0LmZ1bmRhbWVudGFsXCIpOjYwMTE3LHg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucmVzcG9uZGVyXCIpOjYwMTE4LHk9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc2NvcGVcIik6NjAxMTk7XG5mdW5jdGlvbiB6KGEpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpe3ZhciB1PWEuJCR0eXBlb2Y7c3dpdGNoKHUpe2Nhc2UgYzpzd2l0Y2goYT1hLnR5cGUsYSl7Y2FzZSBsOmNhc2UgbTpjYXNlIGU6Y2FzZSBnOmNhc2UgZjpjYXNlIHA6cmV0dXJuIGE7ZGVmYXVsdDpzd2l0Y2goYT1hJiZhLiQkdHlwZW9mLGEpe2Nhc2UgazpjYXNlIG46Y2FzZSB0OmNhc2UgcjpjYXNlIGg6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm4gdX19Y2FzZSBkOnJldHVybiB1fX19ZnVuY3Rpb24gQShhKXtyZXR1cm4geihhKT09PW19ZXhwb3J0cy5Bc3luY01vZGU9bDtleHBvcnRzLkNvbmN1cnJlbnRNb2RlPW07ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9aztleHBvcnRzLkNvbnRleHRQcm92aWRlcj1oO2V4cG9ydHMuRWxlbWVudD1jO2V4cG9ydHMuRm9yd2FyZFJlZj1uO2V4cG9ydHMuRnJhZ21lbnQ9ZTtleHBvcnRzLkxhenk9dDtleHBvcnRzLk1lbW89cjtleHBvcnRzLlBvcnRhbD1kO1xuZXhwb3J0cy5Qcm9maWxlcj1nO2V4cG9ydHMuU3RyaWN0TW9kZT1mO2V4cG9ydHMuU3VzcGVuc2U9cDtleHBvcnRzLmlzQXN5bmNNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiBBKGEpfHx6KGEpPT09bH07ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPUE7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWt9O2V4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1ofTtleHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Y307ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1ufTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1lfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXR9O1xuZXhwb3J0cy5pc01lbW89ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1yfTtleHBvcnRzLmlzUG9ydGFsPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09ZH07ZXhwb3J0cy5pc1Byb2ZpbGVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09Z307ZXhwb3J0cy5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1mfTtleHBvcnRzLmlzU3VzcGVuc2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1wfTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlPWZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGF8fGE9PT1lfHxhPT09bXx8YT09PWd8fGE9PT1mfHxhPT09cHx8YT09PXF8fFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09dHx8YS4kJHR5cGVvZj09PXJ8fGEuJCR0eXBlb2Y9PT1ofHxhLiQkdHlwZW9mPT09a3x8YS4kJHR5cGVvZj09PW58fGEuJCR0eXBlb2Y9PT13fHxhLiQkdHlwZW9mPT09eHx8YS4kJHR5cGVvZj09PXl8fGEuJCR0eXBlb2Y9PT12KX07ZXhwb3J0cy50eXBlT2Y9ejtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIreEt2YWJcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXCIsXCIvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIit4S3ZhYlwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qc1wiLFwiLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pc1wiKSJdfQ==
