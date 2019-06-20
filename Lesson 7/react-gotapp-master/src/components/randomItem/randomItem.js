import React, {Component} from 'react';
import GotService from '../../services/gotService';
import styled from 'styled-components';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import {Col, Row} from 'reactstrap';


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

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <Term className="term">{label}</Term>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field};


export default class RandomItem extends Component {
    constructor(props) {
        super(props);
        this.got = new GotService();
        this.state = {
            item: {},
            loading: true,
            error: false,
            status: null
        }
    }

    componentDidMount() {
        console.log('mounting');
        this.updateItem();
        this.timerId = setInterval(this.updateItem, 5000);
    }

    componentWillUnmount() {
        console.log('unmounting');
        clearInterval(this.timerId);
    }

    onItemLoaded = item => {
        if (typeof(item) == 'object') {
            this.setState({ 
                item,
                loading: false,
                error: false,
                errorCode: null
             })
        }
        else if (item == 404) {
            this.setState({ 
                error: true,
                loading: false,
                errorCode: 404
             })
        }
        else if (item == 408) {
            this.setState({ 
                error: true,
                loading: false,
                errorCode: 408
             })
        }
        else if (item == 410) {
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

    updateItem = () => {
        const result = this.props.getItem;
        if (result == 404) {
            console.log('here we are!')
        }
        else {
            result.then(this.onItemLoaded);
        }      
    }  

    render() {

        const {item, loading, error, errorCode} = this.state;

        const errorMsg = error ? <ErrorMessage code={errorCode}/> : null;
        const spinner = loading ? <Spinner /> : null;
        const data = !(loading || error) ? <View item={item} tooltip={this.props.tooltip} fields={this.props.children}/> : null;

        return (
            <Row >
                <Col lg={{size: 6, offset: 0}}>
                    <RandomBlock className="rounded">
                        {errorMsg}
                        {spinner}
                        {data}
                    </RandomBlock>
                </Col>
            </Row>
            
        );
    }
}

const View = ({item, tooltip, fields}) => {
    const {name} = item;
    return (
        <>
            <h4>
                Random {tooltip}: {name}</h4>
            <ul className="list-group list-group-flush">
                {React.Children.map(fields, child => {
                    return React.cloneElement(child, {item});
                })}
            </ul>
        </>
    )
}
