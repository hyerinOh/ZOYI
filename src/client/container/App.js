import React, { Component } from 'react';
import '../app.css';
import { connect } from 'react-redux';
import AppComponent from '../components/AppComponent';
import { searchCountryAction, setDescending, getCountryList, setAscending } from '../actions/index';

class App extends Component {
  render() {
    return <AppComponent {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue,
    countryNameSorting: state.countryNameSorting,
    countryCodeSorting: state.countryCodeSorting,
    countryLists: state.countryLists
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchCountry: (searchValue) => {
      dispatch(searchCountryAction(searchValue));
    },
    setDescending: (field, countryLists) => {
      dispatch(setDescending(field, countryLists));
    },
    setAscending: (field) => {
      dispatch(setAscending(field));
    },
    // checkCountryNameSortingType: (type) => {
    //   dispatch(countryNameSorting(type));
    // },
    // checkCountryCodeSortingType: (type) => {
    //   dispatch(countryCodeSorting(type));
    // },
    saveCountryList: (countryLists) => {
      dispatch(getCountryList(countryLists));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

