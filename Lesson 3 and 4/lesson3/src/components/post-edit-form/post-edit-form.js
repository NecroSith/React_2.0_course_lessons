import React from 'react';

export default class PostEditForm extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        let classNames = 'bottom-panel d-flex edit-form';
        if (this.props.edit) {
           classNames += ' editing';
        }
        return (
            <form className={classNames}>
                <input 
                    type='text'
                    placeholder='Введите новый текст'
                    className='form-control new-post-label'
                    value={this.props.label}
                />
                <button 
                    type='submit'
                    className='btn btn-success'
                >
                    <i className="fa fa-check"></i>
                </button>
                <button 
                    type='submit'
                    className='btn btn-danger'
                >
                    <i className='fa fa-times'></i>
                </button>
            </form>
        )
    }
}
