import "./Contact.css"
import Header from "../../layout/Header/Header.jsx"
import LogoLinkHome from "../../Logos/LogoLinkHome/LogoLinkHome.jsx"
import Navbar from "../../Navbar/Navbar.jsx"
import Footer from "../../layout/Footer/Footer.jsx"
import GithubButton from "../../Buttons/GithubButton/GithubButton.jsx"
import LinkedInButton from "../../Buttons/LinkedInButton/LinkedInButton.jsx"
import Form from "../../Form/Form.jsx"

const Contact = () => {
  return (
    <>
      <Header logo={<LogoLinkHome />} navbar={<Navbar />} />
      <main>
        <section>
          <div className="div-img-form">
            <img src="/assets/img-form.jpg" alt="imagen sección de contacto" title="imagen de sección de contacto" loading="lazy" />
          </div>
          <Form />
        </section>
      </main>
      <Footer github={<GithubButton />} linkedin={<LinkedInButton />} />
    </>
  )
}

export default Contact
