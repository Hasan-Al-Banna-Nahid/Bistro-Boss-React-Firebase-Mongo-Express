/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 mx-auto p-12 text-white bg-[#2f3640] my-12">
        <div className="bg-[#30336b] p-12 rounded">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-2xl font-bold">
            123 ABS Street, Uni 21, Bangladesh
          </p>
          <p className="text-2xl font-bold">+88 123456789</p>
          <p className="text-2xl font-bold">Mon - Fri: 08:00 - 22:00</p>
          <p className="text-2xl font-bold">Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="bg-[#130f40] p-12 rounded">
          <h2 className="text-3xl font-bold">Follow Us</h2>
          <p className="text-2xl font-bold">Join Us On Social Media</p>
          <div className="flex gap-6 my-6">
            <div>
              {" "}
              <FaFacebook className="text-4xl" />
            </div>
            <div>
              {" "}
              <FaGoogle className="text-4xl" />
            </div>
            <div>
              <FaTwitter className="text-4xl" />
            </div>
            <div>
              <FaInstagram className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center font-bold text-xl mx-auto ">
        Copyright © CulinaryCloud. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
