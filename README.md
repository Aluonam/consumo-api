
1. Crear carpeta de la pantalla que vamos a visualizar: dentro un index.js y un style.module.css

2. Dentro de index.js se introduce una función típica: 

```javascript
export default function Home() {
  return (
    <>
      <main >

      </main>
    </>
  )
}
```
3. Crear carpeta componentes y dentro los componentes que tendrá la ventana (cajaListado.jsx y CajaBoton.jsx) Y dentro (rafce) para crear la información básica del componente.

4. Incluir en screen.js los componentes CajaListado Y CajaBoton 
```javascript
import CajaBoton from "@/components/CajaBoton";
import CajaListado from "@/components/CajaListado";


export default function Home() {


    
  return (
    <>
      <main >
        <CajaListado />
        <CajaBoton />
      </main>
    </>
  )
}
```

5. Consumir API: Analizar que componente necesitará recibir esos datos. Si está dentro de otra pantalla la lógica para hacer el consumo API irá dentro de esa pantalla (en este caso: pokemonScreen --> index.js). Dentro de ese index.js se hará la llamada a API.

Para hacer la llamada a API una vez sabemos donde crear esa lógica creamos una función **asíncrona** con un try catch.
Dentro del **Try** incluimos:
- La llamada con await fetch al link de la API.
- Pasar datos a .json
Dentro del **catch**:
- imprimir en consola el error (que también lo recibe como props)

En este código además se imprime por consola y se llama a la función para ver que funciona:

```javascript react 
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
```

6. Se crea un useState para guardar los datos en la variable del estado:
```javascript
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
            setDataFetch(datos)
        }
        catch(error){
            console.log('Error detectado', error)
        }
        finally{
        console.log("Se ha terminado todo el proceso.")
    }
    }
    
    llamadaAPI()
```

7. Pasar como props a cajaListado el setDataFetch (pokemonScreen>Index.js)

```javascript
// En pokemonScreen/index.js
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
```

```javascript
// En componente CajaListado:
  //1. Se pasa por props los datos:
const CajaListado = ({dataFetch}) => {

  {/*Dentro de una constante: 
    1. Se hace .map para reecorrer el array que llega y se saca el item actual y la posición que recorre.
    2. Se crea una etiqueta HTML con el contenido: nombre del pokemon (se le tiene que pasar la key con info de JS por eso va entre `${}` )*/}
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
```
***(para verlo ya que trabajamos sobre una screen y no sobre la principal habrá que añadir al localHost el / con el nombre de la pantalla donde están los datos: http://localhost:3000/pokemonScreen )

8. Ahora que salen todos los datos que queremos podemos efectuar la lógica que se pida:
--> Muestralo alfabeticamente desde la Z a la A.

