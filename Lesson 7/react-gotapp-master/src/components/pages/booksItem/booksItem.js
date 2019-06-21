import React from 'react';
import ItemDetails, {Field} from '../../itemDetails';
import GotService from '../../../services/gotService';

export default class BooksItem extends React.Component {
    
    got = new GotService();
    render() {
        console.log(this.props.bookId)
        return (
            <ItemDetails 
                itemId={this.props.bookId}
                tooltip='book'
                loadItem={this.got.getOneBook(this.props.bookId)}
                >
                <Field field='numberOfPages' label='Pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        );
    }

}