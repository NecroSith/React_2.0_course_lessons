const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC': return state + 1;
        case 'DEC': return state - 1;
        case 'DWLD': 
            console.log(getData()); // Выводит promise pending
            return getData(); 
        case 'UPLD': return 2;
        case 'ZERO': return 0;
        default: return state;
    }
}

const getData = async (type = 'get') =>  {
    if (type === 'get') {
        const randomData = await fetch(`http://localhost:3001/numbers/${Math.floor(Math.random() * 2 + 1)}`)
            .then(res => res.json())
            .then(res => res.const)
            .catch(err => new Error(err))
        console.log(randomData); // Выводит число
        return randomData;
    }
    else if (type === 'post') {

    }
}

export default reducer;