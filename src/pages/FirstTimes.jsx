import React from "react";
import Navbar from './../components/Navbar';
import styled from 'styled-components';
import background from '../pages/img/background.jpg'
import Title from "../components/Title";

const Container = styled.div`
    display: flex;
    height: 75vh;
    width: 97vw;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 18px;
    justify-self: center;
    flex-direction: column;
`

const FirstTimes = () => {

  return (
    <Container>
      <Navbar/>
      <Title text="First Times"/>
    </Container>
  )
}

export default FirstTimes
