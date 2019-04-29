import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class AddListForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="countryName">Country Name</label>
          <Field
            name="countryName"
            type="text"
            placeholder="Write Country Name"
            component="input"
          />
        </div>
        <div>
          <label htmlFor="countryCode">Country Code</label>
          <Field
            name="countryCode"
            type="text"
            placeholder="Write Country Code"
            component="input"
          />
        </div>
        <div>
          <label htmlFor="countryCallingCode">Country Calling Code</label>
          <Field
            name="countryCallingCode"
            type="text"
            placeholder="Write Country Calling Code"
            component="input"
          />
        </div>
        <div>
          <label htmlFor="Country Capital">Country Capital</label>
          <Field
            name="countryCapital"
            type="text"
            placeholder="Write Country Capital"
            component="input"
          />
        </div>
        <div>
          <label htmlFor="Country Region">Country Region</label>
          <Field
            name="countryRegion"
            type="text"
            placeholder="Write Country Region"
            component="input"
          />
        </div>
        <button type="submit">Add a list</button>
      </form>
    );
  }
}

AddListForm = reduxForm({
  form: "addList"
})(AddListForm);

export default AddListForm;
