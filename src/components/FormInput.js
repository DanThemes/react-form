import React, { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
  const {label, errorMessage, handleChange, id, ...inputProps} = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  }

  return (
    <div className="formInput">
        <label>{label}</label>
        <input {...inputProps} onChange={handleChange} onBlur={handleFocus} focused={focused.toString()}
        onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true) }

        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput