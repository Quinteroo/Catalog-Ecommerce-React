import "./Home.css"
import Header from "../../layout/Header/Header.jsx"
import Navbar from "../../Navbar/Navbar.jsx"
import Logo from "../../Logos/Logo/Logo.jsx"

const Home = () => {
  return (
    <>
      <Header logo={<Logo />} navbar={<Navbar />} />

    </>
  )
}

export default Home