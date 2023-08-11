import React from 'react'

//FUNCION:mostrar el listado (recibirá props con esta información)
const CajaListado = ({nombresPorListar}) => {

  const listadoPokemon =  nombresPorListar.map((pokemonName, index) =>  <li key={index}>{pokemonName}</li>)
  
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