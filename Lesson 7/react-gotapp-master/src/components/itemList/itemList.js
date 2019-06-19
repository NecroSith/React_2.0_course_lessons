import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner';

const ListGroupItem = styled.li`
    cursor: pointer;
`;


export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charList: null
        }
        this.got = new GotService();
    }

    componentDidMount() {
        this.got.getResource('/characters?page=6&pageSize=5')
            .then(charList => {
                this.setState({
                    charList: charList
                })
            })
    }

    renderList(arr) {
        return arr.map((item, i) => {
            let id = item.url + '';
            id = id.slice(id.length-2);
            return <ListGroupItem
                key={i}
                onClick={() => this.props.onCharSelected(id)}
                className="list-group-item">
                {item.name || 'no data'}
            </ListGroupItem>
        })
    }


    render() {

        const {charList} = this.state;

        if (!charList) {
            return <Spinner />
        }

        const items = this.renderList(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}