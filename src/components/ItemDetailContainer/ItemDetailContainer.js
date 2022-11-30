
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PedirDatos } from '../../Helpers/PedirDatos'
import ItemDetail from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {
    const[item,setItem] = useState(null)
    const [loading,setLoading]= useState(true)
    const {itemId} = useParams()

    useEffect(()=>{
      setLoading(true)
      PedirDatos()
        .then((res) => {
          setItem(res.find((prod)=> prod.id === Number(itemId)))
        })
        .catch(err => console.log(err))
        .finally(()=>{
          setLoading(false)
        })

    },[])
  return (
    <div>
      {
      loading
        ?<h2>cargando...</h2>
        :<ItemDetail item={item}/>
      }
    </div>
  )
}

export default ItemDetailContainer
