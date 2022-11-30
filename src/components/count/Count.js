import React from 'react'
import "./Count.css"
import {useState} from "react"

export const Count = ({max, counter,setCounter, handleAgregar}) => {

        const handleSumar = () =>{
            if (counter < max){
                setCounter(counter + 1 )
            }
        }

        const handleRestar = () =>{
            if (counter > 1){
                setCounter(counter - 1 )
            }
        }



  return (
    <div>
        <button onClick={handleRestar} className='btn btn-outline-primary'>-</button>
        <span className='mx-2'>{counter}</span>
        <button onClick={handleSumar} className='btn btn-primary'>+</button>
        <br/>

        <button className="btn btn-primary my-2"> Agregar Al Carrito</button>

    </div>
  )
}
