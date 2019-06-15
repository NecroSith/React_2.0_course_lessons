import React, { Component } from 'react';

import PostListTime from '../post-list-time';
import './post-list-item.css';
import PostEditForm from '../post-edit-form';
import PostDeleteModal from '../post-delete-modal';


export default class PostListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false
        }

        this.onEdit = this.onEdit.bind(this);
    }

    onEdit(e) {
        e.preventDefault();
        this.setState(({edit}) => ({
            edit: !edit
        }))
    }

    render() {
        const {
            id,
            text,
            label, 
            onDelete,
            updatePost, 
            onToggleImportant, 
            onToggleLiked, 
            important, 
            like
        } = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <>
                <div 
                    className={classNames}>
                    <span 
                        className='app-list-item-label'>
                        {label}
                    </span>
                    <div 
                        className='d-flex justify-content-center align-items-center'>
                        <PostListTime />
                        <button 
                            type='button' 
                            className='btn-edit btn-sm' 
                            onClick={this.onEdit}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button 
                            type='button'
                            className='btn-star btn-sm' 
                            onClick={onToggleImportant}>
                            <i className='fa fa-star'></i>
                        </button>
                        <PostDeleteModal 
                            onDelete={onDelete} 
                            label={label} />
                        <button 
                            onClick={onToggleLiked}>
                            <i className='fa fa-heart' ></i>
                        </button>
                    </div>
                </div>
                <div>
                    <PostEditForm 
                        label={this.props.label} 
                        edit={this.state.edit}
                        onEdit={this.onEdit}
                        updatePost={() => updatePost(id, text)}
                        />
                </div>
            </>
        )
    }
}