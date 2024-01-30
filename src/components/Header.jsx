import React from "react";
import Logo from "../assets/logo.svg";
import Search from "../assets/search.svg";
import Favorite from "../assets/favorite.svg";
import Cart from "../assets/cart.svg";
import Profile from "../assets/profile.svg";

const Header = () => {
  return (
    <div className="Navbar sticky top-0 inset-x-0 flex items-center justify-between bg-[#181818] text-white">
      <div className="listItems flex px-6 py-7 gap-8 hover:text-gray-400">
        <img className="logo invert w-8" src={Logo} alt="" />
        <ul className="list-none flex gap-6 font-bold">
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>FENTY x PUMA</li>
          <li>Classics</li>
          <li>Collaborations</li>
          <li>Sports</li>
          <li>Sale</li>
        </ul>
      </div>

      <div className="flex gap-4 px-8">
        <button className="search flex items-center gap-3 px-5 py-2 border hover:border-white border-gray-400 font-bold">
          <img className="invert w-6" src={Search} alt="" />
          SEARCH
        </button>
        <img className="favorite w-6 invert" src={Favorite} alt="" />
        <img className="cart w-6 invert" src={Cart} alt="" />
        <img className="profile w-6 invert" src={Profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
