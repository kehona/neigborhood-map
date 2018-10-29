import React, { Component } from "react";

import config from "../config";

class Map extends Component {
  componentDidUpdate() {}
  markers = [];
  updateMarkers = locations => {
    console.log(locations);
    this.markers = [];
    console.log("am herere", window.google);
    // let infoWindow = new window.google.maps.InfoWindow();
    for (let i = 0; i < locations.length; i++) {
      let marker = new window.google.maps.Marker({
        position: {
          lat: locations[i].venue.location.lat,
          lng: locations[i].venue.location.lng
        },
        map: window.mapObject,
        title: locations[i].venue.id // locations[i].venue.name
      });
      // let infoWindow = new window.google.maps.InfoWindow({ maxWidth: 150 });
      marker.addListener("click", () => {
        console.log(this.props);
        let content = this.props.getInfoContent(locations[i]);

        window.infoWindow.setContent(content);
        window.infoWindow.open(window.mapObject, marker);
      });

      this.markers.push(marker);
    }
    window.markers = this.markers;
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
