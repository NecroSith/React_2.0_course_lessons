import React from 'react';
import { Button, Form, Input} from 'reactstrap';

export default class PostEditForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.label
        }

        this.updateLabel = this.updateLabel.bind(this);
        this.updatePost = this.updatePost.bind(this);
    }

    updateLabel(e) {
        const { target: {value}} = e
        this.setState({
            text: value
        })
    }

    updatePost = (e) => {
        e.preventDefault();

        this.props.updatePost(this.props.id, this.state.text);
        console.log(`Передаем - ${this.state.text}`);
    }

    render() {
        const {edit, onEdit} = this.props;

        let classNames = 'bottom-panel edit-form';
        if (edit) {
           classNames += ' d-flex';
        }
        else {
            classNames += ' d-none';
        }
        return (
            <Form className={classNames} onSubmit={this.updatePost}>
                <Input 
                    type='text'
                    placeholder='Введите новый текст'
                    className='form-control new-post-label'
                    defaultValue={this.props.label}
                    onChange={this.updateLabel}
                />
                <Button 
                    type='submit'
                    color="success"
                >
                    <i className="fa fa-check" onClick={this.EditPost}></i>
                </Button>{' '}
                <Button 
                    type='submit'
                    color="danger"
                    onClick={onEdit}
                >
                    <i className='fa fa-times'></i>
                </Button>
            </Form>
        )
    }
}
