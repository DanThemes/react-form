import React, { useState } from 'react';
import './app.css';
import FormInput from './components/FormInput';

const App = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        birthday: '',
        password:'',
        confirmPassword: ''
    });

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            errorMessage: 'Username should be 3-16 characters and shouldn\'t include any spacial characters',
            label: 'Username',
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: 'It should a valid email address',
            label: 'Email',
            required: true
        },
        {
            id: 3,
            name: 'birthday',
            type: 'date',
            placeholder: 'Birthday',
            label: 'Birthday',
            required: true
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character',
            label: 'Password',
            pattern: "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$",
            required: true
        },
        {
            id: 5,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: 'Passwords don\'t match',
            label: 'Confirm Password',
            pattern: values.password,
            required: true
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        // console.log(Object.fromEntries(data.entries()));
    }

    const handleChange = (e) => {
        setValues(c => ({...c, [e.target.name]: e.target.value}))
    }

    console.log(values);

    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                {inputs.map(input => (
                    <FormInput key={input.id} {...input} value={values[input.name]} handleChange={handleChange} />
                ))}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App