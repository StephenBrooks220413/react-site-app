import * as React from 'react';
//pages imported
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
//Css & JS Imports
import "./App.css";
import "mdb-ui-kit/css/mdb.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App(){
  return (
      <>
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar w/ text</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                  <i className="fas text-dark fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className={"nav-link active"} to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={"nav-link active"} to={"/about"}>About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={"nav-link active"} to={"/users"}>Users</Link>
                    </li>
                  </ul>
                  <span className="navbar-text">
                    Navbar text with an inline element
                  </span>
                </div>
              </div>
            </nav>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
  );
}
