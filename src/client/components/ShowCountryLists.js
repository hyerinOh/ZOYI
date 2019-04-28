import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../app.css";

export default class ShowCountryLists extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   sortingTypeOfName: "asc",
    //   sortingTypeOfCode: "asc",
    //   sortingTypeOfCallingCode: "asc",
    //   sortingTypeOfCapital: "asc",
    //   sortingTypeOfRegion: "asc",
    //   countryLists: [],
    //   countryName: [],
    //   countryCode: [],
    //   countryCallingCode: [],
    //   countryCapital: [],
    //   countryRegion: []
    // };
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
            <p className="nameSorting">name</p>
            <button
              type="button"
              onClick={this.clickAsc.bind(this, "COUNTRYNAME")}
            >
              오름차순
            </button>
            <button
              type="button"
              onClick={this.clickDesc.bind(this, "COUNTRYNAME")}
            >
              내림차순
            </button>
          </div>
          <div>
            <p className="codeSorting">alpha2Code</p>
            <button
              type="button"
              onClick={this.clickAsc.bind(this, "COUNTRYCODE")}
            >
              오름차순
            </button>
            <button
              type="button"
              onClick={this.clickDesc.bind(this, "COUNTRYCODE")}
            >
              내림차순
            </button>
          </div>
          <div>
            <p className="callingCodeSorting">callingCodes</p>
            <button
              type="button"
              onClick={this.clickAsc.bind(this, "COUNTRYCALLINGCODE")}
            >
              오름차순
            </button>
            <button
              type="button"
              onClick={this.clickDesc.bind(this, "COUNTRYCALLINGCODE")}
            >
              내림차순
            </button>
          </div>
          <div>
            <p className="capitalSorting">capital</p>
            <button
              type="button"
              onClick={this.clickAsc.bind(this, "COUNTRYCAPITAL")}
            >
              오름차순
            </button>
            <button
              type="button"
              onClick={this.clickDesc.bind(this, "COUNTRYCAPITAL")}
            >
              내림차순
            </button>
          </div>
          <div>
            <p className="regionSorting">region</p>
            <button
              type="button"
              onClick={this.clickAsc.bind(this, "COUNTRYREGION")}
            >
              오름차순
            </button>
            <button
              type="button"
              onClick={this.clickDesc.bind(this, "COUNTRYREGION")}
            >
              내림차순
            </button>
          </div>
          <button type="button">ADD</button>
        </div>
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
