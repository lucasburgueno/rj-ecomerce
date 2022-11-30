import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Count } from '../count/Count'
import "./Item.css"
import { useState } from 'react'
import Select from '../count/Select'
import { CartContext } from '../Context/CartContext'

const Item = ({producto}) => {





  return (
    <div className='producto'>
        <img src={producto.img}/>
        <h4>{producto.nombre}</h4>
        <p>precio: ${producto.precio}</p>
        <small>stock disponible: {producto.stock}</small>
        <p>{producto.desc}</p>
        <Link to={`/item/${producto.id}`} className='btn btn-primary my-2'>Ver mas</Link>
        <hr/>
    </div>
  )
}

export default Item