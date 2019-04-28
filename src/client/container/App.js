import React, { Component } from "react";
import "../app.css";
import { connect } from "react-redux";
import AppComponent from "../components/AppComponent";
import {
  searchCountryAction,
  setDescending,
  getCountryList,
  setAscending,
  deleteList
} from "../actions/index";

class App extends Component {
  render() {
    return <AppComponent {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue,
    countryNameSorting: state.countryNameSorting,
    countryCodeSorting: state.countryCodeSorting,
    countryCallingCodeSorting: state.countryCallingCodeSorting,
    countryCapitalSorting: state.countryCapitalSorting,
    countryRegionSorting: state.countryRegionSorting,
    countryLists: state.countryLists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchCountry: searchValue => {
      dispatch(searchCountryAction(searchValue));
    },
    setDescending: (fields, countryLists) => {
      dispatch(setDescending(fields, countryLists));
    },
    setAscending: (fields, countryLists) => {
      dispatch(setAscending(fields, countryLists));
    },
    saveCountryList: countryLists => {
      dispatch(getCountryList(countryLists));
    },
    deleteList: (country, countryLists) => {
      dispatch(deleteList(country, countryLists));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
