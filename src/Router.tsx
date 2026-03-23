import { createBrowserRouter } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Access from "./Pages/Access";
import Home from "./Pages/Home";

export const router = createBrowserRouter([
    {path:'/', element: <Welcome/>},
    {path:'/login', element: <Login/>},
    {path:'/access', element: <Access/>},
    {path:'/home', element: <Home/>},
])