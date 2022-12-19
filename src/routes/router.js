import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Update from "../pages/Home/Update/Update";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },{
        path:'/selectedItems/:userId',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://test-app-server.vercel.app/selectedItems/${params.userId}`)
    }
])