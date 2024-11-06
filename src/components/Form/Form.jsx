import "./Form.css"
import React, { useReducer, useCallback } from "react"


const Form = () => {

  const [state, dispatch] = useReducer(formReducer, initialState);


  // Manejar cambio de inputs (memoizado con useCallback)
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  }, []);


  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Formulario enviado:', state);
  }, [state]);


  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Nombre"
        name="nombre"
        value={state.nombre}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <div>
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={state.mensaje}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form
