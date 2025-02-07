import { createBrowserRouter } from "react-router-dom";
import App from "../app/layout/App";
import Catalog from "../features/catalog/Catalog";
import ProductDetailsPage from "../features/catalog/ProductDetailsPage";
import AboutPage from "../features/about/AboutPage";
import HomePage from "../features/Home/HomePage";
import ContactPage from "../features/contact/ContactPage";
import ServerError from "../app/errors/ServerError";

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
        ]
    }    
],
{
    future: {
        v7_relativeSplatPath: true
    }
})