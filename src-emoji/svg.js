export default class Svg extends React.Component {
  render() {
    return <span
      key={item}
      className="panel"
      style={emojiStyle}
      text={emojis[item]}
      onMouseOver={this.onMouseOver.bind(this, item)}
      onMouseLeave={this.onMouseLeave.bind(this, item)}
      onClick={this.onSelect.bind(this, { type: item, text: emojis[item] })}
    >
      <embed src={emojiSvgs[item.replace('-', '_')]}
        style={{ pointerEvents: 'none' }}
        width="20"
        height="20"
        type="image/svg+xml"
        pluginspage="http://www.adobe.com/svg/viewer/install/" />
    </span>
  }
}