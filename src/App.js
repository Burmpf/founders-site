import React, { Component } from 'react';
import './App.css';
import NavbarComponent from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
<NavbarComponent></NavbarComponent>
        </header>
      </div>
    );
  }
}

export default App;