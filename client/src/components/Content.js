import React, { Component } from "react";
import Map from "./Map";
import List from "./List";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      query: "",
      queryResult: [],
      markers: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:8080/locations")
      .then(res => res.json())
      .then(data => {
        // let markers = this.createMarkers(data);
        this.setState({ data: data, queryResult: data });
      });
  }

  handleChange = query => {
    this.setState({ query });
    if (query) {
      this.setState({ queryResult: this.filterData(this.state.data, query) });
    } else {
      this.setState({ queryResult: this.state.data });
    }
  };

  displayInfoWindow() {}

  filterData(data = [], query) {
    return data.filter(location =>
      location.venue.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  handleClick = (location, markers) => {
    for (let i = 0; i < markers.length; i++) {
      if (location.venue.id === markers[i].getTitle()) {
        let content = this.prepareInfoContent(location);
        markers[i].setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(function() {
          markers[i].setAnimation(null);
        }, 300);
        window.infoWindow.setContent(content);
        window.infoWindow.open(window.mapObject, markers[i]);
        markers[i].open = true;
      }
    }
  };

  /**
   * creates the content for infoWindow for a given location
   */
  prepareInfoContent(location) {
    return `<div class="infoWindow">
            <h3>Name: <span class="info-name">${location.venue.name}<spam></h3>
            <p class="info-title">Type: ${location.venue.categories[0].name}</p>
            <p class="info-title">Address: ${
              location.venue.location.address
            }</p>
            <p class="info-title">City: ${location.venue.location.city}</p>
          </div>`;
  }

  render() {
    return (
      <section id="content" className="row">
        <List
          locations={this.state.queryResult}
          queryString={this.state.query}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          markers={this.state.markers}
        />
        <Map
          locations={this.state.queryResult}
          map={this.props.map}
          getInfoContent={this.prepareInfoContent}
        />
      </section>
    );
  }
}

export default Content;
