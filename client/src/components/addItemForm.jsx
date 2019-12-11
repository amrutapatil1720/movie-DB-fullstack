import React, { Component } from 'react';
import MovieList from './movieList.jsx';

const AddItem=(props) =>{
  //console.log(props);
    return (
<div >
  <form onSubmit={props.handleSubmit}>
    <input type="text" defaultValue={props.title} placeholder="Add movie name..." onChange={props.handleAddMovie} className="addForm_layout"/>

    <input type="submit" value="Add Item" className="button_layout" />
  </form>

      </div>
    );
  }


export default AddItem;