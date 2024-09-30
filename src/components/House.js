// src/components/House.js
import React, { useState } from 'react';
import PixelHuman from './PixelHuman';

const House = () => {
  const [position, setPosition] = useState({ x: 600, y: 200 });
  const [showHuman, setShowHuman] = useState(false);

  // Sub-pixel size (16x16)
  const subPixelSize = 16; // Each smaller sub-pixel is 16x16px
  const houseSize = subPixelSize * 2; // The house will occupy 2x2 sub-pixels, making it 32x32px

  const handleDragStart = (e) => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0); // Hide default drag image
    setShowHuman(false); // Hide human while dragging
  };

  const handleDrop = (e) => {
    setPosition({ x: e.clientX - houseSize / 2, y: e.clientY - houseSize / 2 });
    setShowHuman(true); // Show human when house is placed
  };

  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        onDrag={(e) => {
          if (e.clientX === 0 && e.clientY === 0) return; // Ignore empty drag
          setPosition({ x: e.clientX - houseSize / 2, y: e.clientY - houseSize / 2 });
        }}
        onDragEnd={handleDrop}
        style={{
          width: `${houseSize}px`, // 32px width (2 sub-pixels wide)
          height: `${houseSize}px`, // 32px height (2 sub-pixels high)
          backgroundColor: '#8B4513', // Brown for house base
          border: '1px solid black', // Black border for the house
          position: 'absolute',
          top: `${position.y}px`,
          left: `${position.x}px`,
          cursor: 'grab',
        }}
      >
        <div
          style={{
            width: '0',
            height: '0',
            borderLeft: `${houseSize / 2}px solid transparent`,
            borderRight: `${houseSize / 2}px solid transparent`,
            borderBottom: `${houseSize / 2}px solid #FFD700`, // Yellow roof
            position: 'relative',
            top: `-${houseSize / 2}px`, // Offset the roof above the house
            left: '0px',
          }}
        />
      </div>

      {/* Render the human only if the house is placed */}
      {showHuman && <PixelHuman housePosition={position} />}
    </>
  );
};

export default House;
