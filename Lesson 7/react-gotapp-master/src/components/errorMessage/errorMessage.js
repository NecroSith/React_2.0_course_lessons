import React from 'react';
import './errorMessage.css';
import img404 from './404.jpg';
import img408 from './408.png';
import img410 from './410.png';

export default class ErrorMessage extends React.Component {

    render() {
        console.log('we have it', this.props.code);
        if (this.props.code == 404) {
            return (
                <>
                <img src={img404} alt="record not found"></img>
                <span>Oh no!</span>
                </>
                
            )
        }
        else if (this.props.code == 408) {
            return (
                <>
                <img src={img408} alt="request timeout"></img>
                <span>Oh no!</span>
                </>
                
            )
        }
        else if (this.props.code == 410) {
            return (
                <>
                <img src={img410} alt="record gone or deleted"></img>
                <span>Oh no!</span>
                </>
                
            )
        }
        else {
            return (
                <>
                <span>Something just went wrong</span>
                </>
                
            )
        }
    } 
}
