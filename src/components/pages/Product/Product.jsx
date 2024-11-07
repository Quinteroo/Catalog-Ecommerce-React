import "./Product.css"
import Header from "../../layout/Header/Header.jsx"
import Navbar from "../../Navbar/Navbar.jsx"
import LogoLinkHome from "../../Logos/LogoLinkHome/LogoLinkHome.jsx"
import Footer from "../../layout/Footer/Footer.jsx"
import GithubButton from "../../Buttons/GithubButton/GithubButton.jsx"
import LinkedInButton from "../../Buttons/LinkedInButton/LinkedInButton"
import { useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetails from "../../ProductDetails/ProductDetails.jsx"
import { useFetch } from "../../../hooks/useFetch.jsx"


const Product = () => {

  const { id } = useParams()
  const { data, setData } = useFetch(`https://fakestoreapi.com/products/${id}`)


  return (
    <>
      <Header logo={<LogoLinkHome />} navbar={<Navbar />} />
      <main>
        <ProductDetails product={data} />
      </main>
      <Footer github={<GithubButton />} linkedin={<LinkedInButton />} />
    </>
  )
}

export default Product
