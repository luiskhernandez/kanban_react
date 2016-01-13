import React, {Component} from 'react';
import Notes from './Notes.jsx';
import uuid from 'node-uuid';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';


export default class App extends
Component {
  constructor(props){
    super(props);
    this.state = NoteStore.getState();
  }
  componentDidMount(){
    NoteStore.listen(this.storeChanged.bind(this));
  }
  componentWillUnmount(){
    NoteStore.unlisten(this.storeChanged.bind(this));
  }
  storeChanged(state){
    this.setState(state);
  }
  render(){
    const notes = this.state.notes;
    return(
      <div>
        <button className="add-note" onClick={this.addNote.bind(this)}>New note</button>
        <Notes items={notes} onEdit={this.editNote.bind(this)} onDelete={this.deleteNote.bind(this)} />
      </div>
    );
}
addNote() {
  NoteActions.create({task: "New task"});
}
editNote(id, task){
  NoteActions.update({id, task});
}
deleteNote(id){
  if(confirm("Are you sure?")){
    NoteActions.delete(id);
  }
}
}
