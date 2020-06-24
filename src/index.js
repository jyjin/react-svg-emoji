import React from "react";
import ReactDOM from "react-dom";

import ExampleApp from "./ExampleApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ExampleApp />
  </React.StrictMode>,
  rootElement
);
