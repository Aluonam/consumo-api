import CajaBoton from "@/components/CajaBoton";
import CajaListado from "@/components/CajaListado";


export default function Home() {


    //Crear funcion asíncrona, con un try-catch:
    const llamadaAPI = async () => {
        try{
            //se llama con fetch al link de la API (añadir el await para que hasta que no devuelva datos no continue leyendo el código)
            const llamadaLink = await fetch('https://pokeapi.co/api/v2/pokemon')
            //pasamos esos datos a .json
            const datos = await llamadaLink.json()
            console.log(datos)
        }
        catch(error){
            console.log('Error detectado', error)
        }
    }
    
    llamadaAPI()
  return (
    <>
      <main >
        <CajaListado />
        <CajaBoton />
      </main>
    </>
  )
}