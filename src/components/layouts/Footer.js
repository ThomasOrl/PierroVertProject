import React from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";

function Footer() {
  return (
    <>
      <footer className="bg-black bg-opacity-70 mt-10">
        <div className="flex items-center justify-center px-4 py-2 lg:justify-between">
          <div className="mr-12 hidden lg:block text-xl text-white  font-bold">
            <span>Retrouvez nous sur les réseaux</span>
          </div>
          <div className="flex justify-center ">
            <Link
              to="https://www.instagram.com/pierrovert/"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase"
            >
              <BsInstagram className="text-white mx-auto h-full w-4" />
            </Link>

            <Link
              to="https://www.facebook.com/profile.php?id=100092207318781"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase"
            >
              <GrFacebookOption className="text-white mx-auto h-full w-4" />
            </Link>
          </div>
        </div>
        <div className="border border-white border-opacity-50 mb-2"></div>
        <div className="text-white grid-1 grid gap-8 px-4 py-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center md:text-left">
            <h6 className="mb-4 flex items-center justify-center font-bold uppercase md:justify-start">
              À propos
            </h6>
            <p>
              Nous nous déplacons partout en Belgique pour vos aménagements et
              entretiens de jardins
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <BsFillHouseFill className="mr-2" />
              1435 Mont-Saint-Guibert
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <GrMail className="mr-2" />
              PierroVert@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdPhoneIphone className="mr-2" />+ 32 476 72 20 87
            </p>
          </div>
        </div>
        <div className="border border-white border-opacity-50 mb-2"></div>
        <div className="flex flex-col text-center text-white px-4 py-4 sm:flex-row sm:justify-between">
          <span>© 2023 Copyright | PierroVert</span>
          <span>Design by ThomasOrlans</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
