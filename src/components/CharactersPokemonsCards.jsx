
import React, { useEffect, useState } from 'react'
import characterService from '../service/CharacterService';
import PokemonModal from './PokemonModal';

const CharactersPokemonsCards = ({ name, url }) => {
  const [image, setImage] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [baseExperience, setBaseExperience] = useState('');
  useEffect(() => {
      getPokemonById();
  }, []);
  const getPokemonById = async () => {
      const response = await characterService.getPokemonById(url)
          .catch((e) => console.log(e));
          setImage(response.sprites.front_default);
          setWeight(response.weight);
          setHeight(response.height);
          setBaseExperience(response.base_experience);
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
          <PokemonModal name={name} weight={weight} height={height} baseExperience={baseExperience} />
        </div>
      </div>

    </>
  )
}

export default CharactersPokemonsCards