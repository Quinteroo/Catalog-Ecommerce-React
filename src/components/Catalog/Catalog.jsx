import "./Catalog.css"
import React, { useState, useEffect } from "react"
import Card from "../Card/Card.jsx"
import ChooseProductCategory from "../ChooseProductCategory/ChooseProductCategory.jsx"
import { Link } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch.jsx"


const Catalog = () => {
  console.log("renderizado de Catalog")

  const [category, setCategory] = useState("")

  const { data, setData } = useFetch(`https://fakestoreapi.com/products/${category}`)


  return (
    <section className="section-catalog">

      <ChooseProductCategory setCategory={setCategory} setData={setData} />

      {data.map((product) => (
        <Link key={product.id} to={`product/${product.id}`}>
          <Card product={product} />
        </Link>
      ))}
    </section>
  )
}

export default Catalog
