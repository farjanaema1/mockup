import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/main";
import Home from "../home/home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            // {
            //     path:'/login',
            //     element:<LogIn></LogIn>
            // },
            // {
            //     path:'/signup',
            //     element:<SignUp></SignUp>
            // },
            // {
            //     path:'appointment',
            //     element:<Appointment></Appointment>
            // },
            // {
            //     path:'aboutUs',
            //     element:<AboutUs></AboutUs>
            // }
        ]
    },
  
])
export default router;