import React from 'react';
import Note from 'Note';
import NoteForm from 'NoteForm';
class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {mang: [
      {id: 1, name: 'Android'},
      {id: 2, name: 'iOS'},
      {id: 3, name: 'ReactJS'}
    ]};
  }
  render(){
    return (
      <div>
        <NoteForm/>
        {this.state.mang.map(e => <Note key={e.id} info={e}/>)}
      </div>
    )
  }
}

module.exports = About;
