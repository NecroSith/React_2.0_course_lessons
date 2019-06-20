import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const ItemDetailsBlock = styled.div`
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


const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
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
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, loadItem} = this.props;
        console.log(itemId);
        if (!itemId) {
            return;
        } 
        this.setState({
            loading: true
        })

        loadItem
            .then(item => {
                this.setState({
                    item: item,
                    loading: false
                })
            })
        
    }

    render() {

        const {item, loading} = this.state;

        if (this.state.error) {
            return <ErrorMessage />
        }

        if (loading) {
            return <Spinner />
        }

        if (!item) {
            return <SelectError>Select some {this.props.tooltip}</SelectError>
        }
        const {name} = item;

        return (
            <ItemDetailsBlock className="rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, child => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </ItemDetailsBlock>
        );
    }
}