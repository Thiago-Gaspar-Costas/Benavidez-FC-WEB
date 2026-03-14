import React from "react";
import "../styles/components/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

//tuve ayudas con los iconos :)
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row text-center text-md-start">

          <div className="col-md-3 mb-4">
            <img src="/images/footer/logofooter.png" alt="Logo BFC Club" className="footer-logo mb-3" />
            <p className="footer-text">&copy; 2025 BENAVIDEZ FÚTBOL CLUB</p>
            <p className="footer-text">Pasión por los colores desde 2016</p>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Navegación</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/">Inicio</a></li>
              <li><a href="/historia">Historia</a></li>
              <li><a href="/soporte">Contacto</a></li>
              <li><a href="/objetivos">Objetivos</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Contacto</h5>
            <p className="footer-text"><FontAwesomeIcon icon={faPhoneAlt} className="me-2" /> 1166295591</p>
            <p className="footer-text"><FontAwesomeIcon icon={faEnvelope} className="me-2" /> benavidezfc@gmail.com</p>
            <p className="footer-text"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> Benavidez, Buenos Aires</p>
          </div>

          <div className="col-md-3">
            <h5 className="footer-title">Redes Sociales</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/benavidezfc.benavidezfc" target="_blank" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://www.instagram.com/benavidezfc/" target="_blank" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.youtube.com/@benavidezfc9102" target="_blank" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
            <p className="footer-text mt-3">¡Seguinos para estar informados!</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
