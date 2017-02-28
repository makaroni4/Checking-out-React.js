import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  onButtonClick() {
    alert("Hello!");
  }

  render() {
    let lead = "So good so far";
    let topics = ["Components", "Props"];

    return (
      <div>
        <Header projectName={"Checking out React.js"}/>
        <Home topics={topics} initialClicks={0} clickAlert={this.onButtonClick}>
          <p className="lead">{lead}</p>
        </Home>
      </div>
    );
  }
}

render(<App/>, document.getElementsByClassName("app")[0]);
