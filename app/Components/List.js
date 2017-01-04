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

  handleRemove(id){
    var index = this.state.mang.findIndex(e => e.id == id);
    this.state.mang.splice(index, 1);
    this.setState(this.state);
  }

  handleAdd(monHoc){
    var {mang} = this.state;
    mang.push({id: mang.length + 1, name: monHoc});
    this.setState(this.state);
  }

  render(){
    return (
      <div>
        <NoteForm handleAdd={this.handleAdd.bind(this)}/>
        {this.state.mang.map(e => <Note key={e.id} info={e}
          handleRemove={this.handleRemove.bind(this)}/>)}
      </div>
    )
  }
}

module.exports = About;
