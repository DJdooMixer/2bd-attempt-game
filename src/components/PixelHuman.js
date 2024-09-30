// src/components/PixelHuman.js
import React from 'react';

const PixelHuman = ({ housePosition }) => {
  const { x, y } = housePosition;

  // Sub-pixel size (same as the red square size, 16px x 16px)
  const subPixelSize = 16;

  // Position the human at an arbitrary position (right and below the house)
  const humanPosition = {
    top: `${y + subPixelSize}px`, // Position slightly below the house
    left: `${x + subPixelSize * 2}px`, // Position to the right of the house
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
        border: '1px solid black', // Black border to match the grid outline
      }}
    />
  );
};

export default PixelHuman;
