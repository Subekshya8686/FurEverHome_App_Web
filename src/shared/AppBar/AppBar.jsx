import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../core/public/login";

const AppBar = ({
  scrollToSection,
  homeRef,
  breedsRef,
  petsRef,
  footerRef,
}) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle opening the login modal
  const openLoginModal = () => {
    setIsLoginOpen(true);
    setMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-10" style={{ backgroundColor: "#FCDDC9" }}>
      <div className="flex justify-between items-center p-4 px-6">
        {/* Logo */}
        <img src="/fureverHome_logo.png" alt="logo" className="w-20 h-auto" />
        <div className="flex space-x-8">
          <button
            className="text-black font-poppins"
            onClick={() => scrollToSection(homeRef)}
          >
            Home
          </button>
          <div className="divider divider-horizontal"></div>
          <button
            className="text-black font-poppins"
            onClick={() => scrollToSection(breedsRef)}
          >
            Breed
          </button>
          <div className="divider divider-horizontal"></div>
          <button
            className="text-black font-poppins"
            onClick={() => scrollToSection(petsRef)}
          >
            Available Pets
          </button>
          <div className="divider divider-horizontal"></div>
          <button
            className="text-black font-poppins"
            onClick={() => scrollToSection(footerRef)}
          >
            Contact
          </button>
        </div>

        {/* Login/Register Buttons */}
        <div className="flex space-x-2">
          <button
            className="flex items-center px-3 py-2 h-10 bg-[#E2875C] text-white text-sm font-poppins rounded-3xl shadow-md hover:bg-[#C76D4D]"
            onClick={() => console.log("Search clicked")}
          >
            <MagnifyingGlassIcon className="w-5 h-5 mr-1" />
            Search
          </button>

          <div ref={menuRef} className="relative">
            <div className="flex-shrink-0 relative">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <UserCircleIcon className="w-10 h-10 text-[#A35E47] hover:text-[#8A4D3B]" />
              </button>
            </div>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
                {/* <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button> */}
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setIsLoginOpen(true);
                    setMenuOpen(false);
                  }}
                >
                  Login
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            {/* Pass the close function to the Login component */}
            <Login onClose={() => setIsLoginOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AppBar;
