import React from "react";
import "../css/StyleContato.css";
import {
  FaEnvelope,
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaAlignLeft,
} from "react-icons/fa";

const Contato: React.FC = () => {
  return (
    <div className="contato-container">
      <div className="contato-info">
        <div className="info-box">
          <FaEnvelope size={20} className="icon" />
          <h4>Email</h4>
          <p>comercial@prisluxautopecas.com.br</p>
        </div>
        <div className="info-box">
          <FaPhone size={20} className="icon" />
          <h4>Telefones</h4>
          <p>(11) 2015-0341</p>
        </div>
        <div className="info-box">
          <FaClock size={20} className="icon" />
          <h4>Horário de funcionamento</h4>
          <p>Segunda à Sexta de 08:00 às 17:00</p>
        </div>
        <div className="info-box">
          <FaMapMarkerAlt size={20} className="icon" />
          <h4>Endereço</h4>
          <p>
            Rua Senador Maynard Gomes 700
            <br />
            São Mateus - SP
          </p>
        </div>
      </div>

      <div className="contato-form">
        <h3>Fale Conosco!</h3>
        <p>
          Tem alguma dúvida, sugestão ou crítica a fazer? Então entre em contato
          conosco. Suas dúvidas serão esclarecidas e sua opinião é fundamental
          para o nosso aperfeiçoamento.
        </p>
        <form>
          <div className="input-box">
            <FaUser size={18} className="icon" />
            <input type="text" placeholder="Seu nome" required />
          </div>
          <div className="input-box">
            <FaEnvelope size={18} className="icon" />
            <input type="email" placeholder="Seu email" required />
          </div>
          <div className="input-box">
            <FaPhone size={18} className="icon" />
            <input type="tel" placeholder="Seu telefone" required />
          </div>
          <div className="input-box">
            <FaAlignLeft size={18} className="icon" />
            <textarea placeholder="Mensagem" required></textarea>
          </div>
          <button type="submit">ENVIAR MENSAGEM</button>
        </form>
      </div>
    </div>
  );
};

export default Contato;
