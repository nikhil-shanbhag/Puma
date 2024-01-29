import React from "react";
import Shoe1 from "../assets/PumaSneakers1.avif";
import Shoe2 from "../assets/PumaSneakers2.avif";
import Shoe3 from "../assets/PumaSneakers3.avif";
import Shoe4 from "../assets/PumaSneakers4.avif";
import Star from "../assets/star.svg";

const Hero = () => {
  return (
    <div>
      <p className="font-bold text-3xl px-4 my-8 ">SUEDE COLLECTION</p>
      <div className="text-black h-[80vh] flex justify-center">
        <div className="border-2 w-80 h-80 font-bold m-2">
          <img className="" src={Shoe1} alt="" />
          <div className="flex justify-between my-3">
            <h1>PUMA x STAPLE G Men's Suede Sneakers</h1>
            <p>$90.00</p>
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
        <div className="border-2 w-80 h-80 font-bold m-2">
          <img className="" src={Shoe2} alt="" />
          <div className="flex justify-between my-3">
            <h1>PUMA x STAPLE G Men's Suede Sneakers</h1>
            <p>$90.00</p>
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
        <div className="border-2 w-80 h-80 font-bold m-2">
          <img className="" src={Shoe3} alt="" />
          <div className="flex justify-between my-3">
            <h1>PUMA x STAPLE G Men's Suede Sneakers</h1>
            <p>$90.00</p>
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
        <div className="border-2 w-80 h-80 font-bold m-2">
          <img className="" src={Shoe4} alt="" />
          <div className="flex justify-between my-3">
            <h1>PUMA x STAPLE G Men's Suede Sneakers</h1>
            <p>$90.00</p>
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
    </div>
  );
};

export default Hero;
