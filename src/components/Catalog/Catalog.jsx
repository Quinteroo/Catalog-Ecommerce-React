import "./Catalog.css"
import React, { useState, useEffect } from "react"
import Card from "../Card/Card.jsx"
import ChooseProductCategory from "../ChooseProductCategory/ChooseProductCategory.jsx"


const Catalog = () => {
  console.log("renderizado de Catalog")

  const [catalog, setCatalog] = useState([])
  const [category, setCategory] = useState("")

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${category}`)
      .then((res) => res.json())
      .then((res) => setCatalog(res))
  }, [category])

  return (
    <section className="section-catalog">

      <ChooseProductCategory setCategory={setCategory} setCatalog={setCatalog} />

      {catalog.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </section>
  )
}

export default Catalog
