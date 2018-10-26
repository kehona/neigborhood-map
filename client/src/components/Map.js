import React, { Component } from "react";

import config from "../config";

class Map extends Component {
  updateMarkers(locations) {
    for (let i = 0; i < locations.length; i++) {
      let marker = new window.google.maps.Marker({
        position: {
          lat: locations[i].venue.location.lat,
          lng: locations[i].venue.location.lng
        },
        map: window.mapObject,
        title: locations[i].venue.name
      });
      let infoWindow = new window.google.maps.InfoWindow({
        content: "This is a newighorhood market!"
      });

      marker.addListener("click", function() {
        infoWindow.open(window.mapObject, marker);
      });
    }
  }

  render() {
    this.updateMarkers(this.props.locations);
    return <div id="map" />;
  }
}

export default Map;
