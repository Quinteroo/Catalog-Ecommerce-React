import "./LogoLinkHome.css"
import { Link } from "react-router-dom"
import Logo from "../Logo/Logo.jsx"

const LogoLinkHome = () => {


  return (
    <Link to="/"  >
      <Logo />
    </Link>
  )
}

export default LogoLinkHome