import React, { Component } from 'react';

import PostListTime from '../post-list-time';
import './post-list-item.css';
import PostEditForm from '../post-edit-form';
import styled from 'styled-components';

export default class PostListItem extends Component {

    onEdit() {
        this.setState(({edit}) => ({
            edit: !edit
        }))
    }

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
        }

        if (like) {
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
                        <button type='button' className='btn-star btn-sm' onClick={onToggleImportant}>
                            <i className='fa fa-star'></i>
                        </button>
                        <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
                            <i className='fa fa-trash-o'></i>
                        </button>
                        <button onClick={onToggleLiked}>
                            <i className='fa fa-heart' ></i>
                        </button>
                    </div>
                </div>
                <div>
                    <PostEditForm label={this.props.label} classNames={classNames} edit={this.edit}/>
                </div>
            </>
        )
    }
}