import React, { Component } from "react";

class List extends Component {
    render() {
        return (<div id="list-section">
            <div id="location">
                <h5> Wifi locations in your neighorhood</h5>
                <ol>
                    {this.props.locations.map(location => (
                        <p>{location.venue.name}</p>
                    ))}
                </ol>
            </div>
        </div>)
    }
}
export default List;
