import React, { useEffect, useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const handleDelelte = (id) => {
    swal({
      title: `Are you sure deleting ${id}?`,
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Users
          </h1>
          <p className="text-sm md:text-base text-slate-500">
            Manage your team members and keep contact details up to date
          </p>
        </header>

        <div className="bg-white/90 backdrop-blur rounded-3xl border border-white/60 shadow-[0_25px_50px_-20px_rgba(15,23,42,0.35)] px-6 md:px-10 py-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full md:max-w-sm px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all duration-200"
            />

            <Link
              to="/users/add"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-[0_18px_30px_-15px_rgba(15,23,42,0.55)] hover:bg-slate-800 hover:shadow-[0_20px_35px_-15px_rgba(15,23,42,0.65)] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-900/20 focus:ring-offset-2 focus:ring-offset-white"
            >
              <HiPlusSm color="#fff" size={24} />
              <span>Add user</span>
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-inner">
            <table className="w-full bg-white">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-[0.12em]">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">#</th>
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Username
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">Email</th>
                  <th className="px-4 py-3 text-center font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((t) => {
                  return (
                    <tr
                      key={t.id}
                      className="hover:bg-slate-50 transition-colors duration-150"
                    >
                      <td className="px-4 py-4 text-sm font-medium text-slate-500">
                        {t.id}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {t.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-500">
                        {t.username}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-500">
                        {t.email}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex justify-center items-center gap-3">
                          <Link to="/users/add/2" replace>
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800 transition-colors duration-150 cursor-pointer">
                              <FaEdit size={18} />
                            </span>
                          </Link>
                          <span
                            onClick={() => handleDelelte(t.id)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-rose-500 hover:bg-rose-100 hover:text-rose-600 transition-colors duration-150 cursor-pointer"
                          >
                            <MdDelete size={18} />
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
