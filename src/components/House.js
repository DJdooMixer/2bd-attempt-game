// src/components/House.js
import React, { useState } from 'react';

const House = () => {
  const [position, setPosition] = useState({ x: 700, y: 50 }); // Initial position of the house

  const handleDragStart = (e) => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0); // Hide default drag image
  };

  const handleDrag = (e) => {
    if (e.clientX === 0 && e.clientY === 0) return; // Prevent updating position if drag ends
    setPosition({ x: e.clientX - 16, y: e.clientY - 16 }); // Center the drag to the mouse
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      style={{
        width: '32px',
        height: '32px',
        backgroundColor: '#8B4513', // Brown color for the house base
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
          borderBottom: '16px solid #FFD700', // Yellow roof color
          position: 'relative',
          top: '-16px',
          left: '0px',
        }}
      />
    </div>
  );
};

export default House;
