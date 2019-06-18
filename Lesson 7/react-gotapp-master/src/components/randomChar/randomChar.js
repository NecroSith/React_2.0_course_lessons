import React, {Component} from 'react';
import GotService from '../../services/gotService';
import styled from 'styled-components';

const randomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const term = styled.div`
    font-weight: bold;
`;


export default class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John Snow',
            gender: 'male',
            born: 1783,
            died: 1820,
            culture: 'first'
        }

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const got = new GotService();
        // let output = got.getOneRecord('/characters');
        let output = got.getAllRecords('/characters');
        output.then(res => {
            console.log(res);
            // this.setState({
            //     name: res.name,
            //     gender: res.gender,
            //     born: res.born,
            //     died: res.died,
            //     culture: res.culture
            // })
        })
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

        return (
            <randomBlock className="rounded">
                <h4>
                    {this.getTitle()}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <term>Gender </term>
                        <span>{this.state.gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <term>Born </term>
                        <span>{this.state.born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <term>Died </term>
                        <span>{this.state.died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <term>Culture </term>
                        <span>{this.state.culture}</span>
                    </li>
                </ul>
            </randomBlock>
        );
    }
}
