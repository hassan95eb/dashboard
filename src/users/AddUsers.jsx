import axios from "axios";
import React, { useId, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddUsers() {
  const idBase = useId();
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((res) => {
        console.log(res);
        setData();
      });
  };
  const { userId } = useParams();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <main className="bg-white/95 backdrop-blur w-full max-w-2xl rounded-3xl shadow-[0_25px_50px_-12px_rgba(15,23,42,0.25)] border border-white/60 overflow-hidden">
        <div className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            {userId ? "Edit User" : "Add New User"}
          </h1>
          <p className="text-slate-200 mt-2 text-sm md:text-base max-w-sm">
            Fill in the details
          </p>
        </div>

        <div className="p-8 space-y-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <label
                htmlFor={`${idBase}-name`}
                className="block text-sm font-semibold uppercase tracking-[0.08em] text-slate-500"
              >
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all duration-200 placeholder:text-slate-400"
                placeholder="John Doe"
                id={`${idBase}-name`}
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div className="space-y-3">
              <label
                htmlFor={`${idBase}-userName`}
                className="block text-sm font-semibold uppercase tracking-[0.08em] text-slate-500"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all duration-200 placeholder:text-slate-400"
                placeholder="johndoe"
                id={`${idBase}-userName`}
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
            </div>

            <div className="space-y-3">
              <label
                htmlFor={`${idBase}-email`}
                className="block text-sm font-semibold uppercase tracking-[0.08em] text-slate-500"
              >
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all duration-200 placeholder:text-slate-400"
                placeholder="john.doe@example.com"
                id={`${idBase}-email`}
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
          </div>

          <div className="pt-2">
            <h2 className="text-lg font-semibold text-slate-900 mb-6 pb-3 border-b border-slate-200 tracking-tight">
              Address Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label
                  htmlFor={`${idBase}-city`}
                  className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  City
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all duration-200 placeholder:text-slate-400"
                  placeholder="New York"
                  id={`${idBase}-city`}
                  value={data.address.city}
                  onChange={(e) =>
                    setData({
                      ...data,
                      address: { ...data.address, city: e.target.value },
                    })
                  }
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor={`${idBase}-street`}
                  className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  Street
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all duration-200 placeholder:text-slate-400"
                  placeholder="123 Main St"
                  id={`${idBase}-street`}
                  value={data.address.street}
                  onChange={(e) =>
                    setData({
                      ...data,
                      address: { ...data.address, street: e.target.value },
                    })
                  }
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor={`${idBase}-suite`}
                  className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  Suite
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all duration-200 placeholder:text-slate-400"
                  placeholder="Apt 4B"
                  id={`${idBase}-suite`}
                  value={data.address.suite}
                  onChange={(e) =>
                    setData({
                      ...data,
                      address: { ...data.address, suite: e.target.value },
                    })
                  }
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor={`${idBase}-zipcode`}
                  className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all duration-200 placeholder:text-slate-400"
                  placeholder="10001"
                  id={`${idBase}-zipcode`}
                  value={data.address.zipcode}
                  onChange={(e) =>
                    setData({
                      ...data,
                      address: { ...data.address, zipcode: e.target.value },
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="pt-2 space-y-3 md:space-y-0 md:flex md:items-center md:gap-3">
            <button
              type="button"
              onClick={() => {
                navigate(-1);
              }}
              className="w-full md:w-auto px-6 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-700 font-medium shadow-sm hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-900/10 focus:ring-offset-2 focus:ring-offset-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full md:flex-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-2xl shadow-[0_15px_30px_-12px_rgba(15,23,42,0.45)] hover:shadow-[0_18px_35px_-12px_rgba(15,23,42,0.55)] transition-all duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-slate-900/20 focus:ring-offset-2 focus:ring-offset-white active:scale-[0.99]"
            >
              Create User Account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
