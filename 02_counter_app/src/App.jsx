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
    count != 20 ? setCount(count + 1) : alert('Cannot set it to more then 20!!')

    // // INTERVIEW PURPOSE

    // // // work duplication ho rha hai idhr 
    // // // to ye set of bunch me react handle krega
    // // // so in sbhi mai se last vala setCount run hoga
    // // // so value ek hi bar increment hogi iski
    // // // so ek bar click krne pr value 1 hi milegi
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)


    // // // idhr prevCount wo count ki previos state (value) le rha hai
    // // // so har jitni bar work duplicate hoga utni bar count ko value add hogi
    // // // so idhr ek bar click krne pe return 4 milega
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)


    // setCount(count + 1)
    // setCount(count + 1)
    // // above two ek bar value add krega so return value 1
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
    // // idhr do bar 1 or 1 add hoga prevalue pe 
    // // so outpur 3 milega
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
