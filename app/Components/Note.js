import React from 'react';

class About extends React.Component{
  remove(){
    this.props.handleRemove(this.props.info.id);
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

module.exports = About;
