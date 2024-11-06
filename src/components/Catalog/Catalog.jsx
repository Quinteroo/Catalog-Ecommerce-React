import "./Catalog.css"
import React, { useState, useEffect } from "react"
import Card from "../Card/Card.jsx"
import ChooseProductCategory from "../ChooseProductCategory/ChooseProductCategory.jsx"
import { Link } from "react-router-dom"


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
        <Link key={product.id} to={`product/${product.id}`}>
          <Card product={product} />
        </Link>
      ))}
    </section>
  )
}

export default Catalog
