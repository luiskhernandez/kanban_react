import React, {Component} from 'react';
import Notes from './Notes.jsx';
import uuid from 'node-uuid';


export default class App extends
Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    }
  }
  render(){
    const notes = this.state.notes;
    return(
      <div>
        <button className="add-note" onClick={this.addNote.bind(this)}>New note</button>
        <Notes items={notes} />
      </div>
    );
}
addNote(){
  notes = this.state.notes.concat([{ id: uuid.v4(), task: 'New task' }]);
  this.setState({
    notes: notes
  })
}
}
