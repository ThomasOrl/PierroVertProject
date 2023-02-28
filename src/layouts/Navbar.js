import React from "react";
function Navbar() {
  return (
    <div>
      <nav className="md:flex justify-between items-center bg-zinc-800 h-auto p-1 m-2 mt-1 mb-0 rounded-xl">
        <div className="md:flex items-center ml-5">
          <img
            src="images/logo-pierrovert.png"
            alt="logo"
            className="h-10 mr-5"
          ></img>
          <h1 className="text-3xl font-bold text-green-600">
            <a href="/">PierrOVert</a>
          </h1>
        </div>
        <ul className="md:flex items-center">
          <li>
            <a href="/" className="text-white">
              Accueil
            </a>
          </li>
          <li>
            <a href="/Services" className="text-white">
              Nos services
            </a>
          </li>
          <li>
            <a href="/Realisations" className="text-white">
              Nos réalisations
            </a>
          </li>
          <li>
            <a href="/Contact" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
