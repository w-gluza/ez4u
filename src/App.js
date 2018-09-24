import React, { Component } from "react";
import logo from "./logo.svg";

import Footer from "./containers/Footer";
import Clients from "./components/Clients";

class App extends Component {
  render() {
    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <Clients data={this.props.data} clientsArray={this.props.clientsArray} />
        <Footer />
      </div>
    );
  }
}

export default App;
