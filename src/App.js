import React, { useState } from 'react';
import './App.css';

function App() {
  // Estados
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [clickCount, setClickCount] = useState(0);
  const [customColor, setCustomColor] = useState('#ff0000');

  // Cores pré-definidas
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', customColor];

  // Função para mudar a cor
  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
    setClickCount(prevCount => prevCount + 1);
  };

  // Função para usar cor personalizada
  const applyCustomColor = () => {
    setBackgroundColor(customColor);
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div className="container" style={{ 
      backgroundColor,
      transition: 'background-color 0.5s ease' 
    }}>
      <div className="controls">
        <button onClick={changeColor}>
          Mudar Cor Aleatória ({clickCount} clicks)
        </button>
        
        <div className="color-picker">
          <input 
            type="color" 
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
          />
          <button onClick={applyCustomColor}>
            Usar Esta Cor
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;