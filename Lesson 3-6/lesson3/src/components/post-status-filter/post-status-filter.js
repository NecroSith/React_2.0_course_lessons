import React from 'react';

import './post-status-filter.css';

export default class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравились'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const newClass = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button 
                    key={name} 
                    type='button' 
                    onClick={() => this.props.onFilterSelect(name)}
                    className={`btn ${newClass}`}>
                    {label}
                </button>
            )
        })
        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}
