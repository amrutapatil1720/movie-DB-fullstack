
import React from 'react';

const MovieItem = (props) => {
  // console.log("props in list is", props.isWatched);
  const buttonText = props.isWatched ? "Watched" : "To Watch";
  return (
  <div>
  <tr>
    <span>{props.singleMovie.title}</span>
    <span>
      <button onClick={props.handleWatchedButton}>{buttonText}</button>
    </span>

  </tr>
</div>
  )
}

export default MovieItem;