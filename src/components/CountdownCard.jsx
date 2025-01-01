import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

const Title = styled.h2`
  margin: 0;
  color: #333;
  font-size: ${props => props.isMain ? '2.5rem' : '1.8rem'};
  text-align: center;
  margin-top: auto;
  margin-bottom: 20px;
`;

const TimeSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: auto;
`;

const TimeBlock = styled.div`
  text-align: center;
`;

const TimeNumber = styled.div`
  font-size: ${props => props.isMain ? '4rem' : '2.5rem'};
  font-weight: bold;
  color: ${props => props.color || '#FF69B4'};
  line-height: 1;
  margin-bottom: 5px;
`;

const TimeLabel = styled.div`
  font-size: ${props => props.isMain ? '1.2rem' : '0.9rem'};
  color: #666;
`;

const FrequencyText = styled.div`
  color: #666;
  font-size: ${props => props.isMain ? '1.3rem' : '1rem'};
  text-align: center;
  margin-top: 20px;
`;

const CountdownCard = ({ title, targetDate, frequency, color, isMain = false }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Container>
      <Title isMain={isMain}>{title}</Title>
      <TimeSection isMain={isMain}>
        <TimeBlock>
          <TimeNumber color={color} isMain={isMain}>{timeLeft.days}</TimeNumber>
          <TimeLabel isMain={isMain}>天</TimeLabel>
        </TimeBlock>
        <TimeBlock>
          <TimeNumber color={color} isMain={isMain}>{timeLeft.hours}</TimeNumber>
          <TimeLabel isMain={isMain}>时</TimeLabel>
        </TimeBlock>
        <TimeBlock>
          <TimeNumber color={color} isMain={isMain}>{timeLeft.minutes}</TimeNumber>
          <TimeLabel isMain={isMain}>分</TimeLabel>
        </TimeBlock>
        <TimeBlock>
          <TimeNumber color={color} isMain={isMain}>{timeLeft.seconds}</TimeNumber>
          <TimeLabel isMain={isMain}>秒</TimeLabel>
        </TimeBlock>
      </TimeSection>
      <FrequencyText isMain={isMain}>已经 {frequency} 次</FrequencyText>
    </Container>
  );
};

export default CountdownCard; 