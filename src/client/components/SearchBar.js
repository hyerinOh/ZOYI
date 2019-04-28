import React, { Component } from 'react';
import '../app.css';
import { Button } from './StyledComponent';
import ShowCountryLists from './ShowCountryLists';
import axios from 'axios';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      countryLists: [],
      countryName: [],
      countryCode: [],
      countryCallingCode: [],
      countryCapital: [],
      countryRegion: []
    }
  }

  handleChange = (ev) => {
    const { searchCountry } = this.props;
    const nameList = [];
    const codeList = [];
    const callingCodelist = [];
    const capitalList = [];
    const regionList = [];
    
    searchCountry(ev.target.value);

    if (ev.target.value.length > 0) {
      axios.get(`https://restcountries.eu/rest/v2/name/${ev.target.value}?fields=alpha2Code;capital;name;region;callingCodes`)
      .then((response) => {
        // console.log('response', response);
        this.props.saveCountryList(response.data);
        // response.data.map((eachCountry) => {
        //   // nameList.push(eachCountry.name);
        //   // codeList.push(eachCountry.alpha2Code);
        //   // callingCodelist.push(eachCountry.callingCodes[0]);
        //   // capitalList.push(eachCountry.capital);
        //   // regionList.push(eachCountry.region);
        // })
        // this.setState({
        //   countryName: nameList,
        //   countryCode: codeList,
        //   countryCallingCode: callingCodelist,
        //   countryCapital: capitalList,
        //   countryRegion: regionList
        // })
        this.setState({
          countryLists: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
    } else {
      axios.get('https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes')
      .then((response) => {
        this.setState({
          countryLists: response.data,
        })
      })
      .catch((error) => {
        console.log(error);
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
        <Button type="button">검색</Button>
        <div className="listWrapper">
          <ShowCountryLists
            {...this.props}
            countryLists={this.state.countryLists}
            
            // countryName={this.state.countryName}
            // countryCode={this.state.countryCode}
            // countryCallingCode={this.state.countryCallingCode}
            // countryCapital={this.state.countryCapital}
            // countryRegion={this.state.countryRegion}
          />
        </div>
      </form>
    )
  }
}
