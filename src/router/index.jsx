// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home.jsx";
import MainPage from "../pages/mainpage.jsx";
import Bookshelf from "../components/bookshelf.jsx";
 
const router = createBrowserRouter([    
    {
        path:'/',
        element: <MainPage />,
    },
    {
        path:'/home',
        element: <Home />,
    },
    {
        path:'/bookshelf',
        element: <Bookshelf />,
    }

])
 
export default router