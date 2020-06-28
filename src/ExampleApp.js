import React from "react";
import "./styles.css";
import ReactSvgEmoji from "react-svg-emojis-local/index";

const { Emoji, parseToEmoji, insertStr, getCursortPosition } = ReactSvgEmoji;




export default class ExampleApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      html1: '',
      value1: '',
      html2: '',
      value2: '',
      html3: '',
      value3: '',
      html4: '',
      value4: '',
      visible: true,
    }
  }



  onSelectDemo1(text, key, data) {
    var index = getCursortPosition(document.querySelector('#input1'))
    var value = insertStr(this.state.value1, index, text)
    var html = parseToEmoji(value)
    this.setState({
      value1: value,
      html1: html,
    })
  }

  onChange1(e) {
    var html = parseToEmoji(e.target.value)
    this.setState({
      value1: e.target.value,
      html1: html,
    })
  }

  onSelectDemo2(text, key, data) {
    var index = getCursortPosition(document.querySelector('#input2'))
    var value = insertStr(this.state.value2, index, text)
    var html = parseToEmoji(value)
    this.setState({
      value2: value,
      html2: html,
    })
  }

  onChange2(e) {
    var html = parseToEmoji(e.target.value)
    this.setState({
      value2: e.target.value,
      html2: html,
    })
  }

  onSelectDemo3(text, key, data) {
    var index = getCursortPosition(document.querySelector('#input3'))
    var value = insertStr(this.state.value3, index, text)
    var html = parseToEmoji(value)
    this.setState({
      value3: value,
      html3: html,
    })
  }

  onChange3(e) {
    var html = parseToEmoji(e.target.value)
    this.setState({
      value3: e.target.value,
      html3: html,
    })
  }

  onSelectDemo4(text, key, data) {
    var index = getCursortPosition(document.querySelector('#input2'))
    var value = insertStr(this.state.value4, index, text)
    var html = parseToEmoji(value)
    this.setState({
      value4: value,
      html4: html,
    })
  }

  onChange4(e) {
    var html = parseToEmoji(e.target.value)
    this.setState({
      value4: e.target.value,
      html4: html,
    })
  }


  render() {

    const style1 = {

    }

    const style2 = {

    }


    const style3 = {
      icon: {
        width: '50px',
        height: '50px',
      },
      pop: {
        position: 'absolute',
        padding: '10px',
        width: '800px',
        top: '25px',
        hover: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          boxShadow: 'none',
          border: '3px solid lightgreen'
        }
      },
      item: {
        width: '12px',
        height: '12px',
        margin: '2px',
      }
    }

    const style4 = {
      pop: {
        position: 'relative',
        padding: '10px',
        width: '400px',
        hover: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          boxShadow: 'none',
          border: '1px solid lightgreen'
        }
      },
    }

    return (
      <div>
        <h1 style={{ color: '#2196f3', textAlign: 'center' }}>React-Svg-Emoji Demo</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

          {/* demo1 */}
          <div style={{ border: '1px solid #eee', borderRadius: '5px', padding: '20px', width: '45%' }}>
            <h3 style={{ color: '#2196f3', textAlign: 'left', marginBottom: '360px' }}>1.默认表情开关</h3>
            <Emoji
              style={style1}
              onSelect={this.onSelectDemo1.bind(this)}
            />
            <input
              id='input1'
              style={{ display: 'block', padding: "10px 10px", width: "90%", border: '1px solid #ddd', borderRadius: '4px', color: '#939393', fontSize: '16px' }}
              value={this.state.value1}
              onChange={this.onChange1.bind(this)}></input>
            <div style={{ margin: '10px' }} >
              转化展示效果：
            <p dangerouslySetInnerHTML={{ __html: this.state.html1 }} />
            代码：
              <pre style={{ background: "#000", padding: '10px', color: '#fff', overflow: 'auto', borderRadius: '5px' }}>
                {` 
import ReactSvgEmoji from "react-svg-emojis/es5";

const { Emoji, parseToEmoji, insertStr, getCursortPosition } = ReactSvgEmoji;


...

onSelectDemo1(text, key, data) {
  var index = getCursortPosition(document.querySelector('#input1'))
  var value = insertStr(this.state.value1, index, text)
  var html = parseToEmoji(value)
  this.setState({
    value1: value,
    html1: html,
  })
}

onChange1(e) {
  var html = parseToEmoji(e.target.value)
  this.setState({
    value1: e.target.value,
    html1: html,
  })
}

...

const style = {
  pop: {
    width: '200px'
  },
}

...

<Emoji
  style={style}
  onSelect={this.onSelectDemo1.bind(this)}
/>
<input
  id='input1'
  style={{ display: 'block', padding: "10px 10px", width: "90%", border: '1px solid #ddd', borderRadius: '4px', color: '#939393', fontSize: '16px' }}
  value={this.state.value1}
  onChange={this.onChange1.bind(this)}></input>
<div style={{ margin: '10px' }} >
  转化展示效果：
<p dangerouslySetInnerHTML={{ __html: this.state.html1 }} />
            `}
              </pre>
            </div>
          </div>

          {/* demo2 */}
          <div style={{ border: '1px solid #eee', borderRadius: '5px', padding: '0 20px 0 ', width: '45%', textAlign: 'left' }}>
            <h3 style={{ color: '#2196f3', textAlign: 'left', marginBottom: '360px' }}>2.定制启动入口按钮</h3>
            <Emoji
              icon={<span> 表情</span>}
              style={style2}
              onSelect={this.onSelectDemo2.bind(this)}
            />
            <input
              id='input2'
              style={{ display: 'block', padding: "10px 10px", width: "90%", border: '1px solid #ddd', borderRadius: '4px', color: '#939393', fontSize: '16px' }}
              value={this.state.value2}
              onChange={this.onChange2.bind(this)}></input>

            <div style={{ margin: '10px' }} >
              转化展示效果：
            <p dangerouslySetInnerHTML={{ __html: this.state.html2 }} />
            </div>

            代码：
              <pre style={{ background: "#000", padding: '10px', color: '#fff', overflow: 'auto', borderRadius: '5px' }}>

              {`
  import ReactSvgEmoji from "react-svg-emojis/es5";

  const { Emoji, parseToEmoji, insertStr, getCursortPosition } = ReactSvgEmoji;              

  ...

  onSelectDemo2(text, key, data) {
    var index = getCursortPosition(document.querySelector('#input2'))
    var value = insertStr(this.state.value2, index, text)
    var html = parseToEmoji(value)
    this.setState({
      value2: value,
      html2: html,
    })
  }

  onChange2(e) {
    var html = parseToEmoji(e.target.value)
    this.setState({
      value2: e.target.value,
      html2: html,
    })
  }
       
  ...

  const style = {
    pop: {
      width: '200px'
    },
  }

  ...

  <Emoji
    icon={<span> 表情</span>}
    style={style}
    onSelect={this.onSelectDemo2.bind(this)}
  />
  <input
    id='input2'
    style={{ display: 'block', padding: "10px 10px", width: "90%", border: '1px solid #ddd', borderRadius: '4px', color: '#939393', fontSize: '16px' }}
    value={this.state.value2}
    onChange={this.onChange2.bind(this)}></input>

  <div style={{ margin: '10px' }} >
    转化展示效果：
  <p dangerouslySetInnerHTML={{ __html: this.state.html2 }} />
  </div>
                `}
            </pre>
          </div>

          {/* demo3 */}
          <div style={{ border: '1px solid #eee', borderRadius: '5px', padding: '0 20px 0 ', width: '45%', textAlign: 'left' }}>
            <h3 style={{ color: '#2196f3', textAlign: 'left', marginBottom: '360px' }}>3.样式定制</h3>
            <Emoji
              style={style3}
              width={"12px"}
              height={"12px"}
              iconWidth={"50px"}
              iconHeight={"50px"}
              onSelect={this.onSelectDemo3.bind(this)}
            />
            <input
              id='input3'
              style={{ display: 'block', padding: "10px 10px", width: "90%", border: '1px solid #ddd', borderRadius: '4px', color: '#939393', fontSize: '16px' }}
              value={this.state.value3}
              onChange={this.onChange3.bind(this)}></input>

            <div style={{ margin: '10px' }} >
              转化展示效果：
            <p dangerouslySetInnerHTML={{ __html: this.state.html3 }} />
            </div>

            代码：
              <pre style={{ background: "#000", padding: '10px', color: '#fff', overflow: 'auto', borderRadius: '5px' }}>

              {`
  import ReactSvgEmoji from "react-svg-emojis/es5";

  const { Emoji, parseToEmoji, insertStr, getCursortPosition } = ReactSvgEmoji;   
  
  ...

  onSelectDemo3(text, key, data) {
    var index = getCursortPosition(document.querySelector('#input3'))
    var value = insertStr(this.state.value3, index, text)
    var html = parseToEmoji(value)
    this.setState({
      value3: value,
      html3: html,
    })
  }

  onChange3(e) {
    var html = parseToEmoji(e.target.value)
    this.setState({
      value3: e.target.value,
      html3: html,
    })
  }
       
  ...

  const style = {
    icon: {
      width: '50px',
      height: '50px',
    },
    pop: {
      position: 'absolute',
      padding: '10px',
      width: '800px',
      top: '25px',
      hover: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        boxShadow: 'none',
        border:'3px solid lightgreen'
      }
    },
    item: {
      width: '12px',
      height: '12px',
      margin: '2px',
    }
  }

  ...

  <Emoji
    icon={<span> 表情</span>}
    style={style}
    onSelect={this.onSelectDemo3.bind(this)}
  />
 
  <input
  id='input3'
  style={{ display: 'block', padding: "10px 10px", width: "90%", border: '1px solid #ddd', borderRadius: '4px', color: '#939393', fontSize: '16px' }}
  value={this.state.value3}
  onChange={this.onChange3.bind(this)}></input>
                `}
            </pre>
          </div>

          {/* demo4 */}
          <div style={{ border: '1px solid #eee', borderRadius: '5px', padding: '0 20px 0 ', width: '45%', textAlign: 'left' }}>
            <h3 style={{ color: '#2196f3', textAlign: 'left', marginBottom: '360px' }}>4.自定义入口按钮(如移动端需要直接展示选择框)</h3>
            <Emoji
              model="manual"
              visible={!!this.state.visible}
              style={style4}
              onSelect={this.onSelectDemo4.bind(this)}
            />
            <button
              style={{ margin: '10px 0' }}
              onClick={() => {
                this.setState({
                  visible: !this.state.visible
                })
              }}>打开/关闭表情</button>
            <input
              id='input4'
              style={{ display: 'block', padding: "10px 10px", width: "90%", border: '1px solid #ddd', borderRadius: '4px', color: '#939393', fontSize: '16px' }}
              value={this.state.value4}
              onChange={this.onChange4.bind(this)}></input>

            <div style={{ margin: '10px' }} >
              转化展示效果：
            <p dangerouslySetInnerHTML={{ __html: this.state.html4 }} />
            </div>

            代码：
              <pre style={{ background: "#000", padding: '10px', color: '#fff', overflow: 'auto', borderRadius: '5px' }}>

              {`
import ReactSvgEmoji from "react-svg-emojis/es5";

const { Emoji, parseToEmoji, insertStr, getCursortPosition } = ReactSvgEmoji;              
    
...

onSelectDemo4(text, key, data) {
  var index = getCursortPosition(document.querySelector('#input2'))
  var value = insertStr(this.state.value4, index, text)
  var html = parseToEmoji(value)
  this.setState({
    value4: value,
    html4: html,
  })
}

onChange4(e) {
  var html = parseToEmoji(e.target.value)
  this.setState({
    value4: e.target.value,
    html4: html,
  })
}

...

const style = {
  pop: {
    position: 'relative',
    padding: '10px',
    width: '400px',
    hover: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      boxShadow: 'none',
      border: '1px solid lightgreen'
    }
  },
}

...

<Emoji
  model="manual"
  visible={!!this.state.visible}
  style={style4}
  onSelect={this.onSelectDemo4.bind(this)}
/>

<button onClick={()=>{
  this.setState({
    visible: !this.state.visible
  })
}}>打开、关闭表情</button>

<input
id='input4'
style={{ display: 'block', padding: "10px 10px", width: "90%", border: '1px solid #ddd', borderRadius: '4px', color: '#939393', fontSize: '16px' }}
value={this.state.value4}
onChange={this.onChange4.bind(this)}></input>
 
                `}
            </pre>
          </div>

        </div>


      </div>

    );
  }

}
