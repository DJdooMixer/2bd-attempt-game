// src/components/House.js
import React, { useState } from 'react';
import PixelHuman from './PixelHuman';

const House = () => {
  const [position, setPosition] = useState({ x: 600, y: 200 });
  const [showHuman, setShowHuman] = useState(false);

  // Size of each square in the grid (must match the grid size on the canvas)
  const gridSize = 80;

  // Function to snap to the nearest grid position
  const snapToGrid = (coord) => {
    return Math.floor(coord / gridSize) * gridSize;
  };

  const handleDragStart = (e) => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0); // Hide default drag image
    setShowHuman(false); // Hide human while dragging
  };

  const handleDrop = (e) => {
    // Snap the house's x and y position to the nearest grid
    const snappedX = snapToGrid(e.clientX - 8); // Adjust for the center of the house
    const snappedY = snapToGrid(e.clientY - 8);
    setPosition({ x: snappedX, y: snappedY });
    setShowHuman(true); // Show human when house is placed
  };

  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        onDrag={(e) => {
          if (e.clientX === 0 && e.clientY === 0) return; // Ignore empty drag
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
