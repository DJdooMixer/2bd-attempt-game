// src/components/Canvas.js
import React, { useEffect, useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size (larger for the bigger island)
    canvas.width = 1024;
    canvas.height = 768;
    
    // 16-bit style pixel size
    const pixelSize = 32; // Increased for a 16-bit feel
    
    // Larger island layout (0 = water, 1 = land)
    const island = [
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    ];

    // Draw the island with 16-bit pixel style
    island.forEach((row, y) => {
      row.forEach((pixel, x) => {
        if (pixel === 1) {
          ctx.fillStyle = '#228B22'; // Green for land
        } else {
          ctx.fillStyle = '#00BFFF'; // Blue for water
        }
        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
      });
    });
  }, []);

  return <canvas ref={canvasRef} style={{ border: '1px solid black' }} />;
};

export default Canvas;
