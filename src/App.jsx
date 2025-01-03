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
import Home from "./core/public/home";
import Login from "./core/public/login";
import PetProfile from "./core/public/PetProfile";
import Register from "./core/public/register";

const queryClient = new QueryClient();

function App() {
  const token = false;
  const privateRoutes = [
    { path: "/register", element: <Register /> },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Navigate to="/dashboard" replace /> },
        { path: "dashboard", element: <AdminDashboard /> }, // Admin Dashboard route
        { path: "user", element: <UsersTable /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/home", element: <Home /> },
  ];
  const publicRoutes = [
    { path: "/register", element: <Register /> },
    { path: "/profile/:id", element: <PetProfile /> },
    { path: "/login", element: <Login /> },
    { path: "/", element: <Dashboard /> },
  ];

  const router = token ? privateRoutes : publicRoutes;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createBrowserRouter(router)} />
      </QueryClientProvider>
    </>
  );
}

export default App;
