import React from 'react';


export default class dbService extends React.Component {
    constructor() {
        super();
        this._apiBase = '../db.json';
    }

    readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }


    getResource() {

        this.readTextFile(this._apiBase, function(text){
            var data = JSON.parse(text);
            console.log(data);
        });

        // const data = JSON.parse('../db.json');
        // console.log(data);
        // const result = await fetch(this._apiBase);

        // if (!result.ok) {
        //     throw new Error(`Couldnot fetch ${this._apiBase}, got status ${result.status}`);
        // }

        // return data;
    }


}