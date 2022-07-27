class CharacterService {

  async getRickMortyCharacters() {
    const response = await fetch(process.env.REACT_APP_BASEURL_RICK);
    return response.json();
  }

  async getPokemonCharacters(){
    const response = await fetch(process.env.REACT_APP_BASEURL_POKEMON);
    return response.json();
  }

  async getPokemonById(url){
    const response = await fetch(url);
    return response.json();
   
  }

 
}

const characterService = new CharacterService();
export default characterService;
