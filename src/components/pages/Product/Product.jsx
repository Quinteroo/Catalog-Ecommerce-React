import "./Product.css"
import Header from "../../layout/Header/Header.jsx"
import Navbar from "../../Navbar/Navbar.jsx"
import LogoLinkHome from "../../Logos/LogoLinkHome/LogoLinkHome.jsx"
import Footer from "../../layout/Footer/Footer.jsx"
import GithubButton from "../../Buttons/GithubButton/GithubButton.jsx"
import LinkedInButton from "../../Buttons/LinkedInButton/LinkedInButton"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductDetails from "../../ProductDetails/ProductDetails.jsx"


const Product = () => {

  const [product, setProduct] = useState(null)
  const { id } = useParams()


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json)
      .then((res) => setProduct(res))

  }, [])


  return (
    <>
      <Header logo={<LogoLinkHome />} navbar={<Navbar />} />
      <main>
        <ProductDetails product={product} />
      </main>
      <Footer github={<GithubButton />} linkedin={<LinkedInButton />} />
    </>
  )
}

export default Product
