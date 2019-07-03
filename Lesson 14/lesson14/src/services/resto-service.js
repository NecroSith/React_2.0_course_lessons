import React from 'react';
import Error from '../components/error';
import WithRestoService from '../components/hoc';
import {connect} from 'react-redux';
import {menuError} from '../actions';


export default class RestoService {
    constructor() {
        this._apiBase = 'http://localhost:3001';
    }
    getMenuItems() {
        const result = fetch(this._apiBase + `/menu`)
            .then(res => res.json())
            // .catch(res => <Error />);
        return result;
    }
    postItems = async(data) => {
        const result = await fetch(this._apiBase + '/cart', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return result;
    }
}

// const mapStateToProps = (state) => {
//     return {
//         error: state.error
//     }
// }

// const mapDispatchToProps = {
//     menuError,
// }

// export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(RestoService));
