import React from "react";

const UsersTable = () => {
  const columns = ["User ID", "Name", "Role", "Email", "Status", "Action"];
  const rows = [
    {
      id: "001",
      name: "Alice",
      role: "Admin",
      email: "alice@example.com",
      status: "Active",
    },
    {
      id: "002",
      name: "Bob",
      role: "User",
      email: "bob@example.com",
      status: "Inactive",
    },
  ];

  return (
    <div className="flex-1 px-4 bg-gray-100 overflow-y-auto">
      {/* Header */}
      <div className="flex flex-col justify-between mb-4">
        <div className="avatar mt-4 sm:mt-0 justify-end">
          <div className="w-8 sm:w-10 rounded-full">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <h2 className="text-lg sm:text-2xl font-bold">Users List</h2>
          <h2 className="text-lg sm:text-2xl font-bold">Users Add</h2>
        </div>
      </div>

      {/* Table */}
      <div className="bg-base-100 shadow-xl rounded-lg p-4 sm:p-6 max-w-full h-full">
        <h3 className="text-md sm:text-lg font-bold mb-4">Users</h3>
        <div className="h-[400px] overflow-x-auto">
          <table className="table-auto w-[100%] text-sm sm:text-base table-pin-cols">
            <thead className="sticky top-0 bg-white z-10">
              <tr>
                {columns.map((column, index) => (
                  <th key={index} className={`p-2 text-left `}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{user.id}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">
                    <span
                      className={`badge ${
                        user.status === "Active"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <button className="btn btn-sm btn-outline btn-success">
                        View
                      </button>
                      <button className="btn btn-sm btn-outline btn-warning">
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
