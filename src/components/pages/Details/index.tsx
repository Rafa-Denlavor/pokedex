import "./Details.css";
import SensitiveData from "./SensitiveData";
import Stats from "./Stats";
import React from "react";
import Footer from "../../Footer";
import { useParams } from "react-router-dom";
import { pokemon } from "../../../assets/constants";
import cx from "classnames";

type TPokemon = {
  name: string;
  id: string;
  image: string;
  heigth: string | number;
  width: string | number;
  ability: string;
};

const Details = () => {
  const { id } = useParams();

  const getPokemon = pokemon.find((detail: TPokemon) => detail.id === id);
  const pathImage = process.env.PUBLIC_URL + "/";

  return (
    <>
      <div id="details" key="details" className="detailsWrapper">
        <a href="/" className="back">
          Voltar
        </a>
        <div className={cx("background", getPokemon.type)} />
        <div className="detailsCard">
          <img
            className="pokemon"
            src={pathImage + getPokemon.image}
            alt={getPokemon.name}
          />
          <article className="content">
            <div className="mainInformations">
              <h2>{getPokemon.name}</h2>
              <img
                src={pathImage + getPokemon.typeImage}
                alt="Tipo do pokemon"
              />
            </div>
            <p>#{getPokemon.id}</p>
          </article>
          <SensitiveData
            height={getPokemon.height}
            width={getPokemon.width}
            ability={getPokemon.ability}
          />
          <Stats />
        </div>
      </div>
      <Footer logo={pathImage + 'images/logo.png'} arrow={pathImage + 'images/seta.svg'} path='#details' />
    </>
  );
};

export default Details;
