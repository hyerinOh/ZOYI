import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReduxForm from "./ReduxForm";
import "../app.css";

export default class ShowCountryLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openInput: false
    };
  }

  clickDesc = sorting => {
    if (sorting === "COUNTRYNAME") {
      this.props.setDescending(sorting, this.props.countryLists);
    } else if (sorting === "COUNTRYCODE") {
      this.props.setDescending(sorting, this.props.countryLists);
    } else if (sorting === "COUNTRYCALLINGCODE") {
      this.props.setDescending(sorting, this.props.countryLists);
    } else if (sorting === "COUNTRYCAPITAL") {
      this.props.setDescending(sorting, this.props.countryLists);
    } else if (sorting === "COUNTRYREGION") {
      this.props.setDescending(sorting, this.props.countryLists);
    }
  };

  clickAsc = sorting => {
    if (sorting === "COUNTRYNAME") {
      this.props.setAscending(sorting, this.props.countryLists);
    } else if (sorting === "COUNTRYCODE") {
      this.props.setAscending(sorting, this.props.countryLists);
    } else if (sorting === "COUNTRYCALLINGCODE") {
      this.props.setAscending(sorting, this.props.countryLists);
    } else if (sorting === "COUNTRYCAPITAL") {
      this.props.setAscending(sorting, this.props.countryLists);
    } else if (sorting === "COUNTRYREGION") {
      this.props.setAscending(sorting, this.props.countryLists);
    }
  };

  clickDelete = country => {
    console.log(country);
    this.props.deleteList(country, this.props.countryLists);
  };

  openInput() {
    if (!this.props.searchValue) {
      alert("나라를 먼저 검색하세요!");
    } else {
      if (!this.state.openInput) {
        this.setState({
          openInput: true
        });
      } else {
        this.setState({
          openInput: false
        });
      }
    }
  }

  render() {
    console.log("props", this.props);
    const {
      countryName,
      countryCode,
      countryCallingCode,
      countryCapital,
      countryRegion
    } = this.props;
    return (
      <div>
        <div className="fieldWrapper">
          <div>
            <p className="nameSorting">NAME</p>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickAsc.bind(this, "COUNTRYNAME")}
            >
              오름차순
            </button>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickDesc.bind(this, "COUNTRYNAME")}
            >
              내림차순
            </button>
          </div>
          <div>
            <p className="codeSorting">COUNTRY CODE</p>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickAsc.bind(this, "COUNTRYCODE")}
            >
              오름차순
            </button>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickDesc.bind(this, "COUNTRYCODE")}
            >
              내림차순
            </button>
          </div>
          <div>
            <p className="callingCodeSorting">CALLING CODES</p>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickAsc.bind(this, "COUNTRYCALLINGCODE")}
            >
              오름차순
            </button>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickDesc.bind(this, "COUNTRYCALLINGCODE")}
            >
              내림차순
            </button>
          </div>
          <div>
            <p className="capitalSorting">CAPITAL</p>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickAsc.bind(this, "COUNTRYCAPITAL")}
            >
              오름차순
            </button>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickDesc.bind(this, "COUNTRYCAPITAL")}
            >
              내림차순
            </button>
          </div>
          <div>
            <p className="regionSorting">REGION</p>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickAsc.bind(this, "COUNTRYREGION")}
            >
              오름차순
            </button>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickDesc.bind(this, "COUNTRYREGION")}
            >
              내림차순
            </button>
          </div>
          <div>
            <button
              className="makeListBtn"
              type="button"
              onClick={this.openInput.bind(this)}
            >
              make a list
            </button>
          </div>
        </div>
        {this.state.openInput ? (
          <div>
            <ReduxForm {...this.props} />
          </div>
        ) : null}

        <div className="countryDataWrapper">
          {(this.props.countryLists.length > 0 &&
            this.props.countryNameSorting === "asc") ||
          this.props.countryCodeSorting === "asc" ||
          this.props.countryCallingCodeSorting === "asc" ||
          this.props.countryCapitalSorting === "asc" ||
          this.props.countryRegionSorting === "asc"
            ? this.props.countryLists.map(country => {
                return (
                  <div>
                    <ul>
                      <li className="countryLists">
                        <p>name : {country.name}</p>
                        <p>alpha2Code : {country.alpha2Code}</p>
                        <p>callingCodes : {country.callingCodes[0]}</p>
                        <p>capital : {country.capital}</p>
                        <p>region : {country.region}</p>
                        <button
                          type="button"
                          onClick={this.clickDelete.bind(this, country.name)}
                        >
                          DELETE
                        </button>
                      </li>
                    </ul>
                  </div>
                );
              })
            : this.props.countryLists.map(country => {
                return (
                  <ul>
                    <li className="countryLists">
                      <p>name : {country.name}</p>
                      <p>alpha2Code : {country.alpha2Code}</p>
                      <p>callingCodes : {country.callingCodes[0]}</p>
                      <p>capital : {country.capital}</p>
                      <p>region : {country.region}</p>
                      <button type="button">DELETE</button>
                    </li>
                  </ul>
                );
              })}
        </div>
      </div>
    );
  }
}
