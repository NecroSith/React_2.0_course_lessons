import React from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';


export default class BookPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedBook: null,
            error: false
        }

        this.got = new GotService();

    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = id => {
        this.setState({ 
            selectedBook: id
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                renderItem={item => item.name}
                getData={this.got.getResource('/books?page=3&pageSize=5')}
                />
        )

        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedBook}
                tooltip='book'
                loadItem={this.got.getOneBook(this.state.selectedBook)}
                >
                <Field field='authors' label='Authors'/>
                <Field field='numberOfPages' label='Pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}