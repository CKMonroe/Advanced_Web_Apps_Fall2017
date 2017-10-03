import React, { Component } from 'react';
import logo from './turkey.svg';
import './App.css';


import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Midterm Q10 - Recipe Form - CKM</h1>
        </header>
        
        <Form/>
        
      </div>
    );
  }
}



export default App;
