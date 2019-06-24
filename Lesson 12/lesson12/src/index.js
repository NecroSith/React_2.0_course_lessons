import './index.css';
import {createStore} from 'redux'

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC': return state + 1;
        case 'DEC': return state - 1;
        case 'ZERO': return 0;
        default: return state;
    }
}

const inc = () => {return{type: 'INC'}}
const dec = () => {return{type: 'DEC'}}
const zero = () => {return{type: 'ZERO'}}

const store = createStore(reducer);

const update = () => {
    return document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);

document.getElementById('inc').addEventListener('click', () => {store.dispatch(inc())});
document.getElementById('dec').addEventListener('click', () => {store.dispatch(dec())});
document.getElementById('zero').addEventListener('click', () => {store.dispatch(zero());
});
