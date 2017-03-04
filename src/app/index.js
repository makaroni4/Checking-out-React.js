import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Root } from "./components/Root";
import { Welcome } from "./components/Welcome";
import { User } from "./components/User";

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root} homeLink={"Home"}>
          <IndexRoute component={Welcome} />
          <Route path={"user/:id"} component={User} />
          <Route path={"welcome"} component={Welcome} />
        </Route>
      </Router>
    );
  }
}

render(<App/>, document.getElementsByClassName("app")[0]);
