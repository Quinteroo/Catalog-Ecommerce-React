import "./Product.css"
import Header from "../../layout/Header/Header.jsx"
import Navbar from "../../Navbar/Navbar.jsx"
import LogoLinkHome from "../../Logos/LogoLinkHome/LogoLinkHome.jsx"
import Footer from "../../layout/Footer/Footer.jsx"
import GithubButton from "../../Buttons/GithubButton/GithubButton.jsx"
import LinkedInButton from "../../Buttons/LinkedInButton/LinkedInButton"
import { Link } from "react-router-dom"

const Product = () => {
  return (
    <>
      <Header logo={<LogoLinkHome />} navbar={<Navbar />} />
      <main>

      </main>
      <Footer github={<GithubButton />} linkedin={<LinkedInButton />} />
    </>
  )
}

export default Product