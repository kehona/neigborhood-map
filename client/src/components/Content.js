import React, { Component } from "react";
import Map from "./Map";
import List from "./List";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      query: "",
      queryResult: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:8080/locations")
      .then(res => res.json())
      .then(data => this.setState({ data: data, queryResult: data }));
  }

  handleChange = query => {
    this.setState({ query });
    const data = this.state.data;
    if (query) {
      this.setState({ queryResult: this.filterData(this.state.data, query) });
    } else {
      this.setState({ queryResult: this.state.data });
    }
  };

  filterData(data = [], query) {
    return data.filter(location => location.venue.name.includes(query));
  }

  render() {
    return (
      <section id="content" className="row">
        <List
          locations={this.state.queryResult}
          queryString={this.state.query}
          handleChange={this.handleChange}
        />
        <Map locations={this.state.queryResult} map={this.props.map} />
      </section>
    );
  }
}

export default Content;
