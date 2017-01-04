var redux = require('redux');
var defaultState = {mang: [
  {id: 1, name: 'Android'},
  {id: 2, name: 'iOS'},
  {id: 3, name: 'NodeJS'}
], isAdding: false}

var reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_SUBJECT':
      return {...state, mang: [...state.mang, action.item]}
    case 'REMOVE_SUBJECT':
      return {...state, mang: state.mang.filter(e => e.id != action.id)}
    case 'TOGGLE':
      return {...state, isAdding: !state.isAdding}
    default:
    return state;
  }
}

var store = redux.createStore(reducer);
module.exports = store;
