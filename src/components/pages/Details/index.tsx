import "./Details.css";
import SensitiveData from "./SensitiveData";
import React from "react";
import Footer from "../../Footer";
import { useParams } from "react-router-dom";
import firstGeneration from "../../../assets/mock/firstGeneration";
import cx from "classnames";
import Stats from "./Stats";

type TPokemon = {
  name: string;
  id: string;
  image: string;
  typeImage: string;
  heigth: string | number;
  width: string | number;
  ability: string;
  type: string;
};

const Details = () => {
  const { id } = useParams();

  const getPokemon = firstGeneration.find(
    (detail: TPokemon) => detail.id === id
  );
  const pathImage = process.env.PUBLIC_URL + "/";

  return (
    <>
      <div id="details" key="details" className="detailsWrapper">
        <a href="/" className="back">
          Voltar
        </a>
        <div className={cx("background", getPokemon.types[0])} />
        <div className="detailsCard">
          <div className="circle">
            <img
              className="pokemon"
              src={pathImage + getPokemon.image}
              alt={getPokemon.name}
              title={getPokemon.type}
            />
          </div>
          <article className="content">
            <div className="mainInformations">
              <h2>{getPokemon.name}</h2>
              {getPokemon.types.map((pokemon: Array<string>) => {
                console.log(pokemon);
                return (
                  <img
                    src={pathImage + `images/types/${pokemon}.svg`}
                    alt="Tipo do pokemon"
                  />
                );
              })}
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
      <Footer
        logo={pathImage + "images/logo.svg"}
        arrow={pathImage + "images/seta.svg"}
        path="#details"
      />
    </>
  );
};

export default Details;
