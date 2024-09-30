// src/components/PixelHuman.js
import React from 'react';

const PixelHuman = ({ housePosition }) => {
  const { x, y } = housePosition;

  // Size of the smaller sub-pixels (adjust if needed)
  const subPixelSize = 16; // Assuming the smaller red square is 16px x 16px

  // Position the human to align with the grid but at the size of a smaller sub-pixel
  const humanPosition = {
    top: `${y + subPixelSize}px`, // Position below the house
    left: `${x}px`, // Align horizontally with the house
  };

  return (
    <div
      style={{
        position: 'absolute',
        width: `${subPixelSize}px`, // Human head matches the smaller sub-pixel size
        height: `${subPixelSize}px`,
        backgroundColor: '#FF4500', // Head color (orange-red)
        top: humanPosition.top,
        left: humanPosition.left,
        border: '1px solid black', // Optional: Black border for the head to match the grid outline
      }}
    />
  );
};

export default PixelHuman;
