import { useEffect, useState } from "react";
import "../css/StyleHeader.css";

const Header: React.FC = () => {
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

  return (
    <header className={`header ${scrolling ? "scrolled" : ""}`}>
      {/* LOGO DA EMPRESA */}
      <div className="logo">
        <img src="/logo.png" alt="Logo da Empresa" />
      </div>

      {/* MENU DE NAVEGAÇÃO */}
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#produtosCarrocel">Home</a>
          </li>
          <li>
            <a href="#sobreNos">A empresa</a>
          </li>
          <li>
            <a href="#produtos">Produtos</a>
          </li>
          <li>
            <a href="#contato">Orçamento</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
