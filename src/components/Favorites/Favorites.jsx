import { FavoriteContext } from "../../providers/FavoriteContext"
import "./Favorites.css"
import React, { useContext } from "react"


const Favorites = ({ product }) => {

  const { favs, toggleFavorite } = useContext(FavoriteContext)

  return (


    <div className="div-favorites">
      <div className="heart-wrp"
        onClick={() => toggleFavorite(product)}
      >
        <img
          src={favs.includes(product) ? "/assets/corazon-lleno.png" : "/assets/corazon-vacio.png"}
          alt="heart-icon"
          title="heart-icon"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default Favorites