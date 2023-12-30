import Prince from "./Prince";

function App() {
  const age = 20;

  return (
    <>
      <h1>Learning React with Vite Dev</h1>

      {/* use variable like this  */}
      <h2>My name is Prince and I'm {age} years old.</h2>
      <Prince />
    </>
  );
}

export default App;
