import React, { Component } from "react";
import Map from "./Map";
import List from "./List";

class Content extends Component {
  render() {
    return (
      <section id="content" className="row">
        <List />
        <Map />
      </section>
    );
  }
}

export default Content;
