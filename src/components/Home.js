import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiLindenLeaf } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row mt-2">
        <div className="w-full md:w-1/2 m-2">
          <img
            className="rounded-xl shadow-xl"
            src="images/Jardin-bg.jpeg"
            alt="imageHome"
          />
        </div>
        <div className="w-full md:w-max bg-black bg-opacity-50 text-white p-5 m-2 rounded-2xl h-full">
          <h1 className="text-4xl font-bold mb-3 text-center">
            Votre spécialiste en Parcs et Jardins
          </h1>
          <div className="border border-double mb-2"></div>
          <p className="text-l p-2 mb-2">
            Entrepreneur indépendant Parcs et Jardins près de chez vous.
            <br />
            Paysagiste indépendant professionnel qualifié dans la conception, la
            planification, la construction et l'entretien de jardins, d'espaces
            verts et de paysages.
            <br />
            Les services proposés peuvent être assez variés, allant de la simple
            consultation à la gestion de projets de plus grande envergure.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center h-full w-full">
            <a
              href="/Contact"
              className="text-center block max-w-sm p-5 m-1 border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-zinc-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-center items-center flex-col"
            >
              <icone>
                <IoNewspaperOutline size={56} />
              </icone>
              <h2 className="font-bold text-green-600">Devis gratuit</h2>
              <p className="font-normal text-white">
                Nous offrons des consultations gratuites pour nos services et
                vous fournirons un devis.
              </p>
            </a>
            <a
              href="/"
              className="text-center block max-w-sm p-5 m-1 border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-zinc-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-center items-center flex-col"
            >
              <icone>
                <FaHandsHelping size={56} />
              </icone>
              <h2 className="font-bold text-green-600 ">Fiabilité garantie</h2>
              <p className="font-normal text-white">
                Nous sommes fiers du travail bien fait que nous proposons aux
                clients. Chaque projet est terminé en temps et en heure
              </p>
            </a>
            <a
              href="/Services"
              className="text-center block max-w-sm p-5 m-1 border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-zinc-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-center items-center flex-col"
            >
              <icone>
                <GiLindenLeaf size={56} />
              </icone>
              <h2 className="font-bold text-green-600">Spécialiste</h2>
              <p className="font-normal text-white">
                Nous sommes spécialisés dans l'aménagement d'espaces verts,
                résidentiels et commerciaux
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-50 text-white p-5 m-5 mt-5 rounded-2xl ml-2 mr-2">
        <h1>Titre</h1>
        <p>entrepreneur independant Parcs et Jardins</p>
      </div>
      <div className="bg-black bg-opacity-50 text-white p-5 m-5 mt-0 rounded-2xl ml-2 mr-2">
        <h1 className="text-2xl">Ils parlent de nous ... </h1>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
