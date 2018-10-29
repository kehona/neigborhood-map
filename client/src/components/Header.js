import React, { Component } from "react";

class Header extends Component {
  handleClick() {
    let div = document.getElementById("list-section");
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
    console.log(div);
  }
  render() {
    return (
      <header id="pageHeader" className="row">
        <h1 id="title">Ken's Cafe</h1>
        <a href="#" onClick={this.handleClick} role="button">
          <i className="fa fa-bars" aria-hidden="true" aria-label="menu" />
        </a>
      </header>
    );
  }
}
export default Header;
