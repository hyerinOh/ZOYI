import React, { Component } from 'react';
import '../app.css';

export default class ShowCountryLists extends Component{
  render(){
      return(
        this.props.countryLists.length > 0
          ? this.props.countryLists.map((country) => {
              return(
                <li className="countryLists">
                  <p>name : {country.name}</p>
                  <p>alpha2Code : {country.alpha2Code}</p>
                  <p>callingCodes : {country.callingCodes[0]}</p>
                  <p>capital : {country.capital}</p>
                  <p>region : {country.region}</p>
                </li>
              )
          })
          : null
      )
  }
}