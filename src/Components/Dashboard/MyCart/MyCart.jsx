/* eslint-disable no-unused-vars */
import React from "react";
import useCart from "../../Shared/Hooks/useCart";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle.jsx";
import { FaTrashAlt, FaWallet } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const MyCart = () => {
  const [cart, refetch] = useCart();
  const price = cart.reduce((acc, obj) => obj.price + acc, 0);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <SectionTitle subTitle={"My Cart"} Title={"Wanna Add More"} />
      <div className="flex justify-center gap-12 text-2xl font-bold text-orange-600">
        <div>
          <h2>Total Item : {cart.length}</h2>
        </div>
        <div>
          <h2>Price : ${price}</h2>
        </div>
        <div className="flex gap-6">
          <div>
            {" "}
            <button className="text-red-900">Pay</button>
          </div>
          <div>
            <FaWallet />
          </div>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table mx-auto">
            {/* head */}
            <thead>
              <tr>
                <th className="font-bold text-2xl">
                  <label>#</label>
                </th>
                <th className="font-bold text-2xl">Item Image</th>
                <th className="font-bold text-2xl">Item Name</th>
                <th className="font-bold text-2xl">Price</th>
                <th className="font-bold text-2xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {cart.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <td className="text-[22px] font-bold">{index + 1}</td>
                    <td className="text-[22px] font-bold">
                      <img
                        src={item.image}
                        className="rounded-full w-12 h-12"
                        alt=""
                      />
                    </td>
                    <td className="text-[22px] font-bold">{item.name}</td>
                    <td className="text-[22px] font-bold">{item.price}</td>
                    <td className="text-[22px] font-bold text-red-600">
                      <button onClick={() => handleDelete(item._id)}>
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
