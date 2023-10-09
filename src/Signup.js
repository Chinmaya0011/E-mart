import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Add this import statement
import styles from './Signup.module.css';
const SignupForm = () => {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here using the form field values (name, email, username, password)
  };

  return (
    <div>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <form className={styles['signup-form']} onSubmit={handleSignup}>
        <h3>Sign Up</h3>

        {/* Name Field */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email Field */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email Address"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Username Field */}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password Field */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>

        <div className={styles['already-have-account']}>
          <p>
            Already have an account?{' '}
            <Link to="/login" style={{ textDecoration: 'none', color: '#ffffff' }}>
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
