import HeaderPneus from "./ComponentesPneu/HeaderPneus";
import BannerPneus from "./ComponentesPneu/BannerPneus";
import SobreNosPneus from "./ComponentesPneu/SobreNosPneus";
import ProdutosPneus from "./ComponentesPneu/ProdutosPneus";
import Banner2Pneus from "./ComponentesPneu/Banner2Pneus";
import QualificacoesPneus from "./ComponentesPneu/QualificacoesPneus";
import Localizacoes from "./ComponentesPneu/Localizacoes";
import ContatoPneus from "./ComponentesPneu/ContatoPneus";
import FooterPneus from "./ComponentesPneu/FooterPneus";

function Pneus() {
  return (
    <div>
      <HeaderPneus />
      <BannerPneus />
      <SobreNosPneus />
      <ProdutosPneus />
      <Banner2Pneus />
      <QualificacoesPneus />
      <Localizacoes />
      <ContatoPneus />
      <FooterPneus />
    </div>
  );
}

export default Pneus;
