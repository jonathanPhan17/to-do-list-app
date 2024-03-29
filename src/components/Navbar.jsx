import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="pl-10 px-3 space-x-5">
      <NavLink
        to="/to-do-list-app/"
        className=" text-white hover:text-red-600 text-4xl font-bold transition-all duration-300"
      >
        Todos
      </NavLink>
      <NavLink
        to="/contact"
        className="text-white hover:text-red-600 text-4xl font-bold transition-all duration-300"
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar