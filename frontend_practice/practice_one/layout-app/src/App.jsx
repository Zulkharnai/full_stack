import "./App.css";
import { Routes, Route } from "react-router-dom";

import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Outlet } from "react-router-dom";
import Layout from "./Pages/Layout1/Layout";
import NotFound from "./components/NotFound/NotFound";
import Table from "./Pages/Table/Table";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <div className="content">
              <h1>No selected</h1>
            </div>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/table" element={<Table />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
