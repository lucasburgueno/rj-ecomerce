import React from 'react'

export const Contacto = () => {



  return (
    <div className='container my-5'>
      <h2>Contacto</h2>
      <hr></hr>

      <form>
        <input type={"text"} className = "from-control"/>

        <button className='btn btn-primary' type='submit'>Enviar </button>
      </form>
    </div>
  )
}
