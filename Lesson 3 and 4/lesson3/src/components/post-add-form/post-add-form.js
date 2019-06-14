import React from 'react';

import './post-add-form.css';

export default class PostAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(event) {
       this.setState({
           text: event.target.value
       })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <form 
            onSubmit={this.onSubmit}
            className='bottom-panel d-flex'>
                <input 
                    type='text'
                    placeholder='О чем Вы сейчас думаете?'
                    className='form-control new-post-label'
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button 
                    type='submit'
                    // onClick={() => this.props.onAdd('text')}
                    className='btn btn-outline-secondary'
                >Добавить пост</button>
            </form>
        )
    }
    
}