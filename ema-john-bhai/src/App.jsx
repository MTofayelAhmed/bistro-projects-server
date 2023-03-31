import { useState } from 'react'

import './App.css'
import Header from './componets/Header/Header'
import Shop from './componets/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  )
}

export default App
