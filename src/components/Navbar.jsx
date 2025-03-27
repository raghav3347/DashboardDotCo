import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">DashboardDotCo</div>
      <div className="user-section" onClick={() => setShowDropdown(!showDropdown)}>
        <span className="user-icon">User</span>
        {showDropdown && (
          <div className="dropdown">
            <p>{user.email}</p>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleDeleteAccount}>Delete Account</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
