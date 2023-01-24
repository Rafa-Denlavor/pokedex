import React, { useState } from 'react';
import './Header.css';
import { pokemon } from '../../assets/constants';

const Header = () => {

    const [search, setSearch] = useState('');

    const searchPokemon = pokemon.filter((pokemon : any) => pokemon.name.includes(search))

    return (
        <div className='headerWrapper'>
            <img src="images/logo.svg" />
            <input className="search" type="search" placeholder="Qual pokemon deseja procurar?" value={search} onChange={(value) => {
                setSearch(value.target.value)
            }}/>
        </div>
    )
}

export default Header;