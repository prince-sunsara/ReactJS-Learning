import { useState } from 'react'
import './App.css'
import '../src/index.css'

function App() {
  let [count, setCount] = useState(0)

  const minusCount = () => {
    count = count - 1
    setCount(count)
  }

  const plusCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Counter App | Prince Sunsara</h1>
      <h2>Counter Value : {count}</h2>

      <button style={{ fontSize: '1.2rem' }} onClick={minusCount} >-</button>
      <button style={{ fontSize: '1.2rem' }} onClick={plusCount} >+</button>
    </>
  )
}

export default App
