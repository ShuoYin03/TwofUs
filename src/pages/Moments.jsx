import React from 'react';
import styled from 'styled-components';
import Navbar from './../components/Navbar';
import background from '../pages/img/background.jpg';
import Title from "../components/Title";
import ImageStrips from '../components/ImageStrips';
import momentsData from '../data/moments.json';

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
  // background-color: #f5f5f5;
  display: flex;
  justify-content: center;
`;

const StripContainer = styled.div`
  width: 100%;
`;

const Moments = () => {
  const processedImages = momentsData.images.map(image => ({
    ...image,
    url: background
  }));

  return (
    <Container>
      <Header>
        <Navbar/>
        <Title text="Moments"/>
      </Header>
      <Content>
        <StripContainer>
          <ImageStrips images={processedImages} />
        </StripContainer>
      </Content>
    </Container>
  );
};

export default Moments;
