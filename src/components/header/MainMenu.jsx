import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const MainMenu = ({ isOpen, closeMenu, toggleSubMenu, toggleMegaMenu }) => {
  return (
    <>
      <div
        className={`collapse navbar-collapse collapse-mobile ${
          isOpen ? "show" : ""
        }`}
        id="navbar-menu"
      >
        <img src="/img/logo/logo.webp" alt="Logo" />
        <button type="button" className="navbar-toggle" onClick={closeMenu}>
          <i className="fa-solid fa-times"></i>
        </button>
        <ul className="nav navbar-nav navbar-center">
          <li className="dropdown megamenu-fw">
            <Link to="#about-us" smooth>À propos de nous</Link>
          </li>
          <li className="dropdown">
            <Link to="#services" smooth>Services</Link>
          </li>
          <li>
            <Link to="#gallery" smooth>Galerie</Link>
          </li>
          <li>
            <Link to="#why-choose-taksim" smooth>Pourquoi nous choisir</Link>
          </li>
          <li>
            <Link to="#contact-us" smooth>Contactez-nous</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainMenu;