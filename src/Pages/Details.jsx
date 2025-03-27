import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import GetData from '../components/Getdata.jsx';

function Details() {
  return (
    <div className="details-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <GetData />
      </div>
    </div>
  );
}

export default Details;
