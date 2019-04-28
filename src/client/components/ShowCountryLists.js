import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../app.css";

export default class ShowCountryLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortingTypeOfName: "asc",
      sortingTypeOfCode: "asc",
      sortingTypeOfCallingCode: "asc",
      sortingTypeOfCapital: "asc",
      sortingTypeOfRegion: "asc",
      countryLists: [],
      countryName: [],
      countryCode: [],
      countryCallingCode: [],
      countryCapital: [],
      countryRegion: []
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
        {/* <div className="sortingBtnWrapper">
            <button onClick={this.clickAsc}>오름차순</button>
            <button onClick={this.clickDesc}>내림차순</button>
          </div> */}

        <div className="feildWrapper">
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
        </div>

        <div className="countryDataWrapper">
          {/* <ul className="nameWrapper">
          {
            countryName.length && this.state.sortingTypeOfName === 'asc'
              ? countryName.map((country) => {
                return (
                  <li>
                    {country}
                  </li>
                )
              })
              : this.state.countryName.map((country) => {
                return (
                  <li>
                    {country}
                  </li>
                )
              })
          }
          </ul>
          <ul className="codeWrapper">
            {
              countryCode.length && this.state.sortingTypeOfCode === 'asc'
                ? countryCode.map((code) => {
                  return(
                    <li>
                      {code}
                    </li>
                  )
                })
                : this.state.countryCode.map((code) => {
                  return (
                    <li>
                      {code}
                    </li>
                  )
                })
            }
          </ul>
          <ul className="callingCodeWrapper">
          {
            countryCallingCode.length && this.state.sortingTypeOfCallingCode === 'asc'
              ? countryCallingCode.map((callingcode) => {
                return (
                  <li>
                    {callingcode}
                  </li>
                )
              })
              : this.state.countryCallingCode.map((callingcode) => {
               
                return (
                  <li>
                    {callingcode}
                  </li>
                )
              })
          }
          </ul>
          <ul className="capitalWrapper">
            {
              countryCapital.length && this.state.sortingTypeOfCapital === 'asc'
                ? countryCapital.map((capital) => {
                  return(
                    <li>
                      {capital}
                    </li>
                  )
                })
                : this.state.countryCapital.map((capital) => {
                  return (
                    <li>
                      {capital}
                    </li>
                  )
                })
            }
          </ul>
          <ul className="regionWrapper">
            {
              countryRegion.length && this.state.sortingTypeOfRegion === 'asc'
                ? countryRegion.map((region) => {
                  return(
                    <li>
                      {region}
                    </li>
                  )
                })
                : this.state.countryRegion.map((region) => {
                  return (
                    <li>
                      {region}
                    </li>
                    
                  )
                })
            }
          </ul> */}

          {this.props.countryLists.length > 0 &&
          this.props.countryNameSorting === "asc"
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
                    </li>
                  </ul>
                );
              })}
        </div>
      </div>
    );
  }
}
