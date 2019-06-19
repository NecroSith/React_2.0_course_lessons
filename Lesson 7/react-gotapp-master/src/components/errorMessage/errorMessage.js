import React from 'react';
import './errorMessage.css';
import img404 from './404.jpg';
import img408 from './408.png';
import img410 from './410.png';

export default class ErrorMessage extends React.Component {

    render() {
        console.log('we have it', this.props.code);

        let img = null,
            msg = 'Something went wrong!';

        if (this.props.code == 404) {
            img = img404;
            msg = 'Record not found';
        }
        else if (this.props.code == 408) {
            img = img408;
            msg = 'Request timeout';
        }
        else if (this.props.code == 410) {
            img = img410;
            msg = 'Record deleted';
        }
        return (
            <>
            <img src={img} alt={msg}></img>
            <span>{msg}</span>
            </>
            
        )
    } 
}
