import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import Loginregister from "../pages/Loginregister"
import Dashboard from "../pages/Dashboard"
import Modal from "../pages/Modal"
import Root from './Root'


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
            }
            {
                path: "/modal",
                element: <Modal />,
            }

        ],
    },
]);