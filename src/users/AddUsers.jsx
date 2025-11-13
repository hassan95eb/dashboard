import React, { useId } from "react";

export default function AddUsers() {
  const idBase = useId();
  return (
    <div className="container mx-auto pt-5 px-2 h-screen flex flex-col justify-center items-center">
      <main className="border border-gray-300 w-1/3 px-3 py-1 shadow-2xl rounded-lg">
        <h1 className="text-center font-bold text-2xl border-b-2">Add User</h1>
        <form className="mt-4">
          <div className="flex flex-col">
            <label htmlFor={`${idBase}-name`} className="mb-1">
              Name and LastName
            </label>
            <input
              type="text"
              className="border border-gray-400 rounded-lg py-1 px-2 focus-within:outline-none focus-within:border-blue-400"
              placeholder="Enter name ..."
              id={`${idBase}-name`}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor={`${idBase}-userName`} className="mb-1">
              Username
            </label>
            <input
              type="text"
              className="border border-gray-400 rounded-lg py-1 px-2 focus-within:outline-none focus-within:border-blue-400"
              placeholder="Enter userName..."
              id={`${idBase}-userName`}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor={`${idBase}-email`} className="mb-1">
              E-mail
            </label>
            <input
              type="email"
              className="border border-gray-400 rounded-lg py-1 px-2 focus-within:outline-none focus-within:border-blue-400"
              placeholder="Enter email ..."
              id={`${idBase}-email`}
            />
          </div>
          <h2>Address</h2>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6">
              <label htmlFor={`${idBase}-city`} className="mb-1">
                City
              </label>
              <input
                type="text"
                className="border border-gray-400 rounded-lg py-1 px-2 focus-within:outline-none focus-within:border-blue-400"
                placeholder="Enter city ..."
                id={`${idBase}-city`}
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <label htmlFor={`${idBase}-street`} className="mb-1">
                Street
              </label>
              <input
                type="text"
                className="border border-gray-400 rounded-lg py-1 px-2 focus-within:outline-none focus-within:border-blue-400"
                placeholder="Enter street ..."
                id={`${idBase}-street`}
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <label htmlFor={`${idBase}-suit`} className="mb-1">
                Suit
              </label>
              <input
                type="text"
                className="border border-gray-400 rounded-lg py-1 px-2 focus-within:outline-none focus-within:border-blue-400"
                placeholder="Enter suit ..."
                id={`${idBase}-suit`}
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <label htmlFor={`${idBase}-zipcode`} className="mb-1">
                Zipcode
              </label>
              <input
                type="text"
                className="border border-gray-400 rounded-lg py-1 px-2 focus-within:outline-none focus-within:border-blue-400"
                placeholder="Enter Zipcode ..."
                id={`${idBase}-zipcode`}
              />
            </div>
          </div>
          <div className="my-2 text-right">
            <button
              type="submit"
              className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-800 shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
