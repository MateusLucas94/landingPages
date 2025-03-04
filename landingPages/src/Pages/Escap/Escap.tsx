import FooterEscap from "./ComponentesEscap/FooterEscap";
import HeaderEscap from "./ComponentesEscap/HeaderEscap";
import Produtos from "./ComponentesEscap/NossoProduto";
import ProdutosCarrocel from "./ComponentesEscap/PodutosCarrocel";
import SobreNos from "./ComponentesEscap/SobreNos";

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
      <section>
        <h1> Escap </h1>
        <h1> Escap </h1>
        <h1> Escap </h1>
        <h1> Escap </h1>
        <h1> Escap </h1>
        <h1> Escap </h1>
        <h1> Escap </h1>
        <h1> Escap </h1>
        <h1> Escap </h1>
        <h1> Escap </h1>
        <h1> Escap </h1>
        <h1> Escap </h1>
        <h1> Escap </h1>
        <h1> Escap </h1>
        <h1> Escap </h1>
      </section>
      <FooterEscap />
    </div>
  );
}

export default Escap;
