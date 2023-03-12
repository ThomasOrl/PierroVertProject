import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";


function Contact() {
  return (
    <>
      <Navbar />
      <h1 className="text-center text-white border border-l-0 border-r-0 font-bold text-3xl mt-10">
        Contactez-nous!
      </h1>
      <div className="flex justify-center">
        <div className="container rounded-3xl mx-10 my-20 max-w-3xl border bg-white bg-opacity-20">
          <div className="p-5 space-y-5 shadow-xl">
            <h4 className="text-center text-white font-semibold text-xl uppercase">
              formulaire de contact
            </h4>
            <form>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  className="border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="Nom"
                  required
                />
                <input
                  type="text"
                  className="border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="Prénom"
                  required
                />
                <input
                  type="email"
                  className="border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                  placeholder="Email"
                  required
                />
                <input
                  type="tel"
                  className="border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                  placeholder="Tel."
                  required
                />
                <input
                  type="text"
                  className="border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                  placeholder="Ville du chantier"
                  required
                />
                <textarea
                  cols="10"
                  rows="5"
                  className="border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                  placeholder="Ecrivez votre message..."
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Envoyer"
                className="mt-5 rounded-xl border cursor-pointer bg-transparent hover:bg-green-700 hover:transition-all duration-700 px-4 py-2 text-white font-bold w-full"
              />
            </form>
            <p className="text-white">* Tous les champs sont requis </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
