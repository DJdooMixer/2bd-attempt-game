// src/components/PixelHuman.js
import React from 'react';

const PixelHuman = ({ housePosition }) => {
  const { x, y } = housePosition;

  // Human's position will be a bit to the right and below the house
  const humanPosition = {
    top: `${y + 32}px`, // Slightly below the house
    left: `${x + 32}px`, // Slightly to the right of the house
  };

  return (
    <div
      style={{
        position: 'absolute',
        width: '16px',
        height: '32px', // Taller than the house to represent a human
        backgroundColor: '#FFD700', // Human body color
        top: humanPosition.top,
        left: humanPosition.left,
      }}
    >
      <div
        style={{
          width: '16px',
          height: '16px',
          backgroundColor: '#FF4500', // Head color (orange-red)
          position: 'absolute',
          top: '-16px', // Offset for the head above the body
        }}
      />
    </div>
  );
};

export default PixelHuman;
