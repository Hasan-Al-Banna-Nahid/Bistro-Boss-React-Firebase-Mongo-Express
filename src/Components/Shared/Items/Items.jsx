/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ShowMenus from "../showMenus/showMenus";
import Button from "../Button/Button";
import Banner from "../../Shared/Banner/Banner";
import { Link } from "react-router-dom";

const Items = ({ items, btn, img, title, info }) => {
  return (
    <div>
      <Banner img={img} title={title} info={info} />
      <div className="grid grid-cols-2">
        {items &&
          items.map((item) => {
            return <ShowMenus key={item._id} item={item} />;
          })}
        <div />
        <div />
      </div>
      <Link to={`/order/${title}`}>
        <Button name={btn} />
      </Link>
    </div>
  );
};

export default Items;
