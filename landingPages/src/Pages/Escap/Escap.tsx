import Contato from "./ComponentesEscap/Contato";
import FooterEscap from "./ComponentesEscap/FooterEscap";
import HeaderEscap from "./ComponentesEscap/HeaderEscap";
import Produtos from "./ComponentesEscap/NossoProduto";
import ProdutosCarrocel from "./ComponentesEscap/PodutosCarrocel";
import SobreNos from "./ComponentesEscap/SobreNos";
import WhatsappButton from "./ComponentesEscap/WhatsApp";

function Escap() {
  return (
    <div>
      <HeaderEscap />
      <section id="produtosCarrocel">
        <ProdutosCarrocel />
      </section>
      <section id="sobreNos">
        <SobreNos />
      </section>
      <section id="produtos">
        <Produtos />
      </section>
      <section id="contato">
        <Contato />
      </section>
      <FooterEscap />
      <WhatsappButton />
    </div>
  );
}

export default Escap;
