import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import "./App.css"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
