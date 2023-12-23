import React from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";

function Banner() {
  return (
    <>
      <div className="hidden sm:flex justify-around bg-black bg-opacity-80 py-1">
        <div className="flex items-center text-green-600">
          <BsFillHouseFill className="mr-2" size={18} />
          <p className="text-green-600">1435 Mont-Saint-Guibert</p>
        </div>
        <div className="flex items-center text-green-600">
          <GrMail className="mr-2" size={18} />
          <p className="text-green-600">PierrOvert@gmail.com</p>
        </div>
        <div className="flex items-center text-green-600">
          <MdPhoneIphone className="mr-2" size={18} />
          <p className="text-green-600">+32 476 72 20 87</p>
        </div>
      </div>
    </>
  );
}

export default Banner;
