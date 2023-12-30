import { useEffect, useState, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  // useRef
  const passwordRef = useRef(null);

  // useCallback
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str += "0123456789";
    if (charAllow) str += ":!=_@'#$&"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numAllow, charAllow, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select(); // optional code
    window.navigator.clipboard.writeText(password)
  }, [password]);

  // useEffect
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-purple-500 bg-gray-800">
        <h1 className="text-white text-center text-2xl font-mono">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden shadow my-3">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-purple-700 outline-none text-white font-bold py-0.5 px-3 shrink-0"
            onClick={copyPassword}
          >Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumAllow(prev => !prev)
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charAllow"
              className="cursor-pointer"
              onChange={() => {
                setCharAllow(prev => !prev)
              }}
            />
            <label htmlFor="charAllow">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
