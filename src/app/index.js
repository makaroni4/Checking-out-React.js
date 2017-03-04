import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home",
      homeMounted: true
    };
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }

  render() {
    let lead = "So good so far";
    let topics = ["Components", "Props"];
    let homeCmp = "";

    if(this.state.homeMounted) {
      homeCmp = <Home topics={topics} initialClicks={0} changeLink={this.onChangeLinkName.bind(this)} initialLinkName={this.state.homeLink}>
                  <p className="lead">{lead}</p>
                </Home>;
    }

    return (
      <div>
        <Header projectName={"Checking out React.js"} homeLink={this.state.homeLink} />

        {homeCmp}

        {this.state.homeMounted &&
          <hr/>
        }

        <div className="container">
          <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-default">Toggle home component</button>
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementsByClassName("app")[0]);
