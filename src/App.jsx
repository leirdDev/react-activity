import { Routes, Route } from "react-router";
import Login from "./pages/Login.jsx";
import ElectricityBill from "./pages/ElectricityBill.jsx";
import GradeEvaluation from "./pages/GradeEvaluation.jsx";
import AttendanceChecker from "./pages/AttendanceChecker.jsx";
import PasswordChecker from "./pages/PasswordChecker.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/grade-evaluation" element={<GradeEvaluation />} />
        <Route path="/password-checker" element={<PasswordChecker />} />
        <Route path="/electricity-bill" element={<ElectricityBill />} />
        <Route path="/attendance-checker" element={<AttendanceChecker />} />
      </Routes>
    </div>
  );
}

export default App;
