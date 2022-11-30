import React, { useEffect } from 'react'

export const Nosotros = () => {

    const handleClick =  (e) =>{
      console.log(e)

    }
    useEffect(()=>{
      window.addEventListener('click',handleClick)

      return ()=>{
        window.removeEventListener('click', handleClick)
      }
    },[])



  return (
    <div>
      <h2 onClick={handleClick} > Nosotros</h2>
    </div>
  )
}
