import React, {Component} from 'react';
import './itemList.css';
import GotService from '../../services/gotService';


export default class ItemList extends Component {
    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const got = new GotService();
        let output = got.getAllRecords('/characters');
        output.then(res => {
            // console.log(res);
            res.forEach(item => {
               return item.name
            });
        })
    }


    render() {
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                   {this.getData()}
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ul>
        );
    }
}