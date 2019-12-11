import React from 'react';

const SearchMovie = (props) => {
console.log(props);
  return (
    <div>
      <div className="search_layout">
        <form>
        <input type="text" placeholder="Search for the Movie..." value={props.searchItem} onChange={props.handleSearchedMovie} className="addForm_layout" />

        </form>
      </div>  

    </div>
  );
}

export default SearchMovie;