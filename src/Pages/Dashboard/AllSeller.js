import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AllSeller = () => {
    const {data : users = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteSeller = user =>{
        fetch(`http://localhost:5000/users/${user._id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                refetch();
                toast.success(`${user.name} deleted successfully.`);
                
            }
        })
    }
    if(isLoading){
        return <progress className="progress w-56"></progress>;
    }
    return (
        <div>
            <h3 className='text-3xl mt-5 mb-5 font-bold'>All Seller</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                              // bookings&&
                            users.map((user, i) =>user?.role==='seller'&& <tr>
                                
                                <td>{user.name}</td>
                                <td>{user.email}</td> 
                                <td className='text-blue-600 font-bold'>{user.role}</td>
                                <td><button onClick={()=>handleDeleteSeller(user)} className='btn btn-xs btn-error text-white'>Delete</button></td>

                            </tr>)
                        } 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;