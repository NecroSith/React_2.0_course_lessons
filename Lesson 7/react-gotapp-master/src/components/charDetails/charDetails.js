import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const CharDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const SelectError = styled.div`
    color: #fff;
    text-align: center;
    font-size: 26px;
`;


export default class CharDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            char: null,
            loading: false,
            error: false
        }

        this.got = new GotService();
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        console.log(charId);
        if (!charId) {
            return;
        } 
        this.setState({
            loading: true
        })

        this.got.getOneCharacter(charId)
            .then(char => {
                this.setState({
                    char: char,
                    loading: false
                })
            })
        
    }

    render() {

        const {char, loading} = this.state;

        if (this.state.error) {
            return <ErrorMessage />
        }

        if (loading) {
            return <Spinner />
        }

        if (!char) {
            return <SelectError>Select some character!</SelectError>
        }

        

        const {name, gender, born, died, culture} = this.state.char;

        return (
            <CharDetailsBlock className="char-details rounded">
                <h4>{name || 'no data'}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </CharDetailsBlock>
        );
    }
}