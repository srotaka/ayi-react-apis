import './style/App.css';
import './style/Style.css';
import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import RickMortyFetch from './components/RickMortyFetch';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PokemonFetch from './components/PokemonFetch';


function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />}/>        
        <Route path='/characters-rickandmorty' element={<RickMortyFetch />}/> 
        <Route path='/characters-pokemon' element={<PokemonFetch />}/> 
        
      </Routes>
      <MyFooter />

    </div>
  );
}

export default App;
