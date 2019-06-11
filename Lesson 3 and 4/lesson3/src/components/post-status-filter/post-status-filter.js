import React from 'react';

import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className='btn-group'>
            <button type='button' className='btn btn-info'>Все</button>
            <button type='button' className='btn btn-ouline-secondary'>Понравились</button>
        </div>
    )
}

export default PostStatusFilter;