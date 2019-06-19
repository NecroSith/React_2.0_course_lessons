import React from 'react';


export default class dbService extends React.Component {
    constructor() {
        super();
        this._apiBase = require('../db.json');
    }

    getResource() {

        let data = this._apiBase;
        console.log(data);

        // data = JSON.parse(data);

        // for(var i = 0; i < data.length; i++) {
        //     var obj = data[i];
            console.log(data[0]);
        
        //     console.log("Name: " + obj);
        // }

        return data;
    }


}