// src/components/Header.js
import React from 'react';
//import './Header.css';   Para agregar estilos más tarde

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo-hospital.png" alt="Hospital Logo" />
        <h1>Hospital San Juan</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/services">Servicios</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/contact">Contactar</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
