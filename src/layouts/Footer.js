import React from "react";
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-neutral-100 text-center dark:bg-zinc-800 dark:text-neutral-200 lg:text-left mt-10">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block text-xl font-bold">
          <span>Retrouvez nous sur nos différents réseaux</span>
        </div>
        <div className="flex justify-center">
          <Link
            to="https://www.facebook.com/pierre.swinnen.3"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase"
          >
            <GrFacebookOption className="mx-auto h-full w-4" />
          </Link>

          <Link
            to="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase"
          >
            <BsTwitter className="mx-auto h-full w-4" />
          </Link>

          <Link
            to="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase"
          >
            <FaGooglePlusG className="mx-auto h-full w-4" />
          </Link>

          <Link
            to="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase"
          >
            <FaInstagram className="mx-auto h-full w-4" />
          </Link>

          <Link
            to="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase"
          >
            <FaLinkedinIn className="mx-auto h-full w-4" />
          </Link>
        </div>
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex items-center justify-center font-bold uppercase md:justify-start">
              A propos
            </h6>
            <p>Services d'aménagements à travers toute la Belgique.</p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <BsFillHouseFill className="mr-2" />
              Mont-Saint-Guibert, Belgique
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <GrMail className="mr-2" />
              info@example.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdPhoneIphone className="mr-2" />+ 32 475 20 20 20
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <BsFillTelephoneFill className="mr-2" />+ 10 234 567 89
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-bold bg-neutral-200 p-6 text-center dark:bg-zinc-900 sm:flex-row sm:justify-between">
        <span>© 2023 Copyright | PierrOVert</span>
        <span>Design by Thomas Orlans</span>
      </div>
    </footer>
  );
}
export default Footer;
