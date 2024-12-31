import React from "react";
import Navbar from './../components/Navbar';
import styled from 'styled-components';
import background from '../pages/img/background.jpg'
import Title from "../components/Title";
import Timeline from '../components/Timeline';
import timelineData from '../data/firstTimes.json';
import image1 from '../pages/img/1.jpg'
import image2 from '../pages/img/2.jpg'

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

const images = {
  background,
  image1,
  image2
}

const eventsWithImages = {
  ...timelineData,
  events: timelineData.events.map(event => ({
    ...event,
    imageUrl: event.imageKey ? images[event.imageKey] : null
  }))
}

const FirstTimes = () => {
  return (
    <>
      <Container>
        <Navbar/>
        <Title text="First Times"/>
      </Container>
      <Timeline events={eventsWithImages.events} />
    </>
  )
}

export default FirstTimes
