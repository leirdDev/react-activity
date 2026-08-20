import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Activity 1", label: "Login Authentication", path: "/login" },
    { name: "Activity 2", label: "Grade Evaluation", path: "/grade-evaluation" },
    { name: "Activity 3", label: "Password Checker", path: "/password-checker" },
    { name: "Activity 4", label: "Electiricty Bill", path: "/electricity-bill" },
    { name: "Activity 5", label: "Attendance Checker", path: "/attendance-checker" },
  ];

  const navClass = ({ isActive }) =>
    isActive
      ? "text-black text-sm font-medium"
      : "hover:text-gray-400 text-gray-600 transition-colors text-sm font-medium";

  return (
    <nav className="sticky top-0 z-10 mx-auto w-full max-w-7xl bg-white p-4">
      <div className="flex items-center">
        <NavLink to="/" className="text-xl font-medium">
          React Activity Portal
        </NavLink>

        <ul className="ml-auto hidden gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={navClass}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="ml-auto md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <ul className="mt-4 flex flex-col text-center gap-4 md:hidden ">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={navClass}
                onClick={() => setIsOpen(false)}
              >
                {item.name} {item.label && `- ${item.label}`}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
