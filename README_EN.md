# React-svg-emoji

A react emoji package by svg. 

- customlize all styles
- customlize all svg emoji
- support language in futures

# Install
```
npm install react-svg-emoji --save-dev
```
# Useage

```
import ReactSvgEmoji from "react-svg-emojis/es5/index";

const { Emoji, parseToEmoji, insertStr, getCursortPosition } = ReactSvgEmoji;


onSelect(text, key, data) {
  // insert emoji string to input ele's value
  var index = getCursortPosition(document.querySelector('#input'))
  var value = insertStr(this.state.value, index, text)
  // parse emoji string to dom string for rendering
  var html = parseToEmoji(value)

  this.setState({
    value: value,
    html: html,
  })
}

onChange(e) {
  var html = parseToEmoji(e.target.value)
  this.setState({
    value: e.target.value,
    html: html,
  })
}


render(){
  const style={
    // root style
    root: {},
    // enterance icon style
    icon: {},
    pop: {
      //when emoji list pop hide style
      ...,
      hover: {
        //when emoji list pop show style
        ...
      }
    },
    // single emoji style in pop list
    item: {},

  }

  return (
    <>
      
     <Emoji
        // emoji size in pop list
        width={24}
        height={24}
        // enterance icon size 
        iconWidth={20}
        iconHeight={20}
        // more detail customlize styles
        style={style}
        // callback when picker one emoji 
        onSelect={this.onSelect.bind(this)}
      />

      <!-- input to enter some emoji string -->
      <input id="input" value={this.state.value} onChange={this.onChange.bind(this)}>

      <!-- parse emojistring to dom and render -->
      <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
    </>
  )
}
```

# Api

### 1. Component Api


Name|Type|Desc|
--|--|--|--
icon | `DOM element`, default is a SVG element | you can customlize the enterance by this
onSelect| `Function`, (text, key, data)=>{...}|callback when select a emoji. `text` is emoji text desc, `key` is the unique key, `data` is {key, text}
width| `String`, default is 24px| emoji item size 
height| `String`, default is 24px| emoji item size 
iconWidth| `String`, default is 20px| emoji icon enterance size 
iconHeight| `String`, default is 20px| emoji icon enterance size 
style| `Object`, default see follows| rewrite the style by this
style.root| `Object`, style={root:{your style}}|root element style
style.icon| `Object`, style={icon:{your style}}|emoji list style, style.emoji single emoji wrap style
style.pop| `Object`, style={pop:{your style}}|emoji list style, style.emoji single emoji wrap style
style.item| `Object`, style={item:{your style}}|emoji list style, style.emoji single emoji wrap style

### 2.Tool Function Api


Name|Type|Desc|
--|--|--|--
insertStr | `Function`, (source , start, target) => { return [new String]} | insert `target` to `index` of `string`
`getCursortPosition` | `Function`, (ele) => { return [index]} | Get cursor postion for your element need insert the emoji. ele is a dom element, you can get by document.getElementXXX or document.querySelector(XXX)
`parseToEmoji` | `Function`, (sourceString, style) => { return [DOM string]} | Transform the string which contain some `[text]` emoji to DOM element string. `sourceString` is the target string need to tranform, `style = {width, height}` can set the size before you show emoji.


> package default style 

```
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



```

> Note
- You can rewrite all styles by `style`
- Single emoji hover style rewrite, please rewrite class `react-svg-emoji-item`

# Example

You can see the example by download the repo [react-svg-emoji](https://github.com/jyjin/react-svg-emoji), and run with follow steps

```
npm i

npm start
```

Or you want edit this code by watching

```
npm run watch
```

# Author

jyjin

# Change Log

- 2020.06.23 

  create by jyjin

  + frame create/ setting add

  + workflow coding

- 2020.06.28 

  update by jyjin
  
  First release verson

  + add icon api
  + improve styl api
  + bug fix
  + improve README


# Listense
MIT