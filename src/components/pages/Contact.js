import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Swal from "sweetalert2";
import { HiDocumentText } from "react-icons/hi";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v7yrgj9",
        "template_gzca09k",
        form.current,
        "2yLEpSjn3pRVwJxkG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire("Félicitation!", "Votre mail a bien été envoyé!", "success");
    e.target.reset();
  };

  return (
    <>
      <div className="relative z-10">
        <Navbar />
      </div>
      <h1 className="text-center text-white italic title-pages py-3 font-bold text-3xl mt-10">
        Contactez-Nous!
      </h1>
      <div className="flex justify-center animate-slide-in-bottom">
        <div className="container rounded-3xl mx-10 my-10 max-w-3xl bg-black bg-opacity-30 ">
          <HiDocumentText size={38} className="text-white mx-auto mt-5" />
          <div className="p-5 space-y-5 shadow-xl">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  name="user_name"
                  type="text"
                  className="border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-green-400 col-span-2"
                  placeholder="Nom"
                  required
                />
                <input
                  name="user_email"
                  type="email"
                  className="border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-green-400 col-span-2"
                  placeholder="Email"
                  required
                />
                <input
                  name="user_phone"
                  type="tel"
                  className="border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-green-400 col-span-2"
                  placeholder="Tel."
                  required
                />
                <input
                  name="user_city"
                  type="text"
                  className="border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-green-400 col-span-2"
                  placeholder="Adresse"
                  required
                />
                <textarea
                  name="message"
                  cols="10"
                  rows="10"
                  className="border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:border-green-400 col-span-2"
                  placeholder="Ecrivez votre message..."
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Envoyer"
                className="mt-5 rounded-xl border cursor-pointer bg-transparent hover:text-black hover:bg-white hover:transition-all duration-700 px-4 py-2 text-white font-bold w-full"
              />
            </form>
            <p className="text-white">* Tous les champs sont requis </p>
            <p className="text-green-400 ml-3">
              En cas de soucis avec le formulaire n'hesitez pas à appeler le
              numéro ce trouvant en bas de page.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
