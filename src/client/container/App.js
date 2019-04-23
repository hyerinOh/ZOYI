import React, { Component } from 'react';
import '../app.css';
import { connect } from 'react-redux';
import AppComponent from '../components/AppComponent';
import { searchCountryAction } from '../actions/index';

class App extends Component {
  render() {
    return <AppComponent {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchCountry: (countryInfo) => {
      dispatch(searchCountryAction(countryInfo));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

