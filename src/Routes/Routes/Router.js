import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Category from "../../pages/Category/Category/Category";
import Home from "../../pages/Home/Home/Home";
import News from "../../pages/News/News/News";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>{
                    return fetch('https://dragon-new-server-i43d4ina9-dev-parthive.vercel.app/news')
                }
            },
            {
                path: '/category/:id',
                element:<Category></Category>,
                loader: ({params}) =>{
                   return  fetch(`https://dragon-new-server-i43d4ina9-dev-parthive.vercel.app/category/${params.id}`)
                },
                
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader:({params})=> fetch(`https://dragon-new-server-i43d4ina9-dev-parthive.vercel.app/news/${params.id}`)
            }
        ]
    }
])
