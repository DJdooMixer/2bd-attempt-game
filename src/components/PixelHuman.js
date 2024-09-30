// src/components/PixelHuman.js
import React from 'react';

const PixelHuman = ({ housePosition }) => {
  const { x, y } = housePosition;

  // Human's position will be a bit to the right and below the house
  const humanPosition = {
    top: `${y + 16}px`, // Slightly below the house
    left: `${x + 16}px`, // Slightly to the right of the house
  };

  return (
    <div
      style={{
        position: 'absolute',
        width: '8px',
        height: '16px', // Smaller human size
        backgroundColor: '#FFD700', // Human body color
        top: humanPosition.top,
        left: humanPosition.left,
        border: '1px solid black', // Black border for the human
      }}
    >
      <div
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#FF4500', // Head color
          position: 'absolute',
          top: '-8px', // Offset for the head above the body
          border: '1px solid black', // Black border for the head
        }}
      />
    </div>
  );
};

export default PixelHuman;
