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

function postCount(count) {
    count = count + "";
    let base = 'запис';
    if (count.slice(-1) === '1') {
        base += 'ь';
    }
    else if (count.slice(-1) === '2' || count.slice(-1) === '3' || count.slice(-1) === '4') {
        base += 'и'
    }
    else {
        base += 'ей';
    }
    return `${count} ${base}`;
}

const AppHeader = ({liked, allPosts}) => {

    return (
        <appHeader>
            <h1>Yan Pustynnyy</h1>
            <h2> {postCount(allPosts)}, из них понравилось {liked}</h2>
        </appHeader>
    )
}

export default AppHeader;