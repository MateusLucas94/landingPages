import "../css/StyleProdutosPneus.css";

const ProdutosPneus: React.FC = () => {
  return (
    <section className="produtos-pneus" id="produtos">
      <h1 className="produtos-pneus__title">
        Conheça os Produtos da TWI Pneus
      </h1>
      <p className="produtos-pneus__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
        risus sed ligula faucibus suscipit. Duis feugiat arcu a arcu tincidunt
        feugiat. Nulla facilisi. Morbi interdum felis sit amet tincidunt
        viverra.
      </p>

      <div className="produtos-pneus__container">
        <div className="produto-card" id="pneuBrid">
          <img
            src="./src/assets/imgPneus/produto1.jpg"
            alt="Pneus Bridgestone"
          />
          <h2 className="produto-card__title">Pneus Bridgestone</h2>
          <p className="produto-card__subtitle">Tecnologia e Inovação</p>
        </div>

        <div className="produto-card" id="pneuCont">
          <img
            src="./src/assets/imgPneus/produto2.jpg"
            alt="Pneus Continental"
          />
          <h2 className="produto-card__title">Pneus Continental</h2>
          <p className="produto-card__subtitle">Desempenho e Eficiência</p>
        </div>

        <div className="produto-card" id="pneuEude">
          <img src="./src/assets/imgPneus/produto3.jpg" alt="Pneus Eudemon" />
          <h2 className="produto-card__title">Pneus Eudemon</h2>
          <p className="produto-card__subtitle">Qualidade e Custo-Benefício</p>
        </div>
      </div>
    </section>
  );
};

export default ProdutosPneus;
