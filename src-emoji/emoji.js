import React from 'react';
import PropTypes from 'prop-types';
// import styles from './emoji.less';
import LANG from './locale';
import { default as emojiSvgs } from './map';

const propTypes = {
  onSelect: PropTypes.func.isRequired,
  styles: PropTypes.object
}

const defaultProps = {
  styles: {
    panel: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '300px',
    },
    emoji: {
      display: 'inline-block',
      margin: '2px',
      cursor: 'pointer'
    }
  }
}

const log = (info, data) => {
  console.log(`[react-svg emoji] ${info}`, data)
}

class Emoji extends React.Component {

  constructor(props) {
    super(props);
  }

  onSelect(data) {
    log(' react data == ', data)
    this.props.onSelect(data);
  }

  render() {

    const styles = this.props.styles || {};
    const emojis = LANG['zh_CN']

    return (
      <div style={styles.panel}>
        {Object.keys(emojis).map(item => {

          log('key == ', item)
          log('text == ', emojis[item])
          return <span
            key={item}
            style={styles.emoji}
            text={emojis[item]}
            onClick={this.onSelect.bind(this, { type: item, text: emojis[item] })}
          >
            <embed src={emojiSvgs[item.replace('-', '_')]}
              width="20"
              height="20"
              type="image/svg+xml"
              pluginspage="http://www.adobe.com/svg/viewer/install/" />
          </span>
        })}
      </div>
    );
  }
}

Emoji.propTypes = propTypes;
Emoji.defaultProps = defaultProps;
window.Emoji = Emoji

export default Emoji;