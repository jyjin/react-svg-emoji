import LANG from './locale';
import { default as emojiSvgs } from './map';

const emojis = LANG['zh_CN']

/**
 * 日志打印
 * @param {*} info 
 * @param {*} data 
 */
export const log = (info, data) => {
  console.log(`[react-svg emoji] ${info}`, data)
}

/**
 * 
 * @param {原字符串} soure 
 * @param {开始索引号} start 
 * @param {待插入的字符串} target 
 */
export const insertStr = (soure = '', start, target) => {
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
 * 将含表情的字符串转dom字符串
 * @param {含表情字符串的原字符串} sourceStr 
 * @param {表情显示样式} style = {width, height} 
 */
export const parseToEmoji = (sourceStr, style = { width: '24px', height: '24px' }, lang = 'zh_CN') => {

  const emojis = LANG[lang]

  if (!sourceStr) {
    console.error('[React svg emoji] parameter is required, but it is ' + sourceStr + ' now !')
    return ''
  }

  if (!style) {
    style = {
      width: '24px',
      height: '24px'
    }
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