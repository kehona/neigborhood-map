import React, { Component } from "react";
import Map from "./Map";
import List from "./List";
import { runInThisContext } from "vm";

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
    // create info window
  }
  componentDidUpdate() {
    this.infoWindow = new window.google.maps.InfoWindow({ maxWidth: 150 });
  }

  // createMarkers = locations => {
  //   console.log(locations);
  //   let markers = [];
  //   for (let i = 0; i < locations.length; i++) {
  //     let marker = new window.google.maps.Marker({
  //       position: {
  //         lat: locations[i].venue.location.lat,
  //         lng: locations[i].venue.location.lng
  //       },
  //       map: window.mapObject,
  //       title: locations[i].venue.name
  //     });
  //     let infoWindow = new window.google.maps.InfoWindow({
  //       content: "This is a newighorhood market!"
  //     });
  //     this.markers.push(marker);
  //     marker.addListener("click", function() {
  //       infoWindow.open(window.mapObject, marker);
  //     });
  //   }
  //   return markers;
  // };

  handleChange = query => {
    this.setState({ query });
    const data = this.state.data;
    if (query) {
      this.setState({ queryResult: this.filterData(this.state.data, query) });
    } else {
      this.setState({ queryResult: this.state.data });
    }
  };

  displayInfoWindow() {}

  filterData(data = [], query) {
    return data.filter(location => location.venue.name.includes(query));
  }
  handleClick = (location, markers) => {
    for (let i = 0; i < markers.length; i++) {
      if (location.venue.id === markers[i].getTitle()) {
        let content = this.prepareInfoContent(location);
        window.infoWindow.setContent(content);
        window.infoWindow.open(window.mapObject, markers[i]);
        markers[i].open = true;
      }
    }
  };

  prepareInfoContent(location) {
    return `<h2>${location.venue.name}</h2>`;
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
