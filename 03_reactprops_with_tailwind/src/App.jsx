import './App.css'
import './index.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl p-2 mb-4'>Tailwind Test</h1>

      <Card name="Prachi" age={21} btnText='Click Here!' />
      <Card name="Ishita" age={19} />

    </>
  )
}

export default App
