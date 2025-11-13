import React from "react";
import { HiPlusSm } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div className="container mx-auto pt-5 px-2">
      <h1 className="text-center text-2xl">Users</h1>
      <div className="flex justify-between items-center ">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg border-gray-500 px-2 py-1 focus-within:border-blue-300 focus-within:outline-none w-96 shadow-lg"
        />

        <Link
          to="/users/addUser"
          className="bg-green-500 rounded px-2 py-1 text-white"
        >
          <HiPlusSm color="#fff" size={25} />
        </Link>
      </div>
      <table className="table-fixed bg-gray-300 w-full mt-3 rounded-lg">
        <thead className="border-b ">
          <tr className="">
            <th className="w-1/12">#</th>
            <th className="w-3/12">Name</th>
            <th className="w-2/12">UserName</th>
            <th className="w-3/12">Email</th>
            <th className="w-3/12">Action</th>
          </tr>
        </thead>
        <tbody className="border-b border-gray-300">
          <tr className="bg-white">
            <td className="w-1/12 text-center py-1">1</td>
            <td className="w-3/12 text-center py-1">Hassan Amini</td>
            <td className="w-2/12 text-center py-1">carefree95</td>
            <td className="w-3/12 text-center py-1">
              hassanaminidev@gmail.com
            </td>
            <td className="w-3/12 text-center py-1 mx-auto ">
              <div className="flex justify-center items-center">
                <span className="mr-3 cursor-pointer">
                  <FaEdit size={20} color="#2791F5" />
                </span>
                <span className="cursor-pointer">
                  <MdDelete size={20} color="red" />
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
