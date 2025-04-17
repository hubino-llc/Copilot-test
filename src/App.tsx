import { useState } from 'react'

import './App.css'
import WelcomeCard from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h4>Copilot Test</h4>
      <WelcomeCard 
      name='test' 
       />
    </>
  )
}

export default App
