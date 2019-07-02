import React from 'react';
import Error from '../components/error';

export default class RestoService {
    constructor() {
        this._apiBase = 'http://localhost:3001';
    }
    getMenuItems() {
        const result = fetch(this._apiBase + `/menu`)
            .then(res => res.json())
            .catch(res => <Error />);
        return result;
    }
    postItems = async(data) => {
        const result = await fetch('http://localhost:3001/cart', {
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