import React, { Component } from "react";
import "../assets/styles/app.css";
import SearchBar from "./SearchBar";
import background from "../assets/images/background.png";

class AppComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainWrapper">
        <h1>Countries of the World</h1>
        <img className="backgroundImg" src={background} alt="backgroundImg" />
        <SearchBar {...this.props} />
      </div>
    );
  }
}

export default AppComponent;
