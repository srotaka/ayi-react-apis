import React, { useEffect, useState } from 'react'
import characterService from '../service/CharacterService';
import CharactersRickMortyCards from './CharactersRickMortyCards';

const RickMortyFetch = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = async () => {
        const response = await characterService
            .getRickMortyCharacters()
            .catch((e) => console.log(e));
        setCharacters(response.results);
    }

    console.log(characters);

    return (
        <>
            <h1 className='pageTitle'>Rick and Morty Characters</h1>

            <div className="card-group">
                {characters.map((character, index) => (<CharactersRickMortyCards name={character.name} species={character.species} gender={character.gender} status={character.status} origin={character.origin.name} location={character.location.name} image={character.image} key={character.id} />))}
            </div>
        </>
    )
}

export default RickMortyFetch;