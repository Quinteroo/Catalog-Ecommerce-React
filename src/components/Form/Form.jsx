import "./Form.css"

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  retunr(
    <form onSubmit={handleSubmit} >

      <button type="submit">Enviar</button>
    </form>

  )
}

export default Form
