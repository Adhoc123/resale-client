import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ElectricCar from "../../Pages/Home/Categories/ElectricCar/ElectricCar";
import LuxuryCar from "../../Pages/Home/Categories/LuxuryCar/LuxuryCar";
import Microbus from "../../Pages/Home/Categories/Mircrobus/Microbus";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from '../../Pages/SignUp/SignUp';

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/microbus/:id',
                element: <Microbus></Microbus>
            },
            {
                path: '/luxurycar/:id',
                element: <LuxuryCar></LuxuryCar>
            },
            {
                path: '/electriccar/:id',
                element: <ElectricCar></ElectricCar>
            }
            
        ]
    }
])

export default router;