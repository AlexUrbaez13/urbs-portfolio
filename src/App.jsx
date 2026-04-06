import { useState } from 'react'
import './App.css'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Projects />
    </>
  )
}

export default App
