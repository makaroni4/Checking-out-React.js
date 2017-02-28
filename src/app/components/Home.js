import React from "react";

export class Home extends React.Component {
  render() {
    let content = "Checking out React.js";

    return(
      <div className="container">
        <div className="starter-template">
          <h1>{content}</h1>
          {this.props.children}
          <ul>
            {this.props.topics.map((topic, i) => <li key={i}>{topic}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  lead: React.PropTypes.string,
  topic: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
}
