
import React, { useEffect, useState } from 'react'
import characterService from '../service/CharacterService';
import PokemonModal from './PokemonModal';

const CharactersPokemonsCards = ({ name, url }) => {
  const [image, setImage] = useState([]);
  useEffect(() => {
      getPokemonById();
  }, []);
  const getPokemonById = async () => {
      const response = await characterService.getPokemonById(url)
          .catch((e) => console.log(e));
          setImage(response.sprites.front_default);
  }

  return (
    <>
      <div className="myCard hover-zoom">
        <img className="card-img-top" src={image  }
          alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text">
            
          </div>
          <PokemonModal name={name} url={url} />
        </div>
      </div>

    </>
  )
}

export default CharactersPokemonsCards