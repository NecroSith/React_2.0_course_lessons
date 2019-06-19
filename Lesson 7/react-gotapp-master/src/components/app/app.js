import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomChar: true,
            error: false,
            characters: true,
            books: false,
            houses: false
        }

        this.updateState = this.updateState.bind(this);
        this.getData = this.getData.bind(this);
        this.toggleRandom = this.toggleRandom.bind(this);

        console.log(this.state);
    }

    componentDidCatch() {
        console.log('error!');
        this.setState({
            error: true
        })
    }

    getData(value) {
        const got = new GotService();
        let output = '';
        if (value == 'characters') {
            output = got.getOneRecord('/characters');
            output.then(res => console.log(res))
        }
        else if (value == 'books') {
            output = got.getOneRecord('/characters');
            output.then(res => console.log(res));
        }
        else if (value == 'houses') {
            output = got.getOneRecord('/houses');
            output.then(res => console.log(res));
        }
        
    }

    updateState(value) {
        if (value == 'characters') {
            this.setState({
                characters: true,
                houses: false,
                books: false
            })
            this.getData('characters');
        }
        else if (value == 'houses') {
            this.setState({
                houses: true,
                characters: false,
                books: false
            })
            this.getData('houses');
        }
        else if (value == 'books') {
            this.setState({
                books: true,
                characters: false,
                houses: false
            })
            this.getData('books');
        }
        console.log(this.state); 
    }

    toggleRandom() {
        this.setState({
            randomChar: !this.state.randomChar
        })
        console.log(this.state.randomChar)
    }

   

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        const char = this.state.randomChar ? <RandomChar characters={this.state.characters} houses={this.state.houses} books={this.state.books} /> : null;

        return (
            <> 
                <Container>
                    <Header updateState={this.updateState}/>
                    <Button onClick={this.toggleRandom}>Show/hide random character</Button>
                </Container>
                <Container>
                <Row >
                    <Col lg={{size: 6, offset: 0}}>
                        {char}
                    </Col>
                </Row>
                <CharacterPage />
                {/* <CharacterPage /> */}
                {/* <CharacterPage /> */}
                </Container>
            </>
        );
    }
};