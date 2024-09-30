// src/App.js
import React from 'react';
import Canvas from './components/Canvas';
import House from './components/House';

function App() {
  return (
    <div className="App">
      <h1>Pixel Island Game</h1>
      <Canvas />
      <House /> {/* Add the draggable house */}
    </div>
  );
}

export default App;
