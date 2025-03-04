import { useEffect, useState } from "react";
import "../css/SobreNos.css";

const SobreNos: React.FC = () => {
  const [fechado, setFechado] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY + 10) {
            setFechado(true);
          } else if (window.scrollY < lastScrollY - 10) {
            setFechado(false);
          }
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sobre-nos">
      <div className="texto">
        <h2>Sobre nós</h2>
        <p>
          Somos uma indústria de autopeças com mais de 30 anos de experiência no
          mercado, atendendo distribuidores em todo o território nacional.
        </p>
        <p>
          Oferecemos uma ampla gama de soluções, com mais de 200 modelos de
          ponteiras e diversas opções de medidas de abraçadeiras para veículos,
          garantindo qualidade e variedade para atender às necessidades de
          nossos clientes.
        </p>
      </div>

      <div className={`imagem ${fechado ? "fechado" : ""}`}>
        <img src="/src/assets/img/carroTraseira.jpg" alt="Sobre nós" />
      </div>
    </div>
  );
};

export default SobreNos;
