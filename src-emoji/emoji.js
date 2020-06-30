import React from 'react';
import PropTypes from 'prop-types';
import LANG from './locale';
import { default as emojiSvgs } from './map';
import IconEmoji from './svg/emojipacks.svg';

/**
 * 默认样式
 */
const defaultProps = {
  lang: 'zh_CN',
  width: 24,
  height: 24,
  iconWidth: 20,
  iconHeight: 20,
  style: {
    // 根样式
    root: {
      position: 'relative',
      textAlign: 'left'

    },
    // 启动图标样式
    icon: {
      display: 'inline-block',
      margin: '10px',
      cursor: 'pointer',
      borderRadius: '2px',
      alignItems: 'center',
      justifyContent: 'center'
    },
    // 表情列表盒子pop框样式
    pop: {
      position: 'absolute',
      bottom: '35px',
      padding: '10px',
      display: 'none',
      background: '#fff',
      width: '390px',
      height: 'fit-content',
      hover: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        boxShadow: '0px 2px 8px 0px rgba(0,0,0,0.15)'
      }
    },
    // 单个表情盒子样式
    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2px',
      margin: '10px',
      cursor: 'pointer',
      borderRadius: '2px',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.1s linear',
    },

  }
}

const propTypes = {
  icon: PropTypes.React,
  onSelect: PropTypes.func.isRequired,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  style: PropTypes.object
}

/**
 * 渲染表情组件
 */
class Emoji extends React.Component {

  constructor(props) {
    super(props);

    this.emojis = LANG[this.props.lang || 'zh_CN']

    this.state = {
      lang: this.props.lang,
      open: (this.props.model === 'manual' && this.props.visible) || false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.lang !== this.props.lang) {
      this.emojis = LANG[nextProps.lang]
      this.setState({
        lang: nextProps.lang
      })
    }
  }

  componentWillMount() {
    window.addEventListener('click', this.close.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.close.bind(this))
  }

  // 表情选择框关闭
  close() {
    this.setState({
      open: false
    })
  }

  // 表情选择回调
  onSelect(data) {
    // log(' react data == ', data)
    if (!this.props.onSelect) {
      console.error('[React svg emoji] onSelect is required, but now missing this function!')
    }
    this.setState({
      open: false
    }, () => {
      typeof this.props.onSelect === 'function' && this.props.onSelect(`[${data.text}]`, data.key, data);
    })
  }

  // 表情选择打开
  onOpen() {
    this.setState({
      open: !this.state.open
    })
  }

  // 表情hover
  onMouseOver(data) {
    this.setState({
      hover: true
    })
    typeof this.props.onMouseOver === 'function' && this.props.onMouseOver(data)
  }

  // 表情取消hover
  onMouseLeave() {
    this.setState({
      hover: false
    })
    typeof this.props.onMouseOver === 'onMouseLeave' && this.props.onMouseLeave(data)
  }

  render() {
    let rootStyle = { ...defaultProps.style.root, ...this.props.style.root }
    let iconStyle = { ...defaultProps.style.icon, ...this.props.style.icon || {} }
    let poptyle = { ...defaultProps.style.pop, ...this.props.style.pop || {} }
    let itemtyle = { ...defaultProps.style.item, ...this.props.style.item || {} }
    let { style, ...props } = { ...defaultProps, ...this.props }
    let { hover, ...other } = poptyle
    const emojis = this.emojis

    if (this.props.model && this.props.model === 'manual') {
      // 自定义入口
      if (this.props.visible) {
        poptyle = { ...other, ...hover }
      } else {
        poptyle = { ...other }
      }
    } else {
      // 默认带入口
      if (this.state.open) {
        poptyle = { ...other, ...hover }
      } else {
        poptyle = { ...other }
      }
    }


    return (
      <span
        className="react-svg-emoji"
        onClick={e => { e.preventDefault(); e.stopPropagation(); }}
        style={rootStyle}>
        {/* 入口图标按钮 */}
        {this.props.model && this.props.model === 'manual' ?
          null :
          <span
            key={'emoji-start'}
            className="react-svg-emoji-icon"
            style={iconStyle}
            text={'emoji'}
            onClick={this.onOpen.bind(this)}
          >
            {this.props.icon ?
              this.props.icon :
              <img src={IconEmoji}
                style={{ pointerEvents: 'none' }}
                width={props.iconWidth}
                height={props.iconHeight}
              // type="image/svg+xml"
              // pluginspage="http://www.adobe.com/svg/viewer/install/" 
              />}
          </span>
        }

        {/* 表情选择框 */}
        <div
          className="react-svg-emoji-pop"
          style={poptyle}
        >
          <style>
            {`
            .react-svg-emoji-item:hover{
              background: #eee;
              transform: scale(1.5);
            }
          `}
          </style>
          {Object.keys(emojis).map(item => {

            // log('key == ', item)
            // log('text == ', emojis[item])
            return <span
              key={item}
              className="react-svg-emoji-item"
              style={itemtyle}
              text={emojis[item]}
              onMouseOver={this.onMouseOver.bind(this, item)}
              onMouseLeave={this.onMouseLeave.bind(this, item)}
              onClick={this.onSelect.bind(this, { type: item, text: emojis[item] })}
            >
              <img src={emojiSvgs[item.replace('-', '_')]}
                style={{ pointerEvents: 'none' }}
                width={props.width}
                height={props.height}
              // type="image/svg+xml"
              // pluginspage="http://www.adobe.com/svg/viewer/install/"
              />
            </span>
          })}
        </div>

      </span>
    );
  }
}

Emoji.propTypes = propTypes;
Emoji.defaultProps = defaultProps;

export default Emoji