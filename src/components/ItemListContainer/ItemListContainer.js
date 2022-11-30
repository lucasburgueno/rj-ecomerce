import React from 'react';
import { useState,useEffect } from 'react'
import ItemList from '../itemLiis/ItemList';
import { PedirDatos } from '../../Helpers/PedirDatos';
import { useParams } from 'react-router-dom';





const ItemListContainer = () => {
    const[productos,setProductos]=useState([])

    const { categoryId }= useParams()
    const [loading, setLoading] = useState (true)

    useEffect(() => {
        setLoading(true)
        PedirDatos()
            .then((res)=>{
                if(!categoryId){
                    setProductos(res)
                }else {
                    setProductos(res.filter((prod)=> prod.category === categoryId))
                }
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[categoryId])
    

  return (
            <div>
                {
                    loading
                    ? <h2>cargando...</h2>
                    : <ItemList productos={productos}/>

                }

            </div>
  );
}

export default ItemListContainer