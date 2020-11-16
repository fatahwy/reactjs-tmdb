import React, { Component, Fragment } from 'react'

class MovieListView extends Component {
    constructor(props) {
      super(props)
      this.state = {
        items: [],
        isLoading : true,
      }
    }
  
    componentDidMount() {
      this.fetchMovies()
    }

    componentDidUpdate(prevProps) {
      if(prevProps.region !== this.props.region){
        this.setState({
          isLoading: true,
        })
        this.fetchMovies()
      }
    }

    fetchMovies() {
      fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=9abacadbd654cac7308451226d783d8e&language=en-US&page=1&region="+this.props.region)
      .then(response => response.json())
      .then(data => this.setState({ items: data.results, isLoading: false }))
  }
  
    render() {
      const { items, isLoading } = this.state

      if (isLoading) {
        return <h2>Loading...</h2>
      } else if (items.length === 0) {
        return <h2>There is no movies</h2>
      }
  
      return (
        <Fragment>
          <table className='table table-bordered table-striped'>
            <tbody>
            { 
              items.map((item,index) => 
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.original_title}</td>
                  <td>{item.release_date}</td>
                  <td>{item.popularity}</td>
                  <td><img alt={item.original_title} src={item.poster_path ? 'https://image.tmdb.org/t/p/w500' + item.poster_path : ''} height='100px' /></td>
                </tr>
              )
            }
            </tbody>
          </table>
        </Fragment>
      )
    }
  
  }

  export default MovieListView;