import React, { Component } from 'react';
import '../app.css';
import SearchBtnComponent from '../../SearchBtnComponent';
import ShowCountryLists from './ShowCountryLists';
import axios from 'axios';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      countryLists: []
    }
  }

  handleChange = (ev) => {
    const { searchCountry } = this.props;
    searchCountry(ev.target.value);

    if(ev.target.value.length > 0) {
      axios.get(`https://restcountries.eu/rest/v2/name/${ev.target.value}?fields=alpha2Code;capital;name;region;callingCodes`)
      .then((response) => {
        console.log(response);
        this.setState({
          countryLists: response.data
        })
      })
    } else {
      axios.get('https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes')
      .then((response) => {
        this.setState({
          countryLists: response.data
        })
      })
      
    }
    
    
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    
  }

  render() {
    return(
      <form className="searchEngineWrapper">
        <input
          type="text"
          className="searchBar"
          placeholder="나라정보 검색"
          value={this.props.searchValue}
          onChange={this.handleChange}
        />
        {/* <button
          type="submit"
          onClick={this.handleSubmit}
        >
        검색
        </button> */}
        <SearchBtnComponent />
        <ShowCountryLists countryLists={this.state.countryLists}/>

      </form>
    )
  }
}
