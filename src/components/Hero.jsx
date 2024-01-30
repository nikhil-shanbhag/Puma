import React from "react";
import Star from "../assets/star.svg";

const Hero = ({ name, price, img }) => {
  return (
    <>
      <div className="h-[80vh]">
        <div className="border-2 w-80 h-80 font-bold m-2">
          <img className="" src={img} alt="" />
          <div className="flex justify-between my-3">
            <h1>{name}</h1>
            <p>{price}</p>
          </div>
          <button className="bg-[#0656b6] text-sm text-white px-5 py-1 my-1 rounded-sm outline-none">
            BEST SELLER
          </button>
          <div className="flex">
            <img className="flex-shrink-0 w-4 " src={Star} alt="" />
            <img className="flex-shrink-0 w-4 " src={Star} alt="" />
            <img className="flex-shrink-0 w-4 " src={Star} alt="" />
            <img className="flex-shrink-0 w-4 " src={Star} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
