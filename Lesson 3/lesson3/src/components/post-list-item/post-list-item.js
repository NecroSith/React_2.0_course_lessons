import React from 'react';

import PostListTime from '../post-list-time';
import './post-list-item.css';

const PostListitem = () => {
    return (
        <li className='app-list-item d-flex justify-content-between'>
            <span className='app-list-item-label'>
                Hello!
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <PostListTime />
                <button type='button' className='btn-star btn-sm'>
                    <i className='fa fa-star'></i>
                </button>
                <button type='button' className='btn-trash btn-sm'>
                    <i className='fa fa-trash-o'></i>
                </button>
                <i className='fa fa-heart'></i>
            </div>
        </li>
    )
}

export default PostListitem;