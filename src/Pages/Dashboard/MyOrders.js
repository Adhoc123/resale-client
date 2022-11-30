import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    const url=`http://localhost:5000/bookings?email=${user?.email}`;

    const {data : bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async() =>{
            const res = await fetch(url,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-3xl mt-5 mb-5 font-bold'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">         
                    <thead>
                        <tr>
                           
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings&&
                            bookings.map((booking,i) =><tr>
                            <td>{booking.itemName}</td>
                            <td>{booking.price}</td>
                            <td>{booking.phone}</td>
                            <td>{booking.location}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;