import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex flex-col text-center lg:flex-row justify-between items-center h-auto py-4 m-2 my-0">
        <div className="flex items-center ml-10 rounded-3xl lg:mr-20">
          <img
            src="images/logo-pierrovert.png"
            alt="logo"
            className="h-10 mr-2"
          ></img>
          <h1 className="text-4xl font-bold text-white">
            <Link to="/">PierrOVert</Link>
          </h1>
        </div>
        <ul className="flex flex-col lg:flex-row lg:items-center ">
          <li>
            <Link
              to="/"
              className="text-white font-bold lg:mx-6 relative
                cursor-pointer
                transition-all
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-green-600
                before:to-green-800
                hover:before:w-full
                hover:before:opacity-100"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white font-bold lg:mx-6 relative
                cursor-pointer
                transition-all
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-green-600
                before:to-green-800
                hover:before:w-full
                hover:before:opacity-100"
            >
              Nos services
            </Link>
          </li>
          <li>
            <Link
              to="/realisations"
              className="text-white font-bold lg:mx-6 relative
                cursor-pointer
                transition-all
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-green-600
                before:to-green-800
                hover:before:w-full
                hover:before:opacity-100"
            >
              Nos réalisations
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white font-bold lg:mx-6 relative
                cursor-pointer
                transition-all
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-green-600
                before:to-green-800
                hover:before:w-full
                hover:before:opacity-100"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
