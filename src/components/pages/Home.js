import React from "react";
import Navbar from "../layouts/Navbar";
import Banner from "../layouts/Banner";
import Footer from "../layouts/Footer";
import ServicesCards from "./ServicesCards";
import { Link } from "react-router-dom";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiLindenLeaf } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

function Home() {
  const handleClick = () => {
    // Positionner la page tout en haut lors du click sur les liens Devis et Specialisation
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="relative z-10">
        <Banner />
      </div>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className=" m-1 flex flex-col justify-center items-center lg:mt-10 xl:flex-row opacity-0 animate-slide-in-left">
        <div className="mx-2 mt-5 max-w-4xl">
          <img
            className="rounded-xl shadow-xl md:h-[500px]"
            src="images/HomePic.jpeg"
            alt="imageHome"
          />
        </div>
        <div className="w-full justify-center text-white p-5 mx-2 mt-5 rounded-2xl xl:w-1/2 ">
          <h1 className="text-4xl font-bold mb-3 text-center text-black">
            Qui sommes nous ?
          </h1>
          <div className="border border-black border-dotted mb-2"></div>
          <p className=" text-lg p-2 mb-2 text-black">
            Nous sommes spécialisés dans l'abattage et l'élagage d'arbres,
            offrant des services professionnels et sécurisés pour transformer
            votre espace extérieur. Notre équipe qualifiée combine expertise
            sylvicole, respect de l'environnement et engagement envers la
            sécurité. Faites confiance à Pierrovert pour sublimer votre paysage
            avec soin et précision.
          </p>
          <div className="flex flex-col justify-center items-center lg:flex-row">
            <Link
              to="/contact"
              onClick={handleClick}
              className="text-center h-60 max-w-sm p-3 m-1 rounded-lg dark:bg-black dark:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-70 flex justify-center items-center flex-col"
            >
              <p className="text-white">
                <IoNewspaperOutline className="icon" size={50} />
              </p>

              <h2 className="font-bold text-lg text-green-600">
                Devis gratuit
              </h2>
              <p className="text-white">
                Nous offrons des consultations gratuites pour nos services et
                vous fournirons une offre adaptée à vos besoins.
              </p>
            </Link>
            <Link
              to="/"
              className="text-center h-60 max-w-sm p-3 m-1 rounded-lg dark:bg-black dark:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-70 flex justify-center items-center flex-col"
            >
              <icone>
                <FaHandsHelping size={52} />
              </icone>
              <h2 className="font-bold text-lg text-green-600 ">Fiabilité</h2>
              <p className="text-white">
                Nous sommes fiers du travail bien fait que nous proposons à
                notre clientèle.
              </p>
            </Link>
            <Link
              to="/services"
              onClick={handleClick}
              className="text-center h-60 max-w-sm p-3 m-1 rounded-lg dark:bg-black dark:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-70 flex justify-center items-center flex-col"
            >
              <icone>
                <GiLindenLeaf size={50} />
              </icone>
              <h2 className="font-bold text-lg text-green-600">
                Spécialisation
              </h2>
              <p className="text-white">
                Specialistes en aménagements et entretiens d'espaces verts,
                abattages et élagages.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row sm:my-20 justify-center items-center animate-slide-in-right">
        <div className="text-white px-10 w-full">
          <h1 className="text-center text-4xl mb-4 font-bold lg:text-left text-black">
            À propos de Pierr<span className="text-green-600">O</span>vert
          </h1>
          <FaQuoteLeft color="black" />
          <p className="text-left text-lg ml-8 mr-5 text-black">
            PierrOvert est une entreprise spécialisée dans l'abattage et
            l'élagage d'arbres, elle se distingue par son engagement envers la
            préservation de la nature et la transformation esthétique des
            espaces extérieurs. Avec une équipe d'experts qualifiés, PierrOvert
            offre des services professionnels, alliant sécurité et respect de
            l'environnement.
          </p>
        </div>
        <div className="flex p-5 w-full justify-center">
          <img
            className="rounded-xl shadow-xl h-[500px]"
            src="images/imgFacePierre.jpeg"
            alt="imageHome"
          />
          <div className="absolute bottom-0 bg-white border border-white rounded-xl p-3">
            <p className="text-center">
              Pierre Swinnen
              <br />
              <span className="text-green-600">Entrepreneur</span>
            </p>
          </div>
        </div>
      </div>
      <ServicesCards />

      <Footer />
    </>
  );
}
export default Home;
