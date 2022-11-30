import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {
    const {cart,cartTotal,emptyCart,removeCart}= useContext(CartContext)
  return (
    <div>
        <h2  className='container my-5'> Productos Seleccionados</h2>
        <hr/>

        {cart.map((item)=>(
            <div key = {item.id}>
                <h3>{item.nombre}</h3>
                <p>precio: ${item.precio}</p>
                <p>cantidad: {item.cantidad}</p>
                <small>talle: {item.talle}</small>
                <button onClick={()=> removeCart(item.id)} className='btn btn-danger my-2'> Eliminar </button>
                <hr/>
            </div>
        ))}


        <h4> Total: ${cartTotal()}</h4>
        <button onClick={emptyCart} className='btn btn-danger'>Vaciar Carrito</button>
    </div>
    )
}

export default Cart