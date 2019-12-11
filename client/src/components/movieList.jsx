import React from 'react';
import MovieItem from './movieItem.jsx';
// import '../dist/style.css';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWatched: true
    }
    //console.log("list compo", props);
    this.handleWatchedButton = this.handleWatchedButton.bind(this);

  }
  handleWatchedButton() {
    // console.log(isWatched);
    this.setState({ isWatched: !this.state.isWatched });
  }
  render() {
    const buttonText = this.state.isWatched ? "Watched" : "To Watch";
    return (
      <div>
        <div>
          <table className="table_layout">
            {this.props.movie.title}
            <button onClick={this.handleWatchedButton}>{buttonText} </button>

          </table>
        </div>
      </div>
    )
  }
}
export default MovieList;


// {return <MovieItem singleItem={movie.name}/> }