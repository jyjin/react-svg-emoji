import Emoji from './emoji';
import {
  parseToEmoji,
  insertStr,
  getCursortPosition
} from './tool';

// const withLanguage = (lan) => {
//   window.emojiLang = lan || 'zh_CN'
//   return {
//     Emoji,
//     parseToEmoji,
//     insertStr,
//     getCursortPosition,
//   }
// }

module.exports = {
  Emoji,
  parseToEmoji,
  insertStr,
  getCursortPosition,
}