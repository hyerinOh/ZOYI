import React, { Component } from 'react';
import '../app.css';
import background from './map.png';
import SearchBar from './SearchBar';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainWrapper">
        <h1>Countries of the World</h1>
        <img
          className="backgroundImg"
          src={background}
          alt="backgroundImg"
        />
        <SearchBar {...this.props}/>
      </div>
    )
  }
}