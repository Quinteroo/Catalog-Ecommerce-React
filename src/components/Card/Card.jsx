import "./Card.css"
import Favorites from "../Favorites/Favorites.jsx"
import React from "react"
import { Link } from "react-router-dom"



const Card = React.memo(({ product }) => {
  console.log("renderizado de Card")

  return (
    <div className="product-card" >
      <Link to={`product/${product.id}`}>
        <div className="img-wrp">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            title={product.title}
          />
        </div>
        <div className="product-info">
          <h3>{product.title}</h3>
          <p>{product.price}€</p>
        </div>
      </Link>
      <Favorites product={product} />
    </div>
  )
})

export default Card