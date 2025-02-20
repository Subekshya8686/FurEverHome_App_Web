import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../../shared/AppBar/AppBar";
import ConfirmDialogBox from "../../shared/ConfirmDialogBox/ConfirmDialogBox";

const FosterApplicationForm = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to manage dialog visibility
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state for confirm button

  const [formData, setFormData] = useState({
    applicantName: "",
    applicantEmail: "",
    applicantPhone: "",
    districtOrCity: "",
    homeAddress: "",
    householdMembers: "",
    hasPets: false,
    petDetails: "",
    residenceType: "House", // Default to 'House'
    reasonForFostering: "",
    experienceWithPets: "",
    availabilityDuration: "Short-term", // Default to 'Short-term'
    abilityToHandleMedicalNeeds: false,
    hasFencedYard: false,
    agreementToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Check if the field is 'householdMembers' and the value is negative
    if (name === "householdMembers" && value < 0) {
      return; // Prevent setting a negative value
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNext = () => {
    setCurrentPage(2);
  };

  const handleBack = () => {
    setCurrentPage(1);
  };

  const handleReturn = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDialogConfirm = () => {
    setIsDialogOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-lora">
      <AppBar />

      <div className="flex justify-center items-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl w-full flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-2/3 pr-0 lg:pr-6 ">
            {currentPage === 1 ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Personal Details
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="applicantName"
                      className="block text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="applicantName"
                      name="applicantName"
                      value={formData.applicantName}
                      onChange={handleChange}
                      placeholder="Name"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="applicantEmail"
                      className="block text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="applicantEmail"
                      name="applicantEmail"
                      value={formData.applicantEmail}
                      onChange={handleChange}
                      placeholder="Email"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="applicantPhone"
                      className="block text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="applicantPhone"
                      name="applicantPhone"
                      value={formData.applicantPhone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="districtOrCity"
                      className="block text-gray-700"
                    >
                      City/District
                    </label>
                    <input
                      type="text"
                      id="districtOrCity"
                      name="districtOrCity"
                      value={formData.districtOrCity}
                      onChange={handleChange}
                      placeholder="City/District"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="homeAddress"
                      className="block text-gray-700"
                    >
                      Home Address
                    </label>
                    <input
                      type="text"
                      id="homeAddress"
                      name="homeAddress"
                      value={formData.homeAddress}
                      onChange={handleChange}
                      placeholder="Home Address"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="householdMembers"
                      className="block text-gray-700"
                    >
                      Household Members
                    </label>
                    <input
                      type="number"
                      id="householdMembers"
                      name="householdMembers"
                      value={formData.householdMembers}
                      onChange={handleChange}
                      placeholder="Household Members"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="hasPets" className="block text-gray-700">
                      Do you have any pets?
                    </label>
                    <input
                      type="checkbox"
                      id="hasPets"
                      name="hasPets"
                      checked={formData.hasPets}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="residenceType"
                      className="block text-gray-700"
                    >
                      Residence Type
                    </label>
                    <select
                      id="residenceType"
                      name="residenceType"
                      value={formData.residenceType}
                      onChange={handleChange}
                      className="select select-bordered w-full"
                    >
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="btn bg-[#6AA693] text-white w-full md:col-span-2"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Foster Details
                </h2>
                <form className="grid grid-cols-1 gap-4">
                  <div>
                    <label
                      htmlFor="reasonForFostering"
                      className="block text-gray-700"
                    >
                      Reason for Fostering
                    </label>
                    <textarea
                      id="reasonForFostering"
                      name="reasonForFostering"
                      value={formData.reasonForFostering}
                      onChange={handleChange}
                      placeholder="Reason for fostering"
                      className="textarea textarea-bordered w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="experienceWithPets"
                      className="block text-gray-700"
                    >
                      Experience with Pets
                    </label>
                    <textarea
                      id="experienceWithPets"
                      name="experienceWithPets"
                      value={formData.experienceWithPets}
                      onChange={handleChange}
                      placeholder="Experience with pets"
                      className="textarea textarea-bordered w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="availabilityDuration"
                      className="block text-gray-700"
                    >
                      Availability Duration
                    </label>
                    <select
                      id="availabilityDuration"
                      name="availabilityDuration"
                      value={formData.availabilityDuration}
                      onChange={handleChange}
                      className="select select-bordered w-full"
                    >
                      <option>Short-term</option>
                      <option>Long-term</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="abilityToHandleMedicalNeeds"
                      name="abilityToHandleMedicalNeeds"
                      checked={formData.abilityToHandleMedicalNeeds}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="abilityToHandleMedicalNeeds"
                      className="ml-2 text-gray-700"
                    >
                      Ability to handle medical needs
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hasFencedYard"
                      name="hasFencedYard"
                      checked={formData.hasFencedYard}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="hasFencedYard"
                      className="ml-2 text-gray-700"
                    >
                      Do you have a fenced yard?
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="agreementToTerms"
                      name="agreementToTerms"
                      checked={formData.agreementToTerms}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="agreementToTerms"
                      className="ml-2 text-gray-700"
                    >
                      Agreement to Terms
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="btn bg-[#6AA693] text-white w-1/3 md:col-span-2 flex"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="btn bg-[#6AA693] text-white w-1/3 md:col-span-2 flex"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <div className="mb-6 lg:mb-0">
              <button className="text-gray-600 text-xl" onClick={handleReturn}>
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Return to Previous Page
              </button>
            </div>
          </div>
        </div>
      </div>
      {isDialogOpen && (
        <ConfirmDialogBox
          open={isDialogOpen}
          handleClose={handleDialogClose}
          handleConfirm={handleDialogConfirm}
          isLoading={isLoading}
          label="Are you sure you want to return?"
        />
      )}
    </div>
  );
};

export default FosterApplicationForm;
