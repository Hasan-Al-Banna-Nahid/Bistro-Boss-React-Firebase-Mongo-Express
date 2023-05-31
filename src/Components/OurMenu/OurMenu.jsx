/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./OurMenu.css";
import useMenus from "../Shared/Hooks/useMenus";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import ShowMenus from "../Shared/showMenus/showMenus";
import Button from "../Shared/Button/Button";

const OurMenu = () => {
  const [menus] = useMenus();
  const offered = menus.filter((menu) => menu.category === "offered");
  console.log(menus);
  return (
    <div>
      <Navbar />
      {/* Banner Start */}
      <div>
        <img src="../../../public/assets/menu/banner3.jpg" alt="" />
        <div className="ourMenuBanner absolute top-52 left-64 fixed text-white p-48 h-48 rounded-md">
          <h3 className="text-6xl font-bold text-center">OUR MENU</h3>
          <p className="text-3xl font-semibold my-6">
            Would You Like to Try A Dish
          </p>
        </div>
      </div>
      {/* Banner End */}
      {/* Today's Offer */}
      <div>
        <SectionTitle subTitle={"Don't Miss"} Title={"Today's Offer"} />
        <div className="grid grid-cols-2">
          {offered.map((offer) => {
            return (
              <ShowMenus
                key={offer._id}
                img={offer.image}
                name={offer.name}
                info={offer.recipe}
                price={offer.price}
              />
            );
          })}
        </div>
        <Button name={"Order Your Favorite item"} />
      </div>
      {/* Today's Offer */}
      <Footer />
    </div>
  );
};

export default OurMenu;
