// Card.tsx
import React from 'react';

export interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', position: 'relative', width: '100%' }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
