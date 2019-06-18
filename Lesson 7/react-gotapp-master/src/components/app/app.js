import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/gotService';



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: true,
            books: false,
            houses: false
        }

        this.updateState = this.updateState.bind(this);
        this.getData = this.getData.bind(this);

        console.log(this.state);
    }

    getData(value) {
        const got = new GotService();
        let output = '';
        if (value == 'characters') {
            output = got.getOneRecord('/characters');
            output.then(res => console.log(res));
            // console.log(res.name);
            // this.setState({
            //     name: res.name,
            //     gender: res.gender,
            //     born: res.born,
            //     died: res.died,
            //     culture: res.culture
            // });
        // });
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
    render() {
        return (
            <> 
                <Container>
                    <Header updateState={this.updateState}/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 6, offset: 0}}>
                            <RandomChar
                                characters={this.state.characters}
                                houses={this.state.houses}
                                books={this.state.books}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails 
                                characters={this.state.characters}
                                houses={this.state.houses}
                                books={this.state.books}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};