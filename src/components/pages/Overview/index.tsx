import Footer from "../../Footer";
import Card from "../../Card";
import { pokemon } from "../../../assets/constants";
import "../../../assets/styles/global.css";
import "./Overview.css";
import React from 'react';
import Header from "../../Header";

const Overview = () => {
  return (
    <>
      <div className="overviewWrapper">
        <Header />
        <h2 className='title'>| 1° Geração: Kanto</h2>
        <div className="pokedex">
          {pokemon.map((pokemon : any) => {
            return (
              <Card
                key={pokemon.order}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
              />
            );
          })}
        </div>
        <h2 className='continue'>. . .</h2>
      </div> 
      <Footer />
    </>
  );
};

export default Overview;
