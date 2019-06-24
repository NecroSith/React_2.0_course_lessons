import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const ListGroupItem = styled.li`
    cursor: pointer;
`;


export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: null,
            error: false
        }
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        const {getData} = this.props;

        getData
            .then(itemList => {
                this.setState({
                    itemList: itemList
                })
            })
    }

    renderList(arr) {
        return arr.map((item) => {
            let id = item.url + '';
            id = id.slice(id.length-2);
            const label = this.props.renderItem(item);
            return <ListGroupItem
                key={id}
                onClick={() => this.props.onItemSelected(id)}
                className="list-group-item">
                {label}
            </ListGroupItem>
        })
    }


    render() {

        const {itemList} = this.state;

        if (this.state.error) {
            return <ErrorMessage />
        }

        if (!itemList) {
            return <Spinner />
        }

        const items = this.renderList(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}