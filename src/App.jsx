import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Info from './components/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <Info />
      </div>
    </div>
  )
}

export default App
