import React, { Component } from "react";
import Navbar from "./Navbar";
import Rank from "./Rank";
import Events from "./Events";
import About from "./About";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <div className='top'>
          <About />
          <Rank />
        </div>
        <Events />
      </div>
    );
  }
}
