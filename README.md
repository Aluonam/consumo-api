
1. Crear carpeta de la pantalla que vamos a visualizar: dentro un index.js y un style.module.css

2. Dentro de index.js se introduce una función típica:

```javascript
export default function Home() {
  return (
    <>
      <main >
        Ejemplo
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

5. 