import "../css/StyleSobreNosPneus.css";

const SobreNosPneus = () => {
  return (
    <section className="sobre-nos-pneus" id="sobre-nos">
      <div className="sobre-nos-pneus__content">
        <h1 className="sobre-nos-pneus__title">Sobre Nós:</h1>
        <p className="sobre-nos-pneus__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          risus sed ligula faucibus suscipit. Duis feugiat arcu a arcu tincidunt
          feugiat. Nulla facilisi. Morbi interdum felis sit amet tincidunt
          viverra.
        </p>
        <p className="sobre-nos-pneus__text">
          Phasellus accumsan eros in lectus egestas, ut facilisis lorem
          volutpat. Nam vel dui eget metus blandit lacinia non ut metus. Integer
          malesuada arcu et nunc tincidunt, in luctus augue vestibulum.
        </p>
      </div>
      <div className="sobre-nos-pneus__image">
        <img src="./src/assets/imgPneus/fachada.jpg" alt="Fachada da empresa" />
      </div>
    </section>
  );
};

export default SobreNosPneus;
