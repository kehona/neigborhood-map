import React, { Component } from "react";

import config from "../config";

class Map extends Component {
  markers = [];
  updateMarkers = locations => {
    console.log(locations);
    this.markers = [];
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
      this.markers.push(marker);
      marker.addListener("click", function() {
        infoWindow.open(window.mapObject, marker);
      });
    }
  };

  // Sets the map on all markers in the array.
  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  clearMarkers() {
    this.setMapOnAll(null);
  }
  // Shows any markers currently in the array.
  showMarkers() {
    this.setMapOnAll(window.mapObject);
  }

  // Deletes all markers in the array by removing references to them.
  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }
  render() {
    // clear the existing markers
    this.clearMarkers();
    // update the markers on map
    this.updateMarkers(this.props.locations);
    this.setMapOnAll(window.mapObject);
    return <div id="map" />;
  }
}

export default Map;
