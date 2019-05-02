import React, { Component } from "react";
import "../assets/styles/app.css";
import { connect } from "react-redux";
import AppComponent from "../components/AppComponent";
import {
  searchCountryAction,
  setDescending,
  getCountryList,
  setAscending,
  deleteList,
  addList
} from "../actions/index";

class App extends Component {
  render() {
    return <AppComponent {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    searchValue: state.Reducer.searchValue,
    countryNameSorting: state.Reducer.countryNameSorting,
    countryCodeSorting: state.Reducer.countryCodeSorting,
    countryCallingCodeSorting: state.Reducer.countryCallingCodeSorting,
    countryCapitalSorting: state.Reducer.countryCapitalSorting,
    countryRegionSorting: state.Reducer.countryRegionSorting,
    countryLists: state.Reducer.countryLists
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
    },
    addList: (values, countryLists) => {
      dispatch(addList(values, countryLists));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
