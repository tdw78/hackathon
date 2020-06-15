import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import { Navbar } from 'reactstrap';




class App extends Component {
  render() {
    
    return (
      <div className="App">

        <h1>Welcome!!</h1>

      </div>
   
    );
  }
}

export default App;
