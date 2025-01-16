import React from "react";

const AdminDashboard = () => {
  const columns = ["Pet ID", "Name", "Type", "Breed", "Status", "Action"];
  const rows = [
    {
      id: "001",
      name: "Charlie",
      type: "Dog",
      breed: "Breed A",
      status: "Pending",
    },
    {
      id: "002",
      name: "Charlie",
      type: "Dog",
      breed: "Breed A",
      status: "Pending",
    },
    {
      id: "003",
      name: "Charlie",
      type: "Dog",
      breed: "Breed A",
      status: "Pending",
    },
    {
      id: "004",
      name: "Charlie",
      type: "Dog",
      breed: "Breed A",
      status: "Pending",
    },
    {
      id: "005",
      name: "Charlie",
      type: "Dog",
      breed: "Breed A",
      status: "Pending",
    },
    {
      id: "006",
      name: "Charlie",
      type: "Dog",
      breed: "Breed A",
      status: "Pending",
    },
    {
      id: "007",
      name: "Charlie",
      type: "Dog",
      breed: "Breed A",
      status: "Adopted",
    },
    {
      id: "008",
      name: "Charlie",
      type: "Dog",
      breed: "Breed A",
      status: "Pending",
    },
    {
      id: "009",
      name: "Charlie",
      type: "Dog",
      breed: "Breed A",
      status: "Pending",
    },
    {
      id: "010",
      name: "Charlie",
      type: "Dog",
      breed: "Breed A",
      status: "Pending",
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
          <h2 className="text-lg sm:text-2xl font-bold">Pet List</h2>
          <h2 className="text-lg sm:text-2xl font-bold">Pet Add</h2>
        </div>
      </div>

      <div className="bg-base-100 shadow-xl rounded-lg p-4 sm:p-6 max-w-full h-full max-h-full">
        <h3 className="text-md sm:text-lg font-bold mb-4">Pet List</h3>
        <div className="h-[500px] sm:h-[400px] overflow-x-auto max-h-full">
          <table className="table-auto w-[100%] h-[100%] text-sm sm:text-base">
            <thead className="sticky top-0 bg-white z-10">
              <tr>
                {columns.map((column, index) => (
                  <th key={index} className={`p-2 text-left`}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((pet, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{pet.id}</td>
                  <td className="p-2">{pet.name}</td>
                  <td className="p-2">{pet.type}</td>
                  <td className="p-2">{pet.breed}</td>
                  <td className="p-2">
                    <span
                      className={`badge ${
                        pet.status === "Pending"
                          ? "badge-info"
                          : "badge-success"
                      }`}
                    >
                      {pet.status}
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

export default AdminDashboard;
