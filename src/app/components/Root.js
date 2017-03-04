import React from "react";

import { Header } from "./Header";

export class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home"
    };
  }

  changeRootHomeLink(newLink) {
    console.log("--> current state: " + this.state.homeLink);
    console.log("--> next state: " + newLink);

    this.setState({
      homeLink: newLink
    });
  }

  render() {
    return (
      <div>
        <Header projectName={"Checking out React.js"} homeLink={this.state.homeLink}>
        </Header>

        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              {React.cloneElement(this.props.children, { changeRootHomeLink: this.changeRootHomeLink.bind(this) })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
