import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiLindenLeaf } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="2xl:flex 2xl:flex-row mt-6">
        <div className="w-full xl:w-1/2 m-2">
          <img
            className="rounded-xl shadow-xl"
            src="images/Jardin-bg.jpeg"
            alt="imageHome"
          />
        </div>
        <div className="w-full lg:w-max xl:w-1/2 bg-black bg-opacity-50 text-white p-5 m-2 mt-8 rounded-2xl h-full">
          <h1 className="text-4xl font-bold mb-3 text-center">
            Votre spécialiste en Parcs et Jardins
          </h1>
          <div className="border border-double mb-2"></div>
          <p className="text-l p-2 mb-2">
            Un entrepreneur indépendant Parcs et Jardins près de chez vous.
            <br />
            Paysagiste professionnel qualifié dans la conception, la
            planification, la construction et l'entretien de jardins, d'espaces
            verts et de paysages.
            <br />
            Les services proposés peuvent être assez variés, allant du simple
            aménagement à la gestion de projets de plus grande envergure.
          </p>
          <div className="flex flex-col 2xl:flex-row justify-center items-center h-full w-full">
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
                vous fournirons une offre adaptée en fonction de vos besoins.
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
                Nous sommes fiers du travail bien fait que nous proposons à nos
                clients.
              </p>
            </a>
            <a
              href="/Services"
              className="text-center block max-w-sm p-5 m-1 border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-zinc-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-center items-center flex-col"
            >
              <icone>
                <GiLindenLeaf size={56} />
              </icone>
              <h2 className="font-bold text-green-600">Spécialisation</h2>
              <p className="font-normal text-white">
                Nous sommes spécialisés dans l'aménagement et l'entretien
                d'espaces verts, l'abattage et l'élagage.
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-left">
        <div className="w-full md:w-1/2 md:pl-20 text-white p-5 m-5 mt-5 md:mr-2">
          <h1 className="text-center md:text-left mb-4 font-bold text-4xl">
            La société PierrOVert
          </h1>
          <div className="border border-dashed mb-4"></div>
          <FaQuoteLeft />
          <p className="text-left md:text-left ml-8">
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
      <div class="grid m-5 md:mb-20 md:grid-cols-2">
        <figure class="flex flex-col m-1 items-center justify-center p-8 text-center rounded-3xl dark:bg-zinc-800">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Very easy this was to integrate
            </h3>
            <p class="my-4 font-light">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Bonnie Green</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Developer at Open AI
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col ml-0 m-1 items-center justify-center p-8 text-center rounded-3xl dark:bg-zinc-800">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Solid foundation for any project
            </h3>
            <p class="my-4 font-light">
              Designing with Figma components that can be easily translated to
              the utility classes of Tailwind CSS is a huge timesaver!"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Roberta Casas</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Lead designer at Dropbox
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col ml-0 m-1 items-center justify-center p-8 text-center rounded-3xl dark:bg-zinc-800">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Mindblowing workflow
            </h3>
            <p class="my-4 font-light">
              Aesthetically, the well designed components are beautiful and will
              undoubtedly level up your next application."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Jese Leos</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Software Engineer at Facebook
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col m-1 ml-0 items-center justify-center p-8 text-center rounded-3xl dark:bg-zinc-800">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Efficient Collaborating
            </h3>
            <p class="my-4 font-light">
              You have many examples that can be used to create a fast prototype
              for your team."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Joseph McFall</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                CTO at Google
              </div>
            </div>
          </figcaption>
        </figure>
      </div>

      <Footer />
    </div>
  );
}
export default Home;
