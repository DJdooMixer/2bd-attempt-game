// src/components/House.js
import React, { useState } from 'react';
import PixelHuman from './PixelHuman';

const House = () => {
  const [position, setPosition] = useState({ x: 600, y: 200 });
  const [showHuman, setShowHuman] = useState(false);

  const handleDragStart = (e) => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0); // Hide default drag image
    setShowHuman(false); // Hide human while dragging
  };

  const handleDrop = (e) => {
    setPosition({ x: e.clientX - 8, y: e.clientY - 8 }); // No snapping, free placement
    setShowHuman(true); // Show human when house is placed
  };

  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        onDrag={(e) => {
          if (e.clientX === 0 && e.clientY === 0) return; // Ignore empty drag
          setPosition({ x: e.clientX - 8, y: e.clientY - 8 }); // Free placement during drag
        }}
        onDragEnd={handleDrop}
        style={{
          width: '16px', // House size
          height: '16px',
          backgroundColor: '#8B4513', // Brown for house
          border: '1px solid black', // Black border for house pixel
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
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderBottom: '8px solid #FFD700', // Yellow roof
            position: 'relative',
            top: '-8px',
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
