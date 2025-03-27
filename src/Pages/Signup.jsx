import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  // Signup state
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  const handleSignup = () => {
    if (!signupEmail || !signupPassword) {
      setSignupError('Please enter email and password.');
      return;
    }
    // Check if user already exists in local storage
    const existingUser = localStorage.getItem('user');
    if (existingUser) {
      alert('Account already exists, please login.');
      setAlreadyRegistered(true);
      return;
    }
    // Save user info in local storage (for demo purposes) and navigate directly to details page
    const user = { email: signupEmail, password: signupPassword };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/details', { replace: true });
  };

  return (
    <div className="signup-container">
      <h2>Welcome to DashboardDotCo</h2>
      {signupError && <p className="error">{signupError}</p>}
      <input 
        type="email" 
        placeholder="Email" 
        value={signupEmail}
        onChange={(e) => setSignupEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={signupPassword}
        onChange={(e) => setSignupPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
      {alreadyRegistered && (
        <div className="login-container">
          <p>Account already exists. Please login.</p>
          <button onClick={() => navigate('/details', { replace: true })}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Signup;
