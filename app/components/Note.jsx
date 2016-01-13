import React, { Component } from 'react';

export default class Note extends
Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false
    };
  }
  render() {
    return this.state.editing ? this.renderEdit() : this.renderNote();
  }
  renderEdit(){
    return(
      <input type="text" autoFocus={true}
        defaultValue={this.props.task}
        onBlur={this.finishEdit.bind(this)}
        onKeyPress={this.checkEnter.bind(this)} />
    )
  }
  renderNote () {
    const onDelete = this.props.onDelete;
    return (
      <div>
        <span className="task" onClick={this.edit.bind(this)}> {this.props.task} </span>
        {onDelete ? this.renderDelete() : null }
        </div>
    )
  }
  renderDelete(){
    return <button className="delete" onClick={this.props.onDelete}>x</button>
  }
  edit(){
    this.setState({
      editing: true
    });
  }
  checkEnter(e){
    if(e.key === 'Enter'){
      this.finishEdit(e);
    }
  }
  finishEdit(e){
    this.props.onEdit(e.target.value);
    this.setState({
      editing: false
    });
  }
}
