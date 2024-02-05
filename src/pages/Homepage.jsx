import React, { useState, useEffect } from 'react';
import Navbar from './../components/Navbar';
import MainCompo from '../components/MainCompo';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
`

const Homepage = () => {
    return (
        <Container>
            <Navbar/>
            <MainCompo/>
        </Container>
    )
}

export default Homepage
