/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./OurMenu.css";
import useMenus from "../Shared/Hooks/useMenus";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import CoverImage from "/assets/menu/banner3.jpg";
import DessertImage from "/assets/menu/dessert-bg.jpeg";
import pizzaImage from "/assets/menu/pizza-bg.jpg";
import saladImage from "/assets/menu/salad-bg.jpg";
import soupImage from "/assets/menu/soup-bg.jpg";
import offeredImage from "../../../public/assets/home/chef-service.jpg";
import Cover from "../Shared/Cover/Cover";
import Items from "../Shared/Items/Items";

const OurMenu = () => {
  const [menus] = useMenus();
  const offered = menus.filter((menu) => menu.category === "offered");
  const dessert = menus.filter((menu) => menu.category === "dessert");
  const pizza = menus.filter((menu) => menu.category === "pizza");
  const salad = menus.filter((menu) => menu.category === "salad");
  const soup = menus.filter((menu) => menu.category === "soup");
  // console.log(menus);
  console.log(offered);
  return (
    <div>
      <Navbar />
      <Cover img={CoverImage} title={"OUR MENU"} subTitle={"Exited To Try?"} />
      <div>
        <SectionTitle subTitle={"Don't Miss"} Title={"Today's offer"} />
        <Items
          img={offeredImage}
          title={"Today's Offer"}
          items={offered}
          btn={"Order Your Favorite Food"}
        />
      </div>

      <Items
        title={"dessert"}
        img={DessertImage}
        info={
          "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
        }
        items={dessert}
        btn={"Order Your Favorite Food"}
      />

      <Items
        img={pizzaImage}
        title={"pizza"}
        items={pizza}
        btn={"Order Your Favorite Food"}
      />

      <Items
        img={saladImage}
        title={"salad"}
        items={salad}
        btn={"Order Your Favorite Food"}
      />

      <Items
        img={soupImage}
        title={"soup"}
        items={soup}
        btn={"Order Your Favorite Food"}
      />

      <Footer />
    </div>
  );
};

export default OurMenu;
