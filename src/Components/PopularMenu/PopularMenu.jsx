/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import useMenus from "../Shared/Hooks/useMenus";
import ShowMenus from "../Shared/showMenus/showMenus";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Button from "../Shared/Button/Button";

const PopularMenu = () => {
  const [menus] = useMenus();
  const popular = menus.filter((menu) => menu.category === "popular");
  return (
    <div>
      <SectionTitle subTitle={"Check it Out"} Title={"From Our Popular Menu"} />
      <div>
        <div className="grid md:grid-cols-2 mx-auto gap-8">
          {popular.map((popular) => {
            return (
              <ShowMenus
                key={popular._id}
                img={popular.image}
                name={popular.name}
                info={popular.recipe}
                price={popular.price}
              />
            );
          })}
          <Button name={"View All Dish"} />
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
