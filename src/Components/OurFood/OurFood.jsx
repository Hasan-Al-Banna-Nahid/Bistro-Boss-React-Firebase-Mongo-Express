/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Cover from "../Shared/Cover/Cover";
import OrderImage from "../../../public/assets/shop/banner2.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenus from "../Shared/Hooks/useMenus";
import { useParams } from "react-router-dom";
import Card from "../Shared/Card/Card";
import OrderTab from "./OrderTab/OrderTab";

const OrderFood = () => {
  const [menus] = useMenus();
  const salad = menus.filter((menu) => menu.category === "salad");
  const pizza = menus.filter((menu) => menu.category === "pizza");
  const soup = menus.filter((menu) => menu.category === "soup");
  const dessert = menus.filter((menu) => menu.category === "dessert");
  const drinks = menus.filter((menu) => menu.category === "drinks");
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  return (
    <div>
      <Navbar />
      <Cover img={OrderImage} title={"Order"} subTitle={"Order Your Food"} />
      <div className="mx-auto w-full my-12">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="mx-auto w-96">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default OrderFood;
