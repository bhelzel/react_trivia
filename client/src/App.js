import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import logo from './logo.svg';
import './stylesheets/App.css';

const App = () => (
  <div className="wrapper">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{this.state.apiResponse}</p>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);




export default App;
