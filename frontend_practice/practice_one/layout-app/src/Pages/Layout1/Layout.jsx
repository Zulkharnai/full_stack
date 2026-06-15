import React from "react";
import "./Layout.css";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <SideBar />

      <div className="main-content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
