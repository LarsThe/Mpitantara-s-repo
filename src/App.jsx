import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {paysage} from './assets/index.js'
import Bonjours from './bonjours.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <Bonjours/>
      </div>
    </>
  )
}

export default App
