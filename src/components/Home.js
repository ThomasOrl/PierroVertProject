import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiLindenLeaf } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />
      <div className="m-1 flex flex-col justify-center items-center lg:mt-10 2xl:flex-row ">
        <div className="mx-2 mt-5 max-w-4xl 2xl:w-1/2">
          <img
            className="rounded-xl shadow-xl"
            src="images/Jardin-bg.jpeg"
            alt="imageHome"
          />
        </div>
        <div className="w-full justify-center text-white p-5 mx-2 mt-5 rounded-2xl 2xl:w-1/2 ">
          <h1 className="text-4xl font-bold mb-3 text-center">
            Votre spécialiste en Parcs et Jardins
          </h1>
          <div className="border border-double mb-2"></div>
          <p className="text-lg p-2 mb-2">
            Un entrepreneur indépendant Parcs et Jardins près de chez vous.
            <br />
            Paysagiste professionnel qualifié dans la conception, la
            planification, la construction et l'entretien de jardins, d'espaces
            verts et de paysages.
            <br />
            Les services proposés peuvent être assez variés, allant du simple
            aménagement à la gestion de projets de plus grande envergure.
          </p>
          <div className="flex flex-col justify-center items-center lg:flex-row">
            <Link
              to="/contact"
              className="text-center h-60 max-w-sm p-5 m-1 rounded-lg dark:bg-zinc-900 dark:hover:bg-black flex justify-center items-center flex-col"
            >
              <icone>
                <IoNewspaperOutline size={56} />
              </icone>
              <h2 className="font-bold text-green-600">Devis gratuit</h2>
              <p className="font-normal text-white">
                Nous offrons des consultations gratuites pour nos services et
                vous fournirons une offre adaptée en fonction de vos besoins.
              </p>
            </Link>
            <Link
              to="/"
              className="text-center h-60 max-w-sm p-5 m-1 rounded-lg dark:bg-zinc-900 dark:hover:bg-black flex justify-center items-center flex-col"
            >
              <icone>
                <FaHandsHelping size={56} />
              </icone>
              <h2 className="font-bold text-green-600 ">Fiabilité garantie</h2>
              <p className="font-normal text-white">
                Nous sommes fiers du travail bien fait que nous proposons à nos
                clients.
              </p>
            </Link>
            <Link
              to="/services"
              className="text-center h-60 max-w-sm p-5 m-1 rounded-lg dark:bg-zinc-900 dark:hover:bg-black flex justify-center items-center flex-col"
            >
              <icone>
                <GiLindenLeaf size={56} />
              </icone>
              <h2 className="font-bold text-green-600">Spécialisation</h2>
              <p className="font-normal text-white">
                Nous sommes spécialisés dans l'aménagement et l'entretien
                d'espaces verts, l'abattage et l'élagage.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full text-white p-5 m-5 mt-5 lg:w-1/2">
          <h1 className="text-center text-4xl mb-4 font-bold lg:text-left">
            La société Pierr<span className="text-green-600">O</span>Vert
          </h1>
          <div className="border border-dashed mb-4 mr-5"></div>
          <FaQuoteLeft />
          <p className="text-left text-lg ml-8 mr-5">
            Notre société de jardinage paysager est spécialisée dans la
            création, l'aménagement et l'entretien de jardins et d'espaces
            verts. Nous sommes passionnés par la nature et l'environnement, et
            nous mettons notre savoir-faire et notre expérience à votre
            disposition pour réaliser tous vos projets d'aménagement extérieur.
            <p />
            Nous sommes des professionnels dynamiques et compétents, jardiniers
            paysagistes expérimentés et qualifiés, qui sauront répondre à toutes
            vos demandes. Nous sommes à l'écoute de vos besoins et de vos
            envies, et nous mettons tout en œuvre pour créer des espaces verts
            uniques et personnalisés, adaptés à votre style de vie et à votre
            budget.
            <p />
            Que ce soit pour la création d'un nouveau jardin, la rénovation d'un
            espace existant, ou simplement pour l'entretien régulier de vos
            plantes et de vos espaces verts, nous sommes là pour vous
            accompagner tout au long du processus.
            <p />
            Nous utilisons des techniques et des outils de pointe, respectueux
            de l'environnement, pour vous garantir des résultats de qualité et
            durables. Nous croyons que chaque jardin est unique, et nous nous
            engageons à créer des espaces verts qui reflètent votre personnalité
            et vos valeurs.
            <p />
            Contactez-nous dès maintenant pour discuter de votre projet et
            obtenir un devis gratuit.
          </p>
        </div>
      </div>
      <h1 className="text-white font-bold text-4xl pl-10 mt-5 md:mb-10">
        Ils parlent de nous ...
      </h1>
      <div class="grid m-5 gap-5 md:mb-20 md:grid-cols-3">
        <figure class="flex flex-col items-center justify-center p-8 text-center rounded-3xl dark:bg-zinc-900">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Travail impeccable
            </h3>
            <p class="my-4 font-light">
              Rien à redire le chantier a été effectué dans les temps et les
              finitions sont comme je les voulais.
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Bonnie Green</div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center rounded-3xl dark:bg-zinc-900">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Travail impeccable
            </h3>
            <p class="my-4 font-light">
              Rien à redire le chantier a été effectué dans les temps et les
              finitions sont comme je les voulais.
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Roberta Casas</div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center rounded-3xl dark:bg-zinc-900">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Travail impeccable
            </h3>
            <p class="my-4 font-light">
              Rien à redire le chantier a été effectué dans les temps et les
              finitions sont comme je les voulais.
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Jese Leos</div>
            </div>
          </figcaption>
        </figure>
      </div>

      <Footer />
    </>
  );
}
export default Home;
