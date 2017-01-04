import React from 'react';
import Note from 'Note';
import NoteForm from 'NoteForm';
import {connect} from 'react-redux';
class List extends React.Component{
  constructor(props){
    super(props);
  }

  handleRemove(id){
    var index = this.state.mang.findIndex(e => e.id == id);
    this.state.mang.splice(index, 1);
    this.setState(this.state);
  }

  handleAdd(monHoc){
    var {mang} = this.props;
    mang.push({id: mang.length + 1, name: monHoc});
    this.setState(this.state);
  }
//khoaphamtraining@gmail.com
/*
  NodeJS 2311
  ten do an.
  ten ban.
  ngay sinh
*/
  render(){
    return (
      <div>
        <NoteForm handleAdd={this.handleAdd.bind(this)}/>
        {this.props.mang.map(e => <Note key={e.id} info={e}
          handleRemove={this.handleRemove.bind(this)}/>)}
      </div>
    )
  }
}

module.exports = connect(function(state){
  return {mang: state.mang};
})(List);
