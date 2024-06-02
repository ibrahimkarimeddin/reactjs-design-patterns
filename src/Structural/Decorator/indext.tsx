// withStars.tsx
import React, { ComponentType, CSSProperties } from 'react';
import Card, { CardProps } from './Card';

interface WithStarsProps extends CardProps {
  starColor?: string;
}

function  CardWithStar (props :WithStarsProps) {

    const { starColor = 'yellow', ...rest  } = props as WithStarsProps;

    const starStyle: CSSProperties = {
      position: 'absolute',
      top: '0',
      right: '0',
      fontSize: '20px',
      color: starColor,
    };

    return (
      <div style={{ position: 'relative'  }}>
        {/* Render the original component */}
        <Card {...(rest as CardProps)} />

        {/* Add stars to the top-right corner */}
        <div style={starStyle}>★★★</div>
      </div>
    );
  

};

export default CardWithStar;
