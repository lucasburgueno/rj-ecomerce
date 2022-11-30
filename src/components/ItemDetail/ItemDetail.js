import React, { useContext } from 'react'
import { Count } from '../count/Count'
import { useState } from 'react'
import Select from '../count/Select'
import "./ItemDetail.css"
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'



const ItemDetail = ({item}) => {

  const {cart,addToCart,isInCart} = useContext(CartContext)
  console.log(cart)

  const [cantidad,setCantidad] = useState(1)
  const [talle,setTalle] = useState (item.talles[0].value)


  const handleAgregar = () =>{
    const itemToCart = {
      id: item.id,
      precio: item.precio,
      nombre: item.nombre,
      talle,
      cantidad
    }
    isInCart(item.id)
    addToCart(itemToCart)
  }


  return (
    <div className='prducto'>
        <img src={item.img}/>
        <h3>{item.nombre}</h3>
        <p>{item.desc}</p>
        <p>{item.category}</p>
        <h4>{item.precio}</h4>
        <hr/>
        <Select options={item.talles} onSelect={setTalle} />
        <hr/>
        {isInCart(item.id) && <p>El item ya se encuentra en el carrito</p>}
        {
          isInCart(item.id)
          ?<Link to="/cart" className='btn btn-success my-2'>Terminar mi Compra</Link>
          :<Count 
          max={item.stock}
          counter ={cantidad}
          setCounter={setCantidad}
          handleAgregar={handleAgregar}
          />
        }


        
    </div>
  )
}

export default ItemDetail