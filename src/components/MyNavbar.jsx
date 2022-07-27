import React from 'react'
import watermelon from '../images/watermelon.png';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none nav-logo">
              <img src={watermelon} className="App-logo" alt="watermelon-logo"></img>
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link txt-pink">Home</Link></li>              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Characters
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/characters-rickandmorty" className="nav-link txt-pink">Rick and Morty</Link></li>
                <li><Link to="/characters-pokemon" className="nav-link txt-pink">Pokémon</Link></li>
                
                </ul>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-green">Sign-up</button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default MyNavbar
