/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import useMenus from "../Shared/Hooks/useMenus";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import BannerImage from "../../../public/assets/home/chef-service.jpg";
import Items from "../Shared/Items/Items";

const PopularMenu = () => {
  const [menus] = useMenus();
  const popular = menus.filter((menu) => menu.category === "popular");
  return (
    <div>
      <SectionTitle subTitle={"Check it Out"} Title={"From Our Popular Menu"} />
      <div>
        <div>
          <Items
            img={BannerImage}
            title={"Popular Menu"}
            info={
              "Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus"
            }
            btn={"View Full Menu"}
            items={popular}
          />
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
