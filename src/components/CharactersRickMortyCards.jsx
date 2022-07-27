import React from 'react'
import CharacterModal from './CharacterModal';

const CharactersRickMortyCards = ({ name, species, gender, status, origin, location, image }) => {
  return (
    <>
      <div className="myCard hover-zoom">
        <img className="card-img-top" src={image} alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="card-text">
                <ul className='specs'>
                  <li><strong>Specie:</strong> {species}</li>                
                </ul>
            </div>
            <CharacterModal name={name} species={species} gender={gender} status={status} origin={origin} location={location} />
          </div>
      </div>

    </>
  )
}
export default CharactersRickMortyCards