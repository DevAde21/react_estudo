import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para armazenar a cor do fundo
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  // Array de cores para alternar
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

  // Função para mudar a cor
  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  return (
    <div className="container" style={{ backgroundColor }}>
      <button onClick={changeColor}>
        Mudar Cor
      </button>
    </div>
  );
}

export default App;