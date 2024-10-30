import "./Header.css"

const Header = ({ logo, navbar }) => {
  return (
    <header>
      {logo}
      {navbar}

    </header>
  )
}

export default Header