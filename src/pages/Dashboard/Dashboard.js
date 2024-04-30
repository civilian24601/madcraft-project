import React from 'react';
import './Dashboard.css'; // Import CSS file for Dashboard component

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="section">
        <h2>Section 1</h2>
        <p>This is the content of Section 1.</p>
      </div>
      <div className="section">
        <h2>Section 2</h2>
        <p>This is the content of Section 2.</p>
      </div>
      <div className="section">
        <h2>Section 3</h2>
        <p>This is the content of Section 3.</p>
      </div>
    </div>
  );
};

export default Dashboard;
