import React from 'react';
import ErrorMessage from '../components/errorMessage';

export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const result = await fetch(`${this._apiBase}${url}`);
        try {
            return await result.json();
        }
        catch(err) {
            const {status} = result;
            console.log(status);
            return status;
        } 
    }

    async getAllRecords(url) {
        try {
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
        catch(err) {
            console.log(err);
        }
    }

    async getOneCharacter(number) {
        const result = await this.getResource(`/characters/${number}`);
        console.log(result);
        return this._transformCharacter(result);
    }

    async getOneRecord(url) {
        let maxValue = 0;
        if (url == '/characters') {
            maxValue = 120000;
        }
        else if (url == '/books') {
            maxValue = 10;
        }
        else if (url == '/houses') {
            maxValue = 400;
        }
        const result = await this.getResource(`${url}/${Math.floor(Math.random() * (maxValue - 1) + 1)}`);

        if (result == 404 || result == 408 || result == 410) {
            return result;
        }
        else {
            return this._transformCharacter(result);
        }
        
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