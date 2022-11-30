import React from 'react';
import { useState,useEffect } from 'react'
import ItemList from '../itemLiis/ItemList';
import { PedirDatos } from '../../Helpers/PedirDatos';
import { useParams } from 'react-router-dom';
import {collection,getDocs, query,where} from "firebase/firestore"
import {db} from "../../components/firebase/Config"





const ItemListContainer = () => {
    const[productos,setProductos]=useState([])

    const { categoryId }= useParams()
    const [loading, setLoading] = useState (true)

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db,"productos")
        const q = categoryId
                        ?query (productosRef, where("category","==",categoryId))
                        :productosRef
        getDocs(q)
        .then((resp)=>{
            const productosDB =resp.docs.map((doc)=>({id: doc.id, ...doc.data()}))
            console.log(productosDB)

            setProductos(productosDB)

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