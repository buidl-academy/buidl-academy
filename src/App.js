import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="main-text">
          <div className="title">
            <div className="buidl">
              {'{BUIDL}'}
            </div>
            <div className="academy">
              Academy
            </div>
          </div>
          <div className="description">
            Open-Source Ethereum Code School
          </div>
        </div>
        <div className="marker actions">
          <a target="_blank" href="https://forum.buidl.academy"> Forum </a>
        </div>
        <svg className="diagonal" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,80 0,100 100,100 100,95">      
          </polygon>
        </svg>
      </div>
    );
  }
}

export default App;
