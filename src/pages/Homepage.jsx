import React from 'react';
import Navbar from './../components/Navbar';
import Timer from '../components/MainCompo';
import styled from 'styled-components';
import background from '../pages/img/background.jpg'

const Container = styled.div`
    display: flex;
    height: 95vh;
    width: 97vw;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 18px;
    justify-self: center;
    flex-direction: column;
`

const Homepage = () => {
    return (
        <Container>
            <Navbar/>
            <Timer/>
        </Container>
    )
}

export default Homepage
