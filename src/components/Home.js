import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/2 m-5 ml-2 mr-2">
          <img
            className="object-cover w-full rounded-xl shadow-xl"
            src="images/Jardin-bg.jpeg"
            alt="imageHome"
          />
        </div>
        <div className="w-1/2 bg-black bg-opacity-50 text-white p-5 m-5 rounded-2xl mr-2 mb-auto">
          <h1 className="text-4xl font-bold mb-3">
            Votre spécialiste en Parcs et Jardins
          </h1>
          <p className=" text-xl p-2">
            Entrepreneur indépendant Parcs et Jardins près de chez vous.
            <br />
            Paysagiste indépendant professionnel qualifié dans
            la conception, la planification, la construction et l'entretien de
            jardins, d'espaces verts et de paysages.
            <br />
            Les services proposés peuvent être assez variés, allant de la simple
            consultation à la gestion de projets de plus grande envergure.
          </p>
        </div>
      </div>
      <div className=" bg-black bg-opacity-50 text-white p-5 m-5 mt-0 rounded-2xl ml-2 mr-2">
        <h1>Titre</h1>
        <p>entrepreneur independant Parcs et Jardins</p>
      </div>
      <div className=" bg-black bg-opacity-50 text-white p-5 m-5 mt-0 rounded-2xl ml-2 mr-2">
        <h1>Ils parlent de nous ... </h1>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
