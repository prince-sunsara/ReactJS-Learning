import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen text-white text-center"
      style={{ backgroundColor: color }}
    >
      <h1 className='text-2xl pt-12 font-bold'>Background Color is : <span className='text-5xl'>{color}</span></h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center bg-white gap-3 rounded-3xl p-2">
          <button
            className='outline-none px-5 py-2 rounded-full shadow-xl'
            style={{ backgroundColor: 'red' }}
            onClick={() => { setColor("red") }}
          >Red</button>
          <button
            className='outline-none px-5 py-2 rounded-full shadow-xl'
            style={{ backgroundColor: 'green' }}
            onClick={() => { setColor("green") }}
          >Green</button>
          <button
            className='outline-none px-5 py-2 rounded-full shadow-xl'
            style={{ backgroundColor: 'blue' }}
            onClick={() => { setColor("blue") }}
          >Blue</button>
          <button
            className='outline-none px-5 py-2 rounded-full shadow-xl'
            style={{ backgroundColor: 'yellow' }}
            onClick={() => { setColor("yellow") }}
          >Yellow</button>
          <button
            className='outline-none px-5 py-2 rounded-full shadow-xl'
            style={{ backgroundColor: 'pink' }}
            onClick={() => { setColor("pink") }}
          >Pink</button>
          <button
            className='outline-none px-5 py-2 rounded-full shadow-xl'
            style={{ backgroundColor: 'purple' }}
            onClick={() => { setColor("purple") }}
          >Purple</button>
          <button
            className='outline-none px-5 py-2 rounded-full shadow-xl'
            style={{ backgroundColor: 'olive' }}
            onClick={() => { setColor("olive") }}
          >Olive</button>
          <button
            className='outline-none px-5 py-2 rounded-full shadow-xl'
            style={{ backgroundColor: 'silver' }}
            onClick={() => { setColor("silver") }}
          >Silver</button>
          <button
            className='outline-none px-5 py-2 rounded-full shadow-xl'
            style={{ backgroundColor: 'gold' }}
            onClick={() => { setColor("gold") }}
          >Gold</button>
          <button
            className='outline-none px-5 py-2 rounded-full shadow-xl'
            style={{ backgroundColor: 'orange' }}
            onClick={() => { setColor("orange") }}
          >Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
