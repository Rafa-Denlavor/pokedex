import Footer from "../../Footer";
import Card from "../../Card";
import { pokemon } from "../../../assets/constants";
import "../../../assets/styles/global.css";
import "./Overview.css";
import React, { useState } from "react";
import Header from "../../Header";
import InformationCard from "../../InformationCard";

const Overview = () => {
  const [search, setSearch] = useState("");

  const filteredPokemons = pokemon.filter((item: any) => {
    return item.name.includes(search);
  });

  return (
    <>
      <div id='overview' className="overviewWrapper">
        <Header />
        <h2 className="title">| 1° Geração: Kanto</h2>
        <input
          className="search"
          name="search"
          placeholder="Qual pokémon deseja encontrar?"
          type="search"
          onChange={(filter: any) => {
            setSearch(filter.target.value);
          }}
        />
        <div className="pokedex">
          {filteredPokemons.length > 0 &&
            filteredPokemons.map((pokemon: any) => {
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
        {filteredPokemons.length === 0 && <InformationCard />}
        <h2 className="continue">. . .</h2>
      </div>
      <Footer path='#overview' />
    </>
  );
};

export default Overview;
