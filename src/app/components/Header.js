import React from "react";

import { Link } from "react-router";

export const Header = (props) => {
  let className = function(route) {
    return route === props.currentRoute ? "active" : "";
  }

  return(
    <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">{props.projectName}</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className={className("/welcome")}>
              <Link to={"/welcome"}>
                {props.homeLink}
              </Link>
            </li>

            <li className={className("/user/5")}>
              <Link to={"/user/5"}>
                User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}
