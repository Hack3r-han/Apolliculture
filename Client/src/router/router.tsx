
import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import Loginregister from "../pages/Loginregister"
import Modal from "../pages/Modal"
import Dashboard from "../pages/Dashboard"
import Root from './Root'
import UserAdmin from "../pages/UserAdmin";

export const router = createBrowserRouter([
    {
        
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/home",
                element: <Home />,
               
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                
            },
            {
                path: "/loginregister",
                element: <Loginregister />,
            },
            {
                path: "/users",
                element: <UserAdmin />,
                
            },
        ],
        
    },
    {
        path: "/Modal",
        element: <Modal/>,
        
    },
]);

