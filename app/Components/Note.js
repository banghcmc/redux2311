import React from 'react';
import {connect} from 'react-redux';
class Note extends React.Component{
  remove(){
    var {dispatch, info} = this.props;
    dispatch({type: 'REMOVE_SUBJECT', id: info.id});
  }
  render(){
    var {name} = this.props.info;
    return (
      <div>
        <p>{name}</p>
        <button onClick={this.remove.bind(this)}>Xoá</button>
      </div>
    )
  }
}

module.exports = connect()(Note);
