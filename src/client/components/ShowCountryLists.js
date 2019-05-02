import React, { Component } from "react";
import ReduxForm from "./ReduxForm";
import "../assets/styles/app.css";

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
              ASC
            </button>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickDesc.bind(this, "COUNTRYNAME")}
            >
              DESC
            </button>
          </div>
          <div>
            <p className="codeSorting">COUNTRY CODE</p>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickAsc.bind(this, "COUNTRYCODE")}
            >
              ASC
            </button>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickDesc.bind(this, "COUNTRYCODE")}
            >
              DESC
            </button>
          </div>
          <div>
            <p className="callingCodeSorting">CALLING CODES</p>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickAsc.bind(this, "COUNTRYCALLINGCODE")}
            >
              ASC
            </button>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickDesc.bind(this, "COUNTRYCALLINGCODE")}
            >
              DESC
            </button>
          </div>
          <div>
            <p className="capitalSorting">CAPITAL</p>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickAsc.bind(this, "COUNTRYCAPITAL")}
            >
              ASC
            </button>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickDesc.bind(this, "COUNTRYCAPITAL")}
            >
              DESC
            </button>
          </div>
          <div>
            <p className="regionSorting">REGION</p>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickAsc.bind(this, "COUNTRYREGION")}
            >
              ASC
            </button>
            <button
              type="button"
              className="sortingBtn"
              onClick={this.clickDesc.bind(this, "COUNTRYREGION")}
            >
              DESC
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
            ? this.props.countryLists
                .slice(0, this.props.index)
                .map(country => {
                  return (
                    <div>
                      <ul>
                        <li className="countryLists">
                          <p className="nameField">{country.name}</p>
                          <p className="codeField">{country.alpha2Code}</p>
                          <p className="callingCodeField">
                            {country.callingCodes[0]}
                          </p>
                          <p className="capitalField">{country.capital}</p>
                          <p className="regionField">{country.region}</p>
                          <button
                            type="button"
                            className="deleteBtn"
                            onClick={this.clickDelete.bind(this, country.name)}
                          >
                            DELETE
                          </button>
                        </li>
                      </ul>
                    </div>
                  );
                })
            : this.props.countryLists
                .slice(0, this.props.index)
                .map(country => {
                  return (
                    <div>
                      <ul>
                        <li className="countryLists">
                          <p className="nameField">{country.name}</p>
                          <p className="codeField">{country.alpha2Code}</p>
                          <p className="callingCodeField">
                            {country.callingCodes[0]}
                          </p>
                          <p className="capitalField">{country.capital}</p>
                          <p className="regionField">{country.region}</p>
                          <button
                            type="button"
                            className="deleteBtn"
                            onClick={this.clickDelete.bind(this, country.name)}
                          >
                            DELETE
                          </button>
                        </li>
                      </ul>
                    </div>
                  );
                })}
        </div>
      </div>
    );
  }
}
