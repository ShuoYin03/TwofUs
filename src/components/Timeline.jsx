import React, { useState } from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background-color: #000000;
  top: 0;
`;

const TimelineItem = styled.div`
  display: flex;
  width: 100%;
  margin: 40px 0;
  position: relative;
  
  ${props => props.position === 'left' ? `
    justify-content: flex-start;
    padding-right: 50%;
    .timeline-card {
      margin-right: 30px;
    }
  ` : `
    justify-content: flex-start;
    padding-left: 56%;
    .timeline-card {
      margin-left: 30px;
    }
  `}
`;

const TimelineCard = styled.div`
  width: 500px;
  height: 400px;
  cursor: pointer;
  position: relative;
  perspective: 1000px;
`;

const TimelineImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const TimelineTitle = styled.h3`
  margin: 0;
  color: #333;
  font-size: 1.5rem;
`;

const TimelineDate = styled.p`
  color: #666;
  margin: 5px 0;
`;

const TimelineContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${props => props.expanded ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: white;
  display: flex;
  flex-direction: column;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: white;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TimelineDescription = styled.p`
  color: #444;
  line-height: 1.6;
  overflow-y: auto;
  flex-grow: 1;
  padding-right: 10px;
  margin-top: 15px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
`;

const Timeline = ({ events }) => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <TimelineContainer>
      <TimelineLine />
      {events.map((event) => (
        <TimelineItem key={event.id} position={event.position}>
          <TimelineCard 
            className="timeline-card"
            onClick={() => toggleCard(event.id)}
          >
            <TimelineContent expanded={expandedCards[event.id]}>
              <CardFront>
                <TimelineImage src={event.imageUrl} alt={event.title} />
                <TimelineTitle>{event.title}</TimelineTitle>
                <TimelineDate>{event.date}</TimelineDate>
              </CardFront>
              <CardBack>
                <TimelineTitle>{event.title}</TimelineTitle>
                <TimelineDate>{event.date}</TimelineDate>
                <TimelineDescription>{event.description}</TimelineDescription>
              </CardBack>
            </TimelineContent>
          </TimelineCard>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
