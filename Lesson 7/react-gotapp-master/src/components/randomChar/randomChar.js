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
        this.updateChar();
        this.state = {
            char: {},
            loading: true
        }
    }

    onCharLoaded = char => {
        this.setState({ 
            char,
            loading: false,
            error: false
         })
    }

    onError = err => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar() {
        this.got.getOneRecord('/characters')
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    getTitle() {
        if (this.props.characters) {
            return `Random character: ${this.state.name}`;
        }
        else if(this.props.houses) {
            return `Random house: `;
        }
        else if(this.props.books) {
            return `Random book: `;
        }
    }
    

    render() {

        const {char, loading, error} = this.state;

        const errorMsg = error ? <ErrorMessage /> : null;
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
