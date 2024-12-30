import React from 'react'
import Navbar from './../components/Navbar';
import styled from 'styled-components';
import background from '../pages/img/background.jpg'
import Title from "../components/Title";
import Card from '../components/Card';

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

const Countdowns = () => {
  return (
    <>
      <Container>
        <Navbar/>
        <Title text="Countdowns"/>
      </Container>
      <Card 
        imageUrl={background}
        title="约会计划"
        description="这周末去看电影"
      />
    </>
  )
}

export default Countdowns
