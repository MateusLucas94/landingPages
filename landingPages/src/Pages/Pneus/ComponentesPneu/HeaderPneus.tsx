import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/StyleHeaderPneus.css";

const HeaderPneus: React.FC = () => {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value) navigate(value);
  };

  return (
    <header className={`headerPneus ${scrolling ? "scrolled" : ""}`}>
      <div className="logoContainerPneus">
        <img src="/logo.png" alt="Logo da Empresa" className="logoPneus" />
      </div>

      <nav className="navBarPneus">
        <a href="#homePneus" id="homePneus">
          Home
        </a>
        <a href="#sobrePneus" id="sobreNosPneus">
          Sobre Nós
        </a>
        <select
          id="product-select"
          className="navSelectPneus"
          onChange={handleProductChange}
          title="Selecione um produto"
          aria-label="Selecione um produto"
          defaultValue=""
        >
          <option value="" disabled>
            Produtos
          </option>
          <option value="#pneus-bridgestone" id="pneuBrid">
            Pneus Bridgestone
          </option>
          <option value="#pneus-continental" id="pneuCont">
            Pneus Continental
          </option>
          <option value="#pneus-eudemon" id="pneuEude">
            Pneus Eudemon
          </option>
        </select>

        <a href="#orcamento">Orçamento</a>
        <a href="#contato" id="contatoPneus">
          Contato
        </a>
      </nav>
    </header>
  );
};

export default HeaderPneus;
