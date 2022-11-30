import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Adverise = () => {
    const {data : advertises = [], isLoading, refetch} = useQuery({
        queryKey: ['advertises'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/advertises');
            const data = await res.json();
            refetch()
            return data;
        }
    })
    const {data : products = []} = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            refetch()
            return data;
        }
    })
    if(isLoading){
        return <progress className="progress w-56"></progress>;
    }
    
    return (
        products.length>0&&
    
        <div className='mx-5'>           
            <h3 className='text-3xl mt-20 mb-5 font-bold'>Advertised Items</h3>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                advertises.map((advertise)=><AdvertiseCard
                advertise={advertise}
                ></AdvertiseCard>)
            }
            </div>
            
        </div>
    );
};

export default Adverise;