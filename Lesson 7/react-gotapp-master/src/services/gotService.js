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

    async getAllRecords(url) {
        const result = await this.getResource(url);
        if (url == '/characters') {
            return result.map(this._transformCharacter)
        }
        else if (url == '/books') {
            return result.map(this._transformBook)
        }
        else if (url == '/houses') {
            return result.map(this._transformHouse)
        }
    }

    async getOneRecord(url) {
        let maxValue = 0;
        if (url == '/characters') {
            maxValue = 120;
        }
        else if (url == '/books') {
            maxValue = 10;
        }
        else if (url == '/houses') {
            maxValue = 400;
        }
        const result = await this.getResource(`${url}/${Math.floor(Math.random() * (maxValue - 1) + 1)}`);
        return this._transformCharacter(result);
    }


    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }


}