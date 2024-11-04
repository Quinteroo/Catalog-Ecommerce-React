import "./GithubButton.css"

const GithubButton = () => {
  return (
    <a className="github-container"
      href="https://github.com/Quinteroo/Catalog-Ecommerce-React"
      target="_blank">
      <div className="github-logo-wrp">
        <img src="/assets/icono-github.png" alt="github-icon" loading="lazy" title="icono de Github" />
      </div>
      <p>README</p>

    </a>
  )
}

export default GithubButton