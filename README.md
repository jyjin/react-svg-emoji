# React-svg-emoji

React emoji 表情包组件 

- 支持定制所有样式
- 未来可替换所有表情
- 未来可定制多语言

# 安装
```
npm install react-svg-emoji --save-dev
```
# 使用
```
import ReactSvgEmoji from "react-svg-emojis/es5/index";

const { Emoji, parseToEmoji, insertStr, getCursortPosition } = ReactSvgEmoji;


onSelect(text, key, data) {
  // 向光标处插入表情字符串
  var index = getCursortPosition(document.querySelector('#input'))
  var value = insertStr(this.state.value, index, text)
  // 解析表情串以渲染
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
    // 根元素样式
    root: {},
    // 入口图标样式
    icon: {},
    pop: {
      //选择框隐藏的样式
      ...,
      hover: {
        //选择框展示的样式
        ...
      }
    },
    // 单个表情的样式
    item: {},

  }

  return (
    <>
      
     <Emoji
        // 表情框中表情的尺寸
        width={24}
        height={24}
        // 入口图标的尺寸
        iconWidth={20}
        iconHeight={20}
        // 更加详细的样式定制
        style={style}
        // 选择表情的回调
        onSelect={this.onSelect.bind(this)}
      />

      <!-- 输入框输入表情 -->
      <input id="input" value={this.state.value} onChange={this.onChange.bind(this)}>

      <!-- 解析表情 -->
      <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
    </>
  )
}
```

# API

### 1. 组件API


Name|Type|Desc|
--|--|--|--
icon | `DOM element`, 默认是一个svg的图标 | 你可以通过此属性定制你的入口按
onSelect| `Function`, (text, key, data)=>{...}|选择一个表情时的回调函数. `text` 是表情图标的描述多语言text, `key` 是表情图标的唯一键, `data` 是 {key, text}的组合对象
width| `String`, 默认24px| 单个表情的尺寸
height| `String`, 默认24px| 单个表情的尺寸
iconWidth| `String`, 默认20px| 入口图标的尺寸
iconHeight| `String`, 默认20px| 入口图标的尺寸 
style| `Object`, 默认见下面的文档`默认样式`| 你可以通过style来覆盖重写所有样式
style.root| `Object`, style={root:{your style}}|root根节点样式
style.icon| `Object`, style={icon:{your style}}|入口图标盒子的样式
style.pop| `Object`, style={pop:{your style}}|图标列表盒子的样式
style.item| `Object`, style={item:{your style}}|单个图标的盒子样式

### 2.Tool Function Api


Name|Type|Desc|
--|--|--|--
insertStr | `Function`, (source , start, target) => { return [插入后的字符串]} | 插入 `target` 字符串到 `source`字符串的`index`位置
`getCursortPosition` | `Function`, (ele) => { return [位置索引]} | 获取ele元素的光标位置. ele是DOM元素, 你可以通过该document.getElementXXX 或者document.querySelector(XXX)获取你需要操作的DOM元素
`parseToEmoji` | `Function`, (sourceString, style) => { return [DOM字符串]} | 转换带有一些格式如`[text]` 多语言text的字符串为DOM元素的字符串. `sourceString`需要转化的字符串, `style = {width, height}` 设置转化后展示的大小尺寸

> 包中默认的样式 

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

> 注意
- 你可以通过 `style`属性改写所有样式
- 单个表情的样式、选中样式, 请通过覆盖样式属性`react-svg-emoji-item`进行改写

# 例子

你可以进入[react-svg-emoji](https://github.com/jyjin/react-svg-emoji)下载源码，然后通过运行下面的命令看例子：
```
npm i

npm start
```

有可能你也想扩展代码，修改需要监听

```
npm run watch
```

# Author

jyjin

# Change Log

- 2020.06.23 

  create by jyjin

  + 框架搭建、配置

  + 流程代码

- 2020.06.28 

  update by jyjin
  完整功能版
  + 添加icon
  + 整理style接口
  + bug修复
  + 整理README


# Listense
MIT