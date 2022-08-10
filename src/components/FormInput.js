import React from 'react';
import './formInput.css';

const FormInput = (props) => {
    console.log(props);
  return (
    <div className="formInput">
        <label>{props.label}</label>
        <input placeholder={props.placeholder} name={props.name} type={props.type} onChange={props.handleChange} />
    </div>
  )
}

export default FormInput