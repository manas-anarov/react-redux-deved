import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import allReducer from './reducers'
import {Provider} from 'react-redux'



const myStore = createStore(
	allReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)






// import {createStore} from 'redux';



// const increment = () =>{
// 	return{
// 		type: 'INCREMENT'
// 	}
// }

// const decrement = () =>{
// 	return{
// 		type: 'DECREMENT'
// 	}
// }



// const counter = (state = 0, action) =>{
// 	switch(action.type){
// 		case "INCREMENT":
// 			return state + 1;
// 		case "DECREMENT":
// 			return state - 1;	
// 	}
// }

// let store = createStore(counter)


// store.subscribe(()=>console.log(store.getState()))

// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())









ReactDOM.render(
  <React.StrictMode>
  <Provider store={myStore}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
