<!-- # Full Stack Review Workshop
check points
-server setup
-html setup
- react setup
-------------------------
import {ajax} from 'jquery';

getMovies() with ajax GET method
bind getMovies()
invoked getMovies() in componentDidMount()

const path = require('path');

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.get('/api/movies', (req, res) => {
  //console.log("getting response");
  res.send('Hello World!')
});

addMovie() for ajax POST call



goto localhost:3000/api/movies -> check the res.send() msg is getting or not.

write create database, table in schema.sql
 goto sql prompt by setting below-

 mysql -u root  < schema.sql
 mysql -u root
 show databases;
 use database;
 show tables;
insert values into table



Models.js

make database connection ,console.log results in connection.query()
comment connection.end();

controller.js
add getMovies and addMovies method insode Module.exports
 -->




import React from 'react';
import MovieInfo from './movieInfo.jsx';

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: false
    }
    this.movieNameClick = this.movieNameClick.bind(this);
  }

  movieNameClick(event) {
    event.preventDefault();
    let details = this.state.details;
    console.log(details);
    this.setState({ details: !details });
  }

  render() {
    const buttonText = props.isWatched ? "Watched" : "To Watch";
    if (!this.state.details) {
      return (
        <div>
          <tr>
            <span onClick={this.movieNameClick}>{props.singleMovie.title}</span>

              {!this.state.details && ( <div><MovieInfo movie={props.singleMovie.title} /> </div> )}

            <div>
              <button onClick={props.handleWatchedButton}>{buttonText}</button>
            </div>
          </tr>
        </div>
      );
    }
    else {
      return null;
    }
  }
}


export default MovieItem;# hrsf124-movie-DB-fullstack
