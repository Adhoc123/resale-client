import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/Dashboard/AddProduct";
import AllBuyer from "../../Pages/Dashboard/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller";
import AllUsers from "../../Pages/Dashboard/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts";
import ElectricCar from "../../Pages/Home/Categories/ElectricCar/ElectricCar";
import LuxuryCar from "../../Pages/Home/Categories/LuxuryCar/LuxuryCar";
import Microbus from "../../Pages/Home/Categories/Mircrobus/Microbus";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoute from "../AdminRoute/AdminRoute";
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
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;