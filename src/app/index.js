import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home"
    };
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  render() {
    let lead = "So good so far";
    let topics = ["Components", "Props"];

    return (
      <div>
        <Header projectName={"Checking out React.js"} homeLink={this.state.homeLink} />
        <Home topics={topics} initialClicks={0} changeLink={this.onChangeLinkName.bind(this)} initialLinkName={this.state.homeLink}>
          <p className="lead">{lead}</p>
        </Home>
      </div>
    );
  }
}

render(<App/>, document.getElementsByClassName("app")[0]);
