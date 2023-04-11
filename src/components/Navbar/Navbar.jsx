import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";

import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="navbar-layout">
      <header>
        <a href="/">  <h3>Anahi Apartamentos</h3></a>

        <nav ref={navRef}>
          <a href="/#propiedades" >Propiedades</a>
          <a href="/#empresa">Empresa</a>
          <a href="/#servicios">Servicios</a>
          <a href="/#reseñas">Reseñas</a>
          <a href="/#contacto">Contacto</a>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-x"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </header>
    </div>
  );
};

export default Navbar;
