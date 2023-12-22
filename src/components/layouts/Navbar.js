import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="navStyle flex justify-around items-center py-4 m-2">
        <div className="flex items-center">
          <img
            src="images/logo-pierrovert.png"
            alt="logo"
            className="h-10"
          ></img>
          <h1 className="text-3xl font-bold">
            <Link to="/">
              Pierr<span className="text-green-600">O</span>vert
            </Link>
          </h1>
        </div>
        <ul className="hidden lg:flex text-lg items-center">
          <li>
            <Link
              to="/"
              className=" hover:text-zinc-900 font-bold md:mx-6 relative
              list-item"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className=" hover:text-zinc-900 font-bold md:mx-6 relative
                list-item"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/realisations"
              className=" hover:text-zinc-900 font-bold md:mx-6 relative
                list-item"
            >
              Réalisations
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className=" hover:text-zinc-900 font-bold md:mx-6 relative
                list-item"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className=" text-white block lg:hidden">
          {nav ? <AiOutlineClose size={28} /> : <RiMenu3Fill size={28} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-600 bg-black ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="text-3xl font-bold text-white p-4">
            Pierr<span className="text-green-600">O</span>Vert
          </h1>
          <ul className="flex flex-col text-lg italic p-4">
            <li className="text-white border-b border-gray-600 font-bold p-4 hover:text-green-600">
              <Link to="/">Accueil</Link>
            </li>
            <li className="text-white border-b border-gray-600 font-bold p-4 hover:text-green-600">
              <Link to="/services">Services</Link>
            </li>
            <li className="text-white border-b border-gray-600 font-bold p-4 hover:text-green-600">
              <Link to="/realisations">Réalisations</Link>
            </li>
            <li className="text-white font-bold p-4 hover:text-green-600">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
