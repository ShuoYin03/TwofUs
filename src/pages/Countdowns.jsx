import React from 'react';
import styled from 'styled-components';
import Navbar from './../components/Navbar';
import background from '../pages/img/background.jpg';
import Title from "../components/Title";
import CountdownCard from '../components/CountdownCard';
import countdownsData from '../data/countdowns.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

const Header = styled.div`
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
`;

const Content = styled.div` 
  width: 97vw;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainCardContainer = styled.div`
  width: 97vw;
  height: 500px;
  margin-bottom: 15px;
`;

const SmallCardsContainer = styled.div`
  width: 97vw;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
`;

const SmallCardWrapper = styled.div`
  margin-top: 40px;
  flex: 0 0 calc(25% - 15px);
  height: 200px;
`;

const Countdowns = () => {
  const mainEvent = countdownsData.events.find(event => event.isMain);
  const otherEvents = countdownsData.events.filter(event => !event.isMain);

  return (
    <Container>
      <Header>
        <Navbar/>
        <Title text="Countdowns"/>
      </Header>
      <Content>
        <MainCardContainer>
          <CountdownCard
            title={mainEvent.title}
            targetDate={mainEvent.targetDate}
            frequency={mainEvent.frequency}
            color={mainEvent.color}
            isMain={true}
          />
        </MainCardContainer>
        <SmallCardsContainer>
          {otherEvents.map((event) => (
            <SmallCardWrapper key={event.id}>
              <CountdownCard
                title={event.title}
                targetDate={event.targetDate}
                frequency={event.frequency}
                color={event.color}
              />
            </SmallCardWrapper>
          ))}
        </SmallCardsContainer>
      </Content>
    </Container>
  );
};

export default Countdowns;
