/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 fixed z-10 bg-transparent text-white font-bold text-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={0}>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  <a>Dashboard</a>
                </li>
                <li>
                  <a>Our Menu</a>
                </li>
                <li>
                  <a>Our Shop</a>
                </li>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            Bistro Boss <br />
            Restaurant
          </a>
        </div>
        <div className="navbar-center sm:hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                {" "}
                <a href="">Home</a>
              </Link>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <Link to="ourMenu">
                <a>Our Menu</a>
              </Link>
            </li>
            <li>
              <a>Our Shop</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
