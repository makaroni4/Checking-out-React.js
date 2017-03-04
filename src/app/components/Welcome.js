import React from "react";
import { browserHistory } from "react-router";

import { Home } from "./Home";

export class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home",
      homeMounted: true
    };
  }

  onChangeLinkName(newName) {
    this.props.changeRootHomeLink(newName);

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
        {homeCmp}

        {this.state.homeMounted &&
          <hr/>
        }

        <div className="container">
          <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-default">Toggle home component</button>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
