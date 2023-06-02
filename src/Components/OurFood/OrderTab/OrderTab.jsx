/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ShowCard from "../ShowCard/ShowCard";

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3">
        {items.map((item) => {
          return <ShowCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default OrderTab;
