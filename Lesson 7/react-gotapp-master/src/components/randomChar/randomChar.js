import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../../services/gotService';


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
            <div className="random-block rounded">
                <h4>
                    {this.getTitle()}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{this.state.gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{this.state.born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{this.state.died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{this.state.culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}
