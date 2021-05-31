import { FC, useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import { setHamburgerState} from "../../redux/actions/navbarActions";
import { Button } from "../Button/Button";
import { IconContext } from 'react-icons/lib';
import { Colors } from "../../styleHelpers/Colors";

const Navbar: FC = () => {
  const navbarState = useAppSelector((state) => {
    const hamburgerState = state.navbar.hamburgerState;
    return { hamburgerState };
  });

  const [navbarButton, setNavbarButton] = useState(false)

  const dispatch = useAppDispatch();

  const handleHamburgerClick = () => {
    dispatch(setHamburgerState(!navbarState.hamburgerState));
  };
  const closeMobileMenu = () => dispatch(setHamburgerState(false));

  const showButton = () => {
    if(window.innerWidth <= 960)
    {
      setNavbarButton(false);
    } else {
      setNavbarButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <IconContext.Provider value={{color: Colors.white}}>
    <div className="navbar">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo" onClick = {closeMobileMenu}>
          <MdFingerprint className="navbar-icon" />
          TOUCH
        </Link>
        <div className="hamburger-icon" onClick={handleHamburgerClick}>
          {navbarState.hamburgerState ? <FaTimes className = "fa-times" /> : <FaBars className="fa-bars"/>}
        </div>
        <ul
          className={
            navbarState.hamburgerState ? "navbar__menu navbar__menu--active" : "navbar__menu"
          }
        >
          <li className="navbar__item">
            <Link to="/" className="navbar__link" onClick = {closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/services" className="navbar__link" onClick = {closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/products" className="navbar__link" onClick = {closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className="navbar__button">
            {navbarButton ? (
              <Link to="/sign-up" className="button-link">
                <Button buttonStyle="button--outline">SIGN UP</Button>
              </Link>
            ) : (
              <Link to="/sign-up" className="button-link" onClick = {closeMobileMenu}>
                <Button buttonStyle="button--outline"
                buttonSize="button--mobile">SIGN UP</Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
    </IconContext.Provider>
  );
};

export default Navbar;
