import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';


export default class CharacterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedChar: 130,
            error: false
        }

        this.got = new GotService();

    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onCharSelected = id => {
        this.setState({ 
            selectedChar: id
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <Row>
                <Col md='6'>
                    <ItemList 
                        onCharSelected={this.onCharSelected}
                        renderItem={item => item.name}
                        getData={this.got.getResource('/characters?page=6&pageSize=5')}
                        />
                </Col>
                <Col md='6'>
                    <CharDetails 
                        charId={this.state.selectedChar}
                        />
                </Col>
            </Row>
        )
    }
}