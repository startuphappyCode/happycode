import React from 'react';
import happycodelogo from './happycodelogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={happycodelogo} className="App-logo" alt="logo" />
        <p>
        Programação feliz, mas as vezes dá ódio.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/happycodestartup/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram Oficial
        </a>
      </header>
    </div>
  );
}

export default App;
