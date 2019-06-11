import React, { Component } from 'react';

import PostListTime from '../post-list-time';
import './post-list-item.css';
import PostEditForm from '../post-edit-form';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            important: false,
            like: false,
            edit: false
        }

        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onEdit = this.onEdit.bind(this);

    }

    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    onEdit() {
        this.setState(({edit}) => ({
            edit: !edit
        }))
    }

    render() {
        const {label} = this.props;
        const {important, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (this.state.important) {
            classNames += ' important';
        }

        if (this.state.like) {
            classNames += ' like';
        }

        return (
            <>
                <div className={classNames}>
                    <span className='app-list-item-label'>
                        {label}
                    </span>
                    <div className='d-flex justify-content-center align-items-center'>
                        <PostListTime />
                        <button type='button' className='btn-edit btn-sm' onClick={this.onEdit}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button type='button' className='btn-star btn-sm' onClick={this.onImportant}>
                            <i className='fa fa-star'></i>
                        </button>
                        <button type='button' className='btn-trash btn-sm'>
                            <i className='fa fa-trash-o'></i>
                        </button>
                        <button onClick={this.onLike}>
                            <i className='fa fa-heart' ></i>
                        </button>
                    </div>
                </div>
                <div>
                    <PostEditForm label={label} classNames={classNames} edit={this.edit}/>
                </div>
            </>
        )
    }
}