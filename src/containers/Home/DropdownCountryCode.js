import React, { Component, Fragment } from 'react'
import Select from 'react-select'

export default class DropdownCountryCode extends Component {
    constructor(props) {
      super(props)
      this.state = {
        items: [],
        selectedOption: { label: props.selected, value: props.selected },
        isLoading: true
      }
  
    }
  
    componentDidMount() {
      fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => this.setState({ items: data, isLoading: false }))
    }

  
    render() {
      const { items, selectedOption } = this.state
  
      if (this.isLoading) {
        return <h2>Loading...</h2>
      }

      let options = items.map((item,index) => 
        ({ 
          value : item.alpha2Code, 
          label : item.name 
        })
      )
  
      return (
        <Fragment>
           <Select className="mt-4 col-md-6 col-offset-4"
              defaultValue={selectedOption}
              onChange={(e) => this.props.dropdownChanged(e.value)}
              options={options}
              autoFocus={true}
              />
        </Fragment>
      )
    }
  
  
  }
  