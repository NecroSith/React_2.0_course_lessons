// import store from './index';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC': return state + 1;
        case 'DEC': return state - 1;
        case 'DWLD': console.log(action); return action.value; 
        case 'UPLD': return 2;
        case 'ZERO': return 0;
        default: return state;
    }
}

export default reducer;