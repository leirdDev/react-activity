import { NavLink } from "react-router";
import { Menu } from "lucide-react";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 text-sm font-medium"
      : "hover:text-blue-500  text-gray-600 transition-colors text-sm font-medium ";

  return (
    <nav className="sticky top-0 max-w-7xl mx-auto flex w-full items-center py-4">
      <NavLink to="/" className="text-xl font-medium">
        React Activity Portal
      </NavLink>

      <ul className="ml-auto flex gap-8">
        <li>
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/login" className={navClass}>
            Activity 1
          </NavLink>
        </li>

        <li>
          <NavLink to="/grade-evaluation" className={navClass}>
            Activity 2
          </NavLink>
        </li>

        <li>
          <NavLink to="/password-checker" className={navClass}>
            Activity 3
          </NavLink>
        </li>

        <li>
          <NavLink to="/electricity-bill" className={navClass}>
            Activity 4
          </NavLink>
        </li>

        <li>
          <NavLink to="/attendance-checker" className={navClass}>
            Activity 5
          </NavLink>
        </li>
      </ul>

      <button className="md:hidden">
        <Menu size={24} color="#333" strokeWidth={2} />
      </button>
    </nav>
  );
}
