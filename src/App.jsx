import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./core/private/layout";
import AdminDashboard from "./core/private/pets/AdminDashboard";
import UsersTable from "./core/private/user/UsersTable";
import Dashboard from "./core/public/dashboard";
import PetAdoptionForm from "./core/public/PetAdoptionForm";
import PetProfile from "./core/public/PetProfile";
import SearchPage from "./core/public/SearchPage";
import UserProfile from "./core/public/UserProfile";
import ForgotPassword from "./shared/ChangePassword/ForgetPassword";
import ResetPassword from "./shared/ChangePassword/ResetPassword";

const queryClient = new QueryClient();

function App() {
  // const token = false;

  const token = localStorage.getItem("token"); // Assuming token is saved in localStorage
  const role = localStorage.getItem("role"); // Get the role from localStorage

  const privateRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Navigate to="/dashboard" replace /> },
        { path: "dashboard", element: <AdminDashboard /> },
        { path: "user", element: <UsersTable /> },
      ],
    },
  ];

  const publicRoutes = [
    { path: "/profile/:id", element: <PetProfile /> },
    { path: "/adoption/:id", element: <PetAdoptionForm /> },
    { path: "/user/:id", element: <UserProfile /> },
    { path: "/search/:query?", element: <SearchPage /> },
    { path: "/", element: <Dashboard /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "reset-password/:token", element: <ResetPassword /> },
    // { path: "/create-pet", element: <CreatePet /> },
  ];

  // const router = token ? privateRoutes : publicRoutes;
  console.log("Role:", role);
  const router = role === "User" ? privateRoutes : publicRoutes; // Admin-specific routes

  const allRoutes = [
    ...router,
    { path: "*", element: <Navigate to="/" replace /> }, // Fallback route
  ];

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createBrowserRouter(allRoutes)} />
      </QueryClientProvider>
    </>
  );
}

export default App;
