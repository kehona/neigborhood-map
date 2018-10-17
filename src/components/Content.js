import React, { Component } from "react";
import Map from "./Map";
import List from "./List";

class Content extends Component {
  render() {
    return (
      <div id="content">
        <List />
        <Map />
      </div>
    );
  }
}

export default Content;
