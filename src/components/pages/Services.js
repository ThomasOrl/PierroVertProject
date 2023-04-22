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
      <h1 className="text-center text-white italic font-bold bg-black bg-opacity-30 py-5 text-3xl my-10">
        Nos Services
      </h1>
      <div className="relative z-0 flex min-h-screen justify-center">
        <div className="grid grid-cols-1 my-10 mx-10 gap-20 md:grid-cols-2 lg:grid-cols-3">
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing.
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
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing.
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
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
                    Entretien de jardins
                  </h1>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative inset-x-0 bottom-0 flex justify-center mt-2">
              <AiFillPlusSquare
                size={24}
                className="text-green-600 mr-3 mt-1"
              />
              <p className="text-white text-2xl">Entretien de jardins</p>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
                    Tonte de pelouses
                  </h1>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative inset-x-0 bottom-0 flex justify-center mt-2">
              <AiFillPlusSquare
                size={24}
                className="text-green-600 mr-3 mt-1"
              />
              <p className="text-white text-2xl">Tonte de pelouses</p>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing.
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
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
                    Scarification
                  </h1>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
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
