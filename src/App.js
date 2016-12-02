import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


var App = React.createClass({
  render: function(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>DAMON!</h2>
        </div>
        <p className="App-intro">
          Hi my name is {this.props.name}
        </p>
      </div>
    )
  }
})

export default App;
