import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img
          className="object-cover"
          src="images/Jardin-bg3.jpeg"
          alt="imageHome"
        ></img>
        <div className="absolute top-20 left-0 right-0 flex justify-center items-center text-center p-10 bg-black bg-opacity-50">
          <div className="text-white">
            <h1 className="text-6xl font-bold">PierrOVert</h1>
            <p className="text-lg">Paysagiste et entrepreneur qualifié</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
