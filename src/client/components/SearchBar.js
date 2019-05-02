import React, { Component } from "react";
import "../assets/styles/app.css";
import ShowCountryLists from "./ShowCountryLists";
import axios from "axios";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerID: null,
      index: 0,
      isDone: false,
      throttleCheck: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollY } = window;
    // throttling
    this.setState({
      throttleCheck: setTimeout(() => {
        if (this.state.index >= this.props.countryLists.length) {
          this.setState({
            isDone: true
          });
        }
        if (
          scrollHeight - (innerHeight + scrollY) < 100 &&
          !this.state.isDone
        ) {
          if (this.state.throttleCheck) {
            this.updateList();
            this.setState({
              throttleCheck: 0
            });
          }
        }
      }, 500)
    });
  };

  updateList = () => {
    this.setState({
      index: this.state.index + 5
    });
  };

  getCountryLists = () => {
    if (this.props.searchValue) {
      const params = ["name", "alpha2Code", "callingcode", "capital", "region"];
      params.map(param => {
        axios
          .get(
            `https://restcountries.eu/rest/v2/${param}/${
              this.props.searchValue
            }?fields=alpha2Code;capital;name;region;callingCodes`
          )
          .then(response => {
            console.log("response", response.data);
            this.props.saveCountryList(response.data);
            this.updateList();
          })
          .catch(error => {
            console.log(error);
          });
      });
    } else {
      axios
        .get(
          "https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes"
        )
        .then(response => {
          this.props.saveCountryList(response.data);
          this.updateList();
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  handleChange = ev => {
    const { searchCountry } = this.props;
    ev.preventDefault();
    searchCountry(ev.target.value);
    console.log("pppp", this.props);

    // debouncing
    if (this.state.timerID) {
      this.setState({
        timerID: clearTimeout(this.state.timerID)
      });
    }

    this.setState({
      timerID: setTimeout(() => {
        this.getCountryLists();
      }, 1000)
    });
  };

  render() {
    return (
      <div>
        <form
          className="searchEngineWrapper"
          onSubmit={ev => ev.preventDefault()}
        >
          <input
            type="text"
            className="searchBar"
            placeholder="나라정보 검색"
            value={this.props.searchValue}
            onChange={this.handleChange}
          />
        </form>
        <div className="listWrapper">
          <ShowCountryLists {...this.props} index={this.state.index} />
        </div>
      </div>
    );
  }
}
