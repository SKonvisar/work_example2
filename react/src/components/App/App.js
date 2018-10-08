import React, { Component } from 'react';
import Title from "../Title/Title";
import Formfield from '../Formfield/Formfield'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Title />
        <Formfield />
      </div>
    );
  }
}

export default App;
