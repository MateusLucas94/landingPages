import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../css/Whatsapp.css";

const WhatsappButton: React.FC = () => {
  return (
    <div className="overlay">
      <a
        href="https://wa.me/seunumerodetelefone"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsappButton;
