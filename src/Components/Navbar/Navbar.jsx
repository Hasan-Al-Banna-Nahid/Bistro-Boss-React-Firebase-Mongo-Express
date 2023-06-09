/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/Provider/provider";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const Counter = useSelector((state) => state.Counter.count);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
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
              className="menu lg:hidden menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={0}>
                <li>
                  <a>Home</a>
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
          <a className="btn btn-ghost normal-case text-2xl text-[#fbc531]">
            Bistro Boss <br />
            Restaurant
          </a>
        </div>
        <div className="navbar-center sm:hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#8c7ae6]">
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
              <Link to="/ourMenu">
                <a>Our Menu</a>
              </Link>
            </li>
            <li>
              <div className="badge badge-info text-2xl p-4">
                <Link to="/dashboard">
                  <FaShoppingCart className="text-red-600" />
                </Link>
                <span className="text-[#2f3640]">+{Counter}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogOut}>
              <a className="btn">LogOut</a>
            </button>
          ) : (
            <div>
              <Link to="/login">
                <a className="btn">Login</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
