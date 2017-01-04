import React from 'react';
import {connect} from 'react-redux';
var idNote = 10;
class NoteForm extends React.Component{
  add(){
    var {txt} = this.refs;
    var {dispatch} = this.props;
    dispatch({type: 'ADD_SUBJECT', item: {id: ++idNote,name: txt.value}})
  }
  render(){
    return (
      <div>
        <input type="text" ref="txt" placeholder="Nhập môn học"/>
        <br/><br/>
        <button onClick={this.add.bind(this)}>Thêm</button>
      </div>
    )
  }
}

module.exports = connect(function(state){
  return {isAdd: state.isAdding}
})(NoteForm);
