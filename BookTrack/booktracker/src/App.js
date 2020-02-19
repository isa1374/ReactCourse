import React, { Component } from 'react';
import './App.css';
import BookContainer from './containers/bookContainer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
          <BookContainer/>
    );
  }
}

export default App;
