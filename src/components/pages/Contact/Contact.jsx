import "./Contact.css"
import Header from "../../layout/Header/Header.jsx"
import LogoLinkHome from "../../Logos/LogoLinkHome/LogoLinkHome.jsx"
import Navbar from "../../Navbar/Navbar.jsx"
import Footer from "../../layout/Footer/Footer.jsx"
import GithubButton from "../../Buttons/GithubButton/GithubButton.jsx"
import LinkedInButton from "../../Buttons/LinkedInButton/LinkedInButton.jsx"

const Contact = () => {
  return (
    <>
      <Header logo={<LogoLinkHome />} navbar={<Navbar />} />
      <main>


      </main>
      <Footer github={<GithubButton />} linkedin={<LinkedInButton />} />
    </>
  )
}

export default Contact