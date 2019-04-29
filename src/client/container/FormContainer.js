import React, { Component } from "react";
import ReduxForm from "../components/ReduxForm";

export default class FormContainer extends Component {
  clickAdd = values => {
    console.log(values);
  };
  render() {
    return <ReduxForm onSubmit={this.clickAdd} />;
  }
}
