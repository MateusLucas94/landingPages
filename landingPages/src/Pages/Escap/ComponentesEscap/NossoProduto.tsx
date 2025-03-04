import "../css/StyleNossoProduto.css";

const produtos = [
  { id: "PL1000", nome: "MONZA", imagem: "./src/assets/img/pl1000.jpg" },
  {
    id: "PL1001",
    nome: "OPALA VIROLADA",
    imagem: "./src/assets/img/pl1001.jpg",
  },
  {
    id: "PL1002/1003/1004",
    nome: "DODGE P/M/G",
    imagem: "./src/assets/img/pl1002.jpg",
  },
  { id: "PL1005", nome: "CORSA", imagem: "./src/assets/img/pl1005.jpg" },
  {
    id: "PL1006",
    nome: "SANTANA C/ CHANFRO",
    imagem: "./src/assets/img/pl1006.jpg",
  },
  {
    id: "PL1008",
    nome: 'DUPLA 17/8 E 2"',
    imagem: "./src/assets/img/pl1008.jpg",
  },
  {
    id: "PL1009",
    nome: "PARATI/ GOL/ PASSAT",
    imagem: "./src/assets/img/pl1009.jpg",
  },
  {
    id: "PL1010/1011",
    nome: "DODGE DUPLA CURTA/LONGA",
    imagem: "./src/assets/img/pl1010.jpg",
  },
];

const Produtos = () => {
  return (
    <div className="produtos-container">
      <h2 className="titulo">
        Nossos <strong>produtos</strong>
      </h2>
      <h3 className="subtitulo">Ponteiras de Aço</h3>

      <div className="grid-produtos">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto">
            <img src={produto.imagem} alt={produto.nome} />
            <h4>{produto.id}</h4>
            <p>{produto.nome}</p>
          </div>
        ))}
      </div>

      <a href="https://wa.me/seunumerowhatsapp" className="whatsapp-button">
        <img src="./src/assets/img/whatsapp.png" alt="Fale Agora" />
      </a>
    </div>
  );
};

export default Produtos;
