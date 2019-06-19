import React, {Component} from 'react';
import GotService from '../../services/gotService';
import styled from 'styled-components';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

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
            char: {},
            loading: true,
            error: false,
            status: null
        }
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
            <RandomBlock className="rounded">
                {errorMsg}
                {spinner}
                {data}
            </RandomBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>
                Random character: {name || 'no data'}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Gender </Term>
                    <span>{gender || 'no data'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Born </Term>
                    <span>{born || 'no data'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Died </Term>
                    <span>{died || 'no data'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Culture </Term>
                    <span>{culture || 'no data'}</span>
                </li>
            </ul>
        </>
    )
}
