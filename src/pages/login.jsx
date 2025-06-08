// src/pages/login.jsx

import React, { useEffect, useState } from 'react';
import './login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUser, FaLock, FaEnvelope, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ email: '', password: '', confirmPassword: '' });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Attempt:', loginData);
    alert('Login simulation: You are logged in!');
    // In a real app, send to backend for authentication
    setLoginData({ email: '', password: '' }); // Reset form
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup Attempt:', { email: signupData.email, password: signupData.password });
    alert('Signup simulation: Account created!');
    // In a real app, send to backend for user registration
    setSignupData({ email: '', password: '', confirmPassword: '' }); // Reset form
    setIsLoginMode(true); // Switch to login mode after signup
  };

  return (
    <div className="login-page">
      <div className="login-container" data-aos="fade-up">
        <div className="login-header">
          <h2 className="gradient-text">{isLoginMode ? 'Welcome Back!' : 'Create Your Account'}</h2>
          <p>{isLoginMode ? 'Log in to discover more events.' : 'Join us and start exploring events.'}</p>
        </div>

        <div className="toggle-switch">
          <button className={isLoginMode ? 'active' : ''} onClick={() => setIsLoginMode(true)}>Login</button>
          <button className={!isLoginMode ? 'active' : ''} onClick={() => setIsLoginMode(false)}>Sign Up</button>
        </div>

        {isLoginMode ? (
          <form className="login-form" onSubmit={handleLoginSubmit} data-aos="fade-in" data-aos-delay="200">
            <div className="form-group">
              <label htmlFor="loginEmail"><FaEnvelope /> Email</label>
              <input type="email" id="loginEmail" name="email" value={loginData.email} onChange={handleLoginChange} placeholder="your@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword"><FaLock /> Password</label>
              <input type="password" id="loginPassword" name="password" value={loginData.password} onChange={handleLoginChange} placeholder="********" required />
            </div>
            <button type="submit" className="button-primary login-button-submit"><FaSignInAlt /> Log In</button>
          </form>
        ) : (
          <form className="signup-form" onSubmit={handleSignupSubmit} data-aos="fade-in" data-aos-delay="200">
            <div className="form-group">
              <label htmlFor="signupEmail"><FaEnvelope /> Email</label>
              <input type="email" id="signupEmail" name="email" value={signupData.email} onChange={handleSignupChange} placeholder="your@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="signupPassword"><FaLock /> Password</label>
              <input type="password" id="signupPassword" name="password" value={signupData.password} onChange={handleSignupChange} placeholder="********" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword"><FaLock /> Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={signupData.confirmPassword} onChange={handleSignupChange} placeholder="********" required />
            </div>
            <button type="submit" className="button-primary signup-button-submit"><FaUserPlus /> Create Account</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;