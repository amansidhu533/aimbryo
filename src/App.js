import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Patients from "./pages/Patients"; 
import "./assets/styles/style.css"; 

function App() {
  return (
    <div className="App">
      <Routes>        
        <Route path="/dashboard" element={<Home />} />
        <Route path="/patients" element={<Patients />} />         
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  );
}

export default App;
