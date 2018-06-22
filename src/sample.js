import React, { Component } from 'react';

class App extends Component {
    constructor(props){
    super(props)
    this.state = {name:"Haidoro"}
  }
  render() {   
      <h1>Hello!{this.state.name}</h1>
      <p>functionalコンポーネントを作成した</p>
  }
}