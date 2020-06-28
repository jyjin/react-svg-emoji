import React from "react";
import "./styles.css";
import { Emoji, parseToEmoji } from "react-svg-emojis-local/index";




export default class ExampleApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      html: '',
      value: ''
    }
  }

  insertStr(soure, start, newStr) {
    return soure.slice(0, start) + newStr + soure.slice(start);
  }

  onSelect(text, key, data) {
    console.log(data)

    var index = this.getCursortPosition(document.querySelector('#input'))
    var value = this.insertStr(this.state.value, index, text)
    debugger
    var html = parseToEmoji(value)
    this.setState({
      value: value,
      html: html,
    })
  }

  getCursortPosition(obj) {
    var cursorIndex = 0;
    if (document.selection) {
      // IE Support
      obj.focus();
      var range = document.selection.createRange();
      range.moveStart('character', -obj.value.length);
      cursorIndex = range.text.length;
    } else if (obj.selectionStart || obj.selectionStart == 0) {
      // another support
      cursorIndex = obj.selectionStart;
    }
    return cursorIndex;
  }

  render() {
    return (
      <div className="App">
        <div style={{ textAlign: 'left' }}>
          <Emoji
            style={{
              panel: {
                width: '200px'
              },
            }}
            onSelect={this.onSelect.bind(this)}
          />
          <input
            id='input'
            style={{ display: 'block', padding: "5px 10px", width: "500px" }}
            value={this.state.value}
            onChange={(e) => {
              this.setState({
                value: e.target.value
              })
            }}></input>
          <div dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
        </div>
      </div>
    );
  }

}
