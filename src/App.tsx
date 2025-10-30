import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
/* import Reports from "./pages/Reports";
import Settings from "./pages/Settings"; */
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      {/* <nav style={{ display: "flex", gap: "1rem", marginBottom: "20px" }}>
        <Link to="/">Dashboard</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/settings">Settings</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
