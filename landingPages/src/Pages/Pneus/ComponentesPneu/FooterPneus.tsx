import React from "react";
import "../css/StyleFooterPneus.css";

const FooterPneus: React.FC = () => {
  return (
    <footer className="footer-pneus">
      <div className="footer-pneus-container">
        <div className="footer-pneus-section">
          <h3>Sobre</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="footer-pneus-section">
          <h3>Contato</h3>
          <p>(99) 99999-9999</p>
          <p>emailDaEmpresa@email.com</p>
        </div>

        <div className="footer-pneus-section">
          <h3>Social</h3>
          <div className="footer-pneus-social-icons">
            <a
              href="https://www.facebook.com/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <div className="footer-pneus-social-links">
            <a
              href="https://www.linkedin.com/in/mateus-lucas/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://x.com/home"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-pneus-copyright">
        <p>Copyright © 2025 - Todos os direitos reservados de Mat e Leo.</p>
      </div>
    </footer>
  );
};

export default FooterPneus;
