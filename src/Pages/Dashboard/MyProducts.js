import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const {data : products = [], isLoading, refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })
    const handleDeleteProduct = product =>{
        fetch(`http://localhost:5000/products/${product._id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                refetch();
                toast.success(`${product.name} deleted successfully.`);
                
            }
        })
    }
    if(isLoading){
        return <progress className="progress w-56"></progress>;
    }
    return (
        <div className='p-10'>
            <h3 className='text-3xl mt-5 mb-5 font-bold m-5'>My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">         
                    <thead>
                        <tr>
                            
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>          
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             
                             products.map((product) =><tr>
                           
                            
                             <td>{product.price}</td>
                            
                             <td>{product.available>0?'Available':'Sold'}</td>
                             <td>{product.available>0&&<button className='btn btn-xs btn-success text-white'>Adverstise</button>}</td>
                             <td><button onClick={()=>handleDeleteProduct(product)} className='btn btn-xs btn-error text-white'>Delete</button></td>
                             </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;