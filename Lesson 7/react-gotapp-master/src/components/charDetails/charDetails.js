import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';

const charDetails = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const selectError = styled.div`
    color: #fff;
    text-align: center;
    font-size: 26px;
`;


export default class CharDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John Snow',
            gender: 'male',
            born: 1783,
            died: 1820,
            culture: 'first'
        }
    }

    render() {
        const {characters, books, houses} = this.props;

        const got = new GotService();
        let output = got.getOneRecord('/characters');
        output.then(res => {
            this.setState({
                name: res.name,
                gender: res.gender,
                born: res.born,
                died: res.died,
                culture: res.culture
            })
        })

        return (
            <charDetails className="char-details rounded">
                <h4>{}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>1783</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>1820</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>First</span>
                    </li>
                </ul>
            </charDetails>
        );
    }
}