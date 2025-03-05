import { Link } from 'react-router-dom';
import './NavbarTest.css';
import logo from "/images/logos/Cestor Veks-RGB.svg";
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavbarTest() {
    const [menuActive, setMenuActive] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

    const closeMobileMenu = () => setMenuActive(false);
    const handleMenu = () => setMenuActive(!menuActive);

    const updateIsMobile = () => {
        setIsMobile(window.innerWidth <= 960);
        if (window.innerWidth > 960) {
            setMenuActive(false); // Close menu when resizing to desktop
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateIsMobile);
        return () => window.removeEventListener('resize', updateIsMobile);
    }, []);

    return (
        <div className="navbar-test-comp">
            <div className="navbar-logo">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} className="navbar-img" />
                </Link>
            </div>
            {isMobile && (
                <div className="menu-icons" onClick={handleMenu}>
                    {menuActive ? <FaTimes /> : <FaBars />}
                </div>
            )}
            <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
                <li className="nav-items">
                    <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                        O nama
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to="/delatnost" className="nav-link" onClick={closeMobileMenu}>
                        Delatnost
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to="/kontakt" className="nav-link" onClick={closeMobileMenu}>
                        Kontakt
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavbarTest;
