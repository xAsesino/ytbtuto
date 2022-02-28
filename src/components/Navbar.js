import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button.js";
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>

            <nav className="navbar">

                <div className="navbar-container">

                    <NavLink to="/" className="navbar-logo">
                        TRCVL <i className="fab fa-typo3" />
                    </NavLink>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className="nav-item">
                            <NavLink to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/services" className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/products" className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/sign-up" className='nav-links' onClick={closeMobileMenu}>
                                Sign-Up
                            </NavLink>
                        </li>
                    </ul>

                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

                </div>

            </nav>
        </>
    )
}

export default Navbar;
