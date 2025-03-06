import "../css/StyleLocalizacoes.css";

const Localizacoes = () => {
  return (
    <div className="localizacoes-container">
      <h2>Venha nos fazer uma visita!</h2>
      <div className="mapas-container">
        <div className="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=SEU_LINK_DO_MAPA_1"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <p>SÃO BERNARDO DO CAMPO/SP</p>
        </div>

        <div className="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=SEU_LINK_DO_MAPA_2"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <p>SÃO PAULO/SP</p>
        </div>

        <div className="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=SEU_LINK_DO_MAPA_3"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <p>SANTO ANDRÉ/SP</p>
        </div>
      </div>
    </div>
  );
};

export default Localizacoes;
