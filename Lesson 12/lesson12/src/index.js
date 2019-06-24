import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

console.log('hi redux');

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC': return state + 1;
        default: return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});

// console.log(store.getState());



// let state = reducer(undefined, {});
// console.log(state);
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);


