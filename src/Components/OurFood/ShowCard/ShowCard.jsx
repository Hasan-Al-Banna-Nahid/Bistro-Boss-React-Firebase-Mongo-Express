/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ShowCard = ({ item }) => {
  const { image, name, recipe, btn } = item;
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-red-500">Dish : {name}</h2>
            <p>{recipe}</p>
            <div className="card-actions">
              <button className="btn btn-outline btn-ghost border-b-2 border-b-[#222f3e]">
                {"Add To Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
