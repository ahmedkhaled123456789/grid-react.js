import React, { useState } from 'react';
import './Header.css';  
import {NavLink} from "react-router-dom"
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const navItems = [
    { name: 'How it works', path: '/',icon:"-" },
    { name: 'Who we are', path: '/who-we-are',icon:"-" },
    { name: 'What we do', path: '/what-we-do',icon:"-" },
    { name: 'Contact us', path: '/contact-us' },
  ];
  return (
    <header>
      <nav>
        <div className="logo">
          <div className="one">
            <div className={`menu-btn ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
            <span className="tap"><i className="fa-solid fa-table-cells-large"></i></span>
            <h2>Grid</h2>
          </div>
        </div>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>

          {
            navItems.map((item, index) =>(
              <li key={index} ><NavLink className={(navClass) =>
                navClass.isActive ? "active" : ""}to={item.path}>{item.name} <span>{item.icon}</span></NavLink></li>
            ))
          }
          
        </ul>
        <button className="sign-in">Sign In</button>
      </nav>
    </header>
  );
};

export default Header;
