import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      clicksCount: props.initialClicks
    }
  }

  onShowMeRandomQuote() {
    this.setState({
      clicksCount: this.state.clicksCount + 1
    });
  };

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

          <hr/>

          <a href="#" onClick={this.onShowMeRandomQuote.bind(this)} className="btn btn-default">Click me</a>

          <div>Current clicks: {this.state.clicksCount}</div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  lead: React.PropTypes.string,
  initialClicks: React.PropTypes.number,
  topic: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
}
