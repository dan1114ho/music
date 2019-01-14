import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Partner from "./components/Partner";
import About from "./components/About";
import Mission from "./components/Mission";
import Dash from "./components/Dash";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="body">
              <h1>This is where the muisic grid will be located</h1>
            </div>
            <Mission />
            <Partner />
            <About />
            <Team />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
