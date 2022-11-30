import React from 'react'
import menu from "../../imagenes/menu-hamb.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'


const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='nav-container'>
            <Link to="/">  <h1 className='nav-logo'>Old School</h1> </Link>
            <label  className='nav-label'>
                <img src={menu} className="menu-hamb"/>
            </label>
            <input type="checkbox" id='menu' className='nav-input'/>
            <div className='nav-menu'>
                <CartWidget/>
                <Link to='/productos/buzos' className='nav-item'>Buzos</Link>
                <Link to='/productos/remeras' className='nav-item'>Remeras</Link>
                <Link to="/nosotros" className='nav-item'>Nosotros</Link>
                <Link to='/contacto' className='nav-item'>Contacto</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar