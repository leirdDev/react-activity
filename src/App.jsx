import { Routes, Route, NavLink } from "react-router";
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
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/grade-evaluation" element={<GradeEvaluation />} />
        <Route path="/password-checker" element={<PasswordChecker />} />
        <Route path="/electricity-bill" element={<ElectricityBill />} />
        <Route path="/attendance-checker" element={<AttendanceChecker />} />
      </Routes>
    </div>
  );
}


function Home(){

  const items = [
    {
      title: "Login Authentication",
      body: "Validate a username and password against sample credentials and manage login/logout state.",
      link: "/login",
    },
    {
      title: "Student Grade Evaluation",
      body: "Enter a student's score and get an automatic remark based on grade ranges.",
      link: "/grade-evaluation",
    },
    {
      title: "Password Strength Checker",
      body: "Check password length and receive live feedback on how strong it is.",
      link: "/password-checker",
    },
    {
      title: "Electricity Bill Calculator",
      body: "Calculate a customer's electricity bill based on kWh consumption and tiered rates.",
      link: "/electricity-bill",
    },
    {
      title: "Employee Attendance Checker",
      body: "Check an employee's time-in and determine whether they are on time, late, or very late.",
      link: "/attendance-checker",
    },
  ];

  return (
    <div >
      <h1 className="text-center text-6xl  font-medium mb-4">
        React Activity Portal
      </h1>
      <p className="text-center">
        Five interactive React activities demonstrating state, events,
        conditional logic, validation, and calculations.
      </p>
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-0 px-6">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className="bg-amber-200 mt-6 border-2 border-l-4 border-b-4 flex flex-col w-full p-4 md:w-90"
            >
              <span className="w-fit bg-amber-700 p-2 px-4 text-white font-medium mb-2">
                {index + 1}
              </span>
              <h3 className="font-medium my-2 text-xl">{item.title}</h3>
              <p className="mb-6">{item.body}</p>
              <div className="bg-black p-2 text-center text-white font-medium mt-auto">
                <NavLink className="block" to={item.link}>Open Activity</NavLink>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
