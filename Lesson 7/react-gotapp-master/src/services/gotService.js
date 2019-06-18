import React from 'react';

export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const result = await fetch(`${this._apiBase}${url}`);
        
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, received status ${result.status}`);
        }

        return await result.json();
    }

    getAllRecords(url) {
        return this.getResource(url);
    }

    getOneRecord(url) {
        return this.getResource(`${url}/${Math.floor(Math.random() * (120 - 1) + 1)}`);
    }


}