import "./InputField.css"
import React from "react"



const InputField = React.memo(({ placeholder, name, value, onChange }) => (
  <div className="div-input-field">
    <input
      placeholder={placeholder}
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  </div>
));


export default InputField
