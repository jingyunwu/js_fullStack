import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import index from './reducer/index';
import Count from './App';

 


const store = createStore(index);

 

ReactDOM.render( <Provider store={store}><Count /></Provider>
, document.getElementById('root'));

// store.subscribe(() => {
//   ReactDOM.render(<Count />, document.getElementById('root'));
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
