import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../../shared/AppBar/AppBar";
import Footer from "../../shared/Footer/Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  const pets = [
    {
      id: 1,
      name: "Buddy",
      species: "Dog",
      age: "2 years",
      image: "/path/to/dog.jpg",
    },
    {
      id: 2,
      name: "Whiskers",
      species: "Cat",
      age: "1 year",
      image: "/path/to/cat.jpg",
    },
    {
      id: 3,
      name: "Chirpy",
      species: "Bird",
      age: "6 months",
      image: "/path/to/bird.jpg",
    },
    {
      id: 4,
      name: "Fluffy",
      species: "Rabbit",
      age: "8 months",
      image: "/path/to/rabbit.jpg",
    },
  ];

  const petBreeds = new Array(7).fill(""); // Placeholder for 7 breeds

  const homeRef = useRef(null);
  const breedsRef = useRef(null);
  const petsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop - 50,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <AppBar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        breedsRef={breedsRef}
        petsRef={petsRef}
        footerRef={footerRef}
      />

      <div
        ref={homeRef}
        className="flex flex-col lg:flex-row items-center justify-center px-5 md:px-10 lg:px-20 gap-10 h-[85vh] py-10"
        style={{ backgroundColor: "#FCDDC9" }}
      >
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src="/corgi.png"
            alt="Corgi"
            className="w-48 sm:w-56 md:w-64 lg:w-96 h-auto"
          />
        </div>

        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 font-poppins">
            Welcome to Your Dashboard
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black font-poppins max-w-lg mx-auto lg:mx-0">
            Manage your listed pets and monitor adoption requests.
          </p>
        </div>
      </div>

      <div ref={breedsRef} className="p-8">
        <h3 className="text-xl font-bold text-center mb-6 text-gray-900 font-poppins">
          Popular Pet Breeds
        </h3>
        <div className="flex justify-center space-x-6">
          {petBreeds.map((_, index) => (
            <div
              key={index}
              className="w-32 h-32 rounded-full bg-gray-300 flex justify-center items-center shadow-sm"
            >
              <span className="text-gray-500 text-lg font-semibold">
                Breed {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div ref={petsRef} className="p-8 mx-20 justify-center flex-col">
        <h3 className="text-xl font-bold text-center mb-6 text-gray-900 font-poppins">
          Pets Available For Adoption
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pets.map((pet) => (
            <div
              key={pet.id}
              onClick={() => {
                navigate(`/profile/${pet.id}`);
              }}
              className="rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow duration-300 border-2 cursor-pointer"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-6 text-center relative">
                <h4 className="text-xl font-semibold text-gray-800 font-poppins mb-2">
                  {pet.name}
                </h4>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-600 text-sm absolute bottom-4 right-6"
                >
                  {"View More"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer footerRef={footerRef} />
    </div>
  );
};

export default Dashboard;
