import React from 'react'
import "./Count.css"
import {useState} from "react"

export const Count = () => {

        let [counter,setCounter] = useState(0)


    const sumar =()=>{
        setCounter(counter + 1)
    }
    const restar =()=>{
        if (counter > 0){
            setCounter(counter -1)
        }
    }


  return (
    <div>
        <button onClick={restar} className='btn btn-outline-primary'>-</button>
        <span className='mx-2'>{counter}</span>
        <button onClick={sumar} className='btn btn-primary'>+</button>

    </div>
  )
}
