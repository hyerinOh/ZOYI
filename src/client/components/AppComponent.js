import React, { Component } from "react";
import "../assets/styles/app.css";
import MainPage from "./MainPage";

class AppComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Redux props", this.props);
    return (
      <div>
        <MainPage {...this.props} />
      </div>
    );
  }
}

export default AppComponent;
