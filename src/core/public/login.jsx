import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//     getValues,
//   } = useForm();

//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     const { email, password } = data;

//     // Prepare formData object
//     const formData = { password };

//     // Define the email pattern
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,}$/;

//     // Check if it's an email or username and add it to formData
//     if (emailPattern.test(email)) {
//       formData.email = email; // It's an email
//     }

//     // Log formData to the console (can be used for API call)
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-8">
//       <div
//         className="container mx-auto max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden flex"
//         style={{ height: "90vh" }}
//       >
//         {/* Left Section: Pet Image */}
//         <div className="hidden lg:flex w-1/2 bg-[#96614D] items-center justify-center">
//           <div className="rounded-lg overflow-hidden">
//             <img src="pet-image.png" alt="Pets" className="w-full h-auto" />
//           </div>
//         </div>

//         {/* Right Section: Login Form */}
//         <div className="w-full lg:w-1/2 p-10 sm:p-20 flex flex-col justify-center">
//           <h1 className="text-3xl font-bold mb-2 text-[#FF8A65]">
//             Welcome Back 🐾
//           </h1>
//           <p className="text-sm text-gray-500 mb-8">
//             Today is a new day. It’s your day. You shape it. <br />
//             Sign in to start managing your pet's journey.
//           </p>

//           {/* Login Form */}
//           <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
//             {/* Email or Username */}
//             <label className="form-control w-full mb-6 relative">
//               <div className="label">
//                 <span className="label-text">Email</span>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Email"
//                 {...register("email", {
//                   required: "Please enter your email.",
//                 })}
//                 className="input input-bordered w-full rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-[#FF8A65] transition-all duration-200"
//               />
//               {/* Error Message for Email/Username */}
//               {errors.email && (
//                 <div className="absolute left-0 bottom-[-1.25rem] w-full text-red-500 text-xs">
//                   {errors.email.message}
//                 </div>
//               )}
//             </label>

//             {/* Password */}
//             <label className="form-control w-full mb-6 relative">
//               <div className="label">
//                 <span className="label-text">Password</span>
//               </div>
//               <input
//                 type="password"
//                 placeholder="At least 8 characters"
//                 {...register("password", {
//                   required: "Please enter your password.",
//                 })}
//                 className="input input-bordered w-full rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-[#FF8A65] transition-all duration-200"
//               />
//               {/* Error Message for Password */}
//               {errors.password && (
//                 <div className="absolute left-0 bottom-[-1.25rem] w-full text-red-500 text-xs">
//                   {errors.password.message}
//                 </div>
//               )}
//             </label>

//             {/* Forgot Password */}
//             <div className="text-right mb-4">
//               <a href="#" className="text-sm text-[#FF8A65] hover:underline">
//                 Forgot Password?
//               </a>
//             </div>

//             {/* Sign In Button */}
//             <button
//               type="submit"
//               className="btn w-full bg-[#66AEA6] text-white hover:bg-[#30756D] rounded-lg py-2 transition-colors duration-300"
//             >
//               Sign In
//             </button>
//           </form>

//           {/* Sign Up */}
//           <p className="text-center mt-4 text-sm text-gray-500">
//             Don’t have an account?{" "}
//             <a
//               className="text-[#FF8A65] hover:underline"
//               onClick={() => navigate("/register")}
//             >
//               Sign up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

const LoginModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password } = data;

    const formData = { password };
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) {
      formData.email = email;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div
        className="container mx-auto max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden flex"
        style={{ height: "90vh" }}
      >
        {/* Left Section */}
        <div className="hidden lg:flex w-1/2 bg-[#96614D] items-center justify-center">
          <div className="rounded-lg overflow-hidden">
            <img src="pet-image.png" alt="Pets" className="w-full h-auto" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-10 sm:p-20 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2 text-[#FF8A65]">
            Welcome Back 🐾
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Today is a new day. It’s your day. You shape it. <br />
            Sign in to start managing your pet's journey.
          </p>

          {/* Login Form */}
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <label className="form-control w-full mb-6 relative">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                placeholder="Email"
                {...register("email", { required: "Please enter your email." })}
                className="input input-bordered w-full rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-[#FF8A65] transition-all duration-200"
              />
              {errors.email && (
                <div className="absolute left-0 bottom-[-1.25rem] w-full text-red-500 text-xs">
                  {errors.email.message}
                </div>
              )}
            </label>

            {/* Password */}
            <label className="form-control w-full mb-6 relative">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                placeholder="At least 8 characters"
                {...register("password", {
                  required: "Please enter your password.",
                })}
                className="input input-bordered w-full rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-[#FF8A65] transition-all duration-200"
              />
              {errors.password && (
                <div className="absolute left-0 bottom-[-1.25rem] w-full text-red-500 text-xs">
                  {errors.password.message}
                </div>
              )}
            </label>

            {/* Forgot Password */}
            <div className="text-right mb-4">
              <a href="#" className="text-sm text-[#FF8A65] hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="btn w-full bg-[#66AEA6] text-white hover:bg-[#30756D] rounded-lg py-2 transition-colors duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up */}
          <p className="text-center mt-4 text-sm text-gray-500">
            Don’t have an account?{" "}
            <a
              className="text-[#FF8A65] hover:underline"
              onClick={() => navigate("/register")}
            >
              Sign up
            </a>
          </p>

          {/* Close Modal Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
