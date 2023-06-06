/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaWallet,
  FaShoppingCart,
  FaCalendarCheck,
  FaCircle,
  FaUtensils,
  FaUtensilSpoon,
  FaPhoneAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import useCart from "../Shared/Hooks/useCart";

const Dashboard = () => {
  const isAdmin = true;
  const [cart] = useCart();
  const [isActive, setIsActive] = useState(false);
  const Counter = useSelector((state) => state.Counter.count);
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block text-[14px]">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {isAdmin ? (
                  <>
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                      >
                        <FaHome />
                        Admin Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                      >
                        <FaCalendarAlt />
                        Add Items
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                      >
                        <FaWallet />
                        Manage Items
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                        to="cart"
                      >
                        <FaShoppingCart />
                        Manage Booking
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="users"
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                      >
                        <FaCircle />
                        All Users
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                      >
                        <FaCalendarCheck />
                        My Booking
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                      >
                        <FaHome />
                        User Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                      >
                        <FaCalendarAlt />
                        Reservation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                      >
                        <FaWallet />
                        Payment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                        to="cart"
                      >
                        <FaShoppingCart />
                        My Cart {cart.length}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                      >
                        <FaCircle />
                        Add Review
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                      >
                        <FaCalendarCheck />
                        My Booking
                      </NavLink>
                    </li>
                  </>
                )}
                <div className="divider lg:divider-horizontal"></div>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <FaHome />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <FaUtensils />
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <FaUtensilSpoon />
                    Food
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <FaPhoneAlt />
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
