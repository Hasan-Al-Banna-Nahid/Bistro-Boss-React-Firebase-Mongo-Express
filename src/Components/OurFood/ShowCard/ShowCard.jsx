/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../Authentication/Provider/provider";
import { useNavigate } from "react-router-dom";
import { increment } from "../../Redux/Features/Cart/Cart";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ShowCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { image, name, recipe, _id, price } = item;

  const dispatch = useDispatch();
  const handleCart = () => {
    const cartItem = { MenuID: _id, name, price, image, email: user?.email };
    dispatch(increment());
    if (user && user?.email) {
      MySwal.fire({
        position: "top-end",
        icon: "success",
        title: "Item Added To Cart",
        showConfirmButton: false,
        timer: 1500,
      });
      fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };

  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} alt="" className="rounded-xl" />
          </figure>
          <p className="absolute rounded-lg top-8 bg-base-300 p-6 text-end right-1">
            ${price}
          </p>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-red-500">Dish : {name}</h2>
            <p>{recipe}</p>
            <div className="card-actions">
              <button
                onClick={handleCart}
                className="btn btn-outline btn-ghost border-b-2 border-b-[#222f3e]"
              >
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
