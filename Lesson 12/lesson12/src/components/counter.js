import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, zero}) => {
    return (
        <div className="jimbotron">
            <h1 id="counter">{counter}</h1>
            <div className="button__wrapper">
                <button onClick={inc} className="btn btn-primary">
                <i className="fas fa-plus"></i>
                </button>
                <button onClick={dec} className="btn btn-primary dec">
                <i className="fas fa-minus"></i>
                </button>
                <button onClick={zero} className="btn btn-primary zero">
                <i className="fas fa-sync-alt"></i>
                </button>
                <button className="btn btn-primary">
                <i className="fas fa-sync-alt"></i>
                </button>
                <button className="btn btn-primary">
                <i className="fas fa-sync-alt"></i>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);