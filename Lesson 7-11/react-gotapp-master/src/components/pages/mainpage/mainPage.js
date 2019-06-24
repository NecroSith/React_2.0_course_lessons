import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
    margin: 0 auto;
    text-align: center;
    color: white;
    h3 a {
        text-decoration: underline;
    }
    h3 a:hover {
        color: grey;
    }
`;

export default class MainPage extends React.Component {
    render() {
        return (
            <Main>
                <h1>Welcome to Game of Thrones Database!</h1>
                <h2>Here you can find all gathered info about characters, houses and books of GoT universe</h2>
                <h3>If you are interested in characters - <Link to="/characters/">check out here</Link></h3>
                <h3>If you wanna take a look at houses follow <Link to="/houses/">this link</Link></h3>
                <h3>If you are more into released books your way is right through <Link to="/books/">here</Link> </h3>
                <h3>Or if you are here just to look at 404 page (you sicken me!) go <Link to="/get-outta-here">here</Link></h3>
            </Main>
        )
    }
}