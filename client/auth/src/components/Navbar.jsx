import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserPlus, FaSignInAlt, FaTachometerAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="backdrop-blur-md bg-white/30 shadow-md sticky top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-700 tracking-tight hover:text-blue-900 transition"
        >
          AuthHub 🔐
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium text-base">
          <NavLink to="/" icon={<FaHome />} label="Home" />
          <NavLink to="/dashboard" icon={<FaTachometerAlt />} label="Dashboard" />
          <NavLink to="/login" icon={<FaSignInAlt />} label="Login" />
          <NavLink to="/register" icon={<FaUserPlus />} label="Register" />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700 focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 font-medium text-base">
          <NavLink to="/" icon={<FaHome />} label="Home" onClick={toggleMenu} />
          <NavLink to="/dashboard" icon={<FaTachometerAlt />} label="Dashboard" onClick={toggleMenu} />
          <NavLink to="/login" icon={<FaSignInAlt />} label="Login" onClick={toggleMenu} />
          <NavLink to="/register" icon={<FaUserPlus />} label="Register" onClick={toggleMenu} />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, icon, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition duration-200"
  >
    {icon} {label}
  </Link>
);

export default Navbar;
