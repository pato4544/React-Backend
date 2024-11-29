import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IPersona } from '../types/IPersona'
import { POST } from './services/peticiones'
import PersonaForm from './components/forms/PersonaForm'

function App() {
  const [count, setCount] = useState(0)

  const [personas, setPersonas] = useState<IPersona[]>([])

  const traerPersonas = async () => { /* Funcion asincrona que espera a recibir datos con el await de abajo */
    const res = await fetch('http://localhost:3000/persona');
    const resJSON = await res.json(); /* El resJSON pasa a formato JSON */
    setPersonas(resJSON)
  }

  useEffect(() => {  /* Este useEffect es para que no se traiga los datos infinitas veces */
    traerPersonas();
  }, [])


  const enviarDatos = async () => {
    const res = await POST<IPersona>('http://localhost:3000/persona', { nombre: "ejemplo1", apellido: "ejemplo1" })
    console.log(res)
  }

  return (
    <>
      {personas.map((persona) => (
        <h1>{persona.nombre}</h1>
      ))}

      <PersonaForm />
      <button onClick={enviarDatos}>TEST</button>

    </>
  )
}

export default App
