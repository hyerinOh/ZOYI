import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class AddListForm extends Component {
  submit = value => {
    console.log("form Value", value);
    console.log("add", this.props);
    this.props.addList(value, this.props.countryLists);
  };
  render() {
    console.log("form", this.props);
    const { handleSubmit } = this.props;
    return (
      <form className="formWrapper" onSubmit={handleSubmit(this.submit)}>
        <div className="form">
          {/* <label htmlFor="name">Country Name</label> */}
          <Field
            name="name"
            className="formInput"
            type="text"
            placeholder="Write Country Name"
            component="input"
          />
        </div>
        <div className="form">
          {/* <label htmlFor="alpha2Code">Country Code</label> */}
          <Field
            name="alpha2Code"
            className="formInput"
            type="text"
            placeholder="Write Country Code"
            component="input"
          />
        </div>
        <div className="form">
          {/* <label htmlFor="callingCodes">Country Calling Code</label> */}
          <Field
            name="callingCodes"
            className="formInput"
            type="text"
            placeholder="Write Country Calling Code"
            component="input"
          />
        </div>
        <div className="form">
          {/* <label htmlFor="capital">Country Capital</label> */}
          <Field
            name="capital"
            className="formInput"
            type="text"
            placeholder="Write Country Capital"
            component="input"
          />
        </div>
        <div className="form">
          {/* <label htmlFor="region">Country Region</label> */}
          <Field
            name="region"
            className="formInput"
            type="text"
            placeholder="Write Country Region"
            component="input"
          />
        </div>
        <button className="addBtn" type="submit">
          Add a list
        </button>
      </form>
    );
  }
}

AddListForm = reduxForm({
  form: "addList"
})(AddListForm);

export default AddListForm;
