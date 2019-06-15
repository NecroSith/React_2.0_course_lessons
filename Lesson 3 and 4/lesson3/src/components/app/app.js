import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
// import PostDeleteModal from '../post-delete-modal';
import styled from 'styled-components';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';


const app = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, like: false, id: this.generateId()},
                {label: 'Going to learn Vue', important: false, like: false, id: this.generateId()},
                {label: 'Going to learn Angular', important: false, like: false, id: this.generateId()},
                {label: 'Going to learn Javascript', important: false, like: false, id: this.generateId()}
            ],
            term: '',
            filter: 'all'
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.generateId = this.generateId.bind(this);

        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);

        this.updateSearch = this.updateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    searchPost(term, items) {
        term = term.toLowerCase();
        if (term.length === 0 ) {
            return items;
        }
        return items.filter( (item) => {
            return item.label.toLowerCase().indexOf(term) > -1;
        })
    }

    filterPost(filter, items) {
        if (filter == 'like') {
            return items.filter((item) => item.like);
        }
        else {
            return items;
        }
    }

    generateId() {
        const input = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let newId = '';
        for (let i = 0; i < 7; i++) {
            newId += input.charAt(Math.floor(Math.random() * input.length));
        }
        return newId;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => {
                return elem.id === id;
            });

            console.log(`id: ${id}`);
            
            const before = data.slice(0, index);
            const after = data.slice(index+1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        })
    }

    addItem(text) {
        if (text.trim().length > 0) {
            const newItem = {
                label: text,
                important: false,
                id: this.generateId()
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            })
        }
    }

    returnArray(value, id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
 
            const old = data[index];
            let newItem = {};
            if (value == 'like') {
                newItem = {...old, like: !old.like};
            }
            else if (value == 'imp') {
                newItem = {...old, important: !old.important};
            }   
 
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
 
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
       this.returnArray('imp', id);
    }

    onToggleLiked(id) {
        this.returnArray('like', id);
    }

    updateSearch(term) {
        this.setState({
            term: term
        })
    }

    onFilterSelect(filter) {
        this.setState({
            filter: filter
        })
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(filter, this.searchPost(term, data));
        return (
            <app>
                {/* <PostDeleteModal modal={modal}/> */}
                <AppHeader liked={liked}
                allPosts={allPosts}/>
                <div className='search-panel d-flex'>
                    <SearchPanel
                        updateSearch={this.updateSearch}
                    />
                    <PostStatusFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList posts={visiblePosts}
                toggleModal={this.toggleModal}
                deleteItem={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.addItem}/>
            </app>
            
        )
    }  
}