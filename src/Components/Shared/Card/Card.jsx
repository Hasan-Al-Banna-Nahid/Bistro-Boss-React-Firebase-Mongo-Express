/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../Button/Button";

const Card = ({ img, name, recipe, btn }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-red-500">Dish : {name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline btn-ghost border-b-2 border-b-[#222f3e]">
              {btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
