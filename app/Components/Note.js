import React from 'react';

class About extends React.Component{
  render(){
    var {name} = this.props.info;
    return (
      <div>
        <p>{name}</p>
        <button>Xoá</button>
      </div>
    )
  }
}

module.exports = About;
