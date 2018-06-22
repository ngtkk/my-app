import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props){
    super(props)
    this.state = {name:"Nagata"}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      <h1 class="App-title">Hello!{this.state.name}</h1>
      <p>functionalコンポーネントを作成した</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button bsStyle="primary">Primary</Button><Button bsStyle="danger">Danger</Button>
      </div>
    );
  }
}

export default App;
