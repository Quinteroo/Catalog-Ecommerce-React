import { FavoriteContext } from "../../providers/FavoriteContext"
import "./ChooseProductCategory.css"
import React, { useContext } from "react"

const ChooseProductCategory = React.memo(({ setCategory, setData }) => {
  console.log("renderizado de ChooseProductCategory")
  const { favs } = useContext(FavoriteContext)

  return (
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
      <li>
        <p onClick={() => setData(favs)}>favorites</p>
      </li>
    </ul>

  )

})

export default ChooseProductCategory
