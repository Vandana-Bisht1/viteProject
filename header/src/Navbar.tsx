import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {ROUTES} from '../../utils/routes';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-icon">
      <img className='logo' src="https://www.nutrien.com/themes/custom/nutrien/logo.svg?ver=1721186473"/>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to={ROUTES.HOME}>Home</Link></li>
        <li className="navbar-item"><Link to={ROUTES.POSTS}>Posts</Link></li>
        <li className="navbar-item"><Link to={ROUTES.ABOUT}>About</Link></li>
        <li className="navbar-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

