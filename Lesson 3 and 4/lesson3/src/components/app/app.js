import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
// import PostDeleteModal from '../post-delete-modal';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';


const app = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, id: this.generateId()},
                {label: 'Going to learn Vue', important: false, id: this.generateId()},
                {label: 'Going to learn Angular', important: false,  id: this.generateId()},
                {label: 'Going to learn Javascript', important: false, id: this.generateId()},
                55
            ],
            modal: false
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.generateId = this.generateId.bind(this);
    }

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
          }));
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
        console.log(text);
    }
    render() {
        return (
            <app>
                <PostDeleteModal toggleModal={this.toggleModal} />
                <AppHeader />
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter />
                </div>
                <PostList posts={this.state.data}
                onDelete={this.deleteItem}/>
                <PostAddForm onAdd={this.addItem}/>
            </app>
            
        )
    }  
}


class PostDeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

  }

  render() {
      const {toggleModal, onDelete, id} = this.props;
    return (
      <div>
        <Modal>
          <ModalHeader toggle={() => toggleModal()}>Вы точно хотите удалить данный пост? Это действие нельзя отменить</ModalHeader>
          <ModalFooter>
            {/* <Button color="danger" onClick={() => onDelete(id)}>Удалить</Button>{' '} */}
            <Button color="secondary" onClick={this.toggle}>Отмена</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}