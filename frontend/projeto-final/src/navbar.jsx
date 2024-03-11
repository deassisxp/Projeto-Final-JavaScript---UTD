import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (
    <nav>      
      <li>
        <Link to="/">Home</Link>
        <Link to="/cliente/view">Lista de Clientes</Link>
        <Link to="/cliente">Adicionar Clientes</Link>
      </li>    
    </nav>
  );
};

export default Navbar;
