import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import logo from "/images/logos/Cestor Veks-RGB.svg";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);  
  const handleClick = () => setClick(!click);
  
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: "#001255" }}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} className="navbar-img" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                O nama
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/delatnost" className="nav-links" onClick={closeMobileMenu}>
                Delatnost
                </Link>
            </li>
            <li className="nav-item">
              <Link to="/kontakt" className="nav-links" onClick={closeMobileMenu}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
