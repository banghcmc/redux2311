var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');
var List = require('List');
var {Provider} = require('react-redux');

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
    default:
    return state;
  }
}

var store = redux.createStore(reducer);
//store.dispatch({type: 'ADD_SUBJECT', item: {id: 10, name: 'Unity'}})

ReactDOM.render(
  <Provider store={store}>
    <List/>
  </Provider>,
  document.getElementById('root')
);


console.log(JSON.stringify(store.getState()));
// var obj = {a: 100, b: 'Pho'}
// var obj1 = Object.assign({}, obj);
// var obj1 = {...obj, a: 80}
// obj.a = 111;
// console.log(obj1);
//pure function
// function add(a, b){
//   return a + b;
// }
// var reducerNhietDo = (nhietDo = 30, action) => {
//   switch (action.type) {
//     case 'INCR_TEMP':
//       return nhietDo + action.addingTemp
//     default:
//       return nhietDo;
//   }
// }
//
// var reducerDoAm = (doAm = 80, action) => {
//   switch (action.type) {
//     case 'CHANGE_HUMIDITY':
//       return action.doAmMoi
//     default:
//       return doAm;
//   }
// }
//Them mon hoc (truyen vao ten), xoa mon hoc (index)
// var reducerMonHoc = (mangMonHoc = ['Android', 'iOS'], action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return [...mangMonHoc, action.monHoc]
//     case 'REMOVE_ITEM':
//       return  mangMonHoc.filter((e, i) => i != action.index)
//     default:
//       return mangMonHoc;
//   }
// }
//
// var reducer = redux.combineReducers({
//   nhietDo: reducerNhietDo,
//   doAm: reducerDoAm,
//   mang: reducerMonHoc
// });
//
// var store = redux.createStore(reducer, redux.compose(
//   window.devToolsExtension? window.devToolsExtension(): f=>f
// ));
//
// store.subscribe(() => {
//   // console.log(store.getState());
//   document.getElementById('txt').innerHTML = JSON.stringify(store.getState());
// })
//
// store.dispatch({type: 'INCR_TEMP', addingTemp: 1});
// store.dispatch({type: 'INCR_TEMP', addingTemp: 1});
// store.dispatch({type: 'INCR_TEMP', addingTemp: 1});
// store.dispatch({type: 'CHANGE_HUMIDITY', doAmMoi: 90});
// store.dispatch({type: 'ADD_ITEM', monHoc: 'NodeJS'});
// store.dispatch({type: 'ADD_ITEM', monHoc: 'ReactJS'});
// store.dispatch({type: 'ADD_ITEM', monHoc: 'PHP'});
// store.dispatch({type: 'REMOVE_ITEM', index: 1});
