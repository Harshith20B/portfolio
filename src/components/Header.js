import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming separate CSS for the header

const Header = () => (
  <header>
    <nav>
      <Link to="/portfolio">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
