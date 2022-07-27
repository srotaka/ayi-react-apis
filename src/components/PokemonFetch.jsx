import React, { useEffect, useState } from 'react'
import characterService from '../service/CharacterService';
import CharactersPokemonsCards from './CharactersPokemonsCards';

const PokemonFetch = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getPokemonCharacters();
    }, []);

    const getPokemonCharacters = async () => {
        const response = await characterService
            .getPokemonCharacters()
            .catch((e) => console.log(e));
            setCharacters(response.results)
    }
    //setCharacters = response.result;
    console.log(characters);

    return (
        <>
            <h1 className='pageTitle'>Pokémon Characters</h1>
            <div className="card-group">
                {characters.map((poke, index) => (<CharactersPokemonsCards name={poke.name} url={poke.url} key={index} />))}
            </div>
        </>
    )
}

export default PokemonFetch