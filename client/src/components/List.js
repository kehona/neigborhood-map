import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div id="list-section">
        <div id="location">
          <h5> Wifi locations in your neighorhood</h5>
          <input type="text" placeholder="Search by location" />
          <ol>
            {this.props.locations.map(location => (
              <li key={location.venue.id}>
                <div className="location-details">
                  <p className="title">{location.venue.name}</p>
                  <p className="info">Address: {location.venue.location.address}</p>
                  <p className="info">Type: {location.venue.categories[0].name}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default List;
