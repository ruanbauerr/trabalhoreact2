function Card({ imagem, titulo, descricao }) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
}

export default Card;