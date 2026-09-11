import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import RootLayout from "../layout/RootLayout";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/coverage",
                element:<Coverage></Coverage>,
                loader: ()=> fetch("/warehouses.json").then(res=> res.json())
            }
        ]
    },
    {
        path:"/",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);