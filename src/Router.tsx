import { createBrowserRouter } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";

export const router = createBrowserRouter([
    {path:'/', element: <Welcome/>},
    {path:'/login', element: <Login/>},
])