import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const CardContainer = styled(motion.div)`
  width: calc(25% - 20px);
  height: 300px;
  position: relative;
  margin: 10px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
  filter: ${props => props.isCompleting ? 'blur(3px) brightness(0.7)' : 'none'};
`;

const TransitionOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const WhiteLine = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform-origin: left;
`;

const CompleteText = styled(motion.span)`
  color: white;
  font-size: 24px;
  font-weight: bold;
  z-index: 3;
`;

const CardOverlay = styled(motion.div)`
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

const Checkbox = styled(motion.div)`
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
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
  const [isCompleting, setIsCompleting] = useState(false);

  const toggleComplete = async () => {
    if (!completed) {
      setIsCompleting(true);
      setTimeout(() => {
        setCompleted(true);
        onStatusChange && onStatusChange(true);
      }, 500);
      
      setTimeout(() => {
        setIsCompleting(false);
      }, 600);
    } else {
      setCompleted(false);
      onStatusChange && onStatusChange(false);
    }
  };

  return (
    <CardContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <CardImage src={imageUrl} alt={title} isCompleting={isCompleting} />
      
      <AnimatePresence>
        {isCompleting && (
          <TransitionOverlay
            initial={{ width: "0%" }}
            animate={{ 
              width: "100%",
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            <CompleteText
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 0.2, duration: 0.1 }
              }}
            >
              Complete
            </CompleteText>
            <WhiteLine
              initial={{ scaleX: 0 }}
              animate={{ 
                scaleX: 1,
                transition: { 
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.2
                }
              }}
            />
          </TransitionOverlay>
        )}
      </AnimatePresence>

      <CardOverlay
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <CardTitle>
          {title}
          <Checkbox 
            completed={completed} 
            onClick={toggleComplete}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardOverlay>
    </CardContainer>
  );
};

export default Card;
