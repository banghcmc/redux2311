import React from 'react';

class NoteForm extends React.Component{
  add(){
    var {txt} = this.refs;
    this.props.handleAdd(txt.value);
    txt.value = '';
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

module.exports = NoteForm;
