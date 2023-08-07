import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
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
          <h1 className="text-4xl font-bold mb-3 text-center">
            Votre spécialiste en Parcs et Jardins
          </h1>
          <div className=" border border-double mb-2"></div>
          <p className=" text-lg p-2 mb-2">
            Un entrepreneur indépendant en Parcs et Jardins près de chez vous.
            <br />
            Paysagiste professionnel qualifié dans la conception, la
            planification, la construction et l'entretien de jardins, d'espaces
            verts et de paysages.
            <br />
            Les services proposés peuvent être assez variés, allant de
            l'aménagement à la gestion d'un projet de plus grande envergure.
          </p>
          <div className="flex flex-col font-bold justify-center items-center lg:flex-row">
            <Link
              to="/contact"
              onClick={handleClick}
              className="text-center h-60 max-w-sm p-3 m-1 rounded-lg dark:bg-black dark:bg-opacity-60 dark:hover:bg-black dark:hover:bg-opacity-90 flex justify-center items-center flex-col"
            >
              <icone>
                <IoNewspaperOutline size={50} />
              </icone>
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
              className="text-center h-60 max-w-sm p-3 m-1 rounded-lg dark:bg-black dark:bg-opacity-60 dark:hover:bg-black dark:hover:bg-opacity-90 flex justify-center items-center flex-col"
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
              className="text-center h-60 max-w-sm p-3 m-1 rounded-lg dark:bg-black dark:bg-opacity-60 dark:hover:bg-black dark:hover:bg-opacity-90 flex justify-center items-center flex-col"
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
      <div className="flex flex-col md:flex-row sm:my-20 mx-1 sm:mx-10 justify-center animate-slide-in-right">
        <div className="w-full text-white p-5 xl:w-1/2">
          <h1 className="text-center text-4xl mb-4 font-bold lg:text-left">
            La société Pierr<span className="text-green-600">O</span>Vert
          </h1>
          <div className="border border-dashed mb-4 mr-5"></div>
          <FaQuoteLeft />
          <p className="text-left text-lg ml-8 mr-5">
            Notre société de jardinage est spécialisée dans la création, les
            aménagement et les entretiens de jardins et d'espaces verts. Nous
            sommes passionnés par la nature et l'environnement, et nous mettons
            notre savoir-faire et notre expérience à votre disposition pour
            réaliser tous vos projets d'aménagements extérieurs.
            <p />
            <br />
            Nous sommes des professionnels dynamiques et compétents, jardiniers
            paysagistes expérimentés et qualifiés, qui sauront répondre à toutes
            vos demandes. Nous sommes à l'écoute de vos besoins et de vos
            envies, et nous mettrons tout en œuvre pour créer des espaces verts
            uniques et personnalisés, adaptés à votre style de vie et à votre
            budget.
            <p />
            <br />
            Nous vous accompagnerons dans la création d’un nouveau jardin, la
            rénovation d’un espace existant, ainsi que pour l’entretien régulier
            de vos plantes et espaces verts.
            <p />
            <br />
            Nous utilisons des techniques et des outils de pointe, respectueux
            de l'environnement, pour vous garantir des résultats de qualité et
            durables. Nous croyons que chaque jardin est unique, et nous nous
            engageons à créer des espaces verts qui reflètent votre personnalité
            et vos valeurs.
            <p />
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Home;
