import React from "react";
import App from "../assets/app.svg";
import Trac from "../assets/trac.svg";
import Youtube from "../assets/youtube.svg";
import X from "../assets/x.svg";
import Pinterest from "../assets/pinterest.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Flag from "../assets/flag.svg";

const Footer = () => {
  return (
    <div className="bg-[#181818]">
      <div className="flex text-gray-400 justify-around px-5 py-8 hover:cursor-pointer">
        <div className="leading-7">
          <h1 className="font-bold text-white">SUPPORT</h1>
          <p>Contact Us</p>
          <p>Shipping and Delivery</p>
          <p>Terms & Conditions</p>
          <p>Transparency in Supply Chain</p>
          <p>Store Locator</p>
          <p>Buy a Gift Card</p>
          <p>Service Discoun </p>
          <p>Refer a Friend</p>
          <p>Cookie Settings</p>
        </div>
        <div className="leading-7 hover:cursor-pointer">
          <p>FAQ</p>
          <p>Return Policy</p>
          <p>Privacy Policy</p>
          <p>Do Not Sell or Share My Information</p>
          <p>PUMA NYC Flagship Store</p>
          <p>Gift Card Balance</p>
          <p>Student Discount</p>
          <p>Promotion Exclusions</p>
        </div>
        <div className="leading-7 hover:cursor-pointer">
          <h1 className="font-bold text-white">ABOUT</h1>
          <p>Company</p>
          <p>Corporate News</p>
          <p>Press Center</p>
          <p>#REFORM</p>
          <p>Investors</p>
          <p>Sustainability</p>
          <p>Careers</p>
        </div>
        <div className="leading-7 hover:cursor-pointer">
          <h1 className="font-bold text-white">STAY UP TO DATE</h1>
          <p>Sign Up for Email</p>
          <h1 className="font-bold text-white">EXPLORE</h1>
          <div className="flex gap-8 ">
            <img
              className="w-16 p-2 my-4 border border-gray-400 rounded-lg hover:border-white hover:cursor-pointer"
              src={App}
              alt=""
            />
            <img
              className="w-16 p-2 my-4 border border-gray-400 rounded-lg hover:border-white hover:cursor-pointer"
              src={Trac}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <hr className="w-[95%]" />
      </div>

      <div className="flex justify-between items-center px-12 py-6 ">
        <div className="flex gap-8 hover:cursor-pointer">
          <img className="invert w-6 h-6" src={Youtube} alt="" />
          <img className="invert w-6 h-6" src={X} alt="" />
          <img className="invert w-6 h-6" src={Pinterest} alt="" />
          <img className="invert w-6 h-6" src={Instagram} alt="" />
          <img className="invert w-6 h-6" src={Facebook} alt="" />
        </div>

        <button className="flex gap-2 px-8 py-3 items-center text-white font-bold border hover:border-white border-gray-400">
          <img className="w-8 h-8" src={Flag} alt="" />
          UNITED STATES
        </button>

        <div className="text-gray-400 text-xs text-right">
          <p>© PUMA NORTH AMERICA, INC.</p>
          <p className="underline">IMPRINT AND LEGAL DATA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
