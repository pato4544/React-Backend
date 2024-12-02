import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ITarea } from '../types/ITarea'
import TareasForm from './components/forms/PersonaForm'

function App() {

  const [form, setForm] = useState(false)



  const [count, setCount] = useState(0)

  const [tareas, setTareas] = useState<ITarea[]>([])

  const traerTareas = async () => { /* Funcion asincrona que espera a recibir datos con el await de abajo */
    const res = await fetch('http://localhost:3000/listaTareas');
    const resJSON = await res.json(); /* El resJSON pasa a formato JSON */
    setTareas(resJSON)
  }

  useEffect(() => {  /* Este useEffect es para que no se traiga los datos infinitas veces */
    traerTareas();
  }, [])

  return (
    <>
    <div className='min-h-screen bg-blue-300'>
      <div>
        <button onClick={() => setForm(true)}>Agregar Tarea</button>
      </div>

  
    </div>
    { form && <TareasForm setForm={setForm}/>}

  
    </>

    )
}

export default App
