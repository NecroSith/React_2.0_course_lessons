import React from 'react';
import ItemList from '../../itemList';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import {withRouter} from 'react-router-dom';


class BookPage extends React.Component {
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

        return (
            <ItemList 
                onItemSelected={(itemId) => {
                    this.props.history.push(`/books/${itemId}`)
                }}
                renderItem={item => item.name}
                getData={this.got.getResource('/books?page=3&pageSize=5')}
                />
        )
    }
}

export default withRouter(BookPage);