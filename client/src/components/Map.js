import React, { Component } from "react";

import config from "../config";

class Map extends Component {
  // loadGoogleScript = () => {
  //   this.locations = this.props.locations;
  //   let script = document.getElementsByTagName("script")[0];
  //   const mapScript = this.createMapScript();
  //   script.parentNode.insertBefore(mapScript, script);
  //   window.initMap = this.initMap;
  // };

  // initMap = () => {
  //   let markers = [];
  //   this.map = new window.google.maps.Map(document.getElementById("map"), {
  //     center: { lat: 36.3729, lng: -94.208 },
  //     zoom: 13
  //   });

  //   let walmart = { lat: 36.358498566, lng: -94.209832494 };
  //   let marker = new window.google.maps.Marker({
  //     position: walmart,
  //     map: this.map,
  //     title: "Neigborhood Market"
  //   });
  //   let infoWindow = new window.google.maps.InfoWindow({
  //     content: "This is a newighorhood market!"
  //   });
  //   marker.addListener("click", function() {
  //     infoWindow.open(map, marker);
  //   });
  // };

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
    console.log("WHAT", );
     this.updateMarkers(this.props.locations);
    return <div id="map" />;
  }
}

export default Map;
