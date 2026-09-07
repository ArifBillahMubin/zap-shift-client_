import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            }
        ]
    },
]);