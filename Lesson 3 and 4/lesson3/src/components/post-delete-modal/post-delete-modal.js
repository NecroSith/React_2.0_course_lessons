import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';


export default class PostDeleteModal extends React.Component {
    constructor() {
        super();

        this.state = {
            modal: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        console.log(this.state.modal);
        this.setState(prevState => ({
            modal: !prevState.modal
          }));
    }

    render() {
      const {label, onDelete} = this.props;
      console.log(label);
      return (
          <div>
              <button type='button' className='btn-trash btn-sm' onClick={this.toggleModal}>
                    <i className='fa fa-trash-o'></i>
                </button>
              <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                  <ModalHeader>Вы точно хотите удалить данный пост? Это действие нельзя отменить</ModalHeader>
                  <ModalBody>
                      {label}
                  </ModalBody>
                  <ModalFooter>
                      <Button color="danger" onClick={onDelete} >Удалить</Button>{' '}
                      <Button color="secondary" onClick={this.toggleModal}>Отмена</Button>
                  </ModalFooter>
              </Modal>
          </div>
              
          );
    }
  }

