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