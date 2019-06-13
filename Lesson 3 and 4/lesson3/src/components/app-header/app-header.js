import React from 'react';
import styled from 'styled-components';

const appHeader = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

const AppHeader = () => {
    return (
        <appHeader>
            <h1>Yan Pustynnyy</h1>
            <h2>7 записей, из них понравилось 0</h2>
        </appHeader>
    )
}

export default AppHeader;