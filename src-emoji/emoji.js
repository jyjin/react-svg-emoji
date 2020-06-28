import React from 'react';
import PropTypes from 'prop-types';
import LANG from './locale';
import { default as emojiSvgs } from './map';
import IconEmoji from './svg/emojipacks.svg'

const emojis = LANG['zh_CN']
const propTypes = {
  onSelect: PropTypes.func.isRequired,
  style: PropTypes.object
}

const defaultProps = {
  style: {
    panel: {
      position: 'absoluate',
      bottom: '-20px',
      display: 'flex',
      flexWrap: 'wrap',
      width: '390px',

    },
    emoji: {
      display: 'inline-block',
      margin: '10px',
      cursor: 'pointer',
      borderRadius: '2px',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
}

const log = (info, data) => {
  console.log(`[react-svg emoji] ${info}`, data)
}



export const parseToEmoji = (sourceStr) => {
  const reg = /\[(.+?)\]/g;
  const targets = sourceStr.match(reg)

  targets.map(item => {
    const text = item.substring(1, item.length - 1)
    const isEmoji = Object.values(emojis).includes(text)
    if (isEmoji) {

      const index = Object.values(emojis).findIndex(o => o === text)
      const key = Object.keys(emojis)[index]
      const _target = `
      <embed 
        src="${emojiSvgs[key.replace('-', '_')]}"
        style="pointerEvents:none"
        width="24"
        height="24"
        type="image/svg+xml"
        pluginspage="http://www.adobe.com/svg/viewer/install/" 
      />
    `
      log('sourceStr == ', sourceStr)
      log('item == ', item)
      log('target == ', _target)
      sourceStr = sourceStr.replace(item, _target)
    }
  })

  return sourceStr

}

class Emoji extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }
  }

  componentWillMount() {
    document.onclick = () => {
      this.setState({
        open: false
      })
    }
  }

  onSelect(data) {
    // log(' react data == ', data)
    this.setState({
      open: false
    }, () => {
      this.props.onSelect(`[${data.text}]`, data.key, data);
    })
  }

  onOpen() {
    this.setState({
      open: !this.state.open
    })
  }

  onMouseOver() {
    this.setState({
      hover: true
    })
  }

  onMouseLeave() {
    this.setState({
      hover: false
    })
  }

  render() {

    const styles = { ...defaultProps.style, ...this.props.style };
    let emojiStyle = { ...styles.emoji }
    let panelStyle = { ...styles.panel }

    if (this.state.open) {
      panelStyle.display = 'flex'
      panelStyle.padding = '10px'
      panelStyle.flexWrap = 'wrap'
      panelStyle.justifyContent = 'space-between'
      panelStyle.width = '390px'
      panelStyle.position = 'absolute'
      panelStyle.bottom = '35px'
      panelStyle.boxShadow = '0px 2px 8px 0px rgba(0,0,0,0.15)'
    } else {
      panelStyle.display = 'none'
    }

    return (
      <span
        className="react-svg-emoji"
        onClick={e => { e.stopPropagation(); e.preventDefault() }}
        style={{
          position: 'relative',
          textAlign: 'left'

        }}>
        <span
          key={'emoji-start'}
          className="panel"
          style={emojiStyle}
          text={'emoji'}
          onClick={this.onOpen.bind(this)}
        >
          <embed src={IconEmoji}
            style={{ pointerEvents: 'none' }}
            width="24"
            height="24"
            type="image/svg+xml"
            pluginspage="http://www.adobe.com/svg/viewer/install/" />
        </span>
        <div style={panelStyle}>
          <style>
            {`
            .panel:hover{
              background: #eee;
            }
          `}
          </style>
          {Object.keys(emojis).map(item => {

            // log('key == ', item)
            // log('text == ', emojis[item])


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
                width="24"
                height="24"
                type="image/svg+xml"
                pluginspage="http://www.adobe.com/svg/viewer/install/" />
            </span>
          })}
        </div>

      </span>
    );
  }
}

Emoji.propTypes = propTypes;
Emoji.defaultProps = defaultProps;
window.Emoji = Emoji

exports.Emoji = Emoji