import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Pages/Signup.jsx';
import Details from './Pages/Details.jsx';

function App() {
  const isAuthenticated = localStorage.getItem('user') ? true : false;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/details" element={isAuthenticated ? <Details /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/details" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
