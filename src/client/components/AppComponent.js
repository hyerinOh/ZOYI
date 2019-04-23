import React, { Component } from 'react';
import '../app.css';
import MainPage from './MainPage';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {
    console.log('props',this.props);
    return(
      <div>
        <MainPage {...this.props}/>
      </div>
    );
  }
}
 
export default AppComponent;
