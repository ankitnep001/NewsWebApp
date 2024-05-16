import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@pages/Home"
import Header from "components/header/Header"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
