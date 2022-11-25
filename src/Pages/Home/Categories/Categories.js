import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='mx-5'>
            <h2 className='text-3xl  mb-5 font-bold'>Select Your Category</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:flex justify-around'>
                <Link to='/microbus'><button className='w-96 h-24 text-white btn btn-secondary'>Microbus</button></Link>
                <Link to='/luxurycar'><button className='w-96 h-24 text-white btn btn-secondary'>Luxury Car</button></Link>
                <Link to='/electriccar'><button className='w-96 h-24 text-white btn btn-secondary'>Electric Car</button></Link>
            </div>

        </div>
    );
};

export default Categories;