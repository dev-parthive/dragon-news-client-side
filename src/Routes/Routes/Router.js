import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Category from "../../pages/Category/Category/Category";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import News from "../../pages/News/News/News";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>{
                    return fetch('https://dragon-new-server-lac.vercel.app/news')
                }
            },
            {
                path: '/category/:id',
                element:<Category></Category>,
                loader: ({params}) =>{
                   return  fetch(`https://dragon-new-server-lac.vercel.app/category/${params.id}`)
                },
                
            },
            {
                path: '/news/:id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader:({params})=> fetch(`https://dragon-new-server-lac.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>

            },{
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
