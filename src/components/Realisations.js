import React from "react";
import Navbar from "../layouts/Navbar";

function Realisations() {
  return (
    <>
      <div className="relative z-10">
        <Navbar />
      </div>
      <h1 className="text-center text-white border border-l-0 border-r-0 font-bold text-3xl mt-10">
        Nos différentes réalisations
      </h1>
      <div class="relative z-0 flex min-h-screen justify-center">
        <div className="grid grid-cols-1 my-20 mx-10 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="group h-96 w-80 [perspective:1000px]">
            <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0">
                <img
                  class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
                  alt=""
                />
              </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Jane Doe</h1>
                  <p class="text-lg">Artist</p>
                  <p class="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="group h-96 w-80 [perspective:1000px]">
            <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0">
                <img
                  class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
                  alt=""
                />
              </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Jane Doe</h1>
                  <p class="text-lg">Artist</p>
                  <p class="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Realisations;
