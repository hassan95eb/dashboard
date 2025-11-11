import React, { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "qasem",
      username: "qasemB",
      email: "mahdicmptr@gmail.com",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = () => {
    // Add new user functionality
    console.log("Add new user");
  };

  const handleEdit = (id) => {
    // Edit user functionality
    console.log("Edit user:", id);
  };

  const handleDelete = (id) => {
    // Delete user functionality
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="w-full min-h-screen p-8 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            #000 2px,
            #000 4px
          )`,
          fontFamily: "monospace",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          مدیریت کاربران
        </h1>

        {/* Action Bar */}
        <div className="flex justify-between items-center mb-6">
          {/* Add Button */}
          <button
            onClick={handleAddUser}
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-4 shadow-lg transition-all duration-200 flex items-center justify-center"
            aria-label="Add new user"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="جستجو"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white rounded-lg px-4 py-3 pr-12 w-64 shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              dir="rtl"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" dir="rtl">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 border-b">
                    #
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 border-b">
                    نام
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 border-b">
                    نام کاربری
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 border-b">
                    ایمیل
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 border-b">
                    عملیات
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user, index) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-700 border-b">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 border-b">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 border-b">
                        {user.username}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 border-b">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 border-b">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="text-red-500 hover:text-red-700 transition-colors p-1"
                            aria-label="Delete user"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleEdit(user.id)}
                            className="text-yellow-500 hover:text-yellow-700 transition-colors p-1"
                            aria-label="Edit user"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .888.888l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      کاربری یافت نشد
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
