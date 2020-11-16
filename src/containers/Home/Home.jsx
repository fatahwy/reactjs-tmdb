import React, { Component, Fragment } from 'react'
import DropdownCountryCode from './DropdownCountryCode.jsx'
import MovieListView from './MovieListView'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region: 'ID'
    }
  }

  dropdownChanged = (reg) => {
    this.setState({region: reg});
  }

  render() {
    return (
      <Fragment>
        <h1>Homepage</h1>
        <DropdownCountryCode selected={this.state.region} dropdownChanged={this.dropdownChanged} />
        <br/>
        <br/>
        <MovieListView region={this.state.region}/>
      </Fragment>
    )
  }
}

export default Home;