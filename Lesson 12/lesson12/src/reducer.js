const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC': return state + 1;
        case 'DEC': return state - 1;
        case 'DWLD': getData(); break;
        case 'UPLD': return 2;
        case 'ZERO': return 0;
        default: return state;
    }
}

const getData = (type = 'get') =>  {
    const data = fetch('http://localhost:3000/numbers/1')
        .then(res => res.json())
        // .then(res => console.log(res))
    console.log(data);
}

export default reducer;