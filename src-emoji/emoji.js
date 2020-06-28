import React from 'react';
import PropTypes, { nominalTypeHack } from 'prop-types';
import LANG from './locale';
import { default as emojiSvgs } from './map';
import IconEmoji from './svg/emojipacks.svg'

const emojis = LANG['zh_CN']

/**
 * 日志打印
 * @param {*} info 
 * @param {*} data 
 */
const log = (info, data) => {
  console.log(`[react-svg emoji] ${info}`, data)
}

/**
 * 
 * @param {原字符串} soure 
 * @param {开始索引号} start 
 * @param {待插入的字符串} target 
 */
export const insertStr = (soure, start, target) => {
  return soure.slice(0, start) + target + soure.slice(start);
}

/**
 * 获取ele节点的光标位置
 * @param {dom节点} ele 
 */
export const getCursortPosition = ele => {
  var cursorIndex = 0;
  if (document.selection) {
    // IE Support
    ele.focus();
    var range = document.selection.createRange();
    range.moveStart('character', -ele.value.length);
    cursorIndex = range.text.length;
  } else if (ele.selectionStart || ele.selectionStart == 0) {
    // another support
    cursorIndex = ele.selectionStart;
  }
  return cursorIndex;
}



/**
 * 默认样式
 */
const defaultProps = {
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
 * 将含表情的字符串转dom字符串
 * @param {含表情字符串的原字符串} sourceStr 
 * @param {表情显示样式} style = {width, height} 
 */
export const parseToEmoji = (sourceStr, style = { width: '24px', height: '24px' }) => {

  if (!sourceStr) {
    console.error('[React svg emoji] parameter is required, but it is ' + sourceStr + ' now !')
    return ''
  }

  const reg = /\[(.+?)\]/g;
  const targets = sourceStr.match(reg)

  targets && targets.length && targets.map(item => {

    const text = item.substring(1, item.length - 1)
    const isEmoji = Object.values(emojis).includes(text)

    if (isEmoji) {

      const index = Object.values(emojis).findIndex(o => o === text)
      const key = Object.keys(emojis)[index]
      const _target = `
      <embed 
        src="${emojiSvgs[key.replace('-', '_')]}"
        style="pointerEvents:none"
        width="${style.width}"
        height=""${style.height}"
        type="image/svg+xml"
        pluginspage="http://www.adobe.com/svg/viewer/install/" 
      />
    `
      // log('sourceStr == ', sourceStr)
      // log('item == ', item)
      // log('target == ', _target)
      sourceStr = sourceStr.replace(item, _target)
    }
  })

  return sourceStr

}

/**
 * 渲染表情组件
 */
class Emoji extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: (this.props.model === 'manual' && this.props.visible) || false,
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
            className="react-svg-emoji-pop"
            style={iconStyle}
            text={'emoji'}
            onClick={this.onOpen.bind(this)}
          >
            {this.props.icon ?
              this.props.icon :
              <embed src={IconEmoji}
                style={{ pointerEvents: 'none' }}
                width={props.iconWidth}
                height={props.iconHeight}
                type="image/svg+xml"
                pluginspage="http://www.adobe.com/svg/viewer/install/" />}
          </span>
        }

        {/* 表情选择框 */}
        <div style={poptyle}>
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
              <embed src={emojiSvgs[item.replace('-', '_')]}
                style={{ pointerEvents: 'none' }}
                width={props.width}
                height={props.height}
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