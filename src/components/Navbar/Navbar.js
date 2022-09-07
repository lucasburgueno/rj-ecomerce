import React from 'react'
import menu from "../../imagenes/menu-hamb.png"
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='nav-container'>
            <h1 className='nav-logo'>Old School</h1>
            <label for="menu" className='nav-label'>
                <img src={menu} className="menu-hamb"/>
            </label>
            <input type="checkbox" id='menu' className='nav-input'/>
            <div className='nav-menu'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <a href='#' className='nav-item'>Marcas</a>
                <a href='#' className='nav-item'>Genero</a>
                <a href='#' className='nav-item'>Contacto</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar