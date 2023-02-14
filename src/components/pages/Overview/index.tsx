import Footer from "../../Footer";
import Card from "../../Card";
import firstGeneration from "../../../assets/mock/firstGeneration";
import "../../../assets/styles/global.css";
import "./Overview.css";
import React, { useState } from "react";
import Header from "../../Header";
import InformationCard from "../../InformationCard";

const Overview = () => {
  const [search, setSearch] = useState("");

  const filteredPokemon = firstGeneration.filter((item: any) => {
    const capitalFirstLetter = search.charAt(0).toUpperCase() + search.slice(1);

    return item.name.includes(capitalFirstLetter);
  });

  return (
    <>
      <div id="overview" className="overviewWrapper">
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
          {filteredPokemon.length > 0 &&
            filteredPokemon.map((pokemon: any) => {
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
        {filteredPokemon.length === 0 && <InformationCard />}
      </div>
      <Footer path="#overview" />
    </>
  );
};

export default Overview;
