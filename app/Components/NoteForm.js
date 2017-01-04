import React from 'react';
import {connect} from 'react-redux';
var idNote = 10;
class NoteForm extends React.Component{
  add(){
    var {txt} = this.refs;
    var {dispatch} = this.props;
    dispatch({type: 'ADD_SUBJECT', item: {id: ++idNote,name: txt.value}})
    dispatch({type: 'TOGGLE'});
  }
  show(){
    var {dispatch} = this.props;
    dispatch({type: 'TOGGLE'});
  }
  render(){
    if(this.props.isAdd){
      return (
        <div>
          <input type="text" ref="txt" placeholder="Nhập môn học"/>
          <br/><br/>
          <button onClick={this.add.bind(this)}>Thêm</button>
        </div>
      )
    }
    return <button onClick={this.show.bind(this)}>Add</button>

  }
}

module.exports = connect(function(state){
  return {isAdd: state.isAdding}
})(NoteForm);
