
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

    const [dataFetch, setDataFetch] = useState(second)

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
    }
    
    llamadaAPI()
```