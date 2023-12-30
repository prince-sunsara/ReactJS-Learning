import { useState } from 'react'
import './App.css'
import '../src/index.css'

function App() {
  let [count, setCount] = useState(0)

  // ASSIGNMENT
  // check the condition
  // count !< 0 nd !> 20

  const minusCount = () => {
    count = count - 1
    if (count < 0) {
      alert('Cannot set it to less then 0!!')
    } else {
      setCount(count - 1)
    }
  }

  const plusCount = () => {
    // if (count != 20) {
    //   setCount(count + 1)
    // } else {
    //   alert('Cannot set it to more then 20!!')
    // }
    count != 20 ? setCount(count + 1) : alert('Cannot set it to more then 20!!')
    console.log(count);
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
