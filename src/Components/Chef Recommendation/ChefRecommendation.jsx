/* eslint-disable no-unused-vars */
import React from "react";
import useMenus from "../Shared/Hooks/useMenus";
import Card from "../Shared/Card/Card";

const ChefRecommendation = () => {
  const [menus] = useMenus();
  const popular = menus.filter((menu) => menu.category === "popular");
  return (
    <div className="grid md:grid-cols-3 mx-auto p-6">
      {Array.isArray(popular) &&
        popular.slice(0, 4).map((menu) => {
          return (
            <Card
              key={menu._id}
              img={menu.image}
              name={menu.name}
              recipe={menu.recipe}
              btn={"Add To Cart"}
            />
          );
        })}
    </div>
  );
};

export default ChefRecommendation;
