import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar } from 'components/Common'
import Router from './route'

class App extends Component {
  render() {
      return (
        <Fragment>
        <div className='container' style={{ marginTop: '10%' }}>
          <BrowserRouter>
            <NavBar />
            <Router />
          </BrowserRouter>
        </div>
        </Fragment>
      )
  }
}

export default App;
