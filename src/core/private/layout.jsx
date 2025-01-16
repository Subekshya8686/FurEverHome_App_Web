import React from "react";
import { Link, Outlet } from "react-router-dom"; // Link for navigation

const Layout = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full sm:w-64 bg-[#FCE3D4] p-4 sm:h-full hidden sm:block">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-primary">
            FureverHome
          </h1>
        </div>
        <ul className="menu p-4 bg-base-100 rounded-box">
          <li className="mb-2">
            <Link to="/dashboard">Pet List</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 bg-gray-100">
        {/* Render child routes inside this area */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
