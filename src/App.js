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
            label: 'Username'
        },
        {
            id: 2,
            name: 'email',
            type: 'text',
            placeholder: 'Email',
            label: 'Email'
        },
        {
            id: 3,
            name: 'birthday',
            type: 'date',
            placeholder: 'Birthday',
            label: 'Birthday'
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            label: 'Password'
        },
        {
            id: 5,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            label: 'Confirm Password'
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries()));
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