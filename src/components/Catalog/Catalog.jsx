import "./Catalog.css"
import React, { useState, useEffect } from "react"
import Card from "../Card/Card.jsx"


const Catalog = () => {
  const [catalog, setCatalog] = useState([])
  const [category, setCategory] = useState("")

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${category}`)
      .then((res) => res.json())
      .then((res) => setCatalog(res))
  }, [category])

  return (
    <section className="section-catalog">
      <ul className="select-category">
        <li>
          <p onClick={() => setCategory("category/men's%20clothing")}>man</p>
        </li>
        <li>
          <p onClick={() => setCategory("category/women's%20clothing")}>woman</p>
        </li>
        <li>
          <p onClick={() => setCategory("category/jewelery")}>jewelery</p>
        </li>
      </ul>


      {catalog.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </section>
  )
}

export default Catalog