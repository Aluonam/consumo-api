import React from 'react'

const CajaBoton = ({nombresPorOrdenar,setState}) => {

 
    const handleOnclickABC = (nombres) => {
      const arrayShorted = structuredClone(nombres)
      arrayShorted.sort().reverse()
      setState(arrayShorted)
    }

    const handleOnclickLEN = (nombres)=>{
      const arrayShorted = structuredClone(nombres)
      arrayShorted.sort((a,b)=>b.length-a.length)
      setState(arrayShorted)
    }

  return (
    <>
    <button onClick={()=>{handleOnclickABC(nombresPorOrdenar)}}>Clic para ordenar alfabéticamente</button>
    <button onClick={()=>{handleOnclickLEN(nombresPorOrdenar)}}>Clic para ordenar por longitud</button>
    </>
  )
}

export default CajaBoton