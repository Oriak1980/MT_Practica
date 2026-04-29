import { createHashRouter } from "react-router-dom";
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
import AddProduct from "./Pages/AddProduct";
import Ventas from "./Pages/Ventas";
import SelectService from "./Pages/SelectService";

export const router = createHashRouter([
    { path: '/', element: <Welcome /> },
    { path: '/login', element: <Login /> },
    { path: '/access', element: <Access /> },
    { path: '/home', element: <Home /> },
    { path: '/menu-vi', element: <MenuVI /> },
    { path: '/inventory', element: <Inventory /> },
    { path: '/add-product', element: <AddProduct /> },
    { path: '/ventas', element: <Ventas /> },
    { path: '/profile', element: <Profile /> },
    { path: '/wallet', element: <Wallet /> },
    { path: '/history', element: <History /> },
    { path: '/notification', element: <Notification /> },
    { path: '/admin', element: <Admin /> },
    { path: '/comisiones', element: <Comisiones /> },
    { path: '/terms', element: <Terms /> },
    { path: '/privacy', element: <Privacy /> },
    { path: '/recargas', element: <SelectService /> },
    { path: '/servicios', element: <SelectService /> },
    { path: '/tarjetas-regalo', element: <SelectService /> },
    { path: '/peaje', element: <SelectService /> },
    { path: '/internet', element: <SelectService /> },
    { path: '/tesoreria', element: <SelectService /> },
    { path: '/productos-financieros', element: <SelectService /> },
    { path: '/productos-catalogo', element: <SelectService /> },
])