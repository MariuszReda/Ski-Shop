import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../app/layout/App";
import Catalog from "../features/catalog/Catalog";
import ProductDetailsPage from "../features/catalog/ProductDetailsPage";
import AboutPage from "../features/about/AboutPage";
import HomePage from "../features/Home/HomePage";
import ContactPage from "../features/contact/ContactPage";
import ServerError from "../app/errors/ServerError";
import NotFound from "../app/errors/NotFound";

export const router = createBrowserRouter([
    {    
        path: "/",
        element: <App/> ,
        children:[
            {path:"", element:<HomePage/>},
            {path:'catalog',element:<Catalog/>},
            {path:'catalog/:id',element:<ProductDetailsPage/>},
            {path:'about',element:<AboutPage/>},
            {path:'contact',element:<ContactPage/>},
            {path:'server-error',element:<ServerError/>},
            {path:'not-found',element:<NotFound/>},
            {path: '*', element: <Navigate replace to='/not-found'/>}
        ]
    }    
],
{
    future: {
        v7_relativeSplatPath: true
    }
})