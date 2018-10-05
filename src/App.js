import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.loadGoogleScript();
  }
  loadGoogleScript() {
    let script = document.getElementsByTagName("script")[0];
    const mapScript = this.createMapScript();
    script.parentNode.insertBefore(mapScript, script);
    window.initMap = this.initMap;
  }

  initMap() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      // 36.3729° N, 94.2088° W
      center: { lat: -36.3729, lng: 94.208 },
      zoom: 8
    });
  }

  createMapScript() {
    const src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDj-mVCQVweG9KZwqFFGITxLIAqyAATzYI&callback=initMap`;
    let mapScript = document.createElement("script");
    mapScript.src = src;
    mapScript.async = true;
    mapScript.defer = true;
    return mapScript;
  }

  render() {
    return (
      <div className="App">
        <div id="map" />
      </div>
    );
  }
}

export default App;
