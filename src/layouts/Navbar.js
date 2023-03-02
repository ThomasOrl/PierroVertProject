import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="flex flex-col text-center lg:flex-row justify-between items-center h-auto pt-5 pb-4 m-2 mt-0 mb-0 rounded-xl rounded-tl-none rounded-tr-none">
        <div className="flex items-center ml-10 rounded-3xl lg:mr-20">
          <img
            src="images/logo-pierrovert.png"
            alt="logo"
            className="h-10 mr-2"
          ></img>
          <h1 id="logoNav" className="text-4xl font-bold text-white">
            <a href="/">PierrOVert</a>
          </h1>
        </div>
        <ul className="flex flex-col lg:flex-row lg:items-center ">
          <li>
            <a
              href="/"
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
            </a>
          </li>
          <li>
            <a
              href="/Services"
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
            </a>
          </li>
          <li>
            <a
              href="/Realisations"
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
            </a>
          </li>
          <li>
            <a
              href="/Contact"
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
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
