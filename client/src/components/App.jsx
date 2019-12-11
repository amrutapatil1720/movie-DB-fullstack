import React, { Component } from 'react';
import AddItemForm from './addItemForm.jsx';
import MovieList from './movieList.jsx';
import StaticData from './staticData.jsx';
import SearchMovie from './SearchMovie.jsx';
import Watched from './watched.jsx';
// import {ajax} from 'jquery';

var movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      title: '',
      searchItem: '',
      isWatched: true
    }
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchedMovie = this.handleSearchedMovie.bind(this);
  }
  handleAddMovie(event) {
    this.setState({
      title: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    //console.log("new name is:", this.state.title);

    this.state.movies.push({ title: this.state.title });
    this.setState({ title: '' });
  }
  handleSearchedMovie(event) {
    //console.log(event.target.value);
    this.setState({
      searchItem: event.target.value
    });
  }

  render() {

    var filterArray=this.state.movies.filter((movie) => {
     return movie.title.toLowerCase().includes(this.state.searchItem.toLowerCase())
     });
     //console.log("gfjhgkjh",filterArray);

  //console.log(filterArray);
    return (
      <div>
        <StaticData />
        <AddItemForm handleAddMovie={this.handleAddMovie} handleSubmit={this.handleSubmit} />
        <SearchMovie handleSearchedMovie={this.handleSearchedMovie}  />
        <Watched />


        {filterArray.map((movie) => { return <MovieList movie={movie}/>

      })
    }
      </div>
    );
  }

}

export default App;