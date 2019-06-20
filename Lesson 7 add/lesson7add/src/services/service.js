import React from 'react';


export default class dbService extends React.Component {
    constructor() {
        super();
        this._apiBase = require('../db.json');
    }

    getBestsellers() {
        return this._apiBase.bestsellers;
    }


}