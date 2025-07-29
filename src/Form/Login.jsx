import React, { useState } from 'react';
import './Login.css';

export const LoginForm = () => {
    const [user, setUser] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        alert(`Sign In with: ${JSON.stringify(user)}`);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        alert(`Sign Up with: ${JSON.stringify(user)}`);
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        alert('Forgot Password clicked!');
    };

    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />

                <div className="login-form-actions">
                    <button type="submit" onClick={handleSignIn}>Sign In</button>
                    <button type="button" onClick={handleSignUp} className="signup-btn">Sign Up</button>
                </div>
                <div className="forgot-password">
                    <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
                </div>
            </form>
        </div>
    );
};