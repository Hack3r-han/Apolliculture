
import  {createBrowserRouter} from "react-router-dom"
import Home from '../pages/Home'
import Loginregister from "../pages/Loginregister"
import Dashboard from "../pages/Dashboard"
import ProductList from "../pages/ProductList"
import Root from './Root'
import UserAdmin from "../pages/UserAdmin";


export const router = createBrowserRouter([
    {
        
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
               
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                
            },
             
            {   path: "/ProductList", 
                element: <ProductList/>,
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
]);

