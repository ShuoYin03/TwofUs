import React from 'react'
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TopTitle = styled.h1`
    display: flex;
    align-self: center;
    color: #ffffff;   
    font-size: 100px;
    padding-top: 58px;
    animation: ${fadeInUp} 0.5s ease-out forwards;
    opacity: 0;
`

const Title = ({ text }) => {
  return (
    <TopTitle>{text}</TopTitle>
  )
}

export default Title