import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharactersPokemonsCards from './CharactersPokemonsCards';


const PokemonAxios = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BASEURL_POKEMON).then((response) => {
      setPokemons(response.data.results);
    }).catch((error) => {
      console.log(error);
    })
  }, []);
  console.log({ pokemons });

  return (
    <>
      <h1 className='pageTitle'>PokemonAxios</h1>
      <section className='allCards'>
        <div className="card-group">
          {/* {pokemons.map((poke, index) => (<CharactersPokemonsCards name={poke.name} url={poke.url} key={index} />))} */}
        </div>
      </section>
    </>
  )
}

export default PokemonAxios; 