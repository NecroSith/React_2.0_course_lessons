import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {updateState} = this.props;
        return (
            <HeaderBlock>
                <HeaderTitle>
                    <a href="#">
                    Game of Thrones DB
                    </a>
                </HeaderTitle>
                <HeaderLinks>
                    <li>
                        <a href="#" onClick={() => updateState('characters')}>Characters</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => updateState('houses')}>Houses</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => updateState('books')}>Books</a>   
                    </li>
                </HeaderLinks>
            </HeaderBlock>
        );
    }   
};
