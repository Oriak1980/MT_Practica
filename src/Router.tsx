import { createBrowserRouter } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Access from "./Pages/Access";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Wallet from "./Pages/Wallet";
import History from "./Pages/History";
import Notification from "./Pages/Notification";
import Admin from "./Pages/Admin";
import Comisiones from "./Pages/Comisiones";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import MenuVI from "./Pages/MenuVI";
import Inventory from "./Pages/Inventory";

export const router = createBrowserRouter([
    { path: '/', element: <Welcome /> },
    { path: '/login', element: <Login /> },
    { path: '/access', element: <Access /> },
    { path: '/home', element: <Home /> },
    { path: '/menu-vi', element: <MenuVI /> },
    { path: '/inventory', element: <Inventory /> },
    { path: '/profile', element: <Profile /> },
    { path: '/wallet', element: <Wallet /> },
    { path: '/history', element: <History /> },
    { path: '/notification', element: <Notification /> },
    { path: '/admin', element: <Admin /> },
    { path: '/comisiones', element: <Comisiones /> },
    { path: '/terms', element: <Terms /> },
    { path: '/privacy', element: <Privacy /> }
])