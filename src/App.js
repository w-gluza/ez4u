import React, { Component } from "react";

import Navbar from "./containers/Navbar";
import Header from "./containers/Header";
import Clients from "./components/Clients";
import Feature from "./components/FeatureClients";
import Footer from "./containers/Footer";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <Clients data={this.props.data} clientsArray={this.props.clientsArray} />
        <Feature data={this.props.data} clientsArray={this.props.clientsArray} />
        <Footer />
      </div>
    );
  }
}

export default App;
