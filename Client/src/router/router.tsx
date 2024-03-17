import  {createBrowserRouter} from "react-router-dom"
import Home from '../pages/Home'
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import Dashboard from "../pages/Dashboard"
import ProductList from "../pages/ProductList"
import Root from './Root'
import UserAdmin from "../pages/UserAdmin";
import ShoppingCar from "../pages/ShoppingCar"



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
                path: "/loginPage",
                element: <LoginPage />,
            },
            {
                path: "/registerPage",
                element: <RegisterPage />,
            },
            {
                path: "/users",
                element: <UserAdmin />,
                
            },
        ],   
    },
    {
        path: "/ShoppingCar",
    element:<ShoppingCar/>,
    },
])   

