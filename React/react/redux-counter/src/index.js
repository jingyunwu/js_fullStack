import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
 
function reducer(state, action) {
  console.log('reducer->>>>', action);
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return 0;
  }
}
function filmReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_FILM':
      return [...state, action.film];
    default :
      return state;
  }
}
const index = combineReducers({
  count: reducer,
  films: filmReducer
})

const store = createStore(index);
class Count extends Component {
  state = {  }
  handleIn = () => {
    store.dispatch({type: 'INCREMENT'})
  }
  handleDe = () => {
    store.dispatch({type: 'DECREMENT'})
  }
  handleAddFilm = () => {
    store.dispatch({type: 'ADD_FILM', film: { name: '123'}})
  }
  render() { 
    
    return (
    <div>
      count: {store.getState().count}
      <button onClick={this.handleIn}>+</button>
      <button onClick={this.handleDe}>-</button>
      <button onClick={this.handleAddFilm}>添加电影</button>
      {
        store.getState().films.map((film, i) => {
          return (
            <li key={i}>{ film.name }</li>
          )
        })
      }
    </div> 
     );
  }
}
 

ReactDOM.render(<Count />, document.getElementById('root'));

store.subscribe(() => {
  ReactDOM.render(<Count />, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
