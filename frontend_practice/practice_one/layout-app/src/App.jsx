import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Layout from "./Pages/Layout1/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="layout1" element={<Layout />} />
    </Routes>
  );
}

export default App;
