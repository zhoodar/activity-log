import React, { Component } from 'react';
import logo from './images/logo.svg';
import './stylesheets/App.css';

class ActivityLog extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default ActivityLog;
