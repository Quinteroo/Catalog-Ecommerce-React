import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="" >login</Link>
        </li>
        <li>
          <Link to="" >help</Link>
        </li>
        <li>
          <Link to="/contact" >contact us</Link>
        </li>
        <li>
          <Link to="" >
            <img src="/assets/icono-carrito-de-compras.png" alt="carrito-compra" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar