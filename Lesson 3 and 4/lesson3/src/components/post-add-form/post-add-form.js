import React from 'react';

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <form className='bottom-panel d-flex'>
            <input 
                type='text'
                placeholder='О чем Вы сейчас думаете?'
                className='form-control new-post-label'
            />
            <button 
                type='submit'
                onClick={() => onAdd('hello')}
                className='btn btn-outline-secondary'
            >Добавить пост</button>
        </form>
    )
}

export default PostAddForm;