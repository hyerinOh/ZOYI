import React, { Component } from "react";
import "../assets/styles/app.css";
import background from "../assets/images/background.png";
import SearchBar from "./SearchBar";

export default class MainPage extends Component {
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
