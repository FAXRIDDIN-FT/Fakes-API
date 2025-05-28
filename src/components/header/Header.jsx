import React, { useState } from "react";
import { MdHome, MdMenu, MdClose, MdSearch, MdPeople } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const baseBg = pathname.includes("/users")
    ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
    : "bg-gradient-to-r from-cyan-600 to-blue-500";

  return (
    <header
      className={`${baseBg} flex items-center justify-between flex-wrap px-6 py-4 shadow-lg text-white fixed w-full top-0 z-50`}
    >
      <Link
        to="/"
        className="text-3xl font-extrabold tracking-wide text-lime-400 hover:text-lime-300 transition duration-300"
        onClick={() => setMenuOpen(false)}
      >
        Online Market
      </Link>

      <button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none focus:ring-2 focus:ring-lime-300 rounded"
      >
        {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
      </button>

      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full md:w-auto md:flex md:items-center md:gap-8 bg-opacity-90 md:bg-transparent bg-black md:backdrop-blur-none backdrop-blur-sm rounded-md md:rounded-none mt-4 md:mt-0 px-4 md:px-0 py-4 md:py-0`}
      >
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-300 hover:text-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-300 ${
              isActive ? "text-lime-300 underline underline-offset-4 font-semibold" : "text-white"
            }`
          }
        >
          <MdHome size={24} />
          Home
        </NavLink>

        <NavLink
          to="/users"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-300 hover:text-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-300 ${
              isActive ? "text-lime-300 underline underline-offset-4 font-semibold" : "text-white"
            }`
          }
        >
          <MdPeople size={24} />
          Users
        </NavLink>

        <div className="relative mt-4 md:mt-0 md:ml-6 w-full md:w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg shadow-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 transition duration-300"
            aria-label="Search"
          />
          <MdSearch
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
