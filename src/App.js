import React from 'react';
import './App.css';
import backgroundImage from './images/backgroundImg.jpg'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo">
            <span>TERRA GRANDE FARM</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#products">PRODUCTS</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>
      </header>
      <main>
      <div className="bg-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="hero-text">
            <h1>TERRA GRANDE FARM</h1>
            <p style={{color: 'white', fontSize: '20px', fontFamily: 'Arial, sans-serif'}}>A 10-hectare Regenerative Goat Farm breeding top-quality upgraded and Purebred Anglo-Nubians.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
