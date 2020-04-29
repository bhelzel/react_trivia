import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import './stylesheets/App.css';

import QuestionDisplay from './components/question_display';

const App = () => (
  <div className="wrapper">
    <QuestionDisplay />
  </div>
);

export default App;
