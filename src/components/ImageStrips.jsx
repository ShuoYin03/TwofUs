import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 600px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Strip = styled.div`
  height: 100%;
  flex: ${props => props.isExpanded ? '8' : '0.5'};
  min-width: ${props => props.isExpanded ? '400px' : '50px'};
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    opacity: ${props => props.isExpanded ? '1' : '0.9'};
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: ${props => props.isExpanded ? 'center' : props.position};
  transition: all 0.5s ease;
`;

const ImageStrips = ({ images }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleStripClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Container>
      {images.map((image, index) => (
        <Strip
          key={image.id}
          isExpanded={expandedId === image.id}
          onClick={() => handleStripClick(image.id)}
        >
          <Image
            src={image.url}
            alt={`moment-${image.id}`}
            isExpanded={expandedId === image.id}
            position={`${(index / (images.length - 1)) * 100}% center`}
          />
        </Strip>
      ))}
    </Container>
  );
};

export default ImageStrips; 