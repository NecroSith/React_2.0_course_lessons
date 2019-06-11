import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 1},
        {label: 'Going to learn Vue', important: false, id: 2},
        {label: 'Going to learn Angular', important: false,  id: 3},
        {label: 'Going to learn Javascript', important: false, id: 4},
        55
    ]
    return (
        <div className='App'>
            <AppHeader />
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
        
    )
}

export default App;