import React from 'react'
import { Count } from '../count/Count'
import { useState } from 'react'
import Select from '../count/Select'



const ItemDetail = ({item}) => {

  const [cantidad,setCantidad] = useState(1)
  const [talle,setTalle] = useState (item.options[0].value)


  const handleAgregar = () =>{
    const itemToCart = {
      id: item.id,
      precio: item.precio,
      nombre: item.nombre,
      talle,
      cantidad
    }
    console.log(itemToCart)
  }


  return (
    <div>
        <img src={item.img}/>
        <h3>{item.nombre}</h3>
        <p>{item.desc}</p>
        <p>{item.category}</p>
        <h4>{item.precio}</h4>
        <hr/>
        <Select options={item.options} />
        <hr/>
        <Count 
        max={item.stock}
        counter ={cantidad}
        setCounter={setCantidad}
        handleAgregar={handleAgregar}
        />
    </div>
  )
}

export default ItemDetail