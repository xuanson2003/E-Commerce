import React, { useState } from 'react';
import './CSS/LoginSignup.scss';

function LoginSignup() {
    const [state, setState] = useState('Login');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        console.log('Login function', formData);
        let responseData;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => (responseData = data));

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace('/');
        } else {
            alert(responseData.errors);
        }
    };

    const signup = async () => {
        console.log('Sign up function', formData);
        let responseData;
        await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => (responseData = data));

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace('/');
        } else {
            alert(responseData.errors);
        }
    };

    return (
        <div className="login-signup">
            <div className="login-signup-container">
                <h1>{state}</h1>
                <div className="login-signup-fields">
                    {state === 'Sign Up' ? (
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={changeHandler}
                            placeholder="Your Name"
                        />
                    ) : (
                        <></>
                    )}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Email Address"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder="Password"
                    />
                </div>
                <button
                    onClick={() => {
                        state === 'Login' ? login() : signup();
                    }}
                >
                    Continue
                </button>

                {state === 'Sign Up' ? (
                    <p className="login-signup-login">
                        Already have an account?{' '}
                        <span
                            onClick={() => {
                                setState('Login');
                            }}
                        >
                            Login here
                        </span>
                    </p>
                ) : (
                    <p className="login-signup-login">
                        Create an account?{' '}
                        <span
                            onClick={() => {
                                setState('Sign Up');
                            }}
                        >
                            Click here
                        </span>
                    </p>
                )}

                <div className="login-signup-agree">
                    <input type="checkbox" name="" id="privacy-policy" />
                    <label htmlFor="privacy-policy">By continuing, i agree to the terms of use & privacy policy</label>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
