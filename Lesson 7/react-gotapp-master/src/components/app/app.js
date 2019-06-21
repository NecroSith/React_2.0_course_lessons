import React from 'react';
import {Container, Button} from 'reactstrap';
import Header from '../header';
import RandomItem, {Field} from '../randomItem';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import MainPage from '../pages/mainpage';
import CharacterPage from '../pages/characterPage';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housesPage';
import Page404 from '../pages/page404';
import BooksItem from '../pages/booksItem';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import imgBg from './got.jpeg';

const AppWrapper = styled.div`
    overflow-x: hidden;
    background: url(${imgBg}) center center no-repeat;
    background-size: cover;
    font-size: 16px;
    height: 100%;	
    padding-bottom: 3%;
`;

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

        const char = this.state.randomChar ? (
        <RandomItem 
            getItem={this.got.getOneRecord('/characters')}
            tooltip='character'>
            <Field field='gender' label='Gender'/>
            <Field field='born' label='Born'/>
            <Field field='died' label='Died'/>
            <Field field='culture' label='Culture'/>
        </RandomItem>) : null;

        return (
            <Router>
                <AppWrapper> 
                    <Container>
                        <Header updateState={this.updateState}/>
                        <Button onClick={this.toggleRandom}>Show/hide random character</Button>
                    </Container>
                    <Container>
                    {char}
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/characters/" component={CharacterPage}/>
                        <Route path="/books/" exact component={BookPage}/>
                        <Route path="/houses/" component={HousePage}/>
                        <Route path="/books/:id" exact render={
                            ({match}) => {
                                console.log(match.params.id);
                                const id = match.params.id;
                                return <BooksItem bookId={id}/>
                            }
                        } />
                        <Route component={Page404} />
                    </Switch>
                    
                    </Container>
                </AppWrapper>
            </Router>
        );
    }
};