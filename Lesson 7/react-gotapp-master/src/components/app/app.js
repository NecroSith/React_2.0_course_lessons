import React from 'react';
import {Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../pages/characterPage';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housesPage';



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomChar: true,
            error: false
        }

        this.got = new GotService();
        this.toggleRandom = this.toggleRandom.bind(this);
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRandom() {
        this.setState({
            randomChar: !this.state.randomChar
        })
    }

   

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        const char = this.state.randomChar ? <RandomChar /> : null;

        return (
            <> 
                <Container>
                    <Header updateState={this.updateState}/>
                    <Button onClick={this.toggleRandom}>Show/hide random character</Button>
                </Container>
                <Container>
                {char}
                <CharacterPage />
                <BookPage />
                <HousePage />
                </Container>
            </>
        );
    }
};