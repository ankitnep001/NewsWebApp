import Bussiness from "@pages/Bussiness"
import Entertainment from "@pages/Entertainment"
import Home from "@pages/Home"
import Sport from "@pages/Sport"
import Footer from "components/footer/Footer"
import Header from "components/header/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sport" element={<Sport />} />
          <Route path="bussiness" element={<Bussiness />} />
          <Route path="entertainment" element={<Entertainment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
