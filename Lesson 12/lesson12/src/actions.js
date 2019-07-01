
import {createStore} from 'redux';
import reducer from './reducer';


export const inc = () => {return{type: 'INC'}}
export const dec = () => {return{type: 'DEC'}}
export const zero = () => {return{type: 'ZERO'}}
export const dwld = (value) => {return{type: 'DWLD', value: value}}
export const upld = () => {return{type: 'UPLD'}}

const store = createStore(reducer);


const getData = (type = 'get') => {
    if (type === 'get') {
        const randomData = async () => {
            const result = await fetch(`http://localhost:3001/numbers/${Math.floor(Math.random() * 2 + 1)}`)
                .then(res => res.json())
                .then(res => +res.const)
                .catch(err => new Error(err))
            store.dispatch(dwld(result));
        }
        // console.log(randomData());
        // randomData();
        // dispatch({type: 'DWLD', value: randomData});
        // return randomData;
    }
    else if (type === 'post') {
        // const data = await fetch('`http://localhost:3001/numbers/', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({a: 1, b: 'Textual content'})
        //   });
        //   const content = await rawResponse.json();
    }
}

getData();

// const mapStateToProps = (state) => {
//     return {
//         counter: state
//     }
// }

// export default connect(mapStateToProps, actions)(getData);