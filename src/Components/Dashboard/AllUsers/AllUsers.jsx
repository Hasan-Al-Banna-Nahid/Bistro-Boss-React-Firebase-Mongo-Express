/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaUsers, FaTrash, FaUserShield } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const AllUsers = () => {
  const { data: user = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, { method: "PATCH" })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          MySwal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Admin Now`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  return (
    <div>
      <SectionTitle subTitle={"All Users"} Title={"Handle User"} />
      <div className="overflow-x-auto">
        <table className="table table-zebra mx-auto text-2xl">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg font-bold">#</th>
              <th className="text-lg font-bold">Name</th>
              <th className="text-lg font-bold">Role</th>
              <th className="text-lg font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user.map((user, index) => {
              return (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td className="text-orange-500">
                    <button onClick={() => handleMakeAdmin(user)}>
                      {user.role === "admin" ? "Admin" : <FaUserShield />}
                    </button>
                  </td>
                  <td className="text-red-800">
                    <button>
                      {" "}
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
