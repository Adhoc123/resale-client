import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AllUsers from "../../Pages/Dashboard/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import ElectricCar from "../../Pages/Home/Categories/ElectricCar/ElectricCar";
import LuxuryCar from "../../Pages/Home/Categories/LuxuryCar/LuxuryCar";
import Microbus from "../../Pages/Home/Categories/Mircrobus/Microbus";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/microbus/:id',
                element: <PrivateRoute><Microbus></Microbus></PrivateRoute>
            },
            {
                path: '/luxurycar/:id',
                element: <PrivateRoute><LuxuryCar></LuxuryCar></PrivateRoute>
            },
            {
                path: '/electriccar/:id',
                element: <PrivateRoute><ElectricCar></ElectricCar></PrivateRoute>
            },
            
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;