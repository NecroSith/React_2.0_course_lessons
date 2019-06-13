import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

export default class PostDeleteModal extends React.Component {
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
            <Button color="danger" onClick={() => onDelete(id)}>Удалить</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Отмена</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}