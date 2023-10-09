import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const LoginForm = () => {
  // Define the onClick function
  const handleLoginClick = () => {
    // Add your login logic here
    console.log('Log In button clicked');
    // Replace the above line with your actual login logic (e.g., making an HTTP request)
  };

  return (
    <div>
      <div className={styles['login-background']}>
        <div className={styles['login-shape']}></div>
        <div className={styles['login-shape']}></div>
      </div>
      <form className={styles['login-login-form']}>
        <h3>Login Here</h3>

        {/* Username input with "login-login" class */}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          className={styles['login-login']} // Add the "login-login" class here
        />

        {/* Password input with "login-password" class */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className={styles['login-password']} // Add the "login-password" class here
        />

        {/* Log In button with onClick handler */}
        <button onClick={handleLoginClick}>Log In</button>

        <div className={styles['login-social']}>
          <div className={styles['login-go']}>
            <i className="fab fa-google"></i> Google
          </div>
          <div className={styles['login-fb']}>
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>

        <div className={styles['login-dont-have-account']}>
          <p>
            Don't have an account?{' '}
            <Link
              to="/Signup"
              style={{
                textDecoration: 'none',
                color: '#ffffff',
                paddingTop: '10px',
                marginTop: '10px',
              }}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
