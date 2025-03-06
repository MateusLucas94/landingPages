import React from "react";
import "../css/StyleContatoPneus.css";
import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const ContatoPneus: React.FC = () => {
  return (
    <div className="contato-pneu-container">
      <div className="contato-pneu-info">
        <div className="contato-pneu-info-box">
          <FaEnvelope className="contato-pneu-info-icon" />
          <div>
            <strong>Email</strong>
            <p>contato@contato.com</p>
          </div>
        </div>
        <div className="contato-pneu-info-box">
          <FaPhone className="contato-pneu-info-icon" />
          <div>
            <strong>Telefones</strong>
            <p>(99) 99999-9999</p>
          </div>
        </div>
        <div className="contato-pneu-info-box">
          <FaClock className="contato-pneu-info-icon" />
          <div>
            <strong>Horário de funcionamento</strong>
            <p>Segunda à Sexta de 07h30 às 17h30</p>
          </div>
        </div>
        <div className="contato-pneu-info-box">
          <FaMapMarkerAlt className="contato-pneu-info-icon" />
          <div>
            <strong>Endereço</strong>
            <p>São Bernardo do Campo - SP</p>
            <p>São Paulo - SP</p>
            <p>Santo André - Sp</p>
          </div>
        </div>
      </div>
      <div className="contato-pneu-form">
        <h2>Fale Conosco!</h2>
        <form>
          <div className="contato-pneu-input-box">
            <input type="text" placeholder="Seu nome" required />
          </div>
          <div className="contato-pneu-input-box">
            <input type="email" placeholder="Seu email" required />
          </div>
          <div className="contato-pneu-input-box">
            <input type="tel" placeholder="Seu telefone" required />
          </div>
          <div className="contato-pneu-input-box">
            <textarea placeholder="Mensagem" required></textarea>
          </div>
          <button className="contato-pneu-button" type="submit">
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContatoPneus;
