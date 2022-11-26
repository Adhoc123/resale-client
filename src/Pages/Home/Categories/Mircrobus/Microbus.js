import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MicroData from './MicroData';

const Microbus = () => {
    const {data: microbus = []} = useQuery({ 
        queryKey: ['microbus'], 
        queryFn: () => fetch('http://localhost:5000/microbus')
        .then(res=>res.json()) 
    })
    return (
        <div className='grid gap-5 grid-cols-1 mb-10 md:grid-cols-2 ml-10 lg:grid-cols-3 mt-10 mb-10'>
               {
                  microbus.map(microData=><MicroData
                  key={microData._id}
                  microData={microData}
                  ></MicroData>)
               }
        </div>
    );
};

export default Microbus;