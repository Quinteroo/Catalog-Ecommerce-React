import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home/Home.jsx"
import Product from "./components/pages/Product/Product.jsx"
import Contact from "./components/pages/Contact/Contact.jsx"
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
