import "./LinkedInButton.css"

const LinkedInButton = () => {
  return (
    <a className="linkedin-container"
      href="https://www.linkedin.com/in/quinteroo/"
      target="_blank">
      <div className="linkedin-logo-wrp">
        <img src="/assets/foto-perfil-qugodev.png" alt="foto Qugodev" loading="lazy" title="qugodev" />
      </div>
      <p>LinkedIn</p>

    </a>
  )
}

export default LinkedInButton