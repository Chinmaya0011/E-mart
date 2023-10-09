import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div>
      <h2>Welcome User</h2>
      <div>
        <Link to="/login">
          <button className="custom-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="custom-button">Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
