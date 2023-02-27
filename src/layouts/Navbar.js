import React from "react";
function Navbar() {
  return (
    <div>
      <nav>
        <h1>
        <img src="logo-pierrovert.jpg" alt="logo"></img>
          <a href="/">PierrOVert</a>
        </h1>
        <ul>
          <li>
            <a href="/Services">Nos services</a>
          </li>
          <li>
            <a href="/Realisations">Nos réalisations</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
