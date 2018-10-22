import React, { Component } from "react";
import logo from "./logo.svg";
import config from "./config";
import "./App.css";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:8080/locations")
      .then(res => res.json())
      .then(data => this.setState({data}));
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content data={this.state.data}/>
        <Footer />
      </div>
    );
  }
}

export default App;
