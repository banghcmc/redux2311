var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');
var About = require('./Components/About.js');
ReactDOM.render(
  <About/>,
  document.getElementById('root')
);

// var obj = {a: 100, b: 'Pho'}
// var obj1 = Object.assign({}, obj);
// var obj1 = {...obj, a: 80}
// obj.a = 111;
// console.log(obj1);
//pure function
// function add(a, b){
//   return a + b;
// }

var reducer = (state = {nhietDo: 30}, action) => {
  return state;
}

var store = redux.createStore(reducer);

console.log(store.getState());
