import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "bg-[#96614D] text-white font-semibold rounded-xl"
      : "text-gray-700 hover:bg-[#d9a18d] hover:text-white rounded-xl";

  return (
    <div className="flex h-screen font-lora">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-[#FCE3D4] p-4 w-64 sm:relative sm:block`}
      >
        <div className="flex justify-between items-center mb-6">
          {/* <h1 className="text-2xl font-bold text-primary">FureverHome</h1> */}
          <img src="/fureverHome_logo.png" alt="logo" className="w-16 h-auto" />
          <h1 className="text-2xl font-semibold text-gray-800 ">
            FurEver Home
          </h1>
        </div>
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className={`block p-2 ${isActive("/dashboard")}`}
            >
              Pet List
            </Link>
          </li>
          <div className="border-t border-gray-300"></div>
          <li>
            <Link to="/user" className={`block p-2 ${isActive("/user")}`}>
              Users
            </Link>
          </li>
          <div className="border-t border-gray-300"></div>
          <li>
            <Link
              to="/adoption-forms"
              className={`block p-2 ${isActive("/adoption-forms")}`}
            >
              Adoption Forms
            </Link>
          </li>
          <div className="border-t border-gray-300"></div>
          <li>
            <Link
              to="/foster-forms"
              className={`block p-2 ${isActive("/foster-forms")}`}
            >
              Foster Forms
            </Link>
          </li>
          <div className="border-t border-gray-300"></div>
          <li>
            <Link
              to="/user-profile"
              className={`block p-2 ${isActive("/user-profile")}`}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
