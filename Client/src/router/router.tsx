import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
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
                path: "/users",
                element: <UserAdmin />,
                
            },
        ],
    },
]);