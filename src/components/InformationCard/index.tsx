import "./InformationCard.css";
import React from "react";

const InformationCard = () => {
  return (
    <div className="noResults">
      <img src="images/no-result.png" alt="Pikachu triste" />
      <h1>Ops, nenhum pokémon foi capturado!</h1>
      <p>Verifique a busca e tente novamente.</p>
    </div>
  );
};

export default InformationCard;
