import React, { useState, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, Link as RouterLink, useLocation } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import logo from "/images/logos/Cestor Veks-RGB.svg";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleScrollNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -20
        });
      }, 100); // Delay to ensure the page has loaded
    } if (location.pathname !== "/delatnost") {
      navigate("/delatnost");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: 0
        })
      }, 100)
    } 
    else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -50
      });
    }
    closeMobileMenu();
  };

  return (
    <IconContext.Provider value={{ color: "" }}>
      <div className="navbar">
        <div className="navbar-container container">
          <ScrollLink 
            to="hero" 
            className="navbar-logo" 
            onClick={() => handleScrollNavigation("hero")}
            spy={true} 
            smooth={true} 
            duration={500}
          >
            <img src={logo} className="navbar-img" />
          </ScrollLink>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <button className="nav-links" onClick={() => handleScrollNavigation("about")}>
                O nama
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-links" onClick={() => handleScrollNavigation("work-items")}>Delatnost</button>
              {/* <RouterLink to="/delatnost" className="nav-links" onClick={closeMobileMenu}>
                Delatnost
              </RouterLink> */}
            </li>
            <li className="nav-item">
              <button className="nav-links" onClick={() => handleScrollNavigation("footer")}>
                Kontakt
              </button>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
