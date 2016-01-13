import React, { Component } from 'react';
import Note from './Note'

export default class Notes extends
Component{
  render(){
    const notes= this.props.items;
    return(
      <ul className="notes">
        {notes.map(this.renderNote)}
      </ul>
    );
  }
  renderNote (note){
    return (
      <li key={note.id}>
        <Note task={note.task}/>
      </li>
    );
  }
}
