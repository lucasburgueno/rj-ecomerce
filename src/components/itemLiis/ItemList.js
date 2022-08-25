import React from 'react'
import Item from '../Item/Item'
import "./ItemLiist.css"

const ItemList = ({productos=[]}) => {

  return (
    <div className='titulo-producto'>
      <h2> Productos</h2>
      <hr/>
      <div className='container my-5'>
        {productos.map((prod)=>{
          return <Item producto={prod} key={prod.id}/>
        })  }
      </div>
    </div>
  )
}

export default ItemList