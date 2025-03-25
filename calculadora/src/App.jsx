import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculadora from './components/calculadora'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Calculadora</h1>

      <Calculadora/>

    </div>

    <div>
      <h1>Todo List</h1>

      <Todo/>
    </div>
    </>
  )
}

export default App
