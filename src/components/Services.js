import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function Services() {
  return (
    <>
      <div className="relative z-10">
        <Navbar />
      </div>
      <h1 className="text-center text-white border border-l-0 border-r-0 font-bold text-3xl mt-10">
        Nos différents services
      </h1>
      <div className="relative z-0 flex min-h-screen justify-center">
        <div className="grid grid-cols-1 my-10 mx-10 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="images/scarification.jpeg"
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
              <BsFillArrowUpCircleFill
                size={28}
                className="text-green-600 mr-1"
              />
              <p className="text-white text-2xl">Scarification</p>
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
                    Pelouses
                  </h1>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative inset-x-0 bottom-0 flex justify-center mt-2">
              <BsFillArrowUpCircleFill
                size={28}
                className="text-green-600 mr-1"
              />
              <p className="text-white text-2xl">Pelouses</p>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="images/cloture.jpeg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold text-green-600">
                    Clotures/ Haies
                  </h1>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative inset-x-0 bottom-0 flex justify-center mt-2">
              <BsFillArrowUpCircleFill
                size={28}
                className="text-green-600 mr-1"
              />
              <p className="text-white text-2xl">Clotures/ Haies</p>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="images/plantation.jpeg"
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
              <BsFillArrowUpCircleFill
                size={28}
                className="text-green-600 mr-1"
              />
              <p className="text-white text-2xl">Plantations</p>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="images/scarification.jpeg"
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
              <BsFillArrowUpCircleFill
                size={28}
                className="text-green-600 mr-1"
              />
              <p className="text-white text-2xl">Scarification</p>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="images/scarification.jpeg"
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
              <BsFillArrowUpCircleFill
                size={28}
                className="text-green-600 mr-1"
              />
              <p className="text-white text-2xl">Scarification</p>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="images/scarification.jpeg"
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
              <BsFillArrowUpCircleFill
                size={28}
                className="text-green-600 mr-1"
              />
              <p className="text-white text-2xl">Scarification</p>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="images/scarification.jpeg"
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
              <BsFillArrowUpCircleFill
                size={28}
                className="text-green-600 mr-1"
              />
              <p className="text-white text-2xl">Scarification</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Services;
