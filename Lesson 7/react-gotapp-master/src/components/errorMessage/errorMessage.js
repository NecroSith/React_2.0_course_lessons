import React from 'react';
import './errorMessage.css';
import img from './404.jpg';

const ErrorMessage = () => {
    return (
        <>
        <img src={img} alt="record not found"></img>
        <span>Oh no!</span>
        </>
        
    )
}

export default ErrorMessage;