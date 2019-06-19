import React from 'react';
import './errorMessage.css';
import img404 from './404.jpg';
import img408 from './408.png';
import img419 from './410.png';

const ErrorMessage = () => {
    return (
        <>
        <img src={img404} alt="record not found"></img>
        <span>Oh no!</span>
        </>
        
    )
}

const ErrorRequestTimeout = () => {
    return (
        <>
        <img src={img408} alt="record not found"></img>
        <span>Oh no!</span>
        </>
        
    )
}


export default ErrorMessage;