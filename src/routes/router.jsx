import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import RootLayout from "../layout/RootLayout";
import Coverage from "../pages/Coverage/Coverage";

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
]);