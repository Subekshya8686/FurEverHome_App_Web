import { PlusCircleIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";

const PetAdoptionForms = () => {
  const [isCreatePetOpen, setIsCreatePetOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [rows, setRows] = useState([]);
  console.log("Pet data:", rows);

  useEffect(() => {
    // Fetch pet data (this can be done using a real API call)
    const fetchPetData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/adopt/getAll`
        );
        setRows(response.data.data);

        console.log("Pet data:", response.data.data);
      } catch (error) {
        console.error("Error fetching pet data:", error);
      }
    };

    fetchPetData();
  }, []);

  const columns = ["Applicant Name", "Type", "Breed", "Vaccinated", "Status", "Action"];

  // const filteredRows = rows.filter(
  //   (pet) =>
  //     pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //     (typeFilter ? pet.type === typeFilter : true) &&
  //     (statusFilter ? pet.status === statusFilter : true)
  // );

  return (
    <div className="flex-1 px-4 font-lora">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-2xl font-bold">Pet List</h2>
        <button onClick={() => setMenuOpen((prev) => !prev)}>
          <UserCircleIcon className="w-12 h-12 text-[#A35E47] hover:text-[#8A4D3B]" />
        </button>
      </div>
      {menuOpen && (
        <div className="absolute right-10 z-10 w-40 bg-white shadow-lg rounded-lg p-2">
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            // onClick={handleProfileClick}
          >
            Profile
          </button>

          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            // onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}

      <div className="bg-base-100 shadow-xl rounded-lg p-4 sm:p-6 max-w-full h-[80vh]">
        <>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 mb-2 items-center">
              <h3 className="text-md sm:text-lg font-bold">Filter Options</h3>
              <select
                className="select select-bordered rounded-xl"
                defaultValue="All Types"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
              <select
                className="select select-bordered rounded-xl"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Adopted">Adopted</option>
              </select>
            </div>
            <div className="flex gap-4 mb-2 items-center">
              <input
                type="text"
                placeholder="Search by Name"
                className="input input-bordered h-10 w-[60%] max-w-xs rounded-3xl items-center flex"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="text-md sm:text-lg font-bold flex items-center gap-2"
                onClick={() => setIsCreatePetOpen(true)}
              >
                Add Pet
                <PlusCircleIcon className="w-8 h-8" />
              </button>
            </div>
          </div>
          {/* Table Wrapper with scroll */}
          <div className="h-[500px] sm:h-[400px] overflow-y-auto">
            <table className="table-auto w-full text-sm sm:text-base">
              <thead className="sticky top-0 bg-white z-10">
                <tr>
                  {columns.map((column, index) => (
                    <th key={index} className="p-2 text-left">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((pet, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{pet.name}</td>
                    <td className="p-2">{pet.type}</td>
                    <td className="p-2">{pet.breed}</td>
                    <td className="p-2">
                      <span
                        className={`badge ${
                          pet.vaccinated ? "badge-success" : "badge-error"
                        }`}
                      >
                        {pet.vaccinated ? "Yes" : "No"}
                      </span>
                    </td>
                    <td className="p-2">
                      <span
                        className={`badge ${
                          pet.adoptionStatus === "available"
                            ? "badge-info"
                            : pet.adoptionStatus === "adopted"
                            ? "badge-success"
                            : pet.adoptionStatus === "in foster care"
                            ? "badge-warning"
                            : ""
                        }`}
                      >
                        {pet.adoptionStatus}
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
        </>
      </div>
    </div>
  );
};

export default PetAdoptionForms;
