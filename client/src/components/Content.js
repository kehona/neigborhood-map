import React, { Component } from "react";
import Map from "./Map";
import List from "./List";

class Content extends Component {
  render() {
    const data = this.props.data;
    return (
      <section id="content" className="row">
        <List locations={data} />
        <Map locations={data} />
      </section>
    );
  }
}

export default Content;
