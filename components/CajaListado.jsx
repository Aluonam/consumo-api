import React from 'react'

//FUNCION:mostrar el listado (recibirá props con esta información)
const CajaListado = ({dataFetch}) => {

  const listadoPokemon =  dataFetch.map((pokemon, index) =>  <li key={index}>{pokemon.name}</li>)
  
  return (
    <>
   <div>
      <h2>Lista de Pokémon</h2>
      <ul>
        {listadoPokemon}
      </ul>
    </div>
    </>
  )
}

export default CajaListado