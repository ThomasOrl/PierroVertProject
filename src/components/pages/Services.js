import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { AiFillPlusSquare } from "react-icons/ai";

function Services() {
  return (
    <>
      <div className="relative z-10">
        <Navbar />
      </div>
      <h1 className="text-center text-white italic font-bold py-3 text-2xl my-10 title-pages">
        Nos Services
      </h1>
      <div className="relative z-0 flex min-h-screen justify-center animate-slide-in-left">
        <div className="grid grid-cols-1 my-10 mx-5 gap-20 grid-cols-medium grid-cols-large ">
          <div className="group h-96 w-80 [perspective:1000px] ">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] xl:group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="images/elagage.jpeg"
                  alt="elagage"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold text-green-600">Elagage</h1>
                  <p className="text-base">
                    L'élagage consiste à tailler certaines parties de l'arbre,
                    comme les branches, pour favoriser sa croissance, améliorer
                    sa santé ou pour des raisons esthétiques. Différentes
                    techniques d'élagages existent en fonction des besoins de
                    l'arbre.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative inset-x-0 bottom-0 flex justify-center mt-2">
              <AiFillPlusSquare
                size={24}
                className="text-green-600 mr-3 mt-1"
              />
              <p className="text-white text-2xl">Elagage</p>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] xl:group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="images/abattage.jpeg"
                  alt="abattage"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold text-green-600">
                    Abattage
                  </h1>
                  <p className="text-base">
                    L'abattage d'un arbre consiste à le couper et à le faire
                    tomber au sol en toute sécurité. Cette opération peut être
                    réalisée pour des raisons de sécurité, de développement
                    urbain, de construction ou encore pour éliminer un arbre
                    malade ou mort.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative inset-x-0 bottom-0 flex justify-center mt-2">
              <AiFillPlusSquare
                size={24}
                className="text-green-600 mr-3 mt-1"
              />
              <p className="text-white text-2xl">Abattage</p>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] xl:group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="images/clotures.jpeg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold text-green-600">
                    Entretien jardin
                  </h1>
                  <p className="text-base">
                    L'entretien du jardin consiste à maintenir les plantes en
                    bonne santé, à les tailler régulièrement pour assurer leur
                    croissance, leur esthétisme. Les tâches peuvent être
                    diverses en fonction des besoins spécifiques des plantes. Un
                    entretien régulier est nécessaire pour assurer la beauté et
                    la santé du jardin et des haies.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative inset-x-0 bottom-0 flex justify-center mt-2">
              <AiFillPlusSquare
                size={24}
                className="text-green-600 mr-3 mt-1"
              />
              <p className="text-white text-2xl">Entretien jardin</p>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] xl:group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="images/pelouse.jpeg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold text-green-600">
                    Tonte pelouse
                  </h1>
                  <p className="text-base">
                    La tonte de la pelouse est une tâche d'entretien régulière
                    qui consiste à couper l'herbe à une hauteur uniforme pour
                    maintenir un gazon dense et sain. La fréquence de tonte
                    dépend de la croissance de l'herbe et de la saison, et peut
                    varier de quelques jours à quelques semaines. Un entretien
                    régulier de la pelouse permet de maintenir un espace vert
                    agréable et esthétique.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative inset-x-0 bottom-0 flex justify-center mt-2">
              <AiFillPlusSquare
                size={24}
                className="text-green-600 mr-3 mt-1"
              />
              <p className="text-white text-2xl">Tonte pelouse</p>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] xl:group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="images/plantations.jpeg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold text-green-600">
                    Plantations
                  </h1>
                  <p className="text-base">
                    La plantation est une technique d'aménagement qui consiste à
                    installer des plantes dans un jardin ou un espace vert pour
                    fournir une barrière de protection, un écran de
                    confidentialité ou un élément décoratif. Comprenant la
                    préparation du sol, la sélection des plantes, la disposition
                    des plantes selon un motif désiré et la plantation.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative inset-x-0 bottom-0 flex justify-center mt-2">
              <AiFillPlusSquare
                size={24}
                className="text-green-600 mr-3 mt-1"
              />
              <p className="text-white text-2xl">Plantations</p>
            </div>
          </div>

          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] xl:group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="images/aménagements.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold text-green-600">
                    Aménagements
                  </h1>
                  <p className="text-base">
                    L'aménagement de terrain est une activité d'embellissement
                    et de transformation de la surface d'un terrain. Il peut
                    inclure la création de nouvelles structures, la rénovation
                    de structures existantes, la plantation de plantes, la pose
                    de clôtures. Un bon aménagement de terrain peut augmenter la
                    valeur de la propriété et améliorer la qualité de vie des
                    occupants.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative inset-x-0 bottom-0 flex justify-center mt-2">
              <AiFillPlusSquare
                size={24}
                className="text-green-600 mr-3 mt-1"
              />
              <p className="text-white text-2xl">Aménagements</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Services;
