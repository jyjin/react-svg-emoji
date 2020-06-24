import React from "react";
import "./styles.css";
import { Emoji } from "react-svg-emojis-local/index";


export default class ExampleApp extends React.Component {

  constructor(props) {
    super(props)
  }

  onSelect(data) {
    console.log(data)
  }

  render() {
    return (
      <div className="App">
        <Emoji
          onSelect={this.onSelect.bind(this)}
        />
      </div>
    );
  }

}
