import "./InputField.css"
import React from "react"



const InputField = React.memo(({ label, name, value, onChange }) => (
  <div>
    <label htmlFor={name}>{label}:</label>
    <input
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
