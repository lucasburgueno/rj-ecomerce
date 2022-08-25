import React from 'react'
import "./Item.css"

const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img src={producto.img}/>
        <h4>{producto.nombre}</h4>
        <p>precio: ${producto.precio}</p>
        <small>stock disponible: {producto.stock}</small>
        <p>{producto.desc}</p>
        <a className='btn btn-primary my-2'>Ver mas</a>
    </div>
  )
}

export default Item