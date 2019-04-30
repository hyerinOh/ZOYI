import React, { Component } from "react";
import "../app.css";
import { Button } from "./StyledComponent";
import ShowCountryLists from "./ShowCountryLists";
import axios from "axios";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerID: null
    };
  }

  handleChange = ev => {
    const { searchCountry } = this.props;
    searchCountry(ev.target.value);
    console.log("pppp", this.props);

    if (this.state.timerID) {
      this.setState({
        timerID: clearTimeout(this.state.timerID)
      });
    }

    this.setState({
      timerID: setTimeout(() => {
        if (this.props.searchValue) {
          axios
            .get(
              `https://restcountries.eu/rest/v2/name/${
                this.props.searchValue
              }?fields=alpha2Code;capital;name;region;callingCodes`
            )
            .then(response => {
              console.log("response", response.data);
              this.props.saveCountryList(response.data);
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          axios
            .get(
              "https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes"
            )
            .then(response => {
              this.props.saveCountryList(response.data);
            })
            .catch(error => {
              console.log(error);
            });
        }
      }, 200)
    });
  };

  render() {
    return (
      <form className="searchEngineWrapper">
        <input
          type="text"
          className="searchBar"
          placeholder="나라정보 검색"
          value={this.props.searchValue}
          onChange={this.handleChange}
        />
        {/* <Button type="button">검색</Button> */}
        <div className="listWrapper">
          <ShowCountryLists {...this.props} />
        </div>
      </form>
    );
  }
}
