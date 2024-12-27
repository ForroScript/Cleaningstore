import { BrowserRouter, Routes } from "react-router-dom"
import Home from "./pages/home/home.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
          <a href="/"><Home/></a>
      </BrowserRouter>
    </>
  )
}

export default App
