import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import logoImage from './images/logo.png';
import backgroundImage from './images/backgroundImg.png';
import aboutBackground from './images/aboutBackground.png';
import productsBackground from './images/productsBackground.png';
import contactBackground from './images/contactBackground.png';

function App() {
  const [background, setBackground] = useState(backgroundImage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const home = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref, newBackground) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setBackground(newBackground);
    setIsMenuOpen(false); 
  };

  useEffect(() => {
    const sections = [
      { ref: home, background: backgroundImage },
      { ref: aboutRef, background: aboutBackground },
      { ref: productsRef, background: productsBackground },
      { ref: contactRef, background: contactBackground },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(sec => sec.ref.current === entry.target);
            if (section) {
              setBackground(section.background);
            }
          }
        });
      },
      { threshold: 0.6 } 
    );

    sections.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <header className="App-header">
        <nav>
          <div className="logo">
            <button className="logo-button" onClick={() => handleScroll(home, backgroundImage)}>
              <img src={logoImage} alt="Logo" className="logo-image" />
              TERRA GRANDE FARM
            </button>
          </div>
          <button className={`menu-toggle ${isMenuOpen ? 'close' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '☷' : '☰'}
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><button onClick={() => handleScroll(aboutRef, aboutBackground)}>ABOUT US</button></li>
            <li><button onClick={() => handleScroll(productsRef, productsBackground)}>PRODUCTS</button></li>
            <li><button onClick={() => handleScroll(contactRef, contactBackground)}>CONTACT US</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <section ref={home} className="bg-section home-section">
          <div className="home-text">
            <h1>TERRA GRANDE FARM</h1>
            <p style={{ color: 'white', fontSize: '20px', fontFamily: 'Arial, sans-serif' }}>
              A 10-hectare Regenerative Goat Farm breeding top-quality upgraded and Purebred Anglo-Nubians.
            </p>
          </div>
        </section>
        <section ref={aboutRef} className="content-section">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        <section ref={productsRef} className="content-section">
          <h2>Products</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        <section ref={contactRef} className="content-section">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
