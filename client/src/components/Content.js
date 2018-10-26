import React, { Component } from "react";
import Map from "./Map";
import List from "./List";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:8080/locations")
      .then(res => res.json())
      .then(data => this.setState({ data: data }));
  }

  handleChange = query => {
    this.setState({ query });
  };

  render() {
    const data = this.props.data;

    return (
      <section id="content" className="row">
        <List
          locations={this.state.data}
          queryString={this.state.query}
          handleChange={this.handleChange}
        />
        <Map locations={this.state.data} map={this.props.map} />
      </section>
    );
  }
}

export default Content;
