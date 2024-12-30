import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: calc(25% - 20px);  // 每行4个，减去间距
  height: 300px;  // 固定高度
  position: relative;
  margin: 10px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;
  color: white;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardDescription = styled.p`
  color: #ffffff;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
`;

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  ${props => props.completed && `
    background-color: #4CAF50;
    border-color: #4CAF50;
    
    &:after {
      content: '✓';
      color: white;
    }
  `}
`;

const Card = ({ imageUrl, title, description, completed: initialCompleted, onStatusChange }) => {
  const [completed, setCompleted] = useState(initialCompleted);

  const toggleComplete = () => {
    const newStatus = !completed;
    setCompleted(newStatus);
    onStatusChange && onStatusChange(newStatus);
  };

  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={title} />
      <CardOverlay>
        <CardTitle>
          {title}
          <Checkbox 
            completed={completed} 
            onClick={toggleComplete}
          />
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardOverlay>
    </CardContainer>
  );
};

export default Card;
