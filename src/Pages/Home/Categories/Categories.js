import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Microbus from './Mircrobus/Microbus';
import AllBus from './Mircrobus/Microbus';

const Categories = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      fetch('http://localhost:5000/category')
      .then(res=>res.json())
      .then(data=>{
        setCategory(data)
        setLoading(false);
    })
    },[])
    return (
        <div className='mx-5'>
            <h2 className='text-3xl  mb-5 font-bold'>Select Your Category</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:flex justify-around'>
                {
                    !loading&& <>
                    <Link to={`/microbus/${category[0]._id}`}><button className='w-96 h-24 text-white btn btn-secondary'>{category[0].name}</button></Link>
                    <Link to={`/luxurycar/${category[1]._id}`}><button className='w-96 h-24 text-white btn btn-secondary'>{category[1].name}</button></Link>
                    <Link to={`/electriccar/${category[2]._id}`}><button className='w-96 h-24 text-white btn btn-secondary'>{category[2].name}</button></Link>    
                    </> 
                }
            </div>

        </div>
    );
};

export default Categories;