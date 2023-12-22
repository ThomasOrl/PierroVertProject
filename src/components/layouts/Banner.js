import React from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";

function Banner() {
  return (
    <>
      <div className="flex justify-around bg-black bg-opacity-70 py-1">
        <div>
          <p className="text-green-600">
            <BsFillHouseFill className="mr-2" />
            1435 Mont-Saint-Guibert
          </p>
        </div>
        <div>
          <p className="text-green-600">
            <GrMail className="mr-2" />
            PierrOvert@gmail.com
          </p>
        </div>
        <div>
          <p className="text-green-600">
            <MdPhoneIphone className="mr-2" />+ 32 476 72 20 87
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
