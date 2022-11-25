import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Microbus from "../../Pages/Home/Categories/Mircrobus/Microbus";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

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
                path: '/microbus',
                element: <Microbus></Microbus>
            }
        ]
    }
])

export default router;