import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
`;

const CenterLine = styled.div`
  position: absolute;
  width: 4px;
  background: rgba(255, 255, 255, 0.2);
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const TimelineEvent = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.position === 'left' ? 'flex-end' : 'flex-start'};
  padding-left: ${props => props.position === 'right' ? '50%' : '0'};
  padding-right: ${props => props.position === 'left' ? '50%' : '0'};
  margin: 40px 0;
  position: relative;
`;

const EventContent = styled(motion.div)`
  width: 400px;
  margin: ${props => props.position === 'left' ? '0 40px 0 0' : '0 0 0 40px'};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    top: 50%;
    ${props => props.position === 'left' ? 'right: -50px' : 'left: -50px'};
    transform: translateY(-50%);
  }
`;

const EventDate = styled.div`
  font-size: 0.9rem;
  color: #ffffff;
  margin-bottom: 10px;
`;

const EventTitle = styled.h3`
  color: #ffffff;
  margin: 0 0 10px 0;
`;

const EventDescription = styled.p`
  color: #ffffff;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Timeline = ({ events }) => {
  return (
    <TimelineContainer>
      <CenterLine />
      {events.map((event, index) => (
        <TimelineEvent
          key={event.id}
          position={event.position}
          initial={{ opacity: 0, x: event.position === 'left' ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <EventContent position={event.position}>
            {event.imageUrl && (
              <EventImage src={event.imageUrl} alt={event.title} />
            )}
            <EventDate>{new Date(event.date).toLocaleDateString()}</EventDate>
            <EventTitle>{event.title}</EventTitle>
            <EventDescription>{event.description}</EventDescription>
          </EventContent>
        </TimelineEvent>
      ))}
    </TimelineContainer>
  );
};

export default Timeline; 