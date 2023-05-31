/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./OurMenu.css";
import useMenus from "../Shared/Hooks/useMenus";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import ShowMenus from "../Shared/showMenus/showMenus";
import Button from "../Shared/Button/Button";
import Banner from "../Shared/Banner/Banner";
import DessertImage from "/assets/menu/dessert-bg.jpeg";
import pizzaImage from "/assets/menu/pizza-bg.jpg";
import saladImage from "/assets/menu/salad-bg.jpg";
import soupImage from "/assets/menu/soup-bg.jpg";

const OurMenu = () => {
  const [menus] = useMenus();
  const offered = menus.filter((menu) => menu.category === "offered");
  const dessert = menus.filter((menu) => menu.category === "dessert");
  const pizza = menus.filter((menu) => menu.category === "pizza");
  const salad = menus.filter((menu) => menu.category === "salad");
  const soup = menus.filter((menu) => menu.category === "soup");
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
      {/* Dessert Section*/}
      <Banner
        img={DessertImage}
        title={"Desserts"}
        info={
          "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
        }
      />
      <div className="grid grid-cols-2">
        {dessert.map((dessert) => {
          return (
            <ShowMenus
              key={dessert._id}
              img={dessert.image}
              name={dessert.name}
              info={dessert.recipe}
              price={dessert.price}
            />
          );
        })}
      </div>
      <Button name={"Order Your Favorite Dessert"} />
      {/* Dessert Section*/}
      {/* Pizza Section */}
      <Banner
        img={pizzaImage}
        title={"Pizza"}
        info={
          "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
        }
      />
      <div className="grid grid-cols-2">
        {pizza.map((pizza) => {
          return (
            <ShowMenus
              key={pizza._id}
              img={pizza?.image}
              name={pizza.name}
              info={pizza.recipe}
              price={pizza.price}
            />
          );
        })}
      </div>
      <Button name={"Order Your Favorite Pizza"} />
      {/* Pizza Section */}
      {/* Salad Section */}
      <Banner
        img={saladImage}
        title={"Salad"}
        info={
          "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
        }
      />
      <div className="grid grid-cols-2">
        {salad.map((salad) => {
          return (
            <ShowMenus
              key={salad._id}
              img={salad.image}
              name={salad.name}
              info={salad.recipe}
              price={salad.price}
            />
          );
        })}
      </div>
      <Button name={"Order Your Favorite Salad"} />
      {/* Salad Section */}
      {/* Soup Section */}
      <Banner
        img={soupImage}
        title={"Soup"}
        info={
          "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
        }
      />
      <div className="grid grid-cols-2">
        {soup.map((soup) => {
          return (
            <ShowMenus
              key={soup._id}
              img={soup.image}
              name={soup.name}
              info={soup.recipe}
              price={soup.price}
            />
          );
        })}
      </div>
      <Button name={"Order Your Favorite Soup"} />
      {/* Soup Section */}
      <Footer />
    </div>
  );
};

export default OurMenu;
