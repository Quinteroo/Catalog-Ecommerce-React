import { formReducer, INITIAL_FORM_STATE } from "../../utils/FormReducer";
import "./Form.css"
import React, { useReducer, useCallback } from "react"
import InputField from "./InputField/InputField.jsx"


const Form = () => {

  const [state, dispatch] = useReducer(formReducer, INITIAL_FORM_STATE);



  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', payload: { field: name, value } });
  }, []);


  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Formulario enviado:', state);
  }, [state]);


  return (
    <form onSubmit={handleSubmit}>
      <h2>¿Tienes alguna duda?</h2>
      <InputField
        placeholder="Nombre"
        name="nombre"
        value={state.nombre}
        onChange={handleChange}
      />
      <InputField
        placeholder="Email"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <div className="div-textarea">
        <textarea
          placeholder="Cuéntanos! "
          id="mensaje"
          name="mensaje"
          value={state.mensaje}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="primary-button hover">Enviar</button>
    </form>
  );
}

export default Form
