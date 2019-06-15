import React from 'react';

export default class DateComponent extends React.Component {
    constructor() {
        super();

        const today = new Date(),
                date = `${today.getFullYear()}-${(today.getMonth() + 1) < 10 ? '0' + today.getMonth() : today.getMonth() }-${(today.getDate() + 1) < 10 ? '0' + today.getDate() : today.getDate() }`;
        
        this.state = {
            date: date
        }
    }

    render() {
        return (
            <span>{this.state.date}</span>
        )
    }
}