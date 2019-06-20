import React, {Component} from 'react';
import GotService from '../../services/gotService';
import styled from 'styled-components';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import {Col, Row} from 'reactstrap';


const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const Term = styled.span`
    font-weight: bold;
`;


export default class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.got = new GotService();
        this.state = {
            randomChar: true,
            char: {},
            loading: true,
            error: false,
            status: null
        }

        this.toggleRandom = this.toggleRandom.bind(this);
    }

    componentDidMount() {
        console.log('mounting');
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 5000);
    }

    componentWillUnmount() {
        console.log('unmounting');
        clearInterval(this.timerId);
    }

    toggleRandom() {
        this.setState({
            randomChar: !this.state.randomChar
        })
        console.log(this.state.randomChar)
    }

    onCharLoaded = char => {
        if (typeof(char) == 'object') {
            this.setState({ 
                char,
                loading: false,
                error: false,
                errorCode: null
             })
        }
        else if (char == 404) {
            this.setState({ 
                error: true,
                loading: false,
                errorCode: 404
             })
        }
        else if (char == 408) {
            this.setState({ 
                error: true,
                loading: false,
                errorCode: 408
             })
        }
        else if (char == 410) {
            this.setState({ 
                error: true,
                loading: false,
                errorCode: 410
             })
        }
        
    }

    onError = err => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const result = this.got.getOneRecord('/characters');
        if (result == 404) {
            console.log('here we are!')
        }
        else {
            result.then(this.onCharLoaded);
        }      
    }  

    render() {

        const {char, loading, error, errorCode} = this.state;

        const errorMsg = error ? <ErrorMessage code={errorCode}/> : null;
        const spinner = loading ? <Spinner /> : null;
        const data = !(loading || error) ? <View char={char}/> : null;

        return (
            <Row >
                <Col lg={{size: 6, offset: 0}}>
                    <RandomBlock className="rounded">
                        {errorMsg}
                        {spinner}
                        {data}
                    </RandomBlock>
                </Col>
            </Row>
            
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>
                Random character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Born </Term>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Died </Term>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}
