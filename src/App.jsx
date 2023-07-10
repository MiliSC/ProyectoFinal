import { useState } from 'react'
import { RouterApp } from './router/RouterApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterApp/>
    </>
  )
}

export default App
