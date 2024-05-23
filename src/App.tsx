import Bussiness from "@pages/Bussiness"
import Crime from "@pages/Crime"
import Entertainment from "@pages/Entertainment"
import Home from "@pages/Home"
import Sport from "@pages/Sport"
import Technology from "@pages/Technology"
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
          <Route path="technology" element={<Technology />} />
          <Route path="crime" element={<Crime />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
