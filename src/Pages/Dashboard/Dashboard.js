import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import AllUsers from './AllUsers';
import MyOrders from './MyOrders';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>
                   
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        
                      
                        {
                        isAdmin&&
                        <> 
                        <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                        <li><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
                        </>
                        }
                        {isSeller&& 
                        <>
                        <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        </>
                         }
                        {isBuyer&& 
                        <>
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        </>
                        }
                           
                            
                       
                        
                       
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Dashboard;