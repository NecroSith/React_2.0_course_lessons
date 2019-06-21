import React from 'react';
import img404 from './404.jpg';
import styled from 'styled-components';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';


const PageNotFound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    width: 75%
    color: white;
    img {
        width: 75%;
    }
`;

const Page404 = () => {
    return (
        <PageNotFound>
            <h2>Oh no! This page was stabbed to death and now doesn't exist anymore <br /> Or it didn't exist from the get-go. Do we all?</h2>
            <h3>Anyway, you can go back and forget this page</h3>
            <Link to="/"><Button>Get back!</Button></Link>
            <img src={img404} alt="404"></img>
        </PageNotFound>
    )
}

export default Page404;