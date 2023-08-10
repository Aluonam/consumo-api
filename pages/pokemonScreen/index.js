import CajaBoton from "@/components/CajaBoton";
import CajaListado from "@/components/CajaListado";
import { useState } from "react";

export default function Home() {

    const [dataFetch, setDataFetch] = useState([])

    //Crear funcion asíncrona, con un try-catch:
    const llamadaAPI = async () => {
        try{
            //se llama con fetch al link de la API (añadir el await para que hasta que no devuelva datos no continue leyendo el código)
            const llamadaLink = await fetch('https://pokeapi.co/api/v2/pokemon')
            //pasamos esos datos a .json
            const datos = await llamadaLink.json()
            //Se guardan los datos en la variable del useState
            setDataFetch(datos.results) 
        }
        catch(error){
            console.log('Error detectado', error)
        }
        finally{
          console.log("Se ha terminado todo el proceso.")
      }
    }
    
    llamadaAPI()
  return (
    <>
      <main >
        {/* Se especifica que los datos de la variable del useState se van a pasar al componente CajaListado */}
        <CajaListado dataFetch={dataFetch} />
        <CajaBoton />
      </main>
    </>
  )
}