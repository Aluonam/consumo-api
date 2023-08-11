import CajaListado from "@/components/CajaListado";
import CajaBoton from "@/components/CajaBoton";
import { useState, useEffect } from "react";

export default function Home() {

    const [nombresPokemon, setNombresPokemon] = useState([])
    const [dataAPIPokemon, setDataAPIPokemon] = useState([])

    // ------------------useEffect para llamar a la API una vez  y q no entre en bucle 
    useEffect(() => {
     llamadaAPI();
    }, [])
    
    // -------------------useEffect para cuando se ejecute la llamada a API se guardará el nombre de los pokemons.
    useEffect(() => {
      if(dataAPIPokemon.length>0){
        setNombresPokemon(dataAPIPokemon.map((pokemon) => pokemon.name))
      }
    }, [dataAPIPokemon]) //Escucha cuando cambia dataAPIPokemon



    //--------------------Crear funcion asíncrona, con un try-catch:
    const llamadaAPI = async () => {
        try{
            //se llama con fetch al link de la API (añadir el await para que hasta que no devuelva datos no continue leyendo el código)
            const llamadaLink = await fetch('https://pokeapi.co/api/v2/pokemon')
            const datos = await llamadaLink.json() //pasamos esos datos a .json
            //Se guardan los datos en la variable del useState
            setDataAPIPokemon(datos.results) 
        }
        catch(error){
            console.log('Error detectado', error)
        }
    }

    
  return (
    <>
      <main >
        {/* Se especifica que los datos de la variable del useState se van a pasar al componente CajaListado */}
        <CajaListado nombresPorListar={nombresPokemon} />
        <CajaBoton nombresPorOrdenar={nombresPokemon} setState={setNombresPokemon} />
      </main>
    </>
  )
}