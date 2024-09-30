// src/components/Canvas.js
import React, { useEffect, useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size (same as before)
    canvas.width = 800; // Keeping the same size for the island
    canvas.height = 600;
    
    // Larger pixel size for 16-bit style (80x80 pixels per block)
    const pixelSize = 8;
    const bigPixelSize = pixelSize * 10; // The size of the main block

    // Define the number of smaller squares inside each pixel
    const subPixelCount = 5; // 5x5 sub-pixels inside each big pixel
    const subPixelSize = bigPixelSize / subPixelCount; // Calculate size of each sub-pixel

    // Island layout remains the same, but each block will be smaller
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

    // Function to draw smaller squares inside the big pixel
    const drawSubPixels = (x, y, mainColor, subColor) => {
      for (let i = 0; i < subPixelCount; i++) {
        for (let j = 0; j < subPixelCount; j++) {
          ctx.fillStyle = (i + j) % 2 === 0 ? mainColor : subColor; // Alternating colors for checkerboard effect
          ctx.fillRect(x + i * subPixelSize, y + j * subPixelSize, subPixelSize, subPixelSize);
          ctx.strokeStyle = 'black'; // Border for each sub-pixel
          ctx.lineWidth = 1;
          ctx.strokeRect(x + i * subPixelSize, y + j * subPixelSize, subPixelSize, subPixelSize);
        }
      }
    };

    // Draw the island with smaller sub-pixels
    island.forEach((row, y) => {
      row.forEach((pixel, x) => {
        const pixelX = x * bigPixelSize;
        const pixelY = y * bigPixelSize;

        if (pixel === 1) {
          // Land
          drawSubPixels(pixelX, pixelY, '#228B22', '#2E8B57'); // Main land color and alternate color for detail
        } else {
          // Sea
          drawSubPixels(pixelX, pixelY, '#00BFFF', '#1E90FF'); // Main sea color and alternate color for detail
        }

        // Add black border around each big pixel (land/sea)
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.strokeRect(pixelX, pixelY, bigPixelSize, bigPixelSize);
      });
    });
  }, []);

  return <canvas ref={canvasRef} style={{ border: '1px solid black' }} />;
};

export default Canvas;
