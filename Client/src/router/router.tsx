
import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import Modal from "../pages/Modal"
import Dashboard from "../pages/Dashboard"
import ProductList from "../pages/ProductList"
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
                path: "/Dashboard",
                element: <Dashboard />,
                
            },
             
            {   path: "/ProductList", 
                element: <ProductList/>,
            },
            {
                path: "/Modal",
                element: <Modal/>,
            }

        ],
    },
]);

