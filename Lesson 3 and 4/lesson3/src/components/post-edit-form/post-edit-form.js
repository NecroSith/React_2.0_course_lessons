import React from 'react';
import { Button, Form, Input} from 'reactstrap';

export default class PostEditForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            label: props.label
        }

    }

    EditPost() {
        this.setState({
            label: this.props.label
        })
    }

    render() {

        let classNames = 'bottom-panel d-flex edit-form';
        if (this.props.edit) {
           classNames += ' editing';
        }
        return (
            <Form className={classNames}>
                <Input 
                    type='text'
                    placeholder='Введите новый текст'
                    className='form-control new-post-label'
                    value={this.props.label}
                />
                <Button 
                    type='submit'
                    color="success"
                >
                    <i className="fa fa-check" onClick={this.EditPost}></i>
                </Button>
                <Button 
                    type='submit'
                    color="danger"
                >
                    <i className='fa fa-times'></i>
                </Button>
            </Form>
        )
    }
}
