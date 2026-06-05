import React from "react";
import "./dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="layout">
        <div className="side-bar">
          <h2>Side Bar</h2>
        </div>
        <div className="main-content">
          <div className="header">
            <h1>Dashboard Header</h1>
          </div>
          <div className="content">
            <h5>This is the main content area of the dashboard.</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
