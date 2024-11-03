import "./ChooseProductCategory.css"
import React from "reacts"

const ChooseProductCategory = ({ setCategory }) => {

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
    </ul>

  )

}

export default ChooseProductCategory