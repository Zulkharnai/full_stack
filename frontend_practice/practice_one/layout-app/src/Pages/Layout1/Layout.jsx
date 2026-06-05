import React from "react";
import "./Layout.css";

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="navigation">
        <h2>Navigation</h2>
      </div>

      <div className="banner">
        <h1>Header/Banner</h1>
      </div>

      <div className="content">
        <div className="sideBar">
          <h1>Side Bar</h1>
        </div>

        <div className="mainContent">
          <h1>Main Content</h1>
        </div>
      </div>

      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default Layout;
