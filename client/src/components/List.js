import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div id="list-section">
        <div id="location">
          <h1>{this.props.queryString}</h1>
          <h5> Wifi locations in your neighorhood</h5>
          <input
            type="text"
            aria-label="input to filter locations"
            placeholder="Search by location"
            value={this.props.queryString}
            onChange={e => this.props.handleChange(e.target.value)}
          />
          <ol role="list">
            {this.props.locations.map(location => (
              <li key={location.venue.id} role="listitem">
                <div className="location-details">
                  <p className="title">
                    <a
                      href="#"
                      role="link"
                      onClick={() =>
                        this.props.handleClick(location, window.markers)
                      }
                    >
                      {location.venue.name}
                    </a>
                  </p>
                  <p className="info">
                    Address: {location.venue.location.address}
                  </p>
                  <p className="info">
                    Type: {location.venue.categories[0].name}
                  </p>
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
