import "./Home.css"
import Header from "../../layout/Header/Header.jsx"
import Navbar from "../../Navbar/Navbar.jsx"
import Logo from "../../Logos/Logo/Logo.jsx"
import Footer from "../../layout/Footer/Footer.jsx"
import Hero from "../../Hero/Hero.jsx"
import Catalog from "../../Catalog/Catalog.jsx"

const Home = () => {
  return (
    <>
      <Header logo={<Logo />} navbar={<Navbar />} />
      <main>
        <Hero />
        <Catalog />

      </main>
      <Footer github={"github"} linkedin={"linkedin"} />

    </>
  )
}

export default Home
