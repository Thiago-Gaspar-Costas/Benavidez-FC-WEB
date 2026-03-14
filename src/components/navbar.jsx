import React, { useState, useEffect } from "react";
import "../styles/components/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStore,
  faHeadset,
  faSun,
  faMoon,
  faBook,
  faBullseye,
  faNewspaper,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
// aca tambien me ayudo, con lo del modo oscuro
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode); 
  };

  return (
    <header className="navbar navbar-expand-lg sticky-top shadow">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="/images/navbar/logonav.png" alt="Benavidez FC" />
          <span>
            Benavidez
            <br />
            Fútbol Club
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faUsers} className="me-2" /> ¿Quiénes
                Somos?
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="./historia">
                    <FontAwesomeIcon icon={faBook} className="me-2" /> Historia
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./objetivos">
                    <FontAwesomeIcon icon={faBullseye} className="me-2" /> Objetivo/Misión
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/noticias">
                    <FontAwesomeIcon icon={faNewspaper} className="me-2" /> Noticias
                  </a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item" href="/galeria">
                    <FontAwesomeIcon icon={faImages} className="me-2" /> Galería de Fotos
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/productos">
                <FontAwesomeIcon icon={faStore} className="me-2" /> Productos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/soporte">
                <FontAwesomeIcon icon={faHeadset} className="me-2" /> Contacto
              </a>
            </li>

            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button
                id="darkModeToggle"
                className="btn btn-light"
                onClick={toggleDarkMode}
              >
                {darkMode ? (
                  <>
                    <FontAwesomeIcon icon={faSun} className="me-1" /> Modo Claro
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faMoon} className="me-1" /> Modo Oscuro
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
