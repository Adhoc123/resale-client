import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data : users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    const handleAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                toast.success('Admin created successfully.');
                refetch();
            }
        })
    }
    return (
        <div>
            <h3 className='text-3xl mt-5 mb-5 font-bold'>All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">         
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Users</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             
                             users.map((user) =>user?.role&&<tr>
                           
                            
                             <td>{user.name}</td>
                             <td>{user.email}</td>
                             <td className='text-blue-600 font-bold'>{user.role}</td>
                             <td>{user?.role !== 'admin'&&<button onClick={()=>handleAdmin(user._id)} className='btn btn-xs btn-primary text-white'>Make Admin</button>}</td> 
                             <td><button className='btn btn-xs text-white'>Delete</button></td>
                             </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;