import React from 'react';
import { useState,useEffect } from 'react'
import ItemList from '../itemLiis/ItemList';
import { pedirDatos } from '../../Helpers/PedirDatos';





const ItemListContainer = () => {
    const[productos,setProductos]=useState([])

    useEffect(() => {
        pedirDatos()
        .then((res)=>{
            setProductos(res)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
        })
    },[])
    

  return (
            <div>
                <ItemList productos={productos}/>
            </div>
  );
}

export default ItemListContainer