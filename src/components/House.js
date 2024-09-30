// src/components/House.js
import React, { useState } from 'react';
import PixelHuman from './PixelHuman';

const House = () => {
  const [position, setPosition] = useState({ x: 700, y: 50 });
  const [isPlaced, setIsPlaced] = useState(false); // Detect when house is placed
  const [showHuman, setShowHuman] = useState(false);

  const handleDragStart = (e) => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0); // Hide default drag image
    setShowHuman(false); // Hide human while dragging
  };

  const handleDrop = (e) => {
    setPosition({ x: e.clientX - 16, y: e.clientY - 16 });
    setIsPlaced(true);
    setShowHuman(true); // Show human when house is placed
  };

  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        onDrag={(e) => {
          if (e.clientX === 0 && e.clientY === 0) return; // Ignore empty drag
          setPosition({ x: e.clientX - 16, y: e.clientY - 16 });
        }}
        onDragEnd={handleDrop}
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#8B4513', // Brown for house
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
            borderLeft: '16px solid transparent',
            borderRight: '16px solid transparent',
            borderBottom: '16px solid #FFD700', // Yellow roof
            position: 'relative',
            top: '-16px',
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
