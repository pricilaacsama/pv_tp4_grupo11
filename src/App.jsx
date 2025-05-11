import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Producto from './assets/components/Producto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Producto></Producto>
    </div>
  )
}

export default App
