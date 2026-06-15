import React from "react";
import "./sideBar.css";
import logo from "../../assets/logo.png";
import DashboardIcon from "../icons/DashboardIcon";
import { Link, useLocation } from "react-router-dom";
import TableIcon from "../icons/TableIcon";
import BuyIcon from "../icons/BuyIcon";
import DocumentIcon from "../icons/DocumentIcon";

function SideBar() {
  const location = useLocation();

  let menuItem = [
    { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
    { name: "Table", path: "/table", icon: <TableIcon /> },
    { name: "Food Order", path: "/food", icon: <BuyIcon /> },
    { name: "Manage Menu", path: "/Manage", icon: <DocumentIcon /> },
  ];

  console.log(location.pathname);
  return (
    <div className="side-bar">
      <div className="side-img">
        <img src={logo} alt="logo" />
      </div>

      <div className="menu">
        {menuItem.map((item) => (
          <Link to={item.path} className="menu-link">
            <div
              className={`menu-item ${location.pathname === item.path ? "active" : ""}`}
            >
              {" "}
              {item.icon} {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
