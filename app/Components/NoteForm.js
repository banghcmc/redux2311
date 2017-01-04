import React from 'react';

class NoteForm extends React.Component{
  render(){
    return (
      <div>
        <input type="text" ref="txt" placeholder="Nhập môn học"/>
        <br/><br/>
        <button>Thêm</button>
      </div>
    )
  }
}

module.exports = NoteForm;
