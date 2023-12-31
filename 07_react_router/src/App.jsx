import React from "react"
import { Footer, Header } from "./components"
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
